export const disableAdd100Button = () => {
  const button$ = document.querySelector('.state__add-cars') as HTMLButtonElement;
  button$.disabled = true;
};
