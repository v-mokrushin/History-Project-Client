import { NATIONS } from "./../../constants/nations";
import { INation } from "constants/nations";

export interface IChiefDesigner {
  name: {
    russian: string;
  };
  nation: INation;
}

function ChiefDesigner(russianName: string, nation: INation): IChiefDesigner {
  return { name: { russian: russianName }, nation };
}

export const ChiefDesigners = {
  armoredVehicles: {
    Koshkin: ChiefDesigner("Кошкин М.И.", NATIONS.USSR),
    Kotin: ChiefDesigner("Котин Ж.И.", NATIONS.USSR),
    Dikhow: ChiefDesigner("Духов Н.Л.", NATIONS.USSR),
    Barykov: ChiefDesigner("Барыков Н.В.", NATIONS.USSR),
    Ginzburg: ChiefDesigner("Гинзбург С.А.", NATIONS.USSR),
    ErwinAders: ChiefDesigner("Адерс Эрвин", NATIONS.germany),
    Wibke: ChiefDesigner("Вибке П.", NATIONS.germany),
  },
  aviation: {
    Yakovlev: ChiefDesigner("Яковлев А.С.", NATIONS.USSR),
    Lavochkin: ChiefDesigner("Лавочкин С.А.", NATIONS.USSR),
    Ilyushin: ChiefDesigner("Ильюшин С.В.", NATIONS.USSR),
    Horikoshi: ChiefDesigner("Хорикоси Дзиро", NATIONS.japan),
  },
  smallArms: {
    HugoSchmeisser: ChiefDesigner("Шмайссер Хуго", NATIONS.germany),
    WernerGruner: ChiefDesigner("Грунер Вернер Э.", NATIONS.germany),
    LouisStange: ChiefDesigner("Штанге Луис", NATIONS.germany),
    Mauser: ChiefDesigner("Маузер В. и Маузер П.", NATIONS.germany),
    Shpagin: ChiefDesigner("Шпагин Г.С.", NATIONS.USSR),
    Degtyarev: ChiefDesigner("Дегтярёв В.А.", NATIONS.USSR),
    Sudaev: ChiefDesigner("Судаев А.В.", NATIONS.USSR),
    AimoLahti: ChiefDesigner("Лахти Аймо И.", NATIONS.finland),
    Browning: ChiefDesigner("Браунинг Джон М.", NATIONS.USA),
    Nagan: ChiefDesigner("Наган Эмиль и Наган Леон", NATIONS.USSR),
  },
};
