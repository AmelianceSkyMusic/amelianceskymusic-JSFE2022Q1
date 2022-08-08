export const enableCreateButton = () => {
  const button$ = document.querySelector('.create-car__create') as HTMLButtonElement;
  button$.disabled = false;
};
