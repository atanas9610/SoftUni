import { html, render } from "../node_modules/lit-html/lit-html.js";

const main = document.querySelector('body > #wrapper > main');  // probably need to change this

const template = html`
      <section id="hero">
        <p>
          Discover the best deals on drones! Buy, sell, and trade top-quality drones with ease on Drone Deals - your
          trusted marketplace for all things drone.</p>
      </section>
`;

export function homeView() {
    render(template, main);
}