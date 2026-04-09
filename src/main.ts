import './assets/styles/style.scss';
import { App, initHeader, initFeedbackForm, initFavoriteButtons } from './App';

const root = document.getElementById('app');
if (root) {
  root.innerHTML = App();
  initHeader();
  initFeedbackForm();
  initFavoriteButtons();
}

