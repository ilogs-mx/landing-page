export function $(selectors: string): NodeListOf<Element> {
  return document.querySelectorAll(selectors);
}
