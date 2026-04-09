import { FavoriteButton } from './FavoriteButton';

export type RecommendationItemProps = {
  image: string;
  alt: string;
  name: string;
  settings: string;
  price: string;
  oldPrice: string;
};

export function RecommendationItem({ image, alt, name, settings, price, oldPrice }: RecommendationItemProps): string {
  return `
    <div class="product">
      <div class="product__image-wrapper">
        <img class="product__image" width="155" height="155" src="${image}" alt="${alt}">
        ${FavoriteButton({ className: 'product__favorite' })}
      </div>
      <div class="product__description">
        <h3 class="product__name">${name}</h3>
        <p class="product__settings">${settings}</p>
        <p class="product-price">
          <span class="product-price__current">${price}</span>
          <span class="product-price__old">${oldPrice}</span>
        </p>
      </div>
      <a href="#" class="button button--full product__button">Add to Cart</a>
    </div>
  `;
}
