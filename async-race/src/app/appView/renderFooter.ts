import { createHTMLElem } from '../../asm-scripts';

export const renderFooter = () => {
  const fragment$: DocumentFragment = new DocumentFragment();
  const row$ = createHTMLElem(fragment$, 'div', { class: 'row' });
  const footerGithubLogo$ = createHTMLElem(row$, 'div', {
    class: 'footer__github-logo col col-3 col-md-6',
  });
  createHTMLElem(footerGithubLogo$, 'a', {
    class: 'link github-logo',
    atribut: 'target="_blank" href="https://github.com/AmelianceSkyMusic"',
  });
  const footerCopyrigh$ = createHTMLElem(row$, 'div', {
    class: 'footer__copyright col col-6 col-md-12',
  });
  createHTMLElem(
    footerCopyrigh$,
    'a',
    {
      class: 'p1 link h4',
      atribut: 'target="_blank" href="https://dribbble.com/rsayuaie"',
    },
    '2022 © Designed by AmelianceSkyMusic',
  );
  const footerRsschoolLogo$ = createHTMLElem(row$, 'div', {
    class: 'footer__rsschool-logo col col-3 col-md-6',
  });
  createHTMLElem(footerRsschoolLogo$, 'a', {
    class: 'link rsschool-logo',
    atribut: 'target="_blank" href="https://rs.school/js/"',
  });
  const footerContainer$ = document.querySelector('.footer .container') as HTMLElement;
  footerContainer$.prepend(fragment$);
};
