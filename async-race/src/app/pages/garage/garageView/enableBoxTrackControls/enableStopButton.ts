export const enableStopButton = () => {
  document.querySelectorAll(
    '.controls_stop-button',
  ).forEach((button$) => {
    const btn$ = button$ as HTMLButtonElement;
    btn$.disabled = false;
  });
};
