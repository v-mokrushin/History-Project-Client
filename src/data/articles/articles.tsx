import { normolize } from "../../utils/normolize";

import Barbarossa from "fragments/articles/Barbarossa";
import KhalkhinGol from "fragments/articles/KhalkhinGol";
import Rearmament from "fragments/articles/Rearmament";
import { IArticle } from "./interfaces";

const articles_data: IArticle[] = [
  {
    title: "Бои на Халхин-Голе",
    description:
      "Вооружённый конфликт между советско-монгольскими войсками и Вооружёнными силами Японии в 1939 году",
    author: "Алексей Исаев, Артем Драбкин",
    origin: "История Великой Отечественной войны 1941-1945 гг. в одном томе",
    backgroundURL: "/images/articles/khalkhin_gol.jpg",
    text: <KhalkhinGol />,
  },
  {
    title: "План «Барбаросса»",
    description: "Cтратегический план нападения нацистской Германии на СССР",
    author: "Алексей Исаев, Артем Драбкин",
    origin: "История Великой Отечественной войны 1941-1945 гг. в одном томе",
    backgroundURL: "/images/articles/plan.jpg",
    text: <Barbarossa />,
  },
  {
    title: "Реформирование и перевооружение Красной армии",
    description: "",
    author: "Алексей Исаев, Артем Драбкин",
    origin: "История Великой Отечественной войны 1941-1945 гг. в одном томе",
    backgroundURL: "/images/articles/army.jpg",
    text: <Rearmament />,
  },
  {
    title: "Красная Армия и Вермахт накануне 22 июня 1941 года",
    description:
      "Cравнение материально-технического обеспечения и организационной структуры",
    backgroundURL: "/images/articles/red-army.jpg",
  },
  {
    title: "Смоленское сражение и крах стратегии блицкрига",
    description: "",
    backgroundURL: "/images/articles/smolensk.jpg",
  },
  {
    title: "Cражение за линию Сталина летом 1941 года",
    description:
      "Cражение за линию Сталина летом 1941 года и бои в Украине в июле - августе 1941 года",
    backgroundURL: "/images/articles/kiev.jpg",
  },
];

articles_data.forEach((item) => {
  Object.defineProperty(item, "id", {
    get: function () {
      return this.title.replaceAll(" ", "-");
    },
  });
});

const previews = normolize(
  articles_data.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    backgroundURL: item.backgroundURL,
  }))
);

const content = normolize(
  articles_data.map((item) => ({
    id: item.id,
    author: item.author,
    origin: item.origin,
    text: item.text,
  }))
);

export const Articles = {
  previews,
  content,
};

console.log(Articles);
