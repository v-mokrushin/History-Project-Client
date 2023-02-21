export interface IPlatform {
  readonly name: {
    readonly original: string;
  };
}

function Platform(originalName: string): IPlatform {
  return { name: { original: originalName } };
}

export const Platforms = {
  armoredVehicles: {
    BT: Platform("БТ"),
    T26: Platform("Т-26"),
    T34: Platform("Т-34"),
    IS: Platform("ИС"),
    KV1: Platform("КВ-1"),
    KV1S: Platform("КВ-1С"),
    PzKpfw3: Platform("Pz.Kpfw. III"),
    PzKpfw4: Platform("Pz.Kpfw. IV"),
    PzKpfw5: Platform("Pz.Kpfw. V Panther"),
    PzKpfw6B: Platform("Pz.Kpfw. VI Ausf.B Königstiger"),
    SdKfz250: Platform("Sd.Kfz. 250"),
    SdKfz251: Platform("Sd.Kfz. 251"),
    Stug3: Platform("StuG III"),
    Sherman: Platform("M4 Sherman"),
  },
  aviation: {
    La5: Platform("Ла-5"),
    Ju87: Platform("Ju-87 Stuka"),
  },
  smallArms: {
    Mauser: Platform("Mauser Gewehr 98"),
    Mosin: Platform("Винтовка Мосина обр. 1891 г."),
    SVT: Platform("СВТ"),
    Thompson: Platform("M1921 Thompson"),
  },
};
