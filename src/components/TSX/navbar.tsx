import { component$ } from "@builder.io/qwik";
import "~/components/TSX/component.css";

export const Navbar = component$(() => {
  return (
    <div class="nav-container">
      <a href="/" class="nav-name">
        Effectz
      </a>
      <div class="nav-options">
        <button class="nav-button">Components</button>
        <button class="nav-button">About</button>
      </div>
    </div>
  );
});
