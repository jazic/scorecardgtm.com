// Scorecard dot mark — vanilla port of the design system's components/brand/Logo.jsx
// (Claude Design project "Scorecard MVP 2.0", ScorecardDesignSystem_d7ae29). Frame math is copied as-is.
// A pile of businesses is scored, non-fits go grey and fade, the rest sort into 1-2-4 ranked steps
// and the coral match hops to the top. Rules: page load → once · click → replay once ·
// loop only while real work runs, then finish the cycle and settle · reduced motion → still mark.
// Usage: <svg data-sc-logo="once|loop|none"></svg>; ScLogo.init(); ScLogo.mount(svg).play('loop') / .settle()
(() => {
  const H = 0.866, DR = 0.41;
  const FINAL = [[0, 0], [1, 0], [2, 0], [1, -1], [2, -1], [2, -2]], TOP = [2, -3];
  const PILE = [[[0.5, 0], 0], [[1.5, 0], 1], [[2, -H], 2], [[0, -H], 3], [[1.5, -2 * H], 4], [[0.5, -2 * H], 5], [[1, -H], 'c'], [[-0.5, 0], null], [[2.5, 0], null], [[1, -3 * H], null]];
  const cl = t => Math.max(0, Math.min(1, t));
  const eio = t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  const eo = t => 1 - Math.pow(1 - t, 3);
  const T_SCORE = 800, T_FADE = 1650, T_SORT = 1750, T_COR = 2250;
  const LOGO_DURATION = 3050;

  function logoFrame(T) {
    return PILE.map(([f, to], i) => {
      const tgt = to === 'c' ? TOP : to == null ? null : FINAL[to];
      let x = f[0], y = f[1], sc = 1, op = 1, tone = 'ink';
      const a = cl((T - i * 45) / 260);
      sc = a < 0.6 ? 1.7 - 0.78 * eio(a / 0.6) : 0.92 + 0.08 * eo((a - 0.6) / 0.4);
      op = cl(a * 3);
      const pStart = T_SCORE + i * 65, p = cl((T - pStart) / 220);
      if (p > 0 && p < 1) sc *= 1 + 0.3 * Math.sin(Math.PI * p);
      if (to === 'c' && p >= 0.5) tone = 'acc';
      if (tgt == null) {
        if (p >= 1) tone = 'pale';
        op *= 1 - eo(cl((T - T_FADE - (i - 7) * 70) / 380));
      } else if (to === 'c') {
        const u = eio(cl((T - T_COR) / 560));
        x = f[0] + (tgt[0] - f[0]) * u;
        y = f[1] + (tgt[1] - f[1]) * u - 0.9 * Math.sin(Math.PI * u);
        const l = cl((T - T_COR - 560) / 220);
        if (l > 0 && l < 1) sc *= 1 - 0.12 * Math.sin(Math.PI * l);
      } else {
        const u = eio(cl((T - T_SORT - to * 70) / 520));
        x = f[0] + (tgt[0] - f[0]) * u;
        y = f[1] + (tgt[1] - f[1]) * u;
      }
      return { x, y, r: DR * Math.max(0, sc), op, tone };
    });
  }

  const ENDPOS = [...FINAL, TOP];
  const MAPS = [[3, 0, 1, 4, 2, 5, 8], [6, 0, 1, 3, 2, 4, 8], [0, 1, 7, 5, 2, 4, 3], [7, 0, 1, 3, 4, 2, 9]];
  const LOGO_CYCLE = 3700, RA = 700;
  function logoLoopFrame(t) {
    const tt = t % LOGO_CYCLE, k = Math.floor(t / LOGO_CYCLE);
    if (tt >= RA) return logoFrame(tt - RA + T_SCORE);
    const M = MAPS[k % MAPS.length];
    let ni = 0;
    return PILE.map(([f], s) => {
      const j = M.indexOf(s);
      if (j >= 0) {
        const p = ENDPOS[j], u = eio(cl((tt - j * 40) / 560));
        return { x: p[0] + (f[0] - p[0]) * u, y: p[1] + (f[1] - p[1]) * u - (j === 6 ? 0.5 * Math.sin(Math.PI * u) : 0), r: DR, op: 1, tone: j === 6 && u < 0.5 ? 'acc' : 'ink' };
      }
      const a = cl((tt - 240 - ni++ * 90) / 260);
      const sc = a < 0.6 ? 1.7 - 0.78 * eio(a / 0.6) : 0.92 + 0.08 * eo((a - 0.6) / 0.4);
      return { x: f[0], y: f[1], r: a > 0 ? DR * sc : 0, op: cl(a * 3), tone: 'ink' };
    });
  }
  const settled = () => logoFrame(LOGO_DURATION + 100);
  const reduce = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
  const NS = 'http://www.w3.org/2000/svg';

  class Mark {
    constructor(svg) {
      this.svg = svg; this.raf = 0; this.mode = 'none'; this.stopReq = false;
      svg.setAttribute('viewBox', '-0.5 -3.5 3 4');
      svg.style.overflow = 'visible';
      svg.innerHTML = '';
      this.c = PILE.map(() => { const c = document.createElementNS(NS, 'circle'); svg.appendChild(c); return c; });
      this.fill = { ink: 'currentColor', acc: svg.dataset.mono ? 'currentColor' : '#FF4A3D', pale: svg.dataset.mono ? 'currentColor' : '#B9B8B3' };
      this.draw(settled());
      svg.style.cursor = 'pointer';
      svg.addEventListener('click', e => { e.preventDefault(); e.stopPropagation(); this.replay(); });
    }
    draw(frame) { frame.forEach((d, i) => { const c = this.c[i]; c.setAttribute('cx', d.x); c.setAttribute('cy', d.y); c.setAttribute('r', d.r); c.setAttribute('opacity', d.op); c.setAttribute('fill', this.fill[d.tone]); }); }
    get looping() { return this.mode === 'loop' && !this.stopReq; }
    play(mode = 'once') {
      cancelAnimationFrame(this.raf); this.mode = mode; this.stopReq = false;
      if (mode === 'none' || reduce()) { this.draw(settled()); return; }
      const t0 = performance.now();
      const step = now => {
        const t = now - t0;
        if (this.mode === 'loop') {
          const T = t + LOGO_CYCLE - 600, tt = T % LOGO_CYCLE;
          if (this.stopReq && tt >= 2950) { this.draw(settled()); this.mode = 'none'; this.stopReq = false; return; }
          this.draw(logoLoopFrame(T));
          this.raf = requestAnimationFrame(step);
        } else {
          this.draw(logoFrame(t));
          if (t < LOGO_DURATION + 60) this.raf = requestAnimationFrame(step);
        }
      };
      this.raf = requestAnimationFrame(step);
    }
    // work finished: let the current cycle land on the ranked mark, then stop
    settle() { if (this.mode === 'loop') this.stopReq = true; }
    replay() {
      const wasLoop = this.mode === 'loop' && !this.stopReq;
      cancelAnimationFrame(this.raf);
      if (reduce()) { this.draw(settled()); return; }
      const t0 = performance.now(); this.mode = 'once';
      const step = now => { const t = now - t0; this.draw(logoFrame(t)); if (t < LOGO_DURATION + 60) this.raf = requestAnimationFrame(step); else if (wasLoop) this.play('loop'); };
      this.raf = requestAnimationFrame(step);
    }
  }

  window.ScLogo = {
    mount(svg) { if (!svg._sc) svg._sc = new Mark(svg); return svg._sc; },
    init(root = document) {
      root.querySelectorAll('svg[data-sc-logo]').forEach(svg => { const m = ScLogo.mount(svg), mode = svg.dataset.scLogo; if (mode === 'once' || mode === 'loop') m.play(mode); });
    },
  };
})();
