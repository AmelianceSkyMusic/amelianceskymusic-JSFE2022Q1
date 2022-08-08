export const enableCarRemoveButton = () => {
  document.querySelectorAll(
    '.cars-prop_car-remove-button',
  ).forEach((button$) => {
    const btn$ = button$ as HTMLButtonElement;
    btn$.disabled = false;
  });
};
