'use strict';

const list = [{
  text: 'Home',
  path: '/',
}, {
  text: 'About',
  path: '/about',
}, {
  text: 'Price',
  path: '/price',
}];

(function(list) {
  class NavList extends HTMLElement {
    constructor() {
      super();

      const template = document.createElement('template');
      template.innerHTML = `
        <style>
          :host {
            display: block;
            padding: 15px;
            border: 1px solid green;
          }

          ::slotted(h1) { color: red; }

          ul {
            margin: 0;
            padding: 0;
            list-style-type: none;
          }

          p { color: orange; }
        </style>

        <slot></slot>
        ${list.length
          ? list.map(({ text, path }, index) => `
            <ul>
              <li>
                <span>${index + 1}</span>
                <a href="${path}">${text}</a>
              </li>
            </ul>
          `).join('')
          : '<p>Nothing found</p>'
        }
      `;

      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    };
  };

  customElements.define('items-list', NavList);
})(list);

(function greeting(msg = 'world') {
  console.log(`Hello ${msg}!`);
})();
