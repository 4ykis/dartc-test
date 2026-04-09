import '../assets/styles/components/_recommendation.scss';
import { RecommendationItem } from './RecommendationItem';
import type { RecommendationItemProps } from './RecommendationItem';

const recommendations: RecommendationItemProps[] = [
  {
    image: '/assets/images/products/product_1.jpg',
    alt: 'Apple iPhone 15 Pro',
    name: 'Apple iPhone 15 Pro',
    settings: '256GB · 8GB RAM · Black',
    price: '$999',
    oldPrice: '$1,199.00',
  },
  {
    image: '/assets/images/products/product_2.jpg',
    alt: 'Google Pixel 8 Pro',
    name: 'Google Pixel 8 Pro',
    settings: '128GB · 8GB RAM · Hazel',
    price: '$999',
    oldPrice: '$1,199',
  },
];

export function RecommendationList(): string {
  return `
    <section class="recommendations">
      <h2 class="recommendations__title">You May Also Like</h2>
      <div class="recommendations__list">
        ${recommendations.map(RecommendationItem).join('')}
      </div>
    </section>
  `;
}
