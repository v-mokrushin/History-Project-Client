import { render } from "@testing-library/react";
import { Weapons } from "data/weapons/weapons";
import { BrowserRouter } from "react-router-dom";
import WeaponCard from "./WeaponCard";

describe("WeaponCard", () => {
  test("WeaponCard render", () => {
    const weaponCard = render(
      <BrowserRouter>
        <WeaponCard weapon={Weapons.getWeaponExample()} showFlag />
      </BrowserRouter>
    );
    expect(weaponCard).toMatchSnapshot();
  });
});
