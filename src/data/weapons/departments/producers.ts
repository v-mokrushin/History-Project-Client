import { INation, Nations } from "../../../constants/nations";

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
  RheinmetallBorsig: Producer("Rheinmetall-Borsig A.G.", Nations.Germany),
  armoredVehicles: {
    Leningrad185: Producer("Ленинградский завод №185", Nations.USSR),
    Chelyabinsk100: Producer("Челябинский завод №100", Nations.USSR),
    KrasnoyeSormovo112: Producer(`Завод №112 "Красное Сормово"`, Nations.USSR),
    Stalingrad: Producer("Сталинградский тракторный завод", Nations.USSR),
    Tagil183: Producer("Уральский завод №183 (г. Нижний Тагил)", Nations.USSR),
    UZTM: Producer("Уралмашзавод", Nations.USSR),
    Kharkov183: Producer("Харьковский завод №183", Nations.USSR),
    Kirov38: Producer("Завод №38 г. Киров", Nations.USSR),
    Bolshevik: Producer("Завод «Большевик»", Nations.USSR),
    Izhorsky: Producer("Ижорский завод", Nations.USSR),
    Leningrad174: Producer(
      "Ленинградский государственный завод №174",
      Nations.USSR
    ),
    Omsk174: Producer("Омский завод №174", Nations.USSR),
    MAN: Producer("MAN", Nations.Germany),
    DaimlerBenz: Producer("Daimler-Benz", Nations.Germany),
    Henschel: Producer("Henschel-Werke", Nations.Germany),
    Krupp: Producer("Krupp", Nations.Germany),
    Miag: Producer("Miag", Nations.Germany),
    Wegmann: Producer("Wegmann", Nations.Germany),
    Alkett: Producer("Alkett", Nations.Germany),
    MNH: Producer(
      "Maschinenfabrik Niedersachsen Hannover (MNH)",
      Nations.Germany
    ),
    Cadillac: Producer("Cadillac", Nations.USA),
    Buick: Producer("Buick", Nations.USA),
    GMC: Producer("General Motors", Nations.USA),
    Chrysler: Producer("Chrysler", Nations.USA),
    DetroitTankArsenal: Producer("Detroit Tank Arsenal", Nations.USA),
    PullmanStandard: Producer("Pullman-Standard Car Company", Nations.USA),
    ALCO: Producer("American Locomotive Company", Nations.USA),
    BLW: Producer("Baldwin Locomotive Works", Nations.USA),
    MontrealLW: Producer("Montreal Locomotive Works", Nations.Canada),
    Fisher: Producer("Fisher Tank Arsenal", Nations.USA),
    Ford: Producer("Ford Motor Company", Nations.USA),
    MasseyHarris: Producer("Massey-Harris Company", Nations.Canada),
    Nuffield: Producer(
      "Nuffield Mechanizations and Aero",
      Nations.GreatBritain
    ),
    MetroCammell: Producer("Metro Cammell", Nations.GreatBritain),
  },
  aviation: {
    Kuibyshev1: Producer("Куйбышевский авиазавод №1", Nations.USSR),
    Gorkiy21: Producer("Горьковский авиазавод №21", Nations.USSR),
    Kuibyshev18: Producer("Куйбышевский авиазавод №18", Nations.USSR),
    Moskva23: Producer("Московский авиазавод №23", Nations.USSR),
    Moskva39: Producer("Московский авиазавод №39", Nations.USSR),
    Irkutsk39: Producer("Иркутский авиазавод №39", Nations.USSR),
    Tbilisi31: Producer("Тбилисский авиазавод №31", Nations.USSR),
    Voronezh18: Producer("Воронежский авиазавод №18", Nations.USSR),
    Voronezh64: Producer("Воронежский авиазавод №64", Nations.USSR),
    Moskva82: Producer("Московский авиазавод №82", Nations.USSR),
    UlanUde99: Producer("Улан-Удэнский авиазавод №99", Nations.USSR),
    Komsomolsk126: Producer("Комсомольский авиазавод №126", Nations.USSR),
    Novosibirsk153: Producer("Новосибирский авиазавод №153", Nations.USSR),
    Omsk166: Producer("Омский авиазавод №166", Nations.USSR),
    Saratov292: Producer("Саратовский авиазавод №292", Nations.USSR),
    Khimki301: Producer("Химкинский авиазавод №301", Nations.USSR),
    Moskva381: Producer("Московский авиазавод №381", Nations.USSR),
    Messerschmitt: Producer("Messerschmitt AG", Nations.Germany),
    BoeingSeattle: Producer("Boeing (Seattle, Washington)", Nations.USA),
    BoeingWichita: Producer("Boeing (Wichita, Kansas)", Nations.USA),
    BellAtlanta: Producer("Bell (Atlanta, Georgia)", Nations.USA),
    MartinOmaha: Producer("Martin (Omaha, Nebraska)", Nations.USA),
  },
  atillery: {},
  smallArms: {},
};
