import { create121Chart } from "../dist/index.js";

const chart = create121Chart({
  page: {
    size: "A4",
    orientation: "landscape",
    margin_mm: { top: 10, right: 10, bottom: 12, left: 12 },
  },

  titles: {
    left: "My First 1:1 Chart",
    right: "09-10-2026"
  },

  axes: {
    x: {
      label: "Distance (mm)",
      min: 0,
      max: 200,
      ticks: { major: 10, minor: 1 }
    },
    y: {
      label: "Height (mm)",
      min: 0,
      max: 100,
      ticks: { major: 10, minor: 1 }
    }
  },

  datasets: [
    {
      label: "Profile",
      color: "#d00000",
      thickness_mm: 0.35,
      data: [
        { x: 0, y: 10 },
        { x: 50, y: 25 },
        { x: 100, y: 40 },
        { x: 150, y: 30 }
      ]
    }
  ]
});

console.log(chart);
