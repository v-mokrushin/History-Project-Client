export interface IDeveloper {
  name: {
    russian: string;
  };
}

export const Developers = {
  all: Developer("Все"),
  undefined: Developer("Не определено"),
  armoredVehicles: {
    Chelyabinsk: Developer("КБ завода №100 ЧТЗ"),
    KrasnoyeSormovo: Developer(`КБ завода №112 "Красное Сормово"`),
    Stalingrad: Developer("КБ Сталинградского тракторного завода"),
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
    Tupolev: Developer("ОКБ Туполева"),
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
    RheinmetallBorsig: Developer("Rheinmetall-Borsig A.G."),
    Fieseler: Developer("Fieseler"),
    Peenemunde: Developer("Heeresversuchsanstalt Peenemünde"),
  },
};

function Developer(russianName: string): IDeveloper {
  return { name: { russian: russianName } };
}
