import { observer } from './observer';

export const WinStore = observer({
  winnersPageNumber: 1,
  winnersLimitPerPage: 10,
  winnersSort: 'id',
  winnersSortOrder: 'ASC',
});
