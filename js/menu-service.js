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
    this.menusRef = collection(firebaseDB, "menu");
    this.read();
  }

  read() {
		// ========== READ ==========
		// watch the database ref for changes
		onSnapshot(this.menusRef, snapshot => {
			// mapping snapshot data from firebase in to user objects
			this.menus = snapshot.docs.map(doc => {
				const menu = doc.data();
				menu.id = doc.id;
				return menu;
			});

      console.log(this.menus);
		//	this.appendUsers(this.menus);
		});
	}

  // // append users to the DOM
  // appendUsers(users) {
  //   let htmlTemplate = "";
  //   for (let user of users) {
  //     htmlTemplate += `
  //     <article>
  //       <h2>${user.name}</h2>
  //       <img src="${user.img || 'img/placeholder.jpg'}">
  //       <p><a href="mailto:${user.mail}">${user.mail}</a></p>
  //       <button onclick="selectUser('${user.id}','${user.name}', '${user.mail}', '${user.img}')">Update</button>
  //       <button onclick="deleteUser('${user.id}')">Delete</button>
  //     </article>
  //     `;
  //   }
  //   document.querySelector('#user-container').innerHTML = htmlTemplate;
  // }



}