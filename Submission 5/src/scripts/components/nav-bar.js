class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <header class="header">
        <a href="/">
            <h1 class="logonav">食 Harahetta</h1>
        </a>
        <button class="menu" id="menu" aria-label="button menu dropdown on mobile">☰</button>
        <nav id="drawer" class="nav">
            <ul class="listnav">
                <li class="itemnav"><a href="#/">HOME</a></li>
                <li class="itemnav"><a href="#/favorite">FAVORITE</a></li>
                <li class="itemnav"><a href="https://www.instagram.com/yzdaqsa_/" target="_blank" rel="noopener">ABOUT US</a></li>
            </ul>
        </nav>
    </header>
        `;
  }
}

customElements.define('nav-bar', NavBar);
