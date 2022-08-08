export const disablePaginationPrevButton = () => {
  const button$ = document.querySelector('.pagination-button__prev') as HTMLButtonElement;
  button$.disabled = true;
};
