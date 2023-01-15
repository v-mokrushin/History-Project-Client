export interface IPlatform {
  name: {
    original: string;
  };
}

function Platform(originalName: string): IPlatform {
  return { name: { original: originalName } };
}

export const Platforms = {
  armoredVehicles: {
    T34: Platform("Т-34"),
    IS1: Platform("ИС-1"),
    KV1: Platform("КВ-1"),
    KV1S: Platform("КВ-1С"),
    PzKpfw3: Platform("Pz.Kpfw. III"),
    PzKpfw4: Platform("Pz.Kpfw. IV"),
    PzKpfw5: Platform("Pz.Kpfw. V Panther"),
    PzKpfw6B: Platform("Pz.Kpfw. VI Ausf.B Tiger II"),
    SdKfz250: Platform("Sd.Kfz. 250"),
    SdKfz251: Platform("Sd.Kfz. 251"),
    Stug3: Platform("StuG III"),
    Sherman: Platform("M4 Sherman"),
  },
  aviation: {
    La5: Platform("Ла-5"),
    Ju87: Platform("Ju-87 Stuka"),
  },
};
