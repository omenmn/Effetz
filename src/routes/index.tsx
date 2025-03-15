import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import "~/components/CSS/home.css";

export default component$(() => {
  return (
    <div class="content-cont">
      <div class="tagline-cont">
        <h1 class="tagline">
          Enhance your websites with beautiful <b>Effectz</b> regardless of your
          expirience
        </h1>
        <div class="description">
          beautiful, elegant, and easy to implement effectz for any website.
        </div>
        <button class="button">View all Effectz</button>
      </div>
      <div class="cards"></div>
    </div>
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
