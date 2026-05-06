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

function getDivision(value, next) {
    const steps = [1, 1.5, 2, 2.5, 3, 4, 5, 10];

    let sign = 1;

    if (value < 0) {
        sign = -1;
        value = -value;
    }

    let scale = 1;

    if (value > 0) {
        while (value >= scale * 10) {
            scale *= 10;
        }
        while (value < scale) {
            scale /= 10;
        }
    }

    for (let i = 0; i < steps.length; i++) {
        const current = steps[i] * scale;
        if (current > value) {
            if (next) {
                if (i < steps.length - 1) {
                    return steps[i + 1] * scale * sign;
                }
                return steps[0] * scale * 10 * sign;
            }
            return current * sign;
        }
    }
	
    return scale * 10 * sign;
}