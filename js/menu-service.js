import { firebaseDB } from "./firebase-service.js";

import {
  collection,
  onSnapshot,
  doc,
} from "https://www.gstatic.com/firebasejs/9.4.1/firebase-firestore.js";

export default class MenuService {
  constructor() {
    this.beersRef = collection(firebaseDB, "menu/drinks/beer");
    this.foodsRef = collection(firebaseDB, "menu/food/foods");
    this.coldDrinksRef = collection(firebaseDB, "menu/drinks/cold-drinks");
    this.warmDrinksRef = collection(firebaseDB, "menu/drinks/warm-drinks");
    this.cocktailsRef = collection(firebaseDB, "menu/drinks/wine-cocktails");
    this.readFoods();
    this.readBeers();
    this.readColdDrinks();
    this.readWarmDrinks();
    this.readCocktails();
    this.menuFilter();
    this.seeFood();
    this.seeDrinks();
  }

  /* ---- menu display - Vlada ----- */
  /*--- reading different kind of menu items -----*/
  readFoods() {
    // ========== READ ==========
    // watch the database ref for changes
    onSnapshot(this.foodsRef, (snapshot) => {
      // mapping snapshot data from firebase in to user objects
      this.foods = snapshot.docs.map((doc) => {
        const foods = doc.data();
        foods.id = doc.id;
        return foods;
      });

      console.log(this.foods);
      this.appendFoods(this.foods);
    });
  }

  readBeers() {
    // ========== READ ==========
    // watch the database ref for changes
    onSnapshot(this.beersRef, (snapshot) => {
      // mapping snapshot data from firebase in to user objects
      this.beers = snapshot.docs.map((doc) => {
        const beers = doc.data();
        beers.id = doc.id;
        return beers;
      });

      console.log(this.beers);
      this.appendBeers(this.beers);
    });
  }

  readWarmDrinks() {
    // ========== READ ==========
    // watch the database ref for changes
    onSnapshot(this.warmDrinksRef, (snapshot) => {
      // mapping snapshot data from firebase in to user objects
      this.warmDrinks = snapshot.docs.map((doc) => {
        const warmDrinks = doc.data();
        warmDrinks.id = doc.id;
        return warmDrinks;
      });

      console.log(this.warmDrinks);
      this.appendWarmDrinks(this.warmDrinks);
    });
  }

  readColdDrinks() {
    // ========== READ ==========
    // watch the database ref for changes
    onSnapshot(this.coldDrinksRef, (snapshot) => {
      // mapping snapshot data from firebase in to user objects
      this.coldDrinks = snapshot.docs.map((doc) => {
        const coldDrinks = doc.data();
        coldDrinks.id = doc.id;
        return coldDrinks;
      });

      console.log(this.coldDrinks);
      this.appendColdDrinks(this.coldDrinks);
    });
  }

  readCocktails() {
    // ========== READ ==========
    // watch the database ref for changes
    onSnapshot(this.cocktailsRef, (snapshot) => {
      // mapping snapshot data from firebase in to user objects
      this.cocktails = snapshot.docs.map((doc) => {
        const cocktails = doc.data();
        cocktails.id = doc.id;
        return cocktails;
      });

      console.log(this.cocktails);
      this.appendCocktails(this.cocktails);
    });
  }

  // append food menu to the DOM
  appendFoods(foods) {
    let htmlTemplate = "";
    for (let item of foods) {
      htmlTemplate += `
      <article>
      <img src="${item.photo || "../img/placeholder-img.png"}" class="menu-img">
      <div class="menu-text">
        <h2 class="menu-heading">${item.name}</h2>
        <p class="menu-description">${item.description || ""}</p>
        <p class="menu-price">${item.price}kr</p>
        </div>
      </article>
      `;
    }
    console.log("yes");
    document.querySelector("#menu-list").innerHTML = htmlTemplate;
  }

  // append beer menu to the DOM
  appendBeers(beers) {
    let htmlTemplate = "";
    for (let item of beers) {
      htmlTemplate += `
      <article>
      <div class="drink-text">
        <h2 class="menu-heading">${item.name}</h2>
        <p class="menu-price">${item.price}kr</p>
        </div>
      </article>
      `;
    }
    console.log("yes");
    document.querySelector("#beer-list").innerHTML = htmlTemplate;
  }

  // append warm drink menu to the DOM
  appendWarmDrinks(drinks) {
    let htmlTemplate = "";
    for (let item of drinks) {
      htmlTemplate += `
      <article>
      <div class="menu-text">
        <h2 class="menu-heading">${item.name}</h2>
        <p class="menu-price">${item.price}kr</p>
        </div>
      </article>
      `;
    }
    console.log("yes");
    document.querySelector("#menu-list").innerHTML = htmlTemplate;
  }

  // append cold drink menu to the DOM
  appendColdDrinks(drinks) {
    let htmlTemplate = "";
    for (let item of drinks) {
      htmlTemplate += `
      <article>
      <div class="drink-text">
        <h2 class="menu-heading">${item.name}</h2>
        <p class="menu-price">${item.price}kr</p>
        </div>
      </article>
      `;
    }
    console.log("yes");
    document.querySelector("#colddrink-list").innerHTML = htmlTemplate;
  }

  // append cocktail menu to the DOM
  appendCocktails(drinks) {
    let htmlTemplate = "";
    for (let item of drinks) {
      htmlTemplate += `
      <article>
      <div class="drink-text">
        <h2 class="menu-heading">${item.name}</h2>
        <p class="menu-price">${item.price}kr</p>
        </div>
      </article>
      `;
    }
    console.log("yes");
    document.querySelector("#cocktails-list").innerHTML = htmlTemplate;
  }

  // function for appending all drink menus together
  appendDrinks() {
    this.readWarmDrinks(this.warmDrinks);
    this.readBeers(this.beers);
    this.readColdDrinks(this.coldDrinks);
    this.readCocktails(this.cocktails);
  }

  // onclick function for menu filtering buttons
  menuFilter() {
    document.querySelector("#button-container").innerHTML += /*html*/ `
    <button id="foods-menu" class="button-filter" onclick="readFoods(this.foods); seeFood();">
    <img src="../img/icons/food.svg">
    </button>
     <button class="button-filter" onclick="seeDrinks(); appendDrinks()">
    <img src="../img/icons/drinks.svg">
    </button> 
    `;
  }

  seeFood() {
    document.querySelector("#beer-list").style.display = "none";
    document.querySelector(".warmdrink-heading").style.display = "none";
    document.querySelector(".colddrink-heading").style.display = "none";
    document.querySelector(".beer-heading").style.display = "none";
    document.querySelector("#colddrink-list").style.display = "none";
    document.querySelector(".cocktails-heading").style.display = "none";
    document.querySelector("#cocktails-list").style.display = "none";
  }

  seeDrinks() {
    document.querySelector("#beer-list").style.display = "grid";
    document.querySelector(".warmdrink-heading").style.display = "block";
    document.querySelector(".colddrink-heading").style.display = "block";
    document.querySelector(".beer-heading").style.display = "block";
    document.querySelector("#colddrink-list").style.display = "grid";
    document.querySelector(".cocktails-heading").style.display = "block";
    document.querySelector("#cocktails-list").style.display = "grid";
  }
}
