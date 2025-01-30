/*
Helpful links:
- https://www.w3schools.com/css/css_navbar_horizontal.asp
*/

class NavBar extends HTMLElement {
  constructor() {
    super();

    const template = document.createElement("template");
    template.innerHTML = /*html*/ `
        <style>
            ul {
                list-style-type: none;
                margin: 0;
                padding: 0;
                overflow: hidden;
                background-color: #3A0CA3;
            }

            li {
                float: left;
                border-right: 1px solid white;
            }

            li a {
                display: block;
                color: white;
                text-align: center;
                padding: 14px 16px;
                text-decoration: none; /* remove underline */
            }

            li a:hover {
                background-color: color-mix(in srgb, #3A0CA3 80%, white);
            }
        </style>

        <nav>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">My Story</a>
                </li>
                <li>
                    <a href="/">Education</a>
                </li>
                <li>
                    <a href="/">Jobs</a>
                </li>
                <li>
                    <a href="/">Blog</a>
                </li>
            </ul>
        </nav>
    `;

    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(template.content.cloneNode(true));
  }
}

customElements.define("navbar-elem", NavBar);
