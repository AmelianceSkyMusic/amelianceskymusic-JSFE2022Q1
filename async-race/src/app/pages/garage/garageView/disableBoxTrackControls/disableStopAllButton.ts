export const disableStopAllButton = () => {
  const button$ = document.querySelector('.race-buttons__reset') as HTMLButtonElement;
  button$.disabled = true;
};
