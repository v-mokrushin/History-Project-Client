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
    Koshkin: ChiefDesigner("Кошкин М.И."),
    Kotin: ChiefDesigner("Котин Ж.И."),
    Dikhow: ChiefDesigner("Духов Н.Л."),
    Barykov: ChiefDesigner("Барыков Н.В."),
    Ginzburg: ChiefDesigner("Гинзбург С.А."),
    ErwinAders: ChiefDesigner("Адерс Эрвин"),
    Wibke: ChiefDesigner("Вибке П."),
  },
  aviation: {
    Yakovlev: ChiefDesigner("Яковлев А.С."),
    Lavochkin: ChiefDesigner("Лавочкин С.А."),
    Ilyushin: ChiefDesigner("Ильюшин С.В."),
    Horikoshi: ChiefDesigner("Хорикоси Дзиро"),
  },
  smallArms: {
    HugoSchmeisser: ChiefDesigner("Шмайссер Хуго"),
    WernerGruner: ChiefDesigner("Грунер Вернер Э."),
    LouisStange: ChiefDesigner("Штанге Луис"),
    Mauser: ChiefDesigner("Маузер В. и Маузер П."),
    Shpagin: ChiefDesigner("Шпагин Г.С."),
    Degtyarev: ChiefDesigner("Дегтярёв В.А."),
    Sudaev: ChiefDesigner("Судаев А.В."),
    AimoLahti: ChiefDesigner("Лахти Аймо И."),
    Browning: ChiefDesigner("Браунинг Джон М."),
    Nagan: ChiefDesigner("Наган Эмиль и Наган Леон"),
  },
};

// export const ChiefDesigners = {
//   all: ChiefDesigner("Все"),
//   undefined: ChiefDesigner("Не определено"),
//   armoredVehicles: {
//     Koshkin: ChiefDesigner("Кошкин, Михаил Ильич"),
//     Kotin: ChiefDesigner("Котин, Жозеф Яковлевич"),
//     Dikhow: ChiefDesigner("Духов, Николай Леонидович"),
//     Barykov: ChiefDesigner("Барыков Николай В."),
//     ErwinAders: ChiefDesigner("Адерс, Эрвин"),
//     Wibke: ChiefDesigner("Вибке, П."),
//   },
//   aviation: {
//     Yakovlev: ChiefDesigner("Яковлев, Александр Сергеевич"),
//     Lavochkin: ChiefDesigner("Лавочкин, Семён Алексеевич"),
//     Ilyushin: ChiefDesigner("Ильюшин, Сергей Владимирович"),
//     Horikoshi: ChiefDesigner("Хорикоси, Дзиро"),
//   },
//   smallArms: {
//     HugoSchmeisser: ChiefDesigner("Шмайссер, Хуго"),
//     WernerGruner: ChiefDesigner("Грунер, Вернер Эрнст"),
//     LouisStange: ChiefDesigner("Штанге, Луис"),
//     Mauser: ChiefDesigner("Маузер, Вильгельм и Маузер, Пауль"),
//     Shpagin: ChiefDesigner("Шпагин, Георгий Семёнович"),
//     Degtyarev: ChiefDesigner("Дегтярёв, Василий Алексеевич"),
//     Sudaev: ChiefDesigner("Судаев, Алексей Иванович"),
//     AimoLahti: ChiefDesigner("Лахти, Аймо Иоханнес"),
//     Browning: ChiefDesigner("Браунинг, Джон Мозес"),
//     Nagan: ChiefDesigner("Наган, Эмиль и Наган, Леон"),
//   },
// };
