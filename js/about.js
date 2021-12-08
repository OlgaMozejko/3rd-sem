export default class About {
  constructor() {
    this.about();
  }

  /* About section --- Vlada */

  about() {
    document.querySelector("#about-section").innerHTML += /*html*/ `
      <div class="about-container">
        <div class="about-text">
            <h2 class="about-heading">Colorful and Homely</h2>
            <h3 class="about-subheading">Welcome to Den Gule Café - a cozy place with homemade food.</h3>
            <p class="about-description"> I'm Channie, the owner of the café and the person behind the counter. I have always dreamt of opening my own café. And with that dream, an idea was planted that quickly grew into reality.<br><br>

            As soon as you enter the yellow building, you will be greeted by a wealth of colors, a homely atmosphere and the scent of freshly baked spinach, sourdough buns and freshly brewed coffee.<br><br>

            At Den Gule Café, you get good taste, aesthetics, a cozy cottage and insta-friendly atmosphere. Come by and enjoy my favourite brunch and drink selection!</p>
        </div>
        <div class="about-img-container">
            <img src="../img/owner.png" alt="Image of the owner" class="about-img">
        </div>
      </div>
      `;
  }
}
