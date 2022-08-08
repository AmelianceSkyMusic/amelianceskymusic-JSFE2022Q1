export const disableRaceAllButton = () => {
  const button$ = document.querySelector('.race-buttons__race') as HTMLButtonElement;
  button$.disabled = true;
};
