export class DocumentOverflow {
  static setHidden(): void {
    document.body.style.overflow = "hidden";
  }

  static setAuto(): void {
    document.body.style.overflow = "auto";
  }
}
