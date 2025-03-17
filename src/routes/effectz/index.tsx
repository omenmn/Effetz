import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import "~/components/CSS/home.css";

export default component$(() => {
  return <>All Effectz</>;
});

export const head: DocumentHead = {
  title: "all effectz",
  meta: [
    {
      name: "effectz",
      content: "all effectz",
    },
  ],
};
