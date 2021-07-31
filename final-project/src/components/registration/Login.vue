<template>
  <form class="login">
    <h3 class="login__title">Your Name</h3>
    <input type="text" class="login__input" placeholder="First Name" required />
    <input type="text" class="login__input" placeholder="Last Name" required />
    <div class="login__input-radio">
      <label
        ><input
          type="radio"
          class="login__item-gender"
          name="gender"
          value="m"
        />Male</label
      >
      <label
        ><input
          type="radio"
          class="login__item-gender login__item-gender_female"
          name="gender"
          value="f"
        />Female</label
      >
    </div>
    <h3 class="login__title">Login details</h3>
    <input
      type="email"
      class="login__input"
      placeholder="Email"
      minlength="3"
      maxlength="254"
      required
    />
    <input
      type="password"
      class="login__input"
      placeholder="Password"
      required
    />
    <p class="login__text">
      Please use 8 or more characters, with at least 1 number and a mixture of
      uppercase and lowercase letters
    </p>
    <button class="login__button">
      JOIN NOW <i class="fas fa-long-arrow-alt-right"></i>
    </button>
  </form>
</template>

<script>
export default {
  name: "Login",
};
</script>