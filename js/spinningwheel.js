export default class SpinTheWheel {
  constructor() {
    this.SpinTheWheel();
    this.spinWheel();
  }

  // Spin The Wheel pop-up - Marius

  _selectBooking(value) {
    const buttons = document.querySelectorAll(
      ".booking-buttons .booking-button"
    );
    const daysbox = document.querySelector(".booking-date");
    const timebox = document.querySelector(".booking-time");
    const guestsbox = document.querySelector(".booking-guests");
    const datesvg = document.querySelector(".datesvg");
    const timesvg = document.querySelector(".timesvg");
    const guestssvg = document.querySelector(".guestssvg");
    for (const button of buttons) {
      if (value === button.getAttribute("id")) {
        button.classList.add("booking-button-active");
      } else {
        button.classList.remove("booking-button-active");
      }

    }
    for (const button of buttons) {
      if (value === button.getAttribute("id") || value == "date") {
        timebox.style.display = "none";
        daysbox.style.display = "table-cell";
        guestsbox.style.display = "none";
        datesvg.style.fill = "var(--white)";
        timesvg.style.fill = "var(--main-green)";
        guestssvg.style.fill = "var(--main-green)";
      }
      if (value === button.getAttribute("id") || value == "time") {
        timebox.style.display = "table-cell";
        daysbox.style.display = "none";
        guestsbox.style.display = "none";
        datesvg.style.fill = "var(--main-green)";
        timesvg.style.fill = "var(--white)";
        guestssvg.style.fill = "var(--main-green)";

      }
      if (value === button.getAttribute("id") || value == "guests") {
        timebox.style.display = "none";
        daysbox.style.display = "none";
        guestsbox.style.display = "flex";
        datesvg.style.fill = "var(--main-green)";
        timesvg.style.fill = "var(--main-green)";
        guestssvg.style.fill = "var(--white)";
        console.log(value)
      }



    }

  }


  SpinTheWheel() {
    document.querySelector("#spin-wheel").innerHTML += /*html*/ `
      <div class="spin-popup">
        <img src="img/icons/close-icon.svg" class="close-icon" onclick="closeSpin();">

        <div class="spin-flexbox">
        <div id="app">
       <img class="marker" src="img/icons/marker.svg" />
       <img class="wheel" src="img/wheel2.png" />
       </div>
        <div class="spin-container">
          <p class="booking-title">Spin to win!</p>
          <p class="booking-subtitle">Enter your email for the chance to win different offers!</p>
          <form action="/action_page.php">
          <p class="booking-required">required*</p>
          <input class="booking-field" placeholder="Your e-mail" name="Email" type="email" required>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
          <label for="vehicle1">I accept terms and conditions.</label><br>
          </form>
          <p class="booking-additional text-center" >*We are going to get back to you with the confirmation.</p>
          <img src="img/icons/luck.svg" class="request-button spin" type="submit" value="Submit">
        </div>
        </div>
        


      </div>
      `;
  }

  _closeSpin() {
    const spinWindow = document.querySelector(".spin-popup");
    spinWindow.style.display = "none";
  }

  spinWheel() {
    const wheel = document.querySelector('.wheel');
    const startButton = document.querySelector('.spin');
    let deg = 0;

    startButton.addEventListener('click', () => {
      // Disable button during spin
      startButton.style.pointerEvents = 'none';
      // Calculate a new rotation between 5000 and 10 000
      deg = Math.floor(5000 + Math.random() * 5000);
      // Set the transition on the wheel
      wheel.style.transition = 'all 5s ease-out';
      // Rotate the wheel
      wheel.style.transform = `rotate(${deg}deg)`;
      // Apply the blur
      wheel.classList.add('blur');
    });

    wheel.addEventListener('transitionend', () => {
      // Remove blur
      wheel.classList.remove('blur');
      // Enable button when spin is over
      startButton.style.pointerEvents = 'auto';
      // Need to set transition to none as we want to rotate instantly
      wheel.style.transition = 'none';
      // Calculate degree on a 360 degree basis to get the "natural" real rotation
      // Important because we want to start the next spin from that one
      // Use modulus to get the rest value from 360
      const actualDeg = deg % 360;
      // Set the real rotation instantly without animation
      wheel.style.transform = `rotate(${actualDeg}deg)`;
    });
  }


}