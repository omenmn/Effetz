import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import "~/components/CSS/home.css";

export default component$(() => {
  return (
    <>
      <div class="content-cont">
        <div class="tagline-cont">
          <h1 class="tagline">
            Enhance your websites with beautiful <b>Effectz</b> regardless of
            your expirience
          </h1>
          <div class="description">
            beautiful, elegant, and easy to implement effectz for any website.
            implement in your websites with one click only
          </div>
          <a class="button" href="/effectz">
            View all Effectz
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="svg-arrow"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
