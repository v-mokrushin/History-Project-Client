import { INation, Nations } from "./../../../constants/nations";

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
  RheinmetallBorsig: Developer("Rheinmetall-Borsig A.G.", Nations.Germany),
  armoredVehicles: {
    Leningrad185: Developer("КБ Ленинградского завода №185", Nations.USSR),
    Chelyabinsk100: Developer("КБ Челябинского завода №100", Nations.USSR),
    ChelyabinskExp100: Developer(
      "КБ Челябинского опытного завода №100",
      Nations.USSR
    ),
    KrasnoyeSormovo112: Developer(
      `КБ завода №112 "Красное Сормово"`,
      Nations.USSR
    ),
    Stalingrad: Developer(
      "КБ Сталинградского тракторного завода",
      Nations.USSR
    ),
    Tagil183: Developer("КБ Уральского завода №183", Nations.USSR),
    UZTM: Developer("КБ Уралмашзавода", Nations.USSR),
    Kharkov183: Developer("КБ Харьковского завода №183", Nations.USSR),
    Kirov38: Developer("КБ завода №38 г. Киров", Nations.USSR),
    Izhorsky: Developer("КБ Ижорский завода", Nations.USSR),
    KB3: Developer("КБ-3 ВОАО", Nations.USSR),
    Henschel: Developer("Henschel-Werke", Nations.Germany),
    MAN: Developer("MAN", Nations.Germany),
    DaimlerBenz: Developer("Daimler-Benz", Nations.Germany),
    Krupp: Developer("Krupp", Nations.Germany),
    Porsche: Developer("Porsche AG", Nations.Germany),
    Hanomag: Developer("Hanomag", Nations.Germany),
    Demag: Developer("Demag", Nations.Germany),
    CKD: Developer("ČKD", Nations.Czechoslovakia),
    GMC: Developer("General Motors", Nations.USA),
    Cadillac: Developer("Cadillac", Nations.USA),
    USArmyOrdnanceDepartment: Developer(
      "U.S. Army Ordnance Department",
      Nations.USA
    ),
    AberdeenPG: Developer("Aberdeen Proving Ground", Nations.USA),
    Nuffield: Developer(
      "Nuffield Mechanizations and Aero",
      Nations.GreatBritain
    ),
    Vickers: Developer("Vickers-Armstrongs", Nations.GreatBritain),
  },
  aviation: {
    Yak: Developer("ОКБ-115 Яковлева", Nations.USSR),
    IL: Developer("ОКБ-240 Ильюшина", Nations.USSR),
    LA: Developer("ОКБ-21 Лавочкина", Nations.USSR),
    TU: Developer("ОКБ Туполева", Nations.USSR),
    Heinkel: Developer("Heinkel Flugzeugwerke", Nations.Germany),
    FockeWulf: Developer("Focke-Wulf Flugzeugbau", Nations.Germany),
    Junkers: Developer("Junkers", Nations.Germany),
    Messerschmitt: Developer("Messerschmitt AG", Nations.Germany),
    Grumman: Developer("Grumman Corporation", Nations.USA),
    NorthAmerican: Developer("North American", Nations.USA),
    Douglas: Developer("Douglas Aircraft", Nations.USA),
    Boeing: Developer("Boeing", Nations.USA),
    Gloster: Developer("Gloster Aircraft Company", Nations.GreatBritain),
    Avro: Developer("Avro Aircraft", Nations.GreatBritain),
    MoraneSaulnier: Developer("Morane-Saulnier", Nations.France),
    Mitsubishi: Developer("Mitsubishi", Nations.Japan),
    Macchi: Developer("Aeronautica Macchi", Nations.Italy),
    PZL: Developer("PZL", Nations.Poland),
    Saab: Developer("Saab AB", Nations.Sweden),
    VL: Developer("Valtion lentokonetehdas", Nations.Finland),
    IAR: Developer("IAR", Nations.Romania),
    ANBO: Developer("ANBO", Nations.lithuania),
    Fokker: Developer("Fokker", Nations.Netherlands),
    Ikarus: Developer("Ikarus", Nations.Yugoslavia),
    Weiss: Developer("Weiss", Nations.Hungary),
  },
  atillery: {
    ArtilleryDesignBureau: Developer(
      "Артиллерийское конструкторское бюро",
      Nations.USSR
    ),
    Plant92: Developer("КБ Нижегородского завода №92", Nations.USSR),
    Plant172: Developer("КБ Пермского завода №172", Nations.USSR),
    Opel: Developer("Opel", Nations.Germany),
    Fieseler: Developer("Fieseler", Nations.Germany),
    Peenemunde: Developer("Heeresversuchsanstalt Peenemünde", Nations.Germany),
  },
  smallArms: {
    Walther: Developer("Walther", Nations.Germany),
  },
  grenadeLaunchers: {
    HugoSchneiderAG: Developer("Hugo Schneider AG", Nations.Germany),
    ImperialChemicalIndustries: Developer(
      "Imperial Chemical Industries",
      Nations.GreatBritain
    ),
  },
};
