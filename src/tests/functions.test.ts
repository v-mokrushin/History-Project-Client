import {
  getBackgroundImageStyleObject,
  getShortNumber,
  shuffleArray,
  translateToBool,
} from "utils/common";

test("Get background image style object", () => {
  expect(getBackgroundImageStyleObject(undefined)).toEqual({});
  expect(getBackgroundImageStyleObject("")).toEqual({});
  expect(getBackgroundImageStyleObject("image.jpg")).toEqual({
    backgroundImage: "url(image.jpg)",
  });
});

test("Shuffle array", () => {
  expect(shuffleArray([1, 2, 4, 5, 6])).not.toEqual([1, 2, 4, 5, 6]);
});

test("Translation to bool", () => {
  expect(translateToBool("true")).toBe(true);
  expect(translateToBool("false")).toBe(false);
});

test("Get short presentation of number", () => {
  expect(getShortNumber(1)).toBe("1");
  expect(getShortNumber(100)).toBe("100");
  expect(getShortNumber(1000)).toBe("1000");
  expect(getShortNumber(49_000)).toBe("49000");
  expect(getShortNumber(50_000)).toBe("50K");
  expect(getShortNumber(108_531)).toBe("108.5K");
  expect(getShortNumber(950_430)).toBe("950.4K");
  expect(getShortNumber(1_000_000)).toBe("1M");
  expect(getShortNumber(8_545_000)).toBe("8.5M");
});
