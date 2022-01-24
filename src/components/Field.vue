<template>
  <input
    :type="_type"
    v-model="_model"
    :name="name"
    :placeholder="placeholder"
  >
</template>

<script>
export default {
  name: "Field",
  props: {
    type: {
      type: String
    },
    name: {
      type: String,
      required: true
    },
    model: {
      type: String,
      required: true
    },
    placeholder: {
      type: String
    }
  },

  computed: {
    _type: function() {
      return this.type || "text";
    },

    _model: {
      get: function() {
        return this.model;
      },
      set: function(value) {
        if (this.$parent.$el.tagName === "FORM") {
          this.$parent.$parent[this.name] = value;
        } else this.$parent[this.name] = value;
      }
    }
  },

  watch: {
    _model: function(current, old) {
      this.$emit("watch", {
        current: current,
        old: old
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
div {
  input {
    width: 100%;
    border: none;
    outline: none;
    color: inherit;
    background: none;
    text-align: center;
    border-bottom: 1px solid gray;

    ::placeholder {
      text-align: center;
    }
  }
}
</style>
