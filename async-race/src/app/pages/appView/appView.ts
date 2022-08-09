import { initView } from './initView';
import { renderFooter } from './renderFooter';
import { renderHeader } from './renderHeader';
import { renderMain } from './renderMain';

export const appView = () => {
  initView();
  renderFooter();
  renderMain();
  renderHeader();
};
