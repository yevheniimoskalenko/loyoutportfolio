<template>
  <div class="container-fluid">
    <div id="app">
      <app-Nav />
      <app-Middle />
      <app-Footer />
    </div>
  </div>
</template>

<script>
import appNav from "@/components/navigation";
import appMiddle from "@/components/middle";
import appFooter from "@/components/footer";
export default {
  name: "app",
  components: { appNav, appMiddle, appFooter }
};
</script>
