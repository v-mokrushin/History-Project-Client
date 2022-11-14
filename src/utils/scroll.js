export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  console.log("scroll");
};

export const scrollTopInstantly = () => {
  window.scrollTo({ top: 0 });
  console.log("scroll");
};
