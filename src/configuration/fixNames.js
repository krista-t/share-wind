export function toKebab(string) {
  return string
    .split("")
    .map((letter, index) => {
      if (/[A-Z]/.test(letter)) {
        return ` ${letter.toLowerCase()}`;
      }
      return letter;
    })
    .join("")
    .trim()
    .replace(/_/g, "-")
    .replace(/\s+/g, "-")
    .replace(/[_\s]+/g, "-");
}
