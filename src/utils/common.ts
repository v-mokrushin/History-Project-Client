export function getBackgroundImageStyleObject(url: string | undefined): object {
  if (url) return { backgroundImage: `url(${url})` };
  else return {};
}

export function shuffleArray<Type>(array: Type[]): Type[] {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export function translateStringToBool(text: string | null): boolean {
  if (text === "true") return true;
  else return false;
}

export function getShortNumber(num: number): string {
  function isInteger(num: number): boolean {
    return num % 1 === 0;
  }

  if (num >= 1_000_000) {
    const n = num / 1_000_000;
    return (isInteger(n) ? n : n.toFixed(1)) + "M";
  } else if (num >= 50_000) {
    const n = num / 1_000;
    return (isInteger(n) ? n : n.toFixed(1)) + "K";
  } else {
    return String(num);
  }
}

export function isValidURL(URL: string): boolean {  
  const pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator

  return !!pattern.test(URL);
}
