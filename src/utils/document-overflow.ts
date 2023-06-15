export class DocumentOverflow {
  public static setHidden(): void {
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "19px";
  }

  public static setAuto(): void {
    document.body.style.overflow = "auto";
    document.body.style.paddingRight = "0px";
  }
}
