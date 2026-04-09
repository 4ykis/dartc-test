import '../assets/styles/components/_review.scss';

export function Review(): string {
  return `
    <section class="review">
      <div class="review__wrapper">
        <div class="review__rate">
          <svg width="25" height="24"><use href="/icons.svg#star"></use></svg>
          <svg width="25" height="24"><use href="/icons.svg#star"></use></svg>
          <svg width="25" height="24"><use href="/icons.svg#star"></use></svg>
          <svg width="25" height="24"><use href="/icons.svg#star"></use></svg>
          <svg width="25" height="24"><use href="/icons.svg#star"></use></svg>
        </div>
        <h1 class="review__title">Loved by tons of people! Real users, real results.</h1>
        <p class="review__text">
          Rated 4.8 out of 5 by over 7,809 customers — from dread beginners to seasoned pros.
        </p>
        <a href="#" class="review__button button button--full">View Product</a>
      </div>
    </section>
  `;
}
