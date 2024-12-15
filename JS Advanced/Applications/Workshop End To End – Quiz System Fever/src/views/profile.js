import { getAll } from "../../modules/helpers.js";
import { html, render, page } from "../../modules/modules.js";

const main = document.querySelector('body > #container > #content');

const template = (quizCount, isLoggedIn) => html`
    <section id="welcome">

        <div class="hero layout">
            <div class="splash right-col"><i class="fas fa-clipboard-list"></i></div>
            <div class="glass welcome">
                <h1>Welcome to Quiz Fever!</h1>
                <p>Home to ${quizCount} quizzes in 12 topics. <a href="/browse">Browse all quizzes</a>.</p>
                ${!isLoggedIn ? html`<a class="action cta" href="/login">Sign in to create a quiz</a>` : ""}
            </div>
        </div>

        <div class="pad-large alt-page">
            <h2>Our most recent quiz:</h2>

            <article class="preview layout">
                <div class="right-col">
                    <a class="action cta" href="#">View Quiz</a>
                </div>
                <div class="left-col">
                    <h3>Extensible Markup Language</h3>
                    <span class="quiz-topic">Topic: Languages</span>
                    <div class="quiz-meta">
                        <span>15 questions</span>
                        <span>|</span>
                        <span>Taken 54 times</span>
                    </div>
                </div>
            </article>

            <div>
                <a class="action cta" href="/browse">Browse all quizzes</a>
            </div>
        </div>

    </section>
`;

export async function profileView() {
    const isLoggedIn = localStorage.getItem('userData') !== null;

    render(template(isLoggedIn), main);
}