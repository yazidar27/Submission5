class FooterCustom extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <footer tabindex="0">
            <p class="herotitlejpn">~ ありがとうございます ~</p>
            <p>Copyright © 2022 -  Harahetta Apps <span class="tbl_hero">食</span></p>
        </footer>
        `;
  }
}

customElements.define('footer-custom', FooterCustom);
