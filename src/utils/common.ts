function getURLForBackroundImage(url: string): string {
  return `url(${url})`;
}

export function getBackgroundImageStyleObject(url: string): object {
  return { backgroundImage: getURLForBackroundImage(url) };
}

export function createParagraphs(text: string): string[] {
  let prevPos = -1;
  let pos = -1;
  const p = [];

  while (text.indexOf("\n", pos + 1) != -1) {
    prevPos = pos + 1;
    pos = text.indexOf("\n", pos + 1);
    p.push(text.slice(prevPos, pos).trim());
  }

  return p;
}

export function shuffleTracks(array: string[]): string[] {
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
