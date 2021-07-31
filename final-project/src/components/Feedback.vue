<template>
  <aside class="feedback center">
    <section class="reviews">
      <h2 class="hidden">reviews</h2>
      <picture>
        <source srcset="img/reviews-photo.webp" type="image/webp" />
        <img
          src="img/reviews-photo.png"
          class="reviews__photo"
          alt="photo"
        /> </picture
      ><br />
      “Vestibulum quis porttitor dui! Quisque viverra nunc mi,
      <span class="reviews__text">a pulvinar purus condimentum“</span>
    </section>

    <section class="subscribe">
      <h2>SUBSCRIBE</h2>
      <p class="subscribe__text">FOR OUR NEWLETTER AND PROMOTION</p>
      <form action="#" class="subscribe__form">
        <input
          class="subscribe__input-email"
          value=""
          type="email"
          placeholder="Enter Your Email"
          minlength="3"
          maxlength="254"
          required
        />
        <input
          class="subscribe__input-submit"
          type="submit"
          value="Subscribe"
        />
        <span class="subscribe__input-error">Ошибка, повторите ввод!</span>
      </form>
    </section>
  </aside>
</template>


<script>
export default {
  name: "Feedback",
};
</script>