export const enableStopAllButton = () => {
  const button$ = document.querySelector('.race-buttons__reset') as HTMLButtonElement;
  button$.disabled = false;
};
