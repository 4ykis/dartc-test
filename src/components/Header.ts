import '../assets/styles/components/_header.scss';
import logo from '../assets/images/logo.svg';

type NavSubItem = {
  label: string;
  href: string;
};

type NavItemProps = {
  label: string;
  href: string;
  subItems?: NavSubItem[];
};

const navItems: NavItemProps[] = [
  { label: 'Home', href: '#' },
  {
    label: 'Shop',
    href: '#',
    subItems: [
      { label: 'About', href: '#' },
      { label: 'FAQ', href: '#' },
      { label: 'Reviews', href: '#' },
      { label: 'Photos', href: '#' },
      { label: 'Gift Boxes', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    label: 'Collections',
    href: '#',
    subItems: [
      { label: 'About', href: '#' },
      { label: 'FAQ', href: '#' },
      { label: 'Reviews', href: '#' },
      { label: 'Photos', href: '#' },
      { label: 'Gift Boxes', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    label: 'Company',
    href: '#',
    subItems: [
      { label: 'About', href: '#' },
      { label: 'FAQ', href: '#' },
      { label: 'Reviews', href: '#' },
      { label: 'Photos', href: '#' },
      { label: 'Gift Boxes', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    label: 'Support',
    href: '#',
    subItems: [
      { label: 'About', href: '#' },
      { label: 'FAQ', href: '#' },
      { label: 'Reviews', href: '#' },
      { label: 'Photos', href: '#' },
      { label: 'Gift Boxes', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
];

function NavSublist(items: NavSubItem[]): string {
  return `
    <ul class="nav-sublist">
      ${items
        .map(
          (item) =>
            `<li class="nav-sublist__item"><a href="${item.href}" class="nav-sublist__link">${item.label}</a></li>`,
        )
        .join('')}
    </ul>
  `;
}

function NavItem(item: NavItemProps): string {
  const hasSublist = item.subItems && item.subItems.length > 0;

  if (!hasSublist) {
    return `
      <li class="nav-list__item">
        <a href="${item.href}" class="nav-list__link">${item.label}</a>
      </li>
    `;
  }

  return `
    <li class="nav-list__item">
      <span class="nav-list__link nav-list__link--toggle" role="button" aria-expanded="false" tabindex="0">
        ${item.label}
        <svg class="nav-list__icon" width="24" height="24"><use href="./icons.svg#arrow-down"></use></svg>
      </span>
      ${NavSublist(item.subItems!)}
    </li>
  `;
}

export function initHeader(): void {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  const navButton = nav.querySelector('.nav__button');

  // Handle nav button (menu/close toggle)
  if (navButton) {
    navButton.addEventListener('click', (event) => {
      event.stopPropagation();
      const isOpen = nav.classList.toggle('nav--open');
      navButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // Close menu when clicking outside
  document.addEventListener('click', () => {
    nav.classList.remove('nav--open');
    if (navButton) navButton.setAttribute('aria-expanded', 'false');

    // Close all open sublists
    const openItems = nav.querySelectorAll('.nav-list__item--open');
    openItems.forEach((item) => {
      item.classList.remove('nav-list__item--open');
      const toggle = item.querySelector('.nav-list__link--toggle');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Handle submenu toggles
  nav.addEventListener('click', (event) => {
    event.stopPropagation();
    const target = (event.target as HTMLElement).closest('.nav-list__link--toggle');
    if (!target) return;

    const listItem = target.closest('.nav-list__item');
    if (!listItem) return;

    const sublist = listItem.querySelector('.nav-sublist');
    if (!sublist) return;

    event.preventDefault();
    const isOpen = listItem.classList.toggle('nav-list__item--open');
    target.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

    // close other open menus
    const openItems = nav.querySelectorAll('.nav-list__item--open');
    openItems.forEach((item) => {
      if (item !== listItem) {
        item.classList.remove('nav-list__item--open');
        const toggle = item.querySelector('.nav-list__link--toggle');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

export function Header(): string {
  return `
    <header class="header container">
      <div class="header__wrapper">
        <a href="#" class="logo">
          <img src="${logo}" alt="TechStore">
        </a>

        <div class="nav">
          <div class="nav__button icon-button">
            <svg class="nav__icon-menu" width="24" height="24"><use href="./icons.svg#menu"></use></svg>
            <svg class="nav__icon-close" width="24" height="24"><use href="./icons.svg#close"></use></svg>
          </div>
          <div class="nav__content">
            <ul class="nav-list">
              ${navItems.map(NavItem).join('')}
            </ul>
          </div>
        </div>
      </div>
    </header>
  `;
}
