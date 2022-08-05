export const disableEditButton = () => {
  document.querySelectorAll(
    '.cars-prop_edit-button',
  ).forEach((button$) => {
    const btn$ = button$ as HTMLButtonElement;
    btn$.disabled = true;
  });
};
