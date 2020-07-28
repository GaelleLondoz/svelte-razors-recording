<script>
  import links from "../../constants/links";
  import { link } from "svelte-routing";
  import globalStore from "../../stores/globalStore.js";
  import LoginLink from "../LoginLink.svelte";
  import { fade, fly } from "svelte/transition";

  let openSidebar = globalStore.toggleItem;
</script>

<div class="sidebar-container" transition:fly={{ x: -1000 }}>

  <div class="sidebar" transition:fade={{ delay: 400 }}>
    <div class="sidebar-header">
      <button
        class="btn-close"
        on:click={() => {
          openSidebar('sidebar', false);
        }}>
        <i class="fas fa-window-close" />
      </button>

    </div>

    <img
      src="/assets/images/logo.svg"
      class="logo sidebar-logo"
      alt="razors logo" />

    <ul class="sidebar-links">
      {#each links as sideLink}
        <li>

          <a
            href={sideLink.url}
            use:link
            on:click={() => {
              openSidebar('sidebar', false);
            }}>
            {sideLink.text}
          </a>
        </li>
      {/each}
      <li>
        <LoginLink />
      </li>

    </ul>
  </div>

</div>
