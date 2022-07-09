// >----------------------------------------------------------------<
// >                           FUNCTIONS                            <
// >----------------------------------------------------------------<

export default function createHTMLElem(
    parent: HTMLElement | DocumentFragment,
    elementType: string,
    classNames: {
        class?: string;
        id?: string;
    },
    text = ''
): HTMLElement {
    const elName$ = document.createElement(elementType);
    if (classNames?.class) {
        const classes: string[] = classNames.class.split(' ');
        elName$.classList.add(...classes);
    }
    if (classNames?.id) {
        elName$.setAttribute('id', classNames.id);
    }
    if (text) {
        elName$.innerHTML = text;
    }
    parent.append(elName$);

    return elName$;
}
