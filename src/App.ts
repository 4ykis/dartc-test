import { Header, initHeader } from './components/Header';
import { Navbar } from './components/Navbar';
import { ArticleList } from './components/ArticleList';
import { Breadcrumbs } from './components/Breadcrumbs';
import { Review } from './components/Review';
import { RecommendationList } from './components/RecommendationList';
import { MainProduct } from './components/Product';
import { FeedbackForm, initFeedbackForm } from './components/FeedbackForm';
import { initFavoriteButtons } from './components/FavoriteButton';

export { initHeader, initFeedbackForm, initFavoriteButtons };

export function App(): string {
  return `
    ${Header()}

    <main class="page">
      <div class="container">
        ${ArticleList()}
        ${Breadcrumbs()}
        ${Review()}
        ${RecommendationList()}
        ${MainProduct()}
        ${FeedbackForm()}
      </div>

      ${Navbar()}
    </main>
  `;
}
