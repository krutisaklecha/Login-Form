<template>
  <div class="hello">
    <FormComponent @submit.prevent="login($event);">
      <template slot="errors">
        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
      </template>

      <template slot="fields">
        <Field type="text" :model="email" name="email" placeholder="Email"></Field>

        <Field type="password" :model="password" name="password" placeholder="Password"></Field>
      </template>

      <template slot="buttons">
        <button type="submit">Login</button>
      </template>
    </FormComponent>
  </div>
</template>

<script>
import Form from "../mixin/Form";
import LoginValidator from "../mixin/LoginValidator";

export default {
  name: "Login",
  mixins: [Form, LoginValidator],

  data: function() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },

  methods: {
    login: function(e) {
      if (this.isValid()) {
        console.log(e);
      }
    },

    isValid: function() {
      this.errors = [];

      if (!this.email) {
        this.errors.push("Email required");
      } else if (this.emailValidator(this.email)) {
        this.errors.push("Email not correct");
      }

      if (!this.password) {
        this.errors.push("Password required");
      } else if (this.passwordValidator(this.password)) {
        this.errors.push("Password must be minimum 6 chars");
      }

      return this.errors.length === 0;
    }
  }
};
</script>

<style lang="scss">
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
