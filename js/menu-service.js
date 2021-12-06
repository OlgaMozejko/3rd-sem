import {
  firebaseDB
} from "./firebase-service.js";

import {
  collection,
  onSnapshot,
  doc,
} from "https://www.gstatic.com/firebasejs/9.4.1/firebase-firestore.js";

export default class MenuService {
  constructor() {
    this.menusRef = collection(firebaseDB, "menu/drinks/beer");
    this.read();
  }

  read() {
    // var listRef = this.menusRef.child('menus/drinks/beer');
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
      this.append();
      this.appendFoods(this.menus);
    });
  }

  // append users to the DOM
  appendFoods(menus) {
    let htmlTemplate = "";
    for (let item of menus) {
      htmlTemplate += `
      <article>
        <h2>${item.name}</h2>
      </article>
      `;
      console.log(item);
      document.querySelector("#menu-list").innerHTML = htmlTemplate;
    }


  }



  append() {
    for (let i in this.menu) {
      for (let y in this.menu[i].drink) {
        for (let z in this.menu[i].drink[y].beer) {
          tmlTemplate += `
      <article>
        <h2>${z.name}</h2>
      </article>
      `;
        }
        console.log("yes");
        document.querySelector("#menu-list").innerHTML = htmlTemplate;

      }
    }
  }


  //console.log(results);
}