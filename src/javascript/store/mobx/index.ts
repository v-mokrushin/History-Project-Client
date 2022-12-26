import { injectStores } from "@mobx-devtools/tools";
import burgerStore from "./burger";
import imageViewerStore from "./imageViewer";
import scrollMemoryStore from "./scrollMemory";
import audioPlayerStore from "./audioPlayer";
import actualSectionStore from "./actualSection";
import filtersStore from "./filters";

injectStores({
  burgerStore,
  imageViewerStore,
  scrollMemoryStore,
  audioPlayerStore,
  actualSectionStore,
  filtersStore,
});

export const LEVEL = 10;
