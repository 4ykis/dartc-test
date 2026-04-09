import '../assets/styles/components/_article-item.scss';

type ArticleItemProps = {
  image: string;
  alt: string;
  title: string;
};

export function ArticleItem({ image, alt, title }: ArticleItemProps): string {
  return `
    <article class="article-item">
      <div class="article-item__image-wrapper">
        <img class="article-item__image" width="298" height="200" src="${image}" alt="${alt}">
      </div>
      <div class="article-item__content">
        <h2 class="article-item__title">${title}</h2>
        <a href="#" class="button article-item__button">View Product</a>
      </div>
    </article>
  `;
}
