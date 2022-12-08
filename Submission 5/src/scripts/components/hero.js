class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="hero">
        <div tabindex="0" class="heroinner">
            <h1 class="herotitle"><span class="tbl_hero">食</span> Harehetta Apps</h1>
            <p class="herosubtitle">Find your favorite restaurant for your meal !!!</p>
            <br>
            <h2 class="herosubtitlejpn">~ ここでおきにいりのれすとらんを見つけてください !!! ~</h2>
            <br>
            <a href="#main-content" class="btn_hero">ここで</a>
        </div>
    </div>
        `;
  }
}

customElements.define('hero-element', Hero);
