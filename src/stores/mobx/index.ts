import { injectStores } from "@mobx-devtools/tools";
import burgerStore from "./burgerStore";
import imageViewerStore from "./imageViewerStore";
import scrollMemoryStore from "./scrollMemoryStore";
import audioPlayerStore from "./audioPlayerStore";
import actualSectionStore from "./actualSectionStore";
import filtersStore from "./filtersStore";

injectStores({
  burgerStore,
  imageViewerStore,
  scrollMemoryStore,
  audioPlayerStore,
  actualSectionStore,
  filtersStore,
});

export const LEVEL = 10;
