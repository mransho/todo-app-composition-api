<template>
  <div class="comp">
    <ul>
      <li v-for="route in router.options.routes" :key="route.name">
        <router-link :to="{ name: route.name }">
          {{ route.meta.title.toUpperCase() }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<style scoped lang="scss">
.comp {
  display: flex;
}
.comp ul {
  display: flex;
  height: 38px;
  max-height: 10vh;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 45px;
  background-color: #143f3f;
  height: 50px;
}
.comp li {
  list-style: none;
  height: 100%;
}
.comp a {
  text-decoration: none;
  color: white;
  padding-inline: 9px;
  height: 100%;
  display: flex;
  align-items: center;
  &.router-link-active {
    background: #4a5e5e;
  }
}
</style>
