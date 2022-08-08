export const disableRaceButton = () => {
  document.querySelectorAll(
    '.controls_run-button',
  ).forEach((button$) => {
    const btn$ = button$ as HTMLButtonElement;
    btn$.disabled = true;
  });
};
