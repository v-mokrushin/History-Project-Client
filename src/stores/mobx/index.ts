import { injectStores } from "@mobx-devtools/tools";

import commonApplicationStore from "stores/mobx/commonApplicationStore";
import burgerStore from "../../stores/mobx/burgerStore";
import imageViewerStore from "../../stores/mobx/imageViewerStore";
import scrollMemoryStore from "../../stores/mobx/scrollMemoryStore";
import audioPlayerStore from "../../stores/mobx/audioPlayerStore";
import actualSectionStore from "../../stores/mobx/actualSectionStore";
import filtersStore from "../../stores/mobx/filtersStore";
import settingsStore from "../../stores/mobx/settingsStore";
import loadingStore from "../../stores/mobx/loadingStore";

injectStores({
  commonApplicationStore,
  burgerStore,
  imageViewerStore,
  scrollMemoryStore,
  audioPlayerStore,
  actualSectionStore,
  filtersStore,
  settingsStore,
  loadingStore,
});
