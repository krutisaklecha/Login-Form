<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
::-webkit-scrollbar {
  display: none;
}
body {
  color: white;
  font-family:Roboto, sans-serif;
  a,
  input,
  button {
    font: inherit;
    color: inherit;
    background: inherit;
  }
}
</style>

<style scoped lang="scss">
#app {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background: #1d1e22;
  font-size: 1.1em;
  position: fixed;
  overflow: auto;
}
nav {
  width: 20em;
  height: 5em;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: auto;
  padding: 5px;
  a {
    border: none;
    border-bottom: 1px solid gray;
    text-align: center;
    cursor: pointer;
    background: #1d1e22;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
}
</style>
