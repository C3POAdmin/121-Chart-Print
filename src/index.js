import { normalizeConfig } from "./normalizeConfig.js";

export function create121Chart(config = {}) {
  const cfg = normalizeConfig(config);

  return {
    config: cfg,

    render(target) {
      // target: CanvasRenderingContext2D | OffscreenCanvas | PDF context
      throw new Error("render() not implemented");
    },

    export() {
      // browser print / PDF export / node hook
      throw new Error("export() not implemented");
    }
  };
}
