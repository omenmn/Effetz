import { component$ } from "@builder.io/qwik";
import "~/components/component.css";

export const Navbar = component$(() => {
  return (
    <div class="nav-container">
      <div class="nav-name">Effetz</div>
      <div class="nav-options">
        <button class="nav-button">About Effetz</button>
        <button class="nav-button">All Effetz</button>
      </div>
    </div>
  );
});
