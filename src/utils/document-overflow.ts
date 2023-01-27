export class DocumentOverflow {
  public static setHidden(): void {
    document.body.style.overflow = "hidden";
  }

  public static setAuto(): void {
    document.body.style.overflow = "auto";
  }
}
