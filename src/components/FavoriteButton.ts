import '../assets/styles/components/_favorite-button.scss';

export type FavoriteButtonProps = {
  isFavorited?: boolean;
  className?: string;
};

export function FavoriteButton({ isFavorited = false, className = '' }: FavoriteButtonProps = {}): string {
  const baseClass = 'favorite-button';
  const classes = [baseClass, className, isFavorited ? 'favorite-button--favorited' : ''].filter(Boolean).join(' ');

  return `
    <button class="icon-button ${classes}" aria-label="${isFavorited ? 'Remove from favorites' : 'Add to favorites'}" data-favorited="${isFavorited}">
      <svg width="24" height="24">
        <use class="favorite-button__icon favorite-button__icon--default" href="/icons.svg#favorite"></use>
        <use class="favorite-button__icon favorite-button__icon--add" href="/icons.svg#favorite-add"></use>
        <use class="favorite-button__icon favorite-button__icon--check" href="/icons.svg#favorite-check"></use>
        <use class="favorite-button__icon favorite-button__icon--remove" href="/icons.svg#favorite-remove"></use>
      </svg>
    </button>
  `;
}

export function initFavoriteButtons(): void {
  document.addEventListener('click', (event) => {
    const button = (event.target as HTMLElement).closest('.favorite-button') as HTMLButtonElement;
    if (!button) return;

    const isFavorited = button.dataset.favorited === 'true';
    const newFavorited = !isFavorited;

    // Update data attribute
    button.dataset.favorited = newFavorited.toString();

    // Update aria-label
    button.setAttribute('aria-label', newFavorited ? 'Remove from favorites' : 'Add to favorites');

    // Toggle favorited class
    button.classList.toggle('favorite-button--favorited', newFavorited);
  });
}