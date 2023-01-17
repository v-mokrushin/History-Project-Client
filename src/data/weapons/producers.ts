import { INation, NATIONS } from "../../constants/nations";

export interface IProducer {
  name: {
    original: string;
  };
  nation: INation;
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
  },
  aviation: {},
  atillery: {},
  smallArms: {},
};
