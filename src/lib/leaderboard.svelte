<script>
  import { leaderboardEntries } from "./store";
</script>

<div class="block mt-6">
  <h1 class="title">Leaderboard</h1>
</div>
<div class="block">
  <div class="is-flex is-justify-content-center">
    <table class="table has-text-left my-5">
      <thead>
        <tr>
          <th>Name</th>
          <th>Completion time</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {#each $leaderboardEntries as entry}
          <tr>
            <th>{entry.name}</th>
            <td>{(entry.completionTime / 1000).toFixed(3)}s</td>
            <td>{entry.completionDate.toLocaleString()}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
