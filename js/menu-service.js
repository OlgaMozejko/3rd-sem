import { firebaseDB } from "./firebase-service.js";

import {
  collection,
  onSnapshot,
  doc,
} from "https://www.gstatic.com/firebasejs/9.4.1/firebase-firestore.js";

export default class MenuService {
  constructor() {
    this.menusRef = collection(firebaseDB, "menu");
    this.read();
  }

  read() {
    // ========== READ ==========
    // watch the database ref for changes
    onSnapshot(this.menusRef, (snapshot) => {
      // mapping snapshot data from firebase in to user objects
      this.menus = snapshot.docs.map((doc) => {
        const menu = doc.data();
        menu.id = doc.id;
        return menu;
      });

      console.log(this.menus);
      this.appendFoods(this.menus);
    });
  }

  // append users to the DOM
  appendFoods(items) {
    let htmlTemplate = "";
    for (let item of items) {
      htmlTemplate += `
      <article>
        <h2>${item.food.foods.id}</h2>
      </article>
      `;
    }
    console.log("yes");
    document.querySelector("#menu-list").innerHTML = htmlTemplate;
  }
}
