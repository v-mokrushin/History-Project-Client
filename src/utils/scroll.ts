export const Scroll = {
  toTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  },
  toTopInstantly() {
    window.scrollTo({ top: 0 });
  },
};
