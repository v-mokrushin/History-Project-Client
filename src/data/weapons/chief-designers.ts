export interface IChiefDesigner {
  name: {
    russian: string;
  };
}

function ChiefDesigner(russianName: string): IChiefDesigner {
  return { name: { russian: russianName } };
}

export const ChiefDesigners = {
  all: ChiefDesigner("Все"),
  undefined: ChiefDesigner("Не определено"),
  armoredVehicles: {
    Koshkin: ChiefDesigner("Кошкин, Михаил Ильич"),
    Kotin: ChiefDesigner("Котин, Жозеф Яковлевич"),
    Dikhow: ChiefDesigner("Духов, Николай Леонидович"),
    ErwinAders: ChiefDesigner("Адерс, Эрвин"),
    Wibke: ChiefDesigner("Вибке, П."),
  },
  aviation: {
    Yakovlev: ChiefDesigner("Яковлев, Александр Сергеевич"),
    Lavochkin: ChiefDesigner("Лавочкин, Семён Алексеевич"),
    Ilyushin: ChiefDesigner("Ильюшин, Сергей Владимирович"),
    Horikoshi: ChiefDesigner("Хорикоси, Дзиро"),
  },
  smallArms: {
    HugoSchmeisser: ChiefDesigner("Шмайссер, Хуго"),
    WernerGruner: ChiefDesigner("Грунер, Вернер Эрнст"),
    LouisStange: ChiefDesigner("Штанге, Луис"),
    Mauser: ChiefDesigner("Маузер, Вильгельм и Маузер, Пауль"),
    Shpagin: ChiefDesigner("Шпагин, Георгий Семёнович"),
    Degtyarev: ChiefDesigner("Дегтярёв, Василий Алексеевич"),
    Sudaev: ChiefDesigner("Судаев, Алексей Иванович"),
    AimoLahti: ChiefDesigner("Лахти, Аймо Иоханнес"),
    Browning: ChiefDesigner("Браунинг, Джон Мозес"),
    Nagan: ChiefDesigner("Наган, Эмиль и Наган, Леон"),
  },
};
