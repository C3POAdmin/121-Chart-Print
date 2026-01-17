export const DEFAULTS = {
	grid: {
	  show: true,
	  major: {
		color: "#000000",
		thickness_px: 1
	  },
	  minor: {
		color: "#cccccc",
		thickness_px: 1
	  },
	  axis: {
		color: "#000000",
		thickness_px: 1
	  }
	},

	titles: {
	  left: "My First 1:1 Chart",
	  center: "",
	  right: "09-10-2026",
	  font: {
		family: "Arial",
		size_pt: 10,
		weight: "normal"
	  },
	  offset_mm: 5
	},

	page: {
	  size: "A4",
	  orientation: "landscape",// portrait | landscape
	  margin_mm: {
		top: 10,
		right: 10,
		bottom: 14,
		left: 10
	  },
	  dpi: 96,                 // explicit — no guessing
	  scale: 1                 // MUST be 1 for 1:1, but left visible
	}
};

/*

axes: {
  x: {
    label: "Distance (mm)",
    min: 0,
    max: 500,
    ticks: {
      major: 10,
      minor: 1
    }
  },
  y: {
    label: "Height (mm)",
    min: 0,
    max: 200,
    ticks: {
      major: 10,
      minor: 1
    }
  }
}


datasets: [
  {
    id: "profile-1",
    label: "Scan pass 1",
    color: "#ff0000",
    thickness_mm: 0.35,
    style: "line",          // line | points | stepped
    data: [
      { x: 0, y: 10 },
      { x: 10, y: 12 },
      { x: 20, y: 15 }
    ]
  }
]

annotations: [
  {
    type: "line",
    x1: 50,
    y1: 0,
    x2: 50,
    y2: 200,
    color: "#0000ff",
    thickness_mm: 0.2,
    label: "Reference"
  },
  {
    type: "text",
    x: 120,
    y: 180,
    text: "Max height",
    size_pt: 8
  }
]
*/