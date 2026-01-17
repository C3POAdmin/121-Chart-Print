import { normalizeConfig } from "./normalizeConfig.js";

const mm = 3.92;
	
export function create121Chart(config = {}) {
  const cfg = normalizeConfig(config);

  return {
    config: cfg,

    render(target) {
      throw new Error("render() not implemented");
    },

    export() {
      throw new Error("export() not implemented");
    }
  };
}

function chartMM(ctx, points) {
	if(points == undefined || points.length < 2) {
		return;
	}
	if(points.length == 2) {
		ctx.moveTo(points[0].x, points[0].y);
		ctx.lineTo(points[1].x, points[1].y);
		return;
	}
	ctx.moveTo(points[0].x, points[0].y);
	for(var i=1; i<points.length-2; i++) {
		let xc = (points[i].x + points[i+1].x) / 2;
		let yc = (points[i].y + points[i+1].y) / 2;
		ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
	}
	ctx.quadraticCurveTo(points[i].x, points[i].y, points[i+1].x, points[i+1].y);
}

function generateOrdinals(ticks, min, max) {
    if (min > 0)
        min = 0;
    if (max < 0)
        max = 0;

    if (max != 0) {
        max = max * 1.1;
    } 
    if (min != 0) {
        min = min * 1.1;
    }

    let range = Math.abs(max - min);

    let div = range / (ticks-1);
    console.log("[GenerateOrdinals] Initial Divisions", div)

    div = getDivision(div);
    console.log("[GenerateOrdinals] Selected Divisions", div)

    let out = [];

    if (min < 0) {
        min = getMin(min, div);

        var nmax = min + (ticks * div);
		console.log('[GenerateOrdinals]', 'min', min, 'max', max, 'test-max', nmax);

        if (nmax < max) {
            div = getDivision(div, true);
            min = getMin(min, div);
            console.log('[GenerateOrdinals] Retry', div);
        }
    }

    for (let o = 0; o < ticks; o++) {
        out.push(parseFloatDP(min + (o * div), 2));
    }

    return out;
}

function getMin(min, div) {
    var nmin = 0;
    while (nmin > min) {
        nmin = nmin - div;
    }
    min = nmin;
    return nmin;
}

function getDivision(div, next) {
    const threshHolds = [0.05, 0.1, 0.15, 0.20, 0.25, 0.3, 0.4, 0.5, 1, 1.2, 1.25, 1.5, 2, 2.4, 2.5, 3, 4, 5, 10, 12, 15, 20, 25, 30, 40, 50, 100, 120, 125, 140, 150, 200, 250, 300, 350, 500, 1000, 1200, 1400, 1500, 2000, 2500, 3000, 3500, 4000, 5000, 10000, 20000, 30000, 40000, 50000, 100000];

    for (let r = 0; r < threshHolds.length; r++) {
        if (threshHolds[r] > div) {
            if (next) {
                return threshHolds[r + 1];
            }
            return threshHolds[r];
        }
    }
    console.log('[ERROR] Division not found');
}
