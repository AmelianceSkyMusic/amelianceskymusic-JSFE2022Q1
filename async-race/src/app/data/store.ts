import { observer } from '../utils/observer';

const STORE = observer();
STORE.updateSettings('pageNumber', 1);
STORE.updateSettings('carsLimitPerPage', 7);

export { STORE };
