<script>
  import Game from "./pages/game.svelte";
  import Results from "./pages/results.svelte";
  import Start from "./pages/start.svelte";

  let pageCounter = 0;
  let lastCompletionTime = 0;

  function onGameStart() {
    pageCounter++; // Progress to next page
  }

  function onGameFinish(event) {
    // Store most recent completion time, to be passed to results screen
    console.log(event.detail);
    lastCompletionTime = event.detail;
    pageCounter = 2; // Progress to next page
  }

  function onGameRestart() {
    lastCompletionTime = 0; // Reset last completion time
    pageCounter = 1; // Go back to game page
  }
</script>

<main>
  <section class="section">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-half">
          {#if pageCounter == 0}
            <Start on:start={onGameStart} />
          {:else if pageCounter == 1}
            <Game on:finish={onGameFinish} />
          {:else}
            <Results
              on:restart={onGameRestart}
              completionTime={lastCompletionTime}
            />
          {/if}
        </div>
      </div>
    </div>
  </section>
</main>
