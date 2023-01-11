export const Developers = {
  notDefined: getDeveloper("Не определено"),
  armoredVehicles: {
    Chelyabinsk: getDeveloper("КБ завода №100 ЧТЗ"),
    KrasnoyeSormovo: getDeveloper(`КБ завода №112 "Красное Сормово"`),
    Stalingrad: getDeveloper("КБ Сталинградского тракторного завода"),
    Henschel: getDeveloper("Henschel-Werke"),
    MAN: getDeveloper("MAN"),
    DaimlerBenz: getDeveloper("Daimler-Benz"),
    Krupp: getDeveloper("Krupp"),
    Hanomag: getDeveloper("Hanomag"),
    Demag: getDeveloper("Demag"),
    GMC: getDeveloper("GMC"),
    USArmyOrdnanceDepartment: getDeveloper("U.S. Army Ordnance Department"),
    Nuffield: getDeveloper("Nuffield Mechanizations and Aero"),
  },
  aviation: {
    Yak: getDeveloper("ОКБ-115 Яковлева"),
    IL: getDeveloper("ОКБ-240 Ильюшина"),
    LA: getDeveloper("ОКБ-21 Лавочкина"),
    Tupolev: getDeveloper("ОКБ Туполева"),
    Heinkel: getDeveloper("Heinkel Flugzeugwerke"),
    FockeWulf: getDeveloper("Focke-Wulf Flugzeugbau"),
    Junkers: getDeveloper("Junkers"),
    Messerschmitt: getDeveloper("Messerschmitt AG"),
    Grumman: getDeveloper("Grumman Corporation"),
    NorthAmerican: getDeveloper("North American"),
    Douglas: getDeveloper("Douglas Aircraft"),
    Boeing: getDeveloper("Boeing"),
    Gloster: getDeveloper("Gloster Aircraft Company"),
    Avro: getDeveloper("Avro Aircraft"),
    MoraneSaulnier: getDeveloper("Morane-Saulnier"),
    Mitsubishi: getDeveloper("Mitsubishi"),
    Macchi: getDeveloper("Aeronautica Macchi"),
    PZL: getDeveloper("PZL"),
    Saab: getDeveloper("Saab AB"),
    VL: getDeveloper("Valtion lentokonetehdas"),
    IAR: getDeveloper("IAR"),
    ANBO: getDeveloper("ANBO"),
    Fokker: getDeveloper("Fokker"),
    Ikarus: getDeveloper("Ikarus"),
    Weiss: getDeveloper("Weiss"),
  },
  atillery: {
    ArtilleryDesignBureau: getDeveloper("Артиллерийское конструкторское бюро"),
    Plant92: getDeveloper("КБ завода №92"),
    Plant172: getDeveloper("КБ завода №172"),
    Opel: getDeveloper("Opel"),
    RheinmetallBorsig: getDeveloper("Rheinmetall-Borsig A.G."),
    Fieseler: getDeveloper("Fieseler"),
    Peenemunde: getDeveloper("Heeresversuchsanstalt Peenemünde"),
  },
};

function getDeveloper(russianName: string) {
  return { name: { russian: russianName } };
}
