import '../assets/styles/components/_navbar.scss';

export function Navbar(): string {
  return `
    <div class="navbar">
      <div class="navbar__wrapper">
        <a href="#" class="navbar__link icon-button">
          <svg width="24" height="24"><use href="./icons.svg#home"></use></svg>
        </a>
        <a href="#" class="navbar__link icon-button">
          <svg width="24" height="24"><use href="./icons.svg#catalog"></use></svg>
        </a>
        <a href="#" class="navbar__link icon-button">
          <svg width="24" height="24"><use href="./icons.svg#favorite"></use></svg>
        </a>
        <a href="#" class="navbar__link icon-button">
          <svg width="24" height="24"><use href="./icons.svg#shopping-basket"></use></svg>
        </a>
      </div>
    </div>
  `;
}
