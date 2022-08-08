export const disablePaginationNextButton = () => {
  const button$ = document.querySelector('.pagination-button__next') as HTMLButtonElement;
  button$.disabled = true;
};
