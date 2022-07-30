export function createHTMLElem(
  parent: HTMLElement | DocumentFragment,
  elementType: string,
  params?: {
    class?: string;
    id?: string;
  },
  text = '',
): HTMLElement {
  const elName$ = document.createElement(elementType);
  if (params?.class) {
    const classes: string[] = params.class.split(' ');
    elName$.classList.add(...classes);
  }
  if (params?.id) {
    elName$.setAttribute('id', params.id);
  }
  if (text) {
    elName$.innerHTML = text;
  }
  parent.append(elName$);

  return elName$;
}
