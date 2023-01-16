function getURLForBackroundImage(url: string): string {
  return `url(${url})`;
}

export function getBackgroundImageStyleObject(url: string | undefined): object {
  if (url) return { backgroundImage: getURLForBackroundImage(url) };
  else return {};
}

export function createParagraphs(text: string): string[] {
  let prevPos = -1;
  let pos = -1;
  const paragraphs = [];

  while (text.indexOf("\n", pos + 1) != -1) {
    prevPos = pos + 1;
    pos = text.indexOf("\n", pos + 1);
    paragraphs.push(text.slice(prevPos, pos).trim());
  }

  return paragraphs;
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

export function randomInteger(min: number, max: number): number {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
