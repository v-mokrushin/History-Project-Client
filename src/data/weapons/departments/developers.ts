import { INation, NATIONS } from "./../../../constants/nations";

export interface IDeveloper {
  readonly name: {
    readonly original: string;
  };
  readonly nation: INation;
}

function Developer(originalName: string, nation: INation): IDeveloper {
  return { name: { original: originalName }, nation };
}

export const Developers = {
  RheinmetallBorsig: Developer("Rheinmetall-Borsig A.G.", NATIONS.Germany),
  armoredVehicles: {
    Leningrad185: Developer("КБ Ленинградского завода №185", NATIONS.USSR),
    Chelyabinsk100: Developer("КБ Челябинского завода №100", NATIONS.USSR),
    ChelyabinskExp100: Developer(
      "КБ Челябинского опытного завода №100",
      NATIONS.USSR
    ),
    KrasnoyeSormovo112: Developer(
      `КБ завода №112 "Красное Сормово"`,
      NATIONS.USSR
    ),
    Stalingrad: Developer(
      "КБ Сталинградского тракторного завода",
      NATIONS.USSR
    ),
    Ural183: Developer("КБ Уральского завода №183", NATIONS.USSR),
    Kharkov183: Developer("КБ Харьковского завода №183", NATIONS.USSR),
    Kirov38: Developer("КБ завода №38 г. Киров", NATIONS.USSR),
    Izhorsky: Developer("КБ Ижорский завода", NATIONS.USSR),
    KB3: Developer("КБ-3 ВОАО", NATIONS.USSR),
    Henschel: Developer("Henschel-Werke", NATIONS.Germany),
    MAN: Developer("MAN", NATIONS.Germany),
    DaimlerBenz: Developer("Daimler-Benz", NATIONS.Germany),
    Krupp: Developer("Krupp", NATIONS.Germany),
    Hanomag: Developer("Hanomag", NATIONS.Germany),
    Demag: Developer("Demag", NATIONS.Germany),
    CKD: Developer("ČKD", NATIONS.Czechoslovakia),
    GMC: Developer("General Motors", NATIONS.USA),
    Cadillac: Developer("Cadillac", NATIONS.USA),
    USArmyOrdnanceDepartment: Developer(
      "U.S. Army Ordnance Department",
      NATIONS.USA
    ),
    AberdeenPG: Developer("Aberdeen Proving Ground", NATIONS.USA),
    Nuffield: Developer(
      "Nuffield Mechanizations and Aero",
      NATIONS.greatBritain
    ),
  },
  aviation: {
    Yak: Developer("ОКБ-115 Яковлева", NATIONS.USSR),
    IL: Developer("ОКБ-240 Ильюшина", NATIONS.USSR),
    LA: Developer("ОКБ-21 Лавочкина", NATIONS.USSR),
    TU: Developer("ОКБ Туполева", NATIONS.USSR),
    Heinkel: Developer("Heinkel Flugzeugwerke", NATIONS.Germany),
    FockeWulf: Developer("Focke-Wulf Flugzeugbau", NATIONS.Germany),
    Junkers: Developer("Junkers", NATIONS.Germany),
    Messerschmitt: Developer("Messerschmitt AG", NATIONS.Germany),
    Grumman: Developer("Grumman Corporation", NATIONS.USA),
    NorthAmerican: Developer("North American", NATIONS.USA),
    Douglas: Developer("Douglas Aircraft", NATIONS.USA),
    Boeing: Developer("Boeing", NATIONS.USA),
    Gloster: Developer("Gloster Aircraft Company", NATIONS.greatBritain),
    Avro: Developer("Avro Aircraft", NATIONS.greatBritain),
    MoraneSaulnier: Developer("Morane-Saulnier", NATIONS.France),
    Mitsubishi: Developer("Mitsubishi", NATIONS.Japan),
    Macchi: Developer("Aeronautica Macchi", NATIONS.Italy),
    PZL: Developer("PZL", NATIONS.poland),
    Saab: Developer("Saab AB", NATIONS.Sweden),
    VL: Developer("Valtion lentokonetehdas", NATIONS.Finland),
    IAR: Developer("IAR", NATIONS.romania),
    ANBO: Developer("ANBO", NATIONS.lithuania),
    Fokker: Developer("Fokker", NATIONS.netherlands),
    Ikarus: Developer("Ikarus", NATIONS.yugoslavia),
    Weiss: Developer("Weiss", NATIONS.hungary),
  },
  atillery: {
    ArtilleryDesignBureau: Developer(
      "Артиллерийское конструкторское бюро",
      NATIONS.USSR
    ),
    Plant92: Developer("КБ Нижегородского завода №92", NATIONS.USSR),
    Plant172: Developer("КБ Пермского завода №172", NATIONS.USSR),
    Opel: Developer("Opel", NATIONS.Germany),
    Fieseler: Developer("Fieseler", NATIONS.Germany),
    Peenemunde: Developer("Heeresversuchsanstalt Peenemünde", NATIONS.Germany),
  },
  smallArms: {
    Walther: Developer("Walther", NATIONS.Germany),
  },
};
