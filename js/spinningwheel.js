export default class SpinTheWheel {
  constructor() {
    this.SpinTheWheel();
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
      <div class="booking-popup">
        <img src="img/icons/close-icon.svg" class="close-icon" onclick="closeBooking();">
        <div class="booking-container">
          <p class="booking-title">Spin to win!</p>
          <p class="booking-subtitle">Enter your email for the chance to win different offers!</p>
          <form action="/action_page.php">
          <p class="booking-required">required*</p>
          <input class="booking-field" placeholder="Your e-mail" name="Email" type="email" required>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
          <label for="vehicle1">I accept terms and conditions.</label><br>
          </form>
          <p class="booking-additional text-center" >*We are going to get back to you with the confirmation.</p>
          <img src="img/icons/luck.svg" class="request-button" onclick="closeBooking();" type="submit" value="Submit">
      </div>

      </div>
      `;
  }

  _closeBooking() {
    const bookingWindow = document.querySelector(".booking-popup");
    const bookingSuccess = document.querySelector(".success");
    bookingSuccess.style.display = "none";
    bookingWindow.style.display = "none";
  }

  _nextBooking() {
    const bookingWindow = document.querySelector(".booking-popup");
    const bookingSuccess = document.querySelector(".success");
    bookingSuccess.style.display = "block";
    bookingWindow.style.display = "none";
  }

}