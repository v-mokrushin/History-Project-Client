import { INation, NATIONS } from "./../../constants/nations";
export interface IDeveloper {
  name: {
    original: string;
  };
  nation: INation;
}

function Developer(russianName: string, nation: INation): IDeveloper {
  return { name: { original: russianName }, nation };
}

export const Developers = {
  RheinmetallBorsig: Developer("Rheinmetall-Borsig A.G.", NATIONS.germany),
  armoredVehicles: {
    Leningrad185: Developer("КБ Ленинградского завода №185", NATIONS.USSR),
    Chelyabinsk100: Developer("КБ Челябинского завода №100", NATIONS.USSR),
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
    KB3: Developer("КБ-3 ВОАО", NATIONS.USSR),
    Henschel: Developer("Henschel-Werke", NATIONS.germany),
    MAN: Developer("MAN", NATIONS.germany),
    DaimlerBenz: Developer("Daimler-Benz", NATIONS.germany),
    Krupp: Developer("Krupp", NATIONS.germany),
    Hanomag: Developer("Hanomag", NATIONS.germany),
    Demag: Developer("Demag", NATIONS.germany),
    CKD: Developer("ČKD", NATIONS.USA),
    GMC: Developer("GMC", NATIONS.USA),
    Cadillac: Developer("Cadillac", NATIONS.USA),
    USArmyOrdnanceDepartment: Developer(
      "U.S. Army Ordnance Department",
      NATIONS.USA
    ),
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
    Heinkel: Developer("Heinkel Flugzeugwerke", NATIONS.germany),
    FockeWulf: Developer("Focke-Wulf Flugzeugbau", NATIONS.germany),
    Junkers: Developer("Junkers", NATIONS.germany),
    Messerschmitt: Developer("Messerschmitt AG", NATIONS.germany),
    Grumman: Developer("Grumman Corporation", NATIONS.USA),
    NorthAmerican: Developer("North American", NATIONS.USA),
    Douglas: Developer("Douglas Aircraft", NATIONS.USA),
    Boeing: Developer("Boeing", NATIONS.USA),
    Gloster: Developer("Gloster Aircraft Company", NATIONS.greatBritain),
    Avro: Developer("Avro Aircraft", NATIONS.greatBritain),
    MoraneSaulnier: Developer("Morane-Saulnier", NATIONS.france),
    Mitsubishi: Developer("Mitsubishi", NATIONS.japan),
    Macchi: Developer("Aeronautica Macchi", NATIONS.italy),
    PZL: Developer("PZL", NATIONS.poland),
    Saab: Developer("Saab AB", NATIONS.sweden),
    VL: Developer("Valtion lentokonetehdas", NATIONS.finland),
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
    Opel: Developer("Opel", NATIONS.germany),
    Fieseler: Developer("Fieseler", NATIONS.germany),
    Peenemunde: Developer("Heeresversuchsanstalt Peenemünde", NATIONS.germany),
  },
  smallArms: {
    Walther: Developer("Walther", NATIONS.germany),
  },
};
