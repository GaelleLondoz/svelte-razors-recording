<script>
  // pages
  import Login from "./pages/Login.svelte";
  import Checkout from "./pages/Checkout.svelte";
  import About from "./pages/About.svelte";
  import Products from "./pages/Products.svelte";
  import ProductTemplate from "./pages/ProductTemplate.svelte";
  import Home from "./pages/Home.svelte";

  // router
  import { Router, Link, Route } from "svelte-routing";

  // components
  import Navbar from "./components/NavBar/Navbar.svelte";
  import Sidebar from "./components/NavBar/Sidebar.svelte";
  import Cart from "./components/Cart/Cart.svelte";

  // global store

  import globalStore from "./stores/globalStore.js";
</script>

<Router>
  <Navbar />
  {#if $globalStore.sidebar}
    <Sidebar />
  {/if}
  {#if $globalStore.cart}
    <Cart />
  {/if}
  <Route path="/" component={Home} />
  <Route path="/about" component={About} />
  <Route path="/login" component={Login} />
  <Route path="/products" component={Products} />
  <Route path="/products/:id" component={ProductTemplate} />

</Router>
