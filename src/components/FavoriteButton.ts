export type FavoriteButtonProps = {
  isFavorited?: boolean;
  className?: string;
};

export function FavoriteButton({ isFavorited = false, className = '' }: FavoriteButtonProps = {}): string {
  const baseClass = 'favorite-button';
  const classes = [baseClass, className, isFavorited ? 'favorite-button--favorited' : ''].filter(Boolean).join(' ');
  const iconHref = isFavorited ? './icons.svg#favorite-check' : './icons.svg#favorite';

  return `
    <button class="icon-button ${classes}" aria-label="${isFavorited ? 'Remove from favorites' : 'Add to favorites'}" data-favorited="${isFavorited}">
      <svg width="24" height="24">
        <use class="favorite-button__icon" href="${iconHref}"></use>
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
    const useElement = button.querySelector('use');

    // Update data attribute
    button.dataset.favorited = newFavorited.toString();

    // Update aria-label
    button.setAttribute('aria-label', newFavorited ? 'Remove from favorites' : 'Add to favorites');

    // Update icon href
    if (useElement) {
      useElement.href.baseVal = newFavorited ? './icons.svg#favorite-check' : './icons.svg#favorite';
    }

    // Toggle favorited class
    button.classList.toggle('favorite-button--favorited', newFavorited);
  });
}