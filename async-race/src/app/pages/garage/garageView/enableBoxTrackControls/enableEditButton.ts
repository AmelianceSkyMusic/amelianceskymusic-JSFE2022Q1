export const enableEditButton = () => {
  document.querySelectorAll(
    '.cars-prop_edit-button',
  ).forEach((button$) => {
    const btn$ = button$ as HTMLButtonElement;
    btn$.disabled = false;
  });
};
