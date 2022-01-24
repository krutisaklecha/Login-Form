<template>
  <form @submit="$emit('submit', $event);">
    <slot name="errors"/>
    <slot name="fields"/>
    <slot name="buttons"/>
  </form>
</template>

<script>
export default {
  name: "Form"
};
</script>

<style scoped lang="scss">
$cpb: #1d1e22;

form {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas: "." "." "." ".";
  align-items: center;
  justify-items: center;

  width: 20em;
  height: 15em;
  margin: auto;
  padding: 5px;

  ul {
    margin: 0;
    padding: 0;
  }

  button {
    border: 1px solid gray;
    transition: 0.3s;
  }
  button:hover {
    background: black;
    transition: 0.3s;
  }
}
</style>
