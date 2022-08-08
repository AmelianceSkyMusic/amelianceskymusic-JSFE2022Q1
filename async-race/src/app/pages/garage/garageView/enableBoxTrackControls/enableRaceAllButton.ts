export const enableRaceAllButton = () => {
  const button$ = document.querySelector('.race-buttons__race') as HTMLButtonElement;
  button$.disabled = false;
};
