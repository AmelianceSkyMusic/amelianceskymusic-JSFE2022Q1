export const enablePaginationNextButton = () => {
  const button$ = document.querySelector('.pagination-button__next') as HTMLButtonElement;
  button$.disabled = false;
};
