<template>
  <div class="hello">
    <FormComponent @submit.prevent="register($event);">
      <template slot="errors">
        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
      </template>

      <template slot="fields">
        <Field type="email" :model="email" name="email" placeholder="Email"></Field>

        <Field type="password" :model="password" name="password" placeholder="Password"></Field>

        <Field
            type="password"
            :model="confirmation"
            name="confirmation"
            placeholder="Confirm password"
        ></Field>
      </template>

      <template slot="buttons">
        <button type="submit">Register</button>
      </template>
    </FormComponent>
  </div>
</template>

<script>
import Form from "../mixin/Form";
import LoginValidator from "../mixin/LoginValidator";
import RegistrationValidator from "../mixin/RegistrationValidator";

export default {
  name: "Register",
  mixins: [Form, LoginValidator, RegistrationValidator],

  data: function() {
    return {
      email: "",
      password: "",
      confirmation: "",
      errors: []
    };
  },

  methods: {
    register: function() {
      if (this.isValid()) {
        console.log("valid");
      }
    },

    isValid: function() {
      this.errors = [];

      if (!this.email) {
        this.errors.push("Email required");
      }

      if (!this.password) {
        this.errors.push("Password required");
      }  else if (
          this.confirmValidator({
            password: this.password,
            confirm: this.confirm
          })
      ) {
        this.errors.push("Password`s don`t match ");
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
