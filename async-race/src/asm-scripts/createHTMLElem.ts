export function createHTMLElem(
  parent: HTMLElement | DocumentFragment,
  elementType: string,
  params?: {
    class?: string;
    id?: string;
    attributes?: string;
  },
  text = '',
): HTMLElement {
  const element$ = document.createElement(elementType);
  if (params?.class) {
    const classes: string[] = params.class.split(' ');
    element$.classList.add(...classes);
  }
  if (params?.id) {
    element$.setAttribute('id', params.id);
  }
  if (params?.attributes) {
    const attributesArr = params?.attributes.split(' ');
    attributesArr.forEach((atribut) => {
      const atributName = atribut.split('=')[0];
      const atributValue = atribut.split('=')[1].slice(1, -1);
      element$.setAttribute(atributName, atributValue);
    });
  }
  if (text) {
    element$.innerHTML = text;
  }
  parent.append(element$);

  return element$;
}
