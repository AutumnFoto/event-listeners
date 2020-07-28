"use strict";
const pies = [
  {
    name: "Dutch Apple Pie",
    ingredients: "apples,sugar,butter,nutmeg,dutch people",
    bakeTemp: 5000,
    drinkPairing: "Earl Grey Tea",
    imageUrl:
      "https://images-gmi-pmc.edge-generalmills.com/b6a2a4e7-73f5-4aec-9bb6-f2b5054d65e6.jpg",
    instructor: "Doc",
    iceCream: "Vanilla",
  },
  {
    name: "Berry Pie",
    ingredients: "berries",
    bakeTemp: 400,
    drinkPairing: "wine",
    imageUrl:
      "https://tastesbetterfromscratch.com/wp-content/uploads/2015/11/Triple_Berry_Pie8.jpg",
    instructor: "Doc",
    iceCream: "banana",
  },
  {
    name: "Pumpkin Pie",
    ingredients: "pumpkins, nutmeg, cinnamon, graham crackers, pilgrims",
    bakeTemp: 42,
    drinkPairing: "egg nog",
    imageUrl:
      "https://cf-images.us-east-1.prod.boltdns.net/v1/static/1033249144001/22a0c25d-2fee-415c-a4e7-91d008e276bb/a904f3e2-3cd9-40d6-ace9-f8dbd2d616cd/1280x720/match/image.jpg",
    instructor: "Jacob",
    iceCream: "Vanilla",
  },
  {
    name: "Shoo Fly Pie",
    ingredients: "Molasses, nutmeg, cinnamon, butter, graham cracker ",
    bakeTemp: 1234,
    drinkPairing: "Apple Cider",
    imageUrl:
      "https://static01.nyt.com/images/2016/09/27/dining/27COOKING-SHOOFLY-PIE2/27COOKING-SHOOFLY-PIE2-articleLarge.jpg",
    instructor: "Jacob",
    iceCream: "Coffee",
  },
  {
    name: "Pecan Pie",
    ingredients: "Pecans, sugar, butter, flour",
    bakeTemp: 5000,
    drinkPairing: "Milk",
    imageUrl:
      "https://cookiesandcups.com/wp-content/uploads/2018/10/pecanpie-3.jpg",
    instructor: "Abbey",
    iceCream: "Vanilla",
  },
  {
    name: "Keylime Pie",
    ingredients: "lemons, sugar, butter, flour",
    bakeTemp: 5000,
    drinkPairing: "Water",
    imageUrl:
      "https://www.browneyedbaker.com/wp-content/uploads/2012/05/key-lime-pie-2-1200.jpg",
    instructor: "Abbey",
    iceCream: "none",
  },
];


    

// const handleButtonClick = (e) => {
//   console.log(e.target.id);

const handleButtonClick= (e)=> {
    const buttonId= e.target.id;

    const selectedPies =[];
    for(let i=0; i < pies.length;i++){
        if (pies[i].instructor === buttonId){
            selectedPies.push(pies[i]);
        }
    }

    // change BG color

const bodySelector= document.querySelector('body')
if (buttonId === 'Abbey') {
    bodySelector.style.backgroundColor = 'green';
} else if (buttonId === 'Doc') { 
        bodySelector.style.backgroundColor = 'blue';
} else if (buttonId === 'Jacob'){
      bodySelector.style.backgroundColor= 'grey'
    } else { bodySelector.style.backgroundColor= 'black'

    }

  if(buttonId === 'All' || buttonId === e.currentTarget.id){
      pieBuilder(pies)

  } else {
      pieBuilder(selectedPies)
  }

}
    


if(buttonId === 'All'){
    pieBuilder(pies)}
    else{
        pieBuilder(selectedPies)
    }


    pieBuilder(selectedPies);



const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const pieBuilder = (monkeyButts) => {
  let domString = '';

  for (let i = 0; i < monkeyButts.length; i++) {
    domString += `<div class="card" style="width: 18rem;">
                 <img src=${monkeyButts[i].imageUrl} class="card-img-top" alt="this is an image of ${monkeyButts[i].name}">
                 <div class="card-body">
                 <p class="card-text">${monkeyButts[i].name}</p>
        </div>
      </div>`;
  }

  printToDom('pies',domString)

}



const buttonEvents = () => {
  document.querySelector('#instructor-buttons').addEventListener('click', handleButtonClick);
};

const init = () => {
  buttonEvents();
  pieBuilder(pies);
}

init();

//  1. CALL BACKS
// function yellGoodbyeToUser(user) {
//     return `Goodbye ${user}!`;
// }

// function yellWhatsupToUser(user){
//     return `Whatsup ${user}!`;

// }

// function makeGreeting(user,cb){
//     return cb(user);
// }

// makeGreeting('Autumn', yellGoodbyeToUser);
// // makeGreeting('Autumn', yellWhatsupToUser);

// // console.log(makeGreeting('Autumn',yellWhatsupToUser))
// console.log(makeGreeting('Autumn',yellGoodbyeToUser))
// --------------------------------------------------------------------
// 2.getElementById
// const myBtn = document.getElementById('main-btn')
// console.log(myBtn)

// -----------------------------------------------------------------

// 3.Query Seclector
// if you use this to a class itll only select the first object

// look on video accidentally deleted

// // 4. Event- Listener
// const otherBtn = document.querySelector(`#main-btn`)

// const youClickedMe = () => {
//     console.log("You clicked me!")
// }

// otherBtn.addEventListener('click',youClickedMe)
