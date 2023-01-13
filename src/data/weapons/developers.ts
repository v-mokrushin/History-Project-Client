export interface IDeveloper {
  name: {
    original: string;
  };
}

function Developer(russianName: string): IDeveloper {
  return { name: { original: russianName } };
}

export const Developers = {
  all: Developer("Все"),
  undefined: Developer("Не определено"),
  RheinmetallBorsig: Developer("Rheinmetall-Borsig A.G."),
  armoredVehicles: {
    Chelyabinsk100: Developer("КБ завода №100 ЧТЗ"),
    KrasnoyeSormovo: Developer(`КБ завода №112 "Красное Сормово"`),
    Stalingrad: Developer("КБ Сталинградского тракторного завода"),
    Ural: Developer("КБ Уральского завода №183"),
    Kharkov: Developer("КБ Харьковского завода №183"),
    Henschel: Developer("Henschel-Werke"),
    MAN: Developer("MAN"),
    DaimlerBenz: Developer("Daimler-Benz"),
    Krupp: Developer("Krupp"),
    Hanomag: Developer("Hanomag"),
    Demag: Developer("Demag"),
    GMC: Developer("GMC"),
    USArmyOrdnanceDepartment: Developer("U.S. Army Ordnance Department"),
    Nuffield: Developer("Nuffield Mechanizations and Aero"),
  },
  aviation: {
    Yak: Developer("ОКБ-115 Яковлева"),
    IL: Developer("ОКБ-240 Ильюшина"),
    LA: Developer("ОКБ-21 Лавочкина"),
    TU: Developer("ОКБ Туполева"),
    Heinkel: Developer("Heinkel Flugzeugwerke"),
    FockeWulf: Developer("Focke-Wulf Flugzeugbau"),
    Junkers: Developer("Junkers"),
    Messerschmitt: Developer("Messerschmitt AG"),
    Grumman: Developer("Grumman Corporation"),
    NorthAmerican: Developer("North American"),
    Douglas: Developer("Douglas Aircraft"),
    Boeing: Developer("Boeing"),
    Gloster: Developer("Gloster Aircraft Company"),
    Avro: Developer("Avro Aircraft"),
    MoraneSaulnier: Developer("Morane-Saulnier"),
    Mitsubishi: Developer("Mitsubishi"),
    Macchi: Developer("Aeronautica Macchi"),
    PZL: Developer("PZL"),
    Saab: Developer("Saab AB"),
    VL: Developer("Valtion lentokonetehdas"),
    IAR: Developer("IAR"),
    ANBO: Developer("ANBO"),
    Fokker: Developer("Fokker"),
    Ikarus: Developer("Ikarus"),
    Weiss: Developer("Weiss"),
  },
  atillery: {
    ArtilleryDesignBureau: Developer("Артиллерийское конструкторское бюро"),
    Plant92: Developer("КБ завода №92"),
    Plant172: Developer("КБ завода №172"),
    Opel: Developer("Opel"),
    Fieseler: Developer("Fieseler"),
    Peenemunde: Developer("Heeresversuchsanstalt Peenemünde"),
  },
  smallArms: {
    Walther: Developer("Walther"),
  },
};
