import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss']
})
export class NewsfeedComponent implements OnInit {


//if newsfeed is displayed in main -> then show side menu

// const newsfeed = document.getElementById("newsfeed");

// async function displayProduct() {
//   let currentProduct = await getProduct();
//   const name = currentProduct.name;
//   const price = currentProduct.price;
//   const description = currentProduct.description;
//   const image = currentProduct.imageUrl;
//   const lenses = currentProduct.lenses;

//   const cardContainer = document.createElement("div");
//   cardContainer.className = "card";
//   cardContainer.classList.add("product-card-detail");

//   const textContainer = document.createElement("div");
//   const goBackLink = document.createElement("a");
//   const goBackIcon = document.createElement("i");
//   goBackIcon.className = "fas fa-arrow-left";
//   const nameContainer = document.createElement("h2");
//   const descriptionContainer = document.createElement("p");
//   const priceContainer = document.createElement("div");

//   const selectMenuTitle = document.createElement("p");
//   selectMenuTitle.innerText = "Lense options";
//   selectMenuTitle.className = "lenseMenu";
//   const selectLenses = document.createElement("select");
//   selectLenses.className = "selectLensesMenu";
//   for (let i = 0; i < lenses.length; i++) {
//     let option = document.createElement("option");
//     option.innerText = lenses[i];
//     option.className = "lensesOption";
//     selectLenses.appendChild(option);
//   }

//   const nonTextContainer = document.createElement("div");
//   nonTextContainer.className = "product-card-detail__nonText";
//   const imgContainer = document.createElement("img");
//   const buttonContainer = document.createElement("div");
//   const button = document.createElement("button");
//   button.className = "button";
//   button.onclick = function () {
//     addToCart();
//   };

//   textContainer.classList.add("product-card-detail__text");
//   nameContainer.classList.add("product-card-detail__name");
//   priceContainer.classList.add("product-card-detail__price");
//   imgContainer.classList.add("product-card-detail__img");
//   buttonContainer.classList.add("button-container");
//   button.classList.add("product-card-detail__button");

//   nameContainer.innerText = name;
//   goBackLink.href = "..//index.html";
//   priceContainer.innerText = price.toLocaleString();
//   descriptionContainer.innerText = description;
//   imgContainer.src = image;
//   button.innerText = "Add to Cart";

//   goBackLink.appendChild(goBackIcon);
//   textContainer.appendChild(goBackLink);
//   textContainer.appendChild(nameContainer);
//   textContainer.appendChild(descriptionContainer);
//   textContainer.appendChild(priceContainer);
//   textContainer.appendChild(selectMenuTitle);
//   textContainer.appendChild(selectLenses);

//   nonTextContainer.appendChild(imgContainer);
//   nonTextContainer.appendChild(buttonContainer);

//   cardContainer.appendChild(textContainer);
//   cardContainer.appendChild(nonTextContainer);

//   buttonContainer.appendChild(button);

//   cameraDisplay.appendChild(cardContainer);
// }

  constructor() { }

  ngOnInit(): void {
  }

}
