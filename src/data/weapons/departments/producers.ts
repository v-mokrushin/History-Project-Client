import { INation, NATIONS } from "../../../constants/nations";

export interface IProducer {
  readonly name: {
    readonly original: string;
  };
  readonly nation: INation;
}

function Producer(originalName: string, nation: INation): IProducer {
  return { name: { original: originalName }, nation };
}

export const Producers = {
  RheinmetallBorsig: Producer("Rheinmetall-Borsig A.G.", NATIONS.Germany),
  armoredVehicles: {
    Leningrad185: Producer("Ленинградский завод №185", NATIONS.USSR),
    Chelyabinsk100: Producer("Челябинский завод №100", NATIONS.USSR),
    KrasnoyeSormovo112: Producer(`Завод №112 "Красное Сормово"`, NATIONS.USSR),
    Stalingrad: Producer("Сталинградский тракторный завод", NATIONS.USSR),
    Ural183: Producer("Уральский завод №183", NATIONS.USSR),
    Kharkov183: Producer("Харьковский завод №183", NATIONS.USSR),
    Kirov38: Producer("Завод №38 г. Киров", NATIONS.USSR),
    Bolshevik: Producer("Завод «Большевик»", NATIONS.USSR),
    Izhorsky: Producer("Ижорский завод", NATIONS.USSR),
    Leningrad174: Producer(
      "Ленинградский государственный завод №174",
      NATIONS.USSR
    ),
    Omsk174: Producer("Омский завод №174", NATIONS.USSR),
    MAN: Producer("MAN", NATIONS.Germany),
    DaimlerBenz: Producer("Daimler-Benz", NATIONS.Germany),
    Henschel: Producer("Henschel-Werke", NATIONS.Germany),
    Krupp: Producer("Krupp", NATIONS.Germany),
    Miag: Producer("Miag", NATIONS.Germany),
    Wegmann: Producer("Wegmann", NATIONS.Germany),
    Alkett: Producer("Wegmann", NATIONS.Germany),
    MNH: Producer(
      "Maschinenfabrik Niedersachsen Hannover (MNH)",
      NATIONS.Germany
    ),
    Cadillac: Producer("Cadillac", NATIONS.USA),
    Buick: Producer("Buick", NATIONS.USA),
    GMC: Producer("General Motors", NATIONS.USA),
    Chrysler: Producer("Chrysler", NATIONS.USA),
    ALCO: Producer("American Locomotive Company", NATIONS.USA),
    BLW: Producer("Baldwin Locomotive Works", NATIONS.USA),
    MontrealLW: Producer("Montreal Locomotive Works", NATIONS.Canada),
    Fisher: Producer("Fisher Tank Arsenal", NATIONS.USA),
    Ford: Producer("Ford Motor Company", NATIONS.USA),
    MasseyHarris: Producer("Massey-Harris Company", NATIONS.Canada),
    Nuffield: Producer(
      "Nuffield Mechanizations and Aero",
      NATIONS.GreatBritain
    ),
    MetroCammell: Producer("Metro Cammell", NATIONS.GreatBritain),
  },
  aviation: {
    Kuibyshev1: Producer("Куйбышевский авиазавод №1", NATIONS.USSR),
    Gorkiy21: Producer("Горьковский авиазавод №21", NATIONS.USSR),
    Kuibyshev18: Producer("Куйбышевский авиазавод №18", NATIONS.USSR),
    Moskva23: Producer("Московский авиазавод №23", NATIONS.USSR),
    Moskva39: Producer("Московский авиазавод №39", NATIONS.USSR),
    Irkutsk39: Producer("Иркутский авиазавод №39", NATIONS.USSR),
    Tbilisi31: Producer("Тбилисский авиазавод №31", NATIONS.USSR),
    Voronezh18: Producer("Воронежский авиазавод №18", NATIONS.USSR),
    Voronezh64: Producer("Воронежский авиазавод №64", NATIONS.USSR),
    Moskva82: Producer("Московский авиазавод №82", NATIONS.USSR),
    UlanUde99: Producer("Улан-Удэнский авиазавод №99", NATIONS.USSR),
    Komsomolsk126: Producer("Комсомольский авиазавод №126", NATIONS.USSR),
    Novosibirsk153: Producer("Новосибирский авиазавод №153", NATIONS.USSR),
    Omsk166: Producer("Омский авиазавод №166", NATIONS.USSR),
    Saratov292: Producer("Саратовский авиазавод №292", NATIONS.USSR),
    Khimki301: Producer("Химкинский авиазавод №301", NATIONS.USSR),
    Moskva381: Producer("Московский авиазавод №381", NATIONS.USSR),
    Messerschmitt: Producer("Messerschmitt AG", NATIONS.Germany),
    BoeingSeattle: Producer("Boeing (Seattle, Washington)", NATIONS.USA),
    BoeingWichita: Producer("Boeing (Wichita, Kansas)", NATIONS.USA),
    BellAtlanta: Producer("Bell (Atlanta, Georgia)", NATIONS.USA),
    MartinOmaha: Producer("Martin (Omaha, Nebraska)", NATIONS.USA),
  },
  atillery: {},
  smallArms: {},
};
