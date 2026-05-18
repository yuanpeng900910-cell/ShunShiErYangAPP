const navIcons = ['✦', '♬', '◌', '◇', '☾'];

export default function FloatingNav(items) {
  return `
    <nav class="floating-nav" aria-label="顺时而养主导航">
      ${items.map((item, index) => `
        <button class="nav-item ${index === 0 ? 'is-active' : ''}" type="button" aria-label="${item}">
          <span class="nav-icon" aria-hidden="true">${navIcons[index]}</span>
          <span>${item}</span>
        </button>
      `).join('')}
    </nav>
  `;
}
