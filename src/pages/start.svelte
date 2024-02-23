<script>
  import { createEventDispatcher } from "svelte";
  import Leaderboard from "../lib/leaderboard.svelte";

  const dispatch = createEventDispatcher(); // Allow component to dispatch event to parent
</script>

<div class="has-text-centered block">
  <p class="title">Welcome</p>

  <!-- Dispatches 'start' event to parent when clicked -->
  <button class="button" on:click={() => dispatch("start")}>
    Start the game!
  </button>

  <Leaderboard />
</div>
