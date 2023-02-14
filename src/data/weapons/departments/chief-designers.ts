import { Nations } from "../../../constants/nations";
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
    Koshkin: ChiefDesigner("Кошкин М.И.", Nations.USSR),
    Kotin: ChiefDesigner("Котин Ж.Я.", Nations.USSR),
    Ermolaev: ChiefDesigner("Ермолаев А.С.", Nations.USSR),
    Dikhow: ChiefDesigner("Духов Н.Л.", Nations.USSR),
    Barykov: ChiefDesigner("Барыков Н.В.", Nations.USSR),
    Ginzburg: ChiefDesigner("Гинзбург С.А.", Nations.USSR),
    ErwinAders: ChiefDesigner("Адерс Эрвин", Nations.Germany),
    FerdinandPorsche: ChiefDesigner("Порше Фердинанд", Nations.Germany),
    Wibke: ChiefDesigner("Вибке П.", Nations.Germany),
  },
  aviation: {
    Yakovlev: ChiefDesigner("Яковлев А.С.", Nations.USSR),
    Lavochkin: ChiefDesigner("Лавочкин С.А.", Nations.USSR),
    Ilyushin: ChiefDesigner("Ильюшин С.В.", Nations.USSR),
    Horikoshi: ChiefDesigner("Хорикоси Дзиро", Nations.Japan),
  },
  artillery: {
    Grabin: ChiefDesigner("Грабин В.Г.", Nations.USSR),
    Lusser: ChiefDesigner("Луссер Роберт", Nations.Germany),
    Braun: ChiefDesigner("Браун Вернер", Nations.Germany),
  },
  smallArms: {
    HugoSchmeisser: ChiefDesigner("Шмайссер Хуго", Nations.Germany),
    WernerGruner: ChiefDesigner("Грунер Вернер Э.", Nations.Germany),
    LouisStange: ChiefDesigner("Штанге Луис", Nations.Germany),
    Mauser: ChiefDesigner("Маузер В. и Маузер П.", Nations.GermanEmpire),
    Shpagin: ChiefDesigner("Шпагин Г.С.", Nations.USSR),
    Tokarev: ChiefDesigner("Токарев Ф.В.", Nations.USSR),
    Degtyarev: ChiefDesigner("Дегтярёв В.А.", Nations.USSR),
    Sudaev: ChiefDesigner("Судаев А.В.", Nations.USSR),
    AimoLahti: ChiefDesigner("Лахти Аймо И.", Nations.Finland),
    Browning: ChiefDesigner("Браунинг Джон М.", Nations.USA),
    Thompson: ChiefDesigner("Томпсоном Джон Т.", Nations.USA),
    Nagan: ChiefDesigner("Наган Эмиль и Наган Леон", Nations.Belgium),
    Mosin: ChiefDesigner("Мосин С.И.", Nations.RussainEmpire),
    Lewis: ChiefDesigner("Льюис Айзек", Nations.USA),
    Boys: ChiefDesigner("Бойс Генри", Nations.GreatBritain),
    Paris: ChiefDesigner("Парис Ли Джеймс", Nations.GreatBritain),
  },
  grenadeLaunchers: {
    Uhl: ChiefDesigner("Уль Эдвард", Nations.USA),
    Langweiler: ChiefDesigner("Лангвайлер Генрих", Nations.Germany),
    Jefferis: ChiefDesigner("Джефферис Миллис", Nations.GreatBritain),
  },
};
