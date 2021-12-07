export default class BookingService {
  constructor() {
    this.booking();
  }

  // Booking pop-up - Marius

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


  booking() {
    document.querySelector("#booking-popup").innerHTML += /*html*/ `
      <div class="booking-popup">
        <img src="img/icons/close-icon.svg" class="close-icon" onclick="closeBooking();">
        <div class="booking-container">
          <p class="booking-title">Book a table</p>
          <p class="booking-subtitle">DEN GULE CAFÉ</p>
          <p class="booking-required">required*</p>
          <input class="booking-field" placeholder="Name" name="Name" required>
          <p class="booking-required">required*</p>
          <input class="booking-field" placeholder="Phone number" name="Phone" required>
          <div class="booking-buttons">
            <button class="booking-button booking-button-active" name="Date" value="date" id="date" onclick="selectBooking(this.value);"><svg width="14" height="16"
                viewBox="0 0 14 16" class="booking-svg datesvg" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0.328125 14.0392C0.328125 14.822 0.958768 15.4571 1.73607 15.4571H12.061C12.8383 15.4571 13.469 14.822 13.469 14.0392V6.0045H0.328125V14.0392ZM9.71443 8.2495C9.71443 8.05454 9.87283 7.89503 10.0664 7.89503H11.2397C11.4333 7.89503 11.5917 8.05454 11.5917 8.2495V9.43108C11.5917 9.62604 11.4333 9.78555 11.2397 9.78555H10.0664C9.87283 9.78555 9.71443 9.62604 9.71443 9.43108V8.2495ZM9.71443 12.0306C9.71443 11.8356 9.87283 11.6761 10.0664 11.6761H11.2397C11.4333 11.6761 11.5917 11.8356 11.5917 12.0306V13.2121C11.5917 13.4071 11.4333 13.5666 11.2397 13.5666H10.0664C9.87283 13.5666 9.71443 13.4071 9.71443 13.2121V12.0306ZM5.95991 8.2495C5.95991 8.05454 6.1183 7.89503 6.3119 7.89503H7.48519C7.67878 7.89503 7.83717 8.05454 7.83717 8.2495V9.43108C7.83717 9.62604 7.67878 9.78555 7.48519 9.78555H6.3119C6.1183 9.78555 5.95991 9.62604 5.95991 9.43108V8.2495ZM5.95991 12.0306C5.95991 11.8356 6.1183 11.6761 6.3119 11.6761H7.48519C7.67878 11.6761 7.83717 11.8356 7.83717 12.0306V13.2121C7.83717 13.4071 7.67878 13.5666 7.48519 13.5666H6.3119C6.1183 13.5666 5.95991 13.4071 5.95991 13.2121V12.0306ZM2.20539 8.2495C2.20539 8.05454 2.36378 7.89503 2.55737 7.89503H3.73066C3.92425 7.89503 4.08265 8.05454 4.08265 8.2495V9.43108C4.08265 9.62604 3.92425 9.78555 3.73066 9.78555H2.55737C2.36378 9.78555 2.20539 9.62604 2.20539 9.43108V8.2495ZM2.20539 12.0306C2.20539 11.8356 2.36378 11.6761 2.55737 11.6761H3.73066C3.92425 11.6761 4.08265 11.8356 4.08265 12.0306V13.2121C4.08265 13.4071 3.92425 13.5666 3.73066 13.5666H2.55737C2.36378 13.5666 2.20539 13.4071 2.20539 13.2121V12.0306ZM12.061 2.22344H10.6531V0.805548C10.6531 0.545601 10.4419 0.332916 10.1837 0.332916H9.24512C8.98699 0.332916 8.7758 0.545601 8.7758 0.805548V2.22344H5.02128V0.805548C5.02128 0.545601 4.81009 0.332916 4.55196 0.332916H3.61333C3.35521 0.332916 3.14402 0.545601 3.14402 0.805548V2.22344H1.73607C0.958768 2.22344 0.328125 2.85854 0.328125 3.64134V5.05924H13.469V3.64134C13.469 2.85854 12.8383 2.22344 12.061 2.22344Z" />
              </svg>Date</button>
            <button class="booking-button" name="Time" value="time" id="time" onclick="selectBooking(this.value);"><svg width="16" height="16" viewBox="0 0 16 16"
                class="booking-svg timesvg" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.56862 0.332916C3.42047 0.332916 0.0595703 3.71757 0.0595703 7.89503C0.0595703 12.0725 3.42047 15.4571 7.56862 15.4571C11.7168 15.4571 15.0777 12.0725 15.0777 7.89503C15.0777 3.71757 11.7168 0.332916 7.56862 0.332916ZM9.29751 11.0083L6.62696 9.05374C6.5331 8.9836 6.47859 8.87383 6.47859 8.75796V3.62609C6.47859 3.42484 6.6421 3.26018 6.84194 3.26018H8.2953C8.49514 3.26018 8.65864 3.42484 8.65864 3.62609V7.82489L10.5813 9.23364C10.7448 9.35256 10.7781 9.58126 10.66 9.74591L9.80619 10.929C9.68811 11.0906 9.46102 11.1272 9.29751 11.0083Z" />
              </svg>
              Time</button>
            <button
            class = "booking-button" name = "Guests" value = "guests" id = "guests" onclick = "selectBooking(this.value);" > <svg svg width = "16" height = "16" viewBox = "0 0 16 16" class = "booking-svg guestssvg"
              xmlns = "http://www.w3.org/2000/svg" >
                <path
                  d="M7.69459 8.84029C10.0265 8.84029 11.9184 6.93499 11.9184 4.5866C11.9184 2.23821 10.0265 0.332916 7.69459 0.332916C5.36268 0.332916 3.47075 2.23821 3.47075 4.5866C3.47075 6.93499 5.36268 8.84029 7.69459 8.84029ZM11.4491 9.78555H9.83291C9.18174 10.0869 8.45723 10.2582 7.69459 10.2582C6.93196 10.2582 6.21038 10.0869 5.55628 9.78555H3.94007C1.86628 9.78555 0.185547 11.4782 0.185547 13.5666V14.0392C0.185547 14.822 0.816189 15.4571 1.59349 15.4571H13.7957C14.573 15.4571 15.2036 14.822 15.2036 14.0392V13.5666C15.2036 11.4782 13.5229 9.78555 11.4491 9.78555Z" />
              </svg>
              Guests
            </button>
          </div>

          <div class="booking-date">
            <div class="calendar-header">
              <p class="calendar-month">December 2021</p>
              <img src="img/icons/left.svg">
              <img src="img/icons/left.svg" class="right-arrow">
            </div>
            <div class="days">
              <a class="day">Mo</a>
              <a class="day">Tu</a>
              <a  class="day">We</a>
              <a  class="day">Th</a>
              <a  class="day">Fr</a>
              <a  class="day">Sa</a>
              <a  class="day">Su</a>
              <a href="" class="number">29</a>
              <a href="" class="number">30</a>
              <a href="" class="number">1</a>
              <a href="" class="number">2</a>
              <a href="" class="number">3</a>
              <a href="" class="number">4</a>
              <a href="" class="number">5</a>
              <a href="" class="number">6</a>
              <a href="" class="number">7</a>
              <a href="" class="number">8</a>
              <a href="" class="number">9</a>
              <a href="" class="number active-day">10</a>
              <a href="" class="number">11</a>
              <a href="" class="number">12</a>
              <a href="" class="number">13</a>
              <a href="" class="number">14</a>
              <a href="" class="number">15</a>
              <a href="" class="number">16</a>
              <a href="" class="number">17</a>
              <a href="" class="number">18</a>
              <a href="" class="number">19</a>
              <a href="" class="number">20</a>
              <a href="" class="number">21</a>
              <a href="" class="number">22</a>
              <a href="" class="number">23</a>
              <a href="" class="number">24</a>
              <a href="" class="number">25</a>
              <a href="" class="number">26</a>
              <a href="" class="number">27</a>
              <a href="" class="number">28</a>
              <a href="" class="number">29</a>
              <a href="" class="number">30</a>
              <a href="" class="number">31</a>
              <a href="" class="number">1</a>
              <a href="" class="number">2</a>
            </div>
          </div>

          <div class="booking-time" >
            <div class="timebox-flex">
              <div class="timebox">
                <div class="time">10:00</div>
                <div class="time">10:30</div>
                <div class="time">11:00</div>
                <div class="time">11:30</div>
                <div class="time">12:00</div>
                <div class="time">12:30</div>
                <div class="time">13:00</div>
                <div class="time">13:30</div>
                <div class="time">14:00</div>
                <div class="time">14:30</div>
                <div class="time">15:00</div>
                <div class="time active-day">15:30</div>
                <div class="time">16:00</div>
                <div class="time">16:30</div>
                <div class="time">17:00</div>
              </div>
            </div>
          </div>

          <div class="booking-guests">
            <div class="guests-number">2 people</div>
            <div class="increment-buttons">
              <a href="" class="minus-button">-</a>
              <a href="" class="plus-button">+</a>
            </div>
          </div>

          <textarea class="booking-field-info" name="other" placeholder="Other information"></textarea>
          <p class="booking-additional">*We are going to get back to you with a confirmation call.</p>
          <img src="img/icons/requestNow.svg" class="request-button" onclick="nextBooking();">
        </div>

      </div>

      <div class="booking-popup success">
        <img src="img/icons/close-icon.svg" class="close-icon" onclick="closeBooking();">
        <div class="booking-container">
          <p class="booking-title">Book a table</p>
          <p class="booking-subtitle">DEN GULE CAFÉ</p>
          <img src="img/icons/logo.svg" class="logo-booking">
          <p class="booking-subtitle-second">Thank you for booking!</p>
          <p class="booking-additional text-center" >You have pre-reserved a table for <b>4 people</b> on <b>December 23, 2021, at 18:00</b>. </p>
          <p class="booking-additional text-center" >*We are going to get back to you with a confirmation call.</p>
          <img src="img/icons/ok.svg" class="request-button" onclick="closeBooking();">
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