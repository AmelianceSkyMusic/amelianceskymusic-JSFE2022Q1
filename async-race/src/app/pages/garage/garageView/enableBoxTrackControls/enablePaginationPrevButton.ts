export const enablePaginationPrevButton = () => {
  const button$ = document.querySelector('.pagination-button__prev') as HTMLButtonElement;
  button$.disabled = false;
};
