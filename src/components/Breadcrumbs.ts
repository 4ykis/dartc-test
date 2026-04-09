import '../assets/styles/components/_breadcrumbs.scss';

export function Breadcrumbs(): string {
  return `
    <div class="breadcrumbs">
      <div class="breadcrumbs__wrapper">
        <a href="#" class="breadcrumbs__link">Home</a> /
        <a href="#" class="breadcrumbs__link">Electronics</a> /
        <a href="#" class="breadcrumbs__link">Smartphones</a> /
        <a href="#" class="breadcrumbs__link">Android</a> /
        <a href="#" class="breadcrumbs__link">Premium</a> /
        <span class="breadcrumbs__current">Galaxy S24 Ultra</span>
      </div>
    </div>
  `;
}
