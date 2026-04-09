import '../assets/styles/components/_main-product.scss';
import { FavoriteButton } from './FavoriteButton';

export function MainProduct(): string {
  return `
    <section class="main-product-wrapper">
      <div class="main-product">
        <div class="main-product__image-wrapper">
          <img class="main-product__image" width="326" height="326" src="/assets/images/products/product_1.jpg" alt="Samsung Galaxy S24 Ultra">
          ${FavoriteButton({ className: 'product__favorite' })}
        </div>
        <div class="main-product__content">
          <div class="main-product__label">New Release</div>
          <h1 class="main-product__title">Samsung Galaxy S24 Ultra</h1>
          <p class="main-product__settings">256GB · 8GB RAM · Black</p>
          <p class="main-product-price">
            <span class="main-product-price__current">$999</span>
            <span class="main-product-price__old">$1,199</span>
          </p>
        </div>
        <a href="#" class="button main-product__button">View Product</a>
      </div>
    </section>
  `;
}
