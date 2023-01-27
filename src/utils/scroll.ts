export class Scroll {
  public static toTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  public static toTopInstantly() {
    window.scrollTo({ top: 0 });
  }
}
