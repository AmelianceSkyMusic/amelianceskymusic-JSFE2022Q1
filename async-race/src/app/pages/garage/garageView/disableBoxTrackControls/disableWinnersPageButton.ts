export const disableWinnersPageButton = () => {
  const button$ = document.querySelector('.menu__winners') as HTMLButtonElement;
  button$.disabled = true;
};
