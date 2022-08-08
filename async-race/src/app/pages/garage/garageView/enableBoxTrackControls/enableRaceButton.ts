export const enableRaceButton = () => {
  document.querySelectorAll(
    '.controls_run-button',
  ).forEach((button$) => {
    const btn$ = button$ as HTMLButtonElement;
    btn$.disabled = false;
  });
};
