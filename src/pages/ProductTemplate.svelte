<script>
  export let id;
  export let location;

  //global store
  import { addToCart } from "../stores/cart.js";
  import products from "../stores/defaultProducts.js";
  import Loading from "../components/Loading.svelte";
  import { link } from "svelte-routing";
  import globalStore from "../stores/globalStore.js";

  $: product = $products.find(product => product.id === parseInt(id));
</script>

<svelte:head>
  <title>{!product ? 'single product' : product.title}</title>
</svelte:head>
{#if !product}
  <Loading />
{:else}
  <section class="single-product">
    <a href="/products" class="btn btn-primary" use:link>Back to products</a>

    <div class="single-product-container">
      <article class="single-product-image">
        <img src={product.image} alt={product.title} />
      </article>
      <article>
        <h1>{product.title}</h1>
        <h2>${product.price}</h2>
        <p>{product.description}</p>
        <button
          class="btn btn-primary"
          on:click={() => {
            addToCart(product);
            globalStore.toggleItem('cart', true);
          }}>
          Add to cart
        </button>
      </article>
    </div>
  </section>
{/if}
