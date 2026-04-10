import '../assets/styles/components/_article-list.scss';
import { ArticleItem } from './ArticleItem';
import article1 from '../assets/images/articles/article_1.jpg';
import article2 from '../assets/images/articles/article_2.jpg';
import article3 from '../assets/images/articles/article_3.jpg';

type Article = {
  image: string;
  alt: string;
  title: string;
};

const articles: Article[] = [
  { image: article1, alt: 'Article 1', title: 'New Arrivals' },
  { image: article2, alt: 'Article 2', title: 'New Arrivals' },
  { image: article3, alt: 'Article 3', title: 'New Arrivals' },
];

export function ArticleList(): string {
  return `
    <section class="article-list">
      <div class="article-list__wrapper">
        ${articles.map(ArticleItem).join('')}
      </div>
    </section>
  `;
}
