let site = {
  navMenu: ["About", "Menu", "Contact"],
  header: { image: "./images/hamburger.jpg", title: "Le Catering" },
  content: {
    about: {
      image: "./images/tablesetting2.jpg",
      mainTitl: "About Catering",
      title: "Tradition since 1889",
      cont: [
        {
          text:
            "The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit" +
            " consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut" +
            " enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use <span class='w3-tag w3-light-grey'>seasonal</span> ingredients",
        },
        {
          text:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est" +
            " laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua." +
            " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
      ],
    },
    menuTitle: "Our Menu",
    menuImage: "./images/tablesetting.jpg",
    menu: [
      {
        title: "Bread Basket",
        text: "Assortment of fresh baked fruit breads and muffins 5.50 ",
      },
      {
        title: "Honey Almond Granola with Fruits",
        text: "Natural cereal of honey toasted oats, raisins, almonds and dates 7.00 <br>",
      },
      {
        title: "Belgian Waffle",
        text: "Vanilla flavored batter with malted flour 7.50 <br>",
      },
      {
        title: "Scrambled eggs",
        text: "Scrambled eggs, roasted red pepper and garlic, with green onions 7.50 <br>",
      },
      {
        title: "Blueberry Pancakes",
        text: "With syrup, butter and lots of berries 8.50",
      },
    ],
  },
  contTitle: "Contact",
  contact: [
    {
      text:
        "We offer full-service catering for any event, large or small. We understand your needs and we will cater the" +
        " food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.",
    },
    { text: "Catering Service, 42nd Living St, 43043 New York, NY" },
    {
      text:
        "You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message" +
        " here:",
    },
  ],
};

// navbar
let nav = document.getElementById("nav");

let barLeft = document.createElement("div");
barLeft.setAttribute("class", "w3-bar w3-white w3-padding w3-card");
barLeft.setAttribute("style", "letter-spacing:4px;");
nav.appendChild(barLeft);

let link = document.createElement("a");
link.setAttribute("href", "#home");
link.setAttribute("class", "w3-bar-item w3-button");
link.innerText = "Gourmet au Catering";
barLeft.appendChild(link);

let barRight = document.createElement("div");
barRight.setAttribute("class", "w3-right w3-hide-small");
barLeft.appendChild(barRight);

for (let i = 0; i < site.navMenu.length; i++) {
  let link1 = document.createElement("a");
  link1.setAttribute("href", "#");
  link1.setAttribute("class", "w3-bar-item w3-button");
  link1.innerHTML += `${site.navMenu[i]}`;
  barRight.appendChild(link1);
}

// header
let header = document.getElementById("home");
let image = document.createElement("img");
image.setAttribute("class", "w3-image");
image.setAttribute("src", `${site.header.image}`);
image.setAttribute("alt", "Hamburger Catering");
image.setAttribute("style", ' width="1600" height="800"');
header.appendChild(image);

let imgTite = document.createElement("div");
imgTite.setAttribute(
  "class",
  "w3-display-bottomleft w3-padding-large w3-opacity"
);
header.appendChild(imgTite);
let h1 = document.createElement("h1");
h1.setAttribute("class", "w3-xxlarge");
h1.innerText = `${site.header.title}`;
imgTite.appendChild(h1);

// page content
// About section

let cont = document.getElementById("about");
let sec1 = document.createElement("div");
sec1.setAttribute("class", "w3-col m6 w3-padding-large w3-hide-small");
cont.appendChild(sec1);

let image1 = document.createElement("img");
image1.setAttribute("src", `${site.content.about.image}`);
image1.setAttribute("class", "w3-round w3-image w3-opacity-min");
image1.setAttribute("alt", "Table Setting");
image1.setAttribute("style", 'width="600" height="750"');
sec1.appendChild(image1);

let sec2 = document.createElement("div");
sec2.setAttribute("class", "w3-col m6 w3-padding-large");
cont.appendChild(sec2);

let aboutTite = document.createElement("h1");
aboutTite.setAttribute("class", "w3-center");
aboutTite.innerText = `${site.content.about.mainTitl}`;
sec2.appendChild(aboutTite);

let secTite = document.createElement("h5");
secTite.setAttribute("class", "w3-center");
secTite.innerText = `${site.content.about.title}`;
sec2.appendChild(secTite);

for (let i = 0; i < 2; i++) {
  let aboutText1 = document.createElement("p");
  aboutText1.setAttribute("class", "w3-large");

  aboutText1.innerHTML += `${site.content.about.cont[i].text}`;
  sec2.appendChild(aboutText1);
}

// menu section
let menuCont = document.getElementById("menu");

let menuSec = document.createElement("div");
menuSec.setAttribute("class", "w3-col l6 w3-padding-large");
menuCont.appendChild(menuSec);

let bigTitle = document.createElement("h1");
bigTitle.setAttribute("class", "w3-center");
bigTitle.innerHTML = `${site.content.menuTitle + "<br>"}`;
menuSec.appendChild(bigTitle);

let titles = document.createElement("h4");

let texts = document.createElement("p");
texts.setAttribute("class", "w3-text-grey");

menuSec.appendChild(titles);
menuSec.appendChild(texts);

for (let i = 0; i < site.content.menu.length; i++) {
  menuSec.innerHTML += ` <br>
   <h4>${site.content.menu[i].title + "<br>"}</h4>  <p> ${
    site.content.menu[i].text + "<br><br>"
  }</p>
  `;
}
//menu img
let menuImg = document.createElement("div");
menuImg.setAttribute("class", "w3-col l6 w3-padding-large");
menuCont.appendChild(menuImg);

let image2 = document.createElement("img");
image2.setAttribute("src", `${site.content.menuImage}`);
image2.setAttribute("class", "w3-round w3-image w3-opacity-min");
image2.setAttribute("alt", "Menu");
image2.setAttribute("style", "width:100%");
menuImg.appendChild(image2);

//cotact section

let contact = document.getElementById("contact");

let contTitle = document.createElement("h1");
contTitle.innerText = `${site.contTitle}`;
contact.appendChild(contTitle);

let p = document.createElement("p");
//p[1].setAttribute("class", "w3-text-blue-grey w3-large");
for (let i = 0; i < site.contact.length; i++) {
  p.innerHTML += `<br><br> ${site.contact[i].text}`;
  contact.appendChild(p);
}


// forms
let form = document.createElement("form");
contact.appendChild(form);

let input = document.createElement("input");
input.setAttribute("placeholder", "Name");
input.setAttribute("class", "w3-input w3-padding-16");
form.appendChild(input);

let input2 = document.createElement("input");
input2.setAttribute("placeholder", "How many people");
input2.setAttribute("class", "w3-input w3-padding-16");
input2.setAttribute("type", "number");
form.appendChild(input2);

let input3 = document.createElement("input");
input3.setAttribute("placeholder", "Date and time");
input3.setAttribute("class", "w3-input w3-padding-16");
input3.setAttribute("type", "datetime-local");
form.appendChild(input3);

let input4 = document.createElement("input");
input4.setAttribute("placeholder", "Message  Special requirements");
input4.setAttribute("class", "w3-input w3-padding-16");
input4.setAttribute("type", "text");
form.appendChild(input4);

let button = document.createElement("button");
button.setAttribute("class", "w3-button w3-light-green w3-section");
button.setAttribute("type", "submit");

button.innerHTML += `SEND  MESSAGE`;
form.appendChild(button);

// footer
let footer = document.getElementById("footer");

let para = document.createElement("p");
para.innerText = `Powered by `;
footer.appendChild(para);

let a = document.createElement("a");
a.setAttribute("class", "w3-hover-text-green");
a.setAttribute("title", "W3.CSS");
a.setAttribute("href", "https://www.w3schools.com/w3css/default.asp");
a.setAttribute("target", "_blank");
a.innerText = `w3.css`;
para.appendChild(a);

