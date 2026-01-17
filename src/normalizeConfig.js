import { DEFAULTS } from "./defaults.js";

export function normalizeConfig(user = {}) {
  const cfg = {
    page: { ...DEFAULTS.page, ...user.page },
    titles: { ...DEFAULTS.titles, ...user.titles },
    axes: user.axes,
    grid: { ...DEFAULTS.grid, ...user.grid },
    datasets: user.datasets ?? [],
    annotations: user.annotations ?? []
  };

  // HARD CONTRACTS
  if (cfg.page.scale !== 1) {
    throw new Error("Only true 1:1 scale is supported");
  }

  return cfg;
}
