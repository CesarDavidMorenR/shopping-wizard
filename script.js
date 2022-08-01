function cambiar() {
  document.getElementById("here").innerHTML = "Estimated delivery date: FREEE";
  document.getElementById("here-two").innerHTML = "";
  document.getElementById("here-th").innerHTML = "";
}

document.getElementById("shipment1").onclick = function () {
  cambiar();
};

function change() {
  document.getElementById("here-two").innerHTML =
    "Estimated delivery : EXTRAAA";
}

document.getElementById("shipment-two").onclick = function () {
  change();
};

function nueva() {
  document.getElementById("here-th").innerHTML = "Estimated del date: PREMIUM";
}

document.getElementById("shipment-three").onclick = function () {
  nueva();
};

/* SIZE CHAIR */

window.addEventListener("DOMContentLoaded", () => {
  // your code

  const listaOpciones = document.querySelector("#size-chair");

  listaOpciones.addEventListener("input", (event) => {
    let mainImg = document.getElementById("imgchange");

    switch (event.target.value) {
      case "small":
        mainImg.style.width = "50%";
        mainImg.style.height = "50%";

        break;

      case "dollar":
        basicPrice.textContent = "$0";
        proPrice.textContent = "$25";
        premiumPrice.textContent = "$60";

        break;

      case "libra":
        basicPrice.textContent = "£0";
        proPrice.textContent = "£" + Math.ceil(libraApi * (25 * dollarApi));
        premiumPrice.textContent = "£" + Math.ceil(libraApi * (60 * dollarApi));
    }
  });
});

/* Check Password */

window.addEventListener("DOMContentLoaded", () => {
  var password = document.getElementById("password"),
    confirm_password = document.getElementById("confirm_password");

  function validatePassword() {
    if (password.value != confirm_password.value) {
      confirm_password.setCustomValidity("Passwords Don't Match");
    } else {
      confirm_password.setCustomValidity("");
    }
  }

  password.onchange = validatePassword;
  confirm_password.onkeyup = validatePassword;
});

/* Gift CheckBox */

window.addEventListener("DOMContentLoaded", () => {
  const checkboox = document.getElementById("checkgift");

  checkboox.addEventListener("click", (e) => {
    let appaer = document.getElementById("appear");

    // appaer.classList.remove('aparecer-gift');
    appaer.classList.toggle("bl");
    // e.preventDefault();

    // e.stopPropagation();

    // e.cancelBubble = true;

    // e.stopImmediatePropagation();
  });
});

/* Phone code */

window.addEventListener("DOMContentLoaded", () => {
  // your code

  const listaOpciones = document.querySelector("#selectCurrencis");

  listaOpciones.addEventListener("input", (event) => {
    let telf = document.getElementById("telf");

    switch (event.target.value) {
      case "brasil":
        telf.value = "+55";

        break;

      case "argentina":
        telf.value = "+58";

        break;

      case "españa":
        telf.value = "+34";
    }
  });
});

/* Select Shipment */

window.addEventListener("DOMContentLoaded", () => {
  // your code

  const listaOpcionees = document.querySelector('input[name="ship"]');

  listaOpcionees.addEventListener("input", () => {
    let ship = document.querySelectorAll("input[name = ship]:checked").value;

    let shipInfo = document.getElementById("dateOne");

    switch (ship) {
      case "free":
        shipInfo.textContent = "+55";

        break;

      case "extra":
        shipInfo.textContent = "+555";

        break;

      case "premium":
        shipInfo.textContent = "+55";
    }
  });
});

/* --------------------CHANGE COLOR AND LEATHER COLOR -------------------- */
let PinkChair = document.getElementById("pink");
let BlackChair = document.getElementById("black");
let BlueChair = document.getElementById("blue");
let grayChair = document.getElementById("gray");
let WhiteChair = document.getElementById("white");
let imgchange = document.getElementById("imgchange");
let blackboton = document.getElementById("lea-black");
let blueboton = document.getElementById("lea-blue");
let yellowboton = document.getElementById("lea-yellow");
let redboton = document.getElementById("lea-red");
let whiteboton = document.getElementById("lea-white");
let column1 = document.getElementById("first");
let column2 = document.getElementById("second");
let column3 = document.getElementById("third");
let column4 = document.getElementById("fourth");
let price1 = document.getElementById("precio1");
let price2 = document.getElementById("precio2");

PinkChair.onclick = function () {
  imgchange.src = "./assets/color/pink.png";
  column1.src = "./assets/pink/R22SW-PlushPnk_01.webp";
  column2.src = "./assets/pink/R22SW-PlushPnk_02.webp";
  column3.src = "./assets/pink/R22SW-PlushPnk_05.webp";
  column4.src = "./assets/pink/R22SW-PlushPnk_Pillow.webp";
  price1.innerHTML = "539€";
  price2.innerHTML = "569€";
};

BlackChair.onclick = function () {
  imgchange.src = "./assets/color/black.png";
  column1.src = "./assets/Chair1/secretlab img 2.png";
  column2.src = "./assets/Chair1/secretlab img 3.png";
  column3.src = "./assets/Chair1/secretlab img 4.png";
  column4.src = "./assets/Chair1/secretlab img1.png";
  price1.innerHTML = "539€";
  price2.innerHTML = "569€";
};

BlueChair.onclick = function () {
  imgchange.src = "./assets/color/blue.png";
  column1.src = "./assets/blue/R22SW-MintGrn_05.webp";
  column2.src = "./assets/blue/R22SW-MintGrn_07.webp";
  column3.src = "./assets/blue/R22SW-MintGrn_08.webp";
  column4.src = "./assets/blue/R22SW-MintGrn_Pillow.webp";
  price1.innerHTML = "539€";
  price2.innerHTML = "569€";
};
grayChair.onclick = function () {
  imgchange.src = "./assets/color/gray.png";
  column1.src = "./assets/grey/R22SW-CnC_05.webp";
  column2.src = "./assets/grey/R22SW-CnC_07.webp";
  column3.src = "./assets/grey/R22SW-CnC_09.webp";
  column4.src = "./assets/grey/R22SW-CnC_Pillow.webp";
  price1.innerHTML = "539€";
  price2.innerHTML = "569€";
};
WhiteChair.onclick = function () {
  imgchange.src = "./assets/color/white.png";
  column1.src = "./assets/white/R22SW-ArcticWht_03.webp";
  column2.src = "./assets/white/R22SW-ArcticWht_05.webp";
  column3.src = "./assets/white/R22SW-ArcticWht_07.webp";
  column4.src = "./assets/white/R22SW-ArcticWht_08.webp";
  price1.innerHTML = "539€";
  price2.innerHTML = "569€";
};

blackboton.onclick = function () {
  imgchange.src = "./assets/leather/black.png";
  column1.src = "./assets/chairleatherblack/Pillow_Ash.webp";
  column2.src = "./assets/chairleatherblack/R22PU-Black_01.webp";
  column3.src = "./assets/chairleatherblack/R22PU-Black_02.webp";
  column4.src = "./assets/chairleatherblack/R22PU-Black_Pillow.webp";
  price1.innerHTML = "519€";
  price2.innerHTML = "549€";
};
blueboton.onclick = function () {
  imgchange.src = "./assets/leather/bluuuuueee.png";
  column1.src = "./assets/chairleatherblue/Pillow_Ash.webp";
  column2.src = "./assets/chairleatherblue/R22PU-Royal_01.webp";
  column3.src = "./assets/chairleatherblue/R22PU-Royal_02.webp";
  column4.src = "./assets/chairleatherblue/R22PU-Royal_Pillow.webp";
  price1.innerHTML = "519€";
  price2.innerHTML = "549€";
};
yellowboton.onclick = function () {
  imgchange.src = "./assets/leather/yellow.png";
  column1.src = "./assets/chairleatheryellow/Pillow_Ash.webp";
  column2.src = "./assets/chairleatheryellow/R22PU-CP2077_01.webp";
  column3.src = "./assets/chairleatheryellow/R22PU-CP2077_02.webp";
  column4.src = "./assets/chairleatheryellow/R22PU-Stealth_Pillow.webp";
  price1.innerHTML = "519€";
  price2.innerHTML = "549€";
};
redboton.onclick = function () {
  imgchange.src = "./assets/leather/red.png";
  column1.src = "./assets/chairleatherred/Pillow_Ash.webp";
  column2.src = "./assets/chairleatherred/R22PU-Lannister_01.webp";
  column3.src = "./assets/chairleatherred/R22PU-Lannister_02.webp";
  column4.src = "./assets/chairleatherred/R22PU-Stealth_Pillow.webp";
  price1.innerHTML = "519€";
  price2.innerHTML = "549€";
};
whiteboton.onclick = function () {
  imgchange.src = "./assets/leather/white.png";
  column1.src = "./assets/chairleatherwhite/Pillow_Ash.webp";
  column2.src = "./assets/chairleatherwhite/R22PU-Stark_01.webp";
  column3.src = "./assets/chairleatherwhite/R22PU-Stark_02.webp";
  column4.src = "./assets/chairleatherwhite/R22PU-Stealth_03.webp";
  price1.innerHTML = "519€";
  price2.innerHTML = "549€";
};

/* --------------------PROFILE--------------------- */

let addBtn = document.getElementById("btn-add");

addBtn.addEventListener("click", (e) => {
  let papaProduct = document.getElementById("papa-product");
  let papaProfile = document.getElementById("papa-profile");

  papaProduct.classList.add("borrar");

  papaProfile.classList.remove("borrar");

  e.preventDefault();
});

let nextBtnProfile = document.getElementById("btn-profile");

nextBtnProfile.addEventListener("click", (e) => {
  let papaAdress = document.getElementById("papa-address");
  let papaProfile = document.getElementById("papa-profile");

  papaProfile.classList.add("borrar");

  papaAdress.classList.remove("borrar");

  e.preventDefault();
});

let nextBtnAdress = document.getElementById("btn-address");

nextBtnAdress.addEventListener("click", (e) => {
  let papaAdress = document.getElementById("papa-address");
  let papaShip = document.getElementById("papa-shipment");

  papaAdress.classList.add("borrar");

  papaShip.classList.remove("borrar");

  e.preventDefault();
});

let nextBtnShip = document.getElementById("btn-ship");

nextBtnShip.addEventListener("click", (e) => {
  let papaFinish = document.getElementById("papa-finish");
  let papaShip = document.getElementById("papa-shipment");

  papaShip.classList.add("borrar");

  papaFinish.classList.remove("borrar");

  e.preventDefault();
});
