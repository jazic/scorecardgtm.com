// Audience pages (/sales-teams, /founders, /acquisition-search): the approved mockup layout, one HTML file per page.
// Each page tells the homepage's Search → Research → Score story for that audience; `story` configures its Search map
// (ScLattice.story2 in scripts/2-logo.js.txt). The CMS entry still supplies the page title, description and SEO panel.
import acquisition from "./acquisition-search.html?raw";
import founders from "./founders.html?raw";
import sales from "./sales-teams.html?raw";

export const AUDIENCE_PAGES: Record<string, { html: string; story: Record<string, unknown> }> = {
	"sales-teams": { html: sales, story: {"mode": "zones", "density": 0.34, "fit": 0.3, "at": [0.28, 0.48], "reps": ["Jordan", "Priya", "Luis"], "counts": ["712 accounts", "798 accounts", "640 accounts"], "seed": 31} },
	founders: { html: founders, story: {"mode": "national", "density": 0.34, "fit": 0.16, "at": [0.28, 0.48], "seed": 37, "hot": {"38": 2.6, "46": 2.6, "31": 2.4, "20": 2.4, "30": 2.4, "56": 2.4, "16": 2, "40": 2, "05": 1.9, "28": 1.9, "01": 1.6, "47": 1.5, "21": 1.7, "19": 2.2, "29": 1.5, "27": 1.6, "55": 1.4, "54": 1.7, "48": 1.5, "13": 1.3, "35": 1.9, "32": 1.4, "49": 1.4, "08": 1.3, "04": 1.2, "34": 0.15, "09": 0.15, "44": 0.15, "25": 0.2, "10": 0.2, "24": 0.3, "11": 0.1, "36": 0.5, "06": 0.45, "12": 0.5, "42": 0.7, "26": 0.9, "39": 0.8, "17": 0.8, "53": 1, "41": 1.3}} },
	"acquisition-search": { html: acquisition, story: {"mode": "national", "density": 0.34, "fit": 0.35, "at": [0.28, 0.48], "seed": 41, "facetAt": 0.66, "focus": 0, "facets": [["Year-round \u00b7 commercial", "1,650", 0.17], ["Year-round \u00b7 residential", "2,900", 0.3], ["Seasonal \u00b7 commercial", "1,450", 0.15], ["Seasonal \u00b7 residential", "3,800", 0.38]]} },
};
