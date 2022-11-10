function getURLForBackroundImage(url) {
  return `url(${url})`;
}

export function getBackgroundImageStyleObject(url) {
  return { backgroundImage: getURLForBackroundImage(url) };
}