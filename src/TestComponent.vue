<script lang="ts" setup>
import {ref} from "vue";

const submitted = ref(false);
</script>
<template>
  <div v-if="submitted">
    Form Submitted
    <button @click="submitted = false">Reset</button>
  </div>
  <form :style="{display: 'flex', flexDirection: 'column'}" @submit.prevent="submitted = true" v-else>
    <label for="username">Username</label>
    <input id="username" type="text">
    <label for="password">Password</label>
    <input id="password" type="password">
    <button type="submit">Login</button>
  </form>
</template>