import { createHTMLElem } from '../../../asm-scripts';

export const renderFooter = () => {
  const fragment$: DocumentFragment = new DocumentFragment();

  const footerGithubLogo$ = createHTMLElem(fragment$, 'div', {
    class: 'footer__github-logo col col-2 col-sm-6',
  });
  createHTMLElem(footerGithubLogo$, 'a', {
    class: 'link github-logo',
    attributes: 'target="_blank" href="https://github.com/AmelianceSkyMusic"',
  });
  const footerCopyrigh$ = createHTMLElem(fragment$, 'div', {
    class: 'footer__copyright col col-8 col-sm-12',
  });
  createHTMLElem(
    footerCopyrigh$,
    'a',
    {
      class: 'link',
      attributes: 'target="_blank" href="https://dribbble.com/rsayuaie"',
    },
    '2022 © Designed by AmelianceSkyMusic',
  );
  const footerRsschoolLogo$ = createHTMLElem(fragment$, 'div', {
    class: 'footer__rsschool-logo col col-2 col-sm-6',
  });
  createHTMLElem(footerRsschoolLogo$, 'a', {
    class: 'link rsschool-logo',
    attributes: 'target="_blank" href="https://rs.school/js/"',
  });
  const footerContainer$ = document.querySelector('.footer .container .row') as HTMLElement;
  footerContainer$.prepend(fragment$);
};
