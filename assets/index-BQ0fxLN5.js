(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{label:`Home`,href:`#`},{label:`Shop`,href:`#`,subItems:[{label:`About`,href:`#`},{label:`FAQ`,href:`#`},{label:`Reviews`,href:`#`},{label:`Photos`,href:`#`},{label:`Gift Boxes`,href:`#`},{label:`Contact`,href:`#`}]},{label:`Collections`,href:`#`,subItems:[{label:`About`,href:`#`},{label:`FAQ`,href:`#`},{label:`Reviews`,href:`#`},{label:`Photos`,href:`#`},{label:`Gift Boxes`,href:`#`},{label:`Contact`,href:`#`}]},{label:`Company`,href:`#`,subItems:[{label:`About`,href:`#`},{label:`FAQ`,href:`#`},{label:`Reviews`,href:`#`},{label:`Photos`,href:`#`},{label:`Gift Boxes`,href:`#`},{label:`Contact`,href:`#`}]},{label:`Support`,href:`#`,subItems:[{label:`About`,href:`#`},{label:`FAQ`,href:`#`},{label:`Reviews`,href:`#`},{label:`Photos`,href:`#`},{label:`Gift Boxes`,href:`#`},{label:`Contact`,href:`#`}]}];function t(e){return`
    <ul class="nav-sublist">
      ${e.map(e=>`<li class="nav-sublist__item"><a href="${e.href}" class="nav-sublist__link">${e.label}</a></li>`).join(``)}
    </ul>
  `}function n(e){return e.subItems&&e.subItems.length>0?`
    <li class="nav-list__item">
      <span class="nav-list__link nav-list__link--toggle" role="button" aria-expanded="false" tabindex="0">
        ${e.label}
        <svg class="nav-list__icon" width="24" height="24"><use href="/icons.svg#arrow-down"></use></svg>
      </span>
      ${t(e.subItems)}
    </li>
  `:`
      <li class="nav-list__item">
        <a href="${e.href}" class="nav-list__link">${e.label}</a>
      </li>
    `}function r(){let e=document.querySelector(`.nav`);if(!e)return;let t=e.querySelector(`.nav__button`);t&&t.addEventListener(`click`,n=>{n.stopPropagation();let r=e.classList.toggle(`nav--open`);t.setAttribute(`aria-expanded`,r?`true`:`false`)}),document.addEventListener(`click`,()=>{e.classList.remove(`nav--open`),t&&t.setAttribute(`aria-expanded`,`false`),e.querySelectorAll(`.nav-list__item--open`).forEach(e=>{e.classList.remove(`nav-list__item--open`);let t=e.querySelector(`.nav-list__link--toggle`);t&&t.setAttribute(`aria-expanded`,`false`)})}),e.addEventListener(`click`,t=>{t.stopPropagation();let n=t.target.closest(`.nav-list__link--toggle`);if(!n)return;let r=n.closest(`.nav-list__item`);if(!r||!r.querySelector(`.nav-sublist`))return;t.preventDefault();let i=r.classList.toggle(`nav-list__item--open`);n.setAttribute(`aria-expanded`,i?`true`:`false`),e.querySelectorAll(`.nav-list__item--open`).forEach(e=>{if(e!==r){e.classList.remove(`nav-list__item--open`);let t=e.querySelector(`.nav-list__link--toggle`);t&&t.setAttribute(`aria-expanded`,`false`)}})})}function i(){return`
    <header class="header container">
      <div class="header__wrapper">
        <a href="#" class="logo">
          <img src="/assets/images/logo.svg" alt="TechStore">
        </a>

        <div class="nav">
          <div class="nav__button icon-button">
            <svg class="nav__icon-menu" width="24" height="24"><use href="/icons.svg#menu"></use></svg>
            <svg class="nav__icon-close" width="24" height="24"><use href="/icons.svg#close"></use></svg>
          </div>
          <div class="nav__content">
            <ul class="nav-list">
              ${e.map(n).join(``)}
            </ul>
          </div>
        </div>
      </div>
    </header>
  `}function a(){return`
    <div class="navbar">
      <div class="navbar__wrapper">
        <a href="#" class="navbar__link icon-button">
          <svg width="24" height="24"><use href="/icons.svg#home"></use></svg>
        </a>
        <a href="#" class="navbar__link icon-button">
          <svg width="24" height="24"><use href="/icons.svg#catalog"></use></svg>
        </a>
        <a href="#" class="navbar__link icon-button">
          <svg width="24" height="24"><use href="/icons.svg#favorite"></use></svg>
        </a>
        <a href="#" class="navbar__link icon-button">
          <svg width="24" height="24"><use href="/icons.svg#shopping-basket"></use></svg>
        </a>
      </div>
    </div>
  `}function o({image:e,alt:t,title:n}){return`
    <article class="article-item">
      <div class="article-item__image-wrapper">
        <img class="article-item__image" width="298" height="200" src="${e}" alt="${t}">
      </div>
      <div class="article-item__content">
        <h2 class="article-item__title">${n}</h2>
        <a href="#" class="button article-item__button">View Product</a>
      </div>
    </article>
  `}var s=[{image:`/assets/images/articles/article_1.jpg`,alt:`Article 1`,title:`New Arrivals`},{image:`/assets/images/articles/article_2.jpg`,alt:`Article 2`,title:`New Arrivals`},{image:`/assets/images/articles/article_3.jpg`,alt:`Article 3`,title:`New Arrivals`}];function c(){return`
    <section class="article-list">
      <div class="article-list__wrapper">
        ${s.map(o).join(``)}
      </div>
    </section>
  `}function l(){return`
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
  `}function u(){return`
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
  `}function d({isFavorited:e=!1,className:t=``}={}){return`
    <button class="icon-button ${[`favorite-button`,t,e?`favorite-button--favorited`:``].filter(Boolean).join(` `)}" aria-label="${e?`Remove from favorites`:`Add to favorites`}" data-favorited="${e}">
      <svg width="24" height="24">
        <use class="favorite-button__icon favorite-button__icon--default" href="/icons.svg#favorite"></use>
        <use class="favorite-button__icon favorite-button__icon--add" href="/icons.svg#favorite-add"></use>
        <use class="favorite-button__icon favorite-button__icon--check" href="/icons.svg#favorite-check"></use>
        <use class="favorite-button__icon favorite-button__icon--remove" href="/icons.svg#favorite-remove"></use>
      </svg>
    </button>
  `}function f(){document.addEventListener(`click`,e=>{let t=e.target.closest(`.favorite-button`);if(!t)return;let n=t.dataset.favorited!==`true`;t.dataset.favorited=n.toString(),t.setAttribute(`aria-label`,n?`Remove from favorites`:`Add to favorites`),t.classList.toggle(`favorite-button--favorited`,n)})}function p({image:e,alt:t,name:n,settings:r,price:i,oldPrice:a}){return`
    <div class="product">
      <div class="product__image-wrapper">
        <img class="product__image" width="155" height="155" src="${e}" alt="${t}">
        ${d({className:`product__favorite`})}
      </div>
      <div class="product__description">
        <h3 class="product__name">${n}</h3>
        <p class="product__settings">${r}</p>
        <p class="product-price">
          <span class="product-price__current">${i}</span>
          <span class="product-price__old">${a}</span>
        </p>
      </div>
      <a href="#" class="button button--full product__button">Add to Cart</a>
    </div>
  `}var m=[{image:`/assets/images/products/product_1.jpg`,alt:`Apple iPhone 15 Pro`,name:`Apple iPhone 15 Pro`,settings:`256GB · 8GB RAM · Black`,price:`$999`,oldPrice:`$1,199.00`},{image:`/assets/images/products/product_2.jpg`,alt:`Google Pixel 8 Pro`,name:`Google Pixel 8 Pro`,settings:`128GB · 8GB RAM · Hazel`,price:`$999`,oldPrice:`$1,199`}];function h(){return`
    <section class="recommendations">
      <h2 class="recommendations__title">You May Also Like</h2>
      <div class="recommendations__list">
        ${m.map(p).join(``)}
      </div>
    </section>
  `}function g(){return`
    <section class="main-product-wrapper">
      <div class="main-product">
        <div class="main-product__image-wrapper">
          <img class="main-product__image" width="326" height="326" src="/assets/images/products/product_1.jpg" alt="Samsung Galaxy S24 Ultra">
          ${d({className:`product__favorite`})}
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
  `}function _(e){let{id:t,label:n,type:r=`text`,placeholder:i=``,required:a=!1}=e,o=r===`textarea`?`textarea`:`input`,s=a?`<span class="form-field__star">*</span>`:``,c=a?`required`:``,l=`<input class="form-field__input" id="${t}" name="${t}" type="${r}" placeholder="${i}" ${c}>`;return o===`textarea`&&(l=`<textarea class="form-field__textarea" id="${t}" name="${t}" placeholder="${i}" ${c}></textarea>`),`
    <div class="form-field">
      <label class="form-field__label" for="${t}">${n} ${s}</label>
      ${l}
      <span class="form-field__notify"></span>
    </div>
  `}function v(e){let t={},n=e.get(`userName`),r=e.get(`userEmail`),i=e.get(`userMessage`);return(!n||n.trim().length<2)&&(t.userName=`Name must be at least 2 characters`),(!r||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r))&&(t.userEmail=`Please enter a valid email`),(!i||i.trim().length<5)&&(t.userMessage=`Message must be at least 5 characters`),{valid:Object.keys(t).length===0,errors:t}}function y(e,t){let n=t.trim();if(e===`userName`&&(!n||n.length<2))return`Name must be at least 2 characters`;if(e===`userEmail`&&(!n||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n)))return`Please enter a valid email`;if(e===`userMessage`&&(!n||n.length<5))return`Message must be at least 5 characters`}function b(e,t){let n=document.getElementById(e)?.closest(`.form-field`),r=n?.querySelector(`.form-field__notify`);n&&r&&(n.classList.add(`form-field--error`),r.textContent=t)}function x(){document.querySelectorAll(`.form-field`).forEach(e=>{e.classList.remove(`form-field--error`,`form-field--success`);let t=e.querySelector(`.form-field__notify`);t&&(t.textContent=``)})}function S(e){let t=document.getElementById(e)?.closest(`.form-field`),n=t?.querySelector(`.form-field__notify`);t&&n&&(t.classList.remove(`form-field--error`),n.textContent=``)}function C(){let e=document.querySelector(`.feedback__form`);e&&(e.querySelectorAll(`input, textarea`).forEach(e=>{e.addEventListener(`blur`,()=>{let t=y(e.id,e.value);t?b(e.id,t):S(e.id)})}),e.addEventListener(`submit`,t=>{t.preventDefault(),x();let n=new FormData(e),{valid:r,errors:i}=v(n);if(!r){Object.entries(i).forEach(([e,t])=>{b(e,t)});return}console.log(`Form submitted:`,Object.fromEntries(n)),e.reset()}))}function w(){return`
    <section class="feedback">
      <h3 class="feedback__title">Get in Touch</h3>
      <form action="" class="feedback__form">
        ${_({id:`userName`,label:`Name`,type:`text`,placeholder:`Name`,required:!0})}
        ${_({id:`userEmail`,label:`Email`,type:`email`,placeholder:`Email`,required:!0})}
        ${_({id:`userMessage`,label:`Message`,type:`textarea`,placeholder:`Your message`,required:!0})}
        <button type="submit" class="button button--full">Send Message</button>
      </form>
    </section>
  `}function T(){return`
    ${i()}

    <main class="page">
      <div class="container">
        ${c()}
        ${l()}
        ${u()}
        ${h()}
        ${g()}
        ${w()}
      </div>

      ${a()}
    </main>
  `}var E=document.getElementById(`app`);E&&(E.innerHTML=T(),r(),C(),f());