export const removeWinnerAlert = () => {
  const alerts$$ = document.querySelectorAll('.alert');
  alerts$$.forEach((elem$) => elem$.remove());
};
