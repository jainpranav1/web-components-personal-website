class Face extends HTMLElement {
  constructor() {
    super();

    const template = document.createElement("template");
    template.innerHTML = `
    <img
        src="/images/pranavPic.png"
        alt="picture of pranav jain"
        width="200px"
    />
    `;

    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(template.content.cloneNode(true));
  }
}

customElements.define("face-elem", Face);
