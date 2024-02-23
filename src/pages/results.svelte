<script>
  import { createEventDispatcher } from "svelte";
  import Leaderboard from "../lib/leaderboard.svelte";
  import { leaderboardEntries } from "../lib/store";

  export let completionTime;

  // Allow component to dispatch event to parent
  const dispatch = createEventDispatcher();

  // Leaderboard entry
  const entry = {
    name: "",
    completionTime,
    completionDate: new Date(),
  };

  // Switches to leaderboard view when entry is submitted
  let entrySubmitted = false;

  // Called on form submit
  function submitEntry() {
    // Add leaderboard entry to global store
    $leaderboardEntries.push(entry);

    // Flip boolean to switch view
    entrySubmitted = true;
  }
</script>

{#if !entrySubmitted}
  <form class="is-flex is-justify-content-center" on:submit={submitEntry}>
    <div class="field">
      <label class="label" for="name">Name</label>
      <div class="control">
        <div class="field has-addons">
          <div class="control" id="name">
            <input
              bind:value={entry.name}
              class="input"
              type="text"
              placeholder="Your name here"
              minlength="2"
              required
            />
          </div>
          <div class="control">
            <input type="submit" class="button is-link" value="Submit!" />
          </div>
        </div>
      </div>
    </div>
  </form>
{:else}
  <div class="has-text-centered">
    <Leaderboard />
    <button class="button" on:click={() => dispatch("restart")}>
      Try again!
    </button>
  </div>
{/if}
