<template>
  <div>
    <nav>
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Register</router-link>
    </nav>
  </div>
</template>

<style lang="scss">
nav {
  font-size: 2rem;
}
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
