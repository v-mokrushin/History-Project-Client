import { render } from "@testing-library/react";
import { Pages } from "constants/pages";
import { BrowserRouter } from "react-router-dom";
import SectionCard from "./SectionCard";

describe("SectionCard", () => {
  test("SectionCard render", () => {
    const sectionCard = render(
      <BrowserRouter>
        <SectionCard information={Pages.armoredVehicles} />
      </BrowserRouter>
    );
    expect(sectionCard).toMatchSnapshot();
  });
});
