export const disableCreateButton = () => {
  const button$ = document.querySelector('.create-car__create') as HTMLButtonElement;
  button$.disabled = true;
};
