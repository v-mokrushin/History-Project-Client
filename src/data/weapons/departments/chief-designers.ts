import { NATIONS } from "../../../constants/nations";
import { INation } from "constants/nations";

export interface IChiefDesigner {
  readonly name: {
    readonly russian: string;
  };
  readonly nation: INation;
}

function ChiefDesigner(russianName: string, nation: INation): IChiefDesigner {
  return { name: { russian: russianName }, nation };
}

export const ChiefDesigners = {
  armoredVehicles: {
    Koshkin: ChiefDesigner("Кошкин М.И.", NATIONS.USSR),
    Kotin: ChiefDesigner("Котин Ж.Я.", NATIONS.USSR),
    Ermolaev: ChiefDesigner("Ермолаев А.С.", NATIONS.USSR),
    Dikhow: ChiefDesigner("Духов Н.Л.", NATIONS.USSR),
    Barykov: ChiefDesigner("Барыков Н.В.", NATIONS.USSR),
    Ginzburg: ChiefDesigner("Гинзбург С.А.", NATIONS.USSR),
    ErwinAders: ChiefDesigner("Адерс Эрвин", NATIONS.Germany),
    FerdinandPorsche: ChiefDesigner("Порше Фердинанд", NATIONS.Germany),
    Wibke: ChiefDesigner("Вибке П.", NATIONS.Germany),
  },
  aviation: {
    Yakovlev: ChiefDesigner("Яковлев А.С.", NATIONS.USSR),
    Lavochkin: ChiefDesigner("Лавочкин С.А.", NATIONS.USSR),
    Ilyushin: ChiefDesigner("Ильюшин С.В.", NATIONS.USSR),
    Horikoshi: ChiefDesigner("Хорикоси Дзиро", NATIONS.Japan),
  },
  artillery: {
    Grabin: ChiefDesigner("Грабин В.Г.", NATIONS.USSR),
    Lusser: ChiefDesigner("Луссер Роберт", NATIONS.Germany),
    Braun: ChiefDesigner("Браун Вернер", NATIONS.Germany),
  },
  smallArms: {
    HugoSchmeisser: ChiefDesigner("Шмайссер Хуго", NATIONS.Germany),
    WernerGruner: ChiefDesigner("Грунер Вернер Э.", NATIONS.Germany),
    LouisStange: ChiefDesigner("Штанге Луис", NATIONS.Germany),
    Mauser: ChiefDesigner("Маузер В. и Маузер П.", NATIONS.GermanEmpire),
    Shpagin: ChiefDesigner("Шпагин Г.С.", NATIONS.USSR),
    Tokarev: ChiefDesigner("Токарев Ф.В.", NATIONS.USSR),
    Degtyarev: ChiefDesigner("Дегтярёв В.А.", NATIONS.USSR),
    Sudaev: ChiefDesigner("Судаев А.В.", NATIONS.USSR),
    AimoLahti: ChiefDesigner("Лахти Аймо И.", NATIONS.Finland),
    Browning: ChiefDesigner("Браунинг Джон М.", NATIONS.USA),
    Thompson: ChiefDesigner("Томпсоном Джон Т.", NATIONS.USA),
    Nagan: ChiefDesigner("Наган Эмиль и Наган Леон", NATIONS.Belgium),
    Mosin: ChiefDesigner("Мосин С.И.", NATIONS.RussainEmpire),
    Lewis: ChiefDesigner("Льюис Айзек", NATIONS.USA),
    Boys: ChiefDesigner("Бойс Генри", NATIONS.GreatBritain),
    Paris: ChiefDesigner("Парис Ли Джеймс", NATIONS.GreatBritain),
  },
  grenadeLaunchers: {
    Uhl: ChiefDesigner("Уль Эдвард", NATIONS.USA),
    Langweiler: ChiefDesigner("Лангвайлер Генрих", NATIONS.Germany),
    Jefferis: ChiefDesigner("Джефферис Миллис", NATIONS.GreatBritain),
  },
};
