import { initView } from './initView';
import { renderFooter } from './renderFooter';
import { renderHeader } from './renderHeader';

export const appView = () => {
  initView();
  renderFooter();
  renderHeader();
};
