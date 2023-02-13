import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CONTENT_LIST_TYPE } from "./constants";
import ContentList from "./ContentList";

const testingList: string[] = [
  "Введение",
  "Фотографии",
  "Характеристики",
  "История создания",
  "Конструкция",
  "Вооружение",
  "Применение в бою",
  "Видеоматериалы",
  "Модели",
  "Читайте также",
];

describe("Content List", () => {
  test("Content List renders fully desktop variant", () => {
    render(
      <ContentList
        list={testingList}
        weaponId="ИС-2"
        loadingStatus={false}
        type={CONTENT_LIST_TYPE.desktop}
      />
    );

    expect(screen.getByTestId("block-desktop")).toBeInTheDocument();
    expect(screen.getByText("Содержание")).toBeInTheDocument();
    testingList.forEach((element) => {
      expect(screen.getByText(element)).toBeInTheDocument();
    });
  });

  test("Content List renders fully mobile variant", () => {
    render(
      <ContentList
        list={testingList}
        weaponId="ИС-2"
        loadingStatus={false}
        type={CONTENT_LIST_TYPE.mobile}
      />
    );

    expect(screen.getByTestId("block-mobile")).toBeInTheDocument();
    expect(screen.getByText("Содержание")).toBeInTheDocument();
    testingList.forEach((element) => {
      expect(screen.getByText(element)).toBeInTheDocument();
    });
  });

  test("Content List renders with only empty div", () => {
    render(
      <ContentList
        list={testingList}
        weaponId="ИС-2"
        loadingStatus={true}
        type={CONTENT_LIST_TYPE.desktop}
      />
    );

    expect(screen.getByTestId("empty-div")).toBeInTheDocument();
    testingList.forEach((element) => {
      expect(screen.queryByText(element)).not.toBeInTheDocument();
    });
  });

  test("Content List renders with only empty div", () => {
    render(
      <ContentList
        list={undefined}
        weaponId="ИС-2"
        loadingStatus={true}
        type={CONTENT_LIST_TYPE.desktop}
      />
    );

    expect(screen.getByTestId("empty-div")).toBeInTheDocument();
  });
});
