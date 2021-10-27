export function sliceTxt(txt) {
  let length = 350;
  if (txt) {
    return txt.length > length
      ? txt.substring(0, length) + "..."
      : txt;
  }
}
