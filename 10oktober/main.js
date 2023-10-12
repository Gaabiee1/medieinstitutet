
/*
-Lägg till text och stilar baserat på vilken bild som visas
-Lägg till rubrik och brödtext till sidan
-Styla med CSS (färger, typsnitt, layout)
*/

//Skapa en variabel för varje button.
const hideButton = document.getElementById("hideButton1");
const widthButton = document.getElementById("widthButton1");
const changeImageButton = document.getElementById("changeImageButton");

const kitten = document.getElementById("image1");
// En funktion för att visa bilden
function showHideImage() {

    // const kitten = document.getElementById(imageId);
    // Skapa en variabel som berättar om bilden syns eller ej
    const kittenIsVisible = kitten.style.display === "block";

    /* if(kitten.style.display === "block"){
        kittenIsVisible = true;
    } else {
        kittenIsVisible = false;
    } */

    // Skapa en if-sats som gör motsatsen till syns eller dold.
    if(kittenIsVisible){
        // Dölj katten
        kitten.style.display = "none";
    } else {
        // Visa katten
        kitten.style.display = "block";
    }
}

// En funktion för att ändra bildens bredd
function changeWidthImage() {
    const kitten = document.querySelector("img");
    // Ändra bredden på bilden
    kitten.width = 350;
}

// En funktion som byter ut bilden
function changeImageFunction(){
    // Skapa en array med object som innehåller information
    // om bildens scr.
    const allImages = [
        {
            src:"alpaca.jpg",
            alt:"En söt alpaca",
            getSrc: function(){
                return this.src;
            },
            headlineText:"Alpaca",
            descriptionText:"Två söta alpacor"
        },
        {
            src:"owl.jpg",
            alt:"En gullig uggla",
            getSrc: function(){
                return this.src;
            },
            headlineText:"Ugglan",
            descriptionText:"Ugglan är trött"
        },
        {
            src:"parrot.jpg",
            alt:"En färgglad pappegoja",
            getSrc: function(){
                return this.src;
            },
            headlineText:"Pappegoja",
            descriptionText:"En grön Pappegoja"
        },
    ];

    // Hämta en av dom på random.
     function getRandomInt(max) {
        // Tar ett slumpmässigt tal mellan 0 och 1, gångrar med max
        // Rundar siffran till ett heltal, nedåt.
        return Math.floor(Math.random() * max);
    }

    
    const choosenImage = allImages[getRandomInt(allImages.length)];
    // Sätt kitten.scr till den valda objectets scr
    kitten.src = choosenImage.getSrc();
    kitten.alt = choosenImage.alt;

    // Skapa en varabel för H1 och p
    const headline = document.getElementById("headline")
    const description = document.getElementById("description");
    // Sätta texten till den valde objectets headline och 
    headline.innerText = choosenImage.headlineText;
    description.innerText = choosenImage.descriptionText;


}
// Koppla en eventListener till varje button
hideButton.addEventListener("click", showHideImage);
widthButton.addEventListener("click", changeWidthImage);
changeImageButton.addEventListener("click", changeImageFunction);