<script>
  import { createEventDispatcher } from "svelte";

  // Get random value between two numbers
  function getRandomRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  // Generate random XY coordinates within viewport dimensions + offset padding
  function randomizeCoordinates() {
    const padding = 150;
    const x = getRandomRange(padding, window.innerWidth - padding);
    const y = getRandomRange(padding, window.innerHeight - padding);
    return { x, y };
  }

  // Called when button clicked
  function finishGame() {
    // Measure time since start timer in milliseconds
    const completionTime = performance.now() - startTime;

    // Inform parent of completion time
    dispatch("finish", completionTime);
  }

  // Allow component to dispatch event to parent
  const dispatch = createEventDispatcher();

  // Set coordinates on startup
  const { x, y } = randomizeCoordinates();

  // Start timer
  const startTime = performance.now();
</script>

<button
  class="button"
  style:left="{x}px"
  style:top="{y}px"
  on:click={finishGame}
>
  Click me!
</button>

<style>
  .button {
    position: absolute;
  }
</style>
