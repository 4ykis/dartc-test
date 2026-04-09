import '../assets/styles/components/_article-list.scss';
import { ArticleItem } from './ArticleItem';

type Article = {
  image: string;
  alt: string;
  title: string;
};

const articles: Article[] = [
  { image: '/assets/images/articles/article_1.jpg', alt: 'Article 1', title: 'New Arrivals' },
  { image: '/assets/images/articles/article_2.jpg', alt: 'Article 2', title: 'New Arrivals' },
  { image: '/assets/images/articles/article_3.jpg', alt: 'Article 3', title: 'New Arrivals' },
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
