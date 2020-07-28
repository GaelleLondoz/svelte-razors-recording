<script>
  import globalStore from "../../stores/globalStore.js";
  import { fly, fade, blur } from "svelte/transition";
  import { link } from "svelte-routing";
  import ItemList from "./ItemsList.svelte";
  import user from "../../stores/user.js";
</script>

<div class="cart-overlay" transition:blur>
  <div class="cart-container" transition:fly={{ x: 100 }}>
    <div class="cart" transition:fade={{ delay: 400 }}>
      <!-- cart header -->
      <div class="cart-header">
        <button
          class="btn-close"
          on:click={() => {
            globalStore.toggleItem('cart', false);
          }}>
          <i class="fas fa-window-close" />
        </button>

        <h2 calss="cart-title">Your bag</h2>
        <span />
      </div>
      <!-- end cart header -->
      <!-- cart items -->
      <ItemList />
      <!-- end cart items -->
      <!-- cart footer -->
      <div class="cart-footer">
        {#if $user.jwt}
          <a
            href="/checkout"
            use:link
            class="btn btn-primary btn-block"
            on:click={() => {
              globalStore.toggleItem('cart', false);
            }}>
            Checkout
          </a>
        {:else}
          <p class="cart-login">
            In order to checkout please
            <a
              href="/login"
              use:link
              on:click={() => {
                globalStore.toggleItem('cart', false);
              }}>
              Login
            </a>
          </p>
        {/if}

      </div>
      <!-- end cart footer -->
    </div>
  </div>

</div>
