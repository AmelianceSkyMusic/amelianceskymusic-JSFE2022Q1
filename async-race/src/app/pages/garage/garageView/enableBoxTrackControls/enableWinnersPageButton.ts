export const enableWinnersPageButton = () => {
  const button$ = document.querySelector('.menu__winners') as HTMLButtonElement;
  button$.disabled = false;
};
