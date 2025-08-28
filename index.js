let coins = 100;
let totalCopy = 0;

function getElement(id){
    const element = document.getElementById(id);
    return element;
}


const cartbtns = document.getElementsByClassName("card-btn");


for(let cartButton of cartbtns){


    const callButton = cartButton;

    callButton.addEventListener("click",function(){
    
    

    const serviceName = cartButton.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
    const serviceCall = cartButton.parentNode.parentNode.childNodes[5].childNodes[1].innerText;

    console.log(serviceCall);

        if (coins < 20) {
            alert("Not enough coins minimune 20 coins need.");
            return; 
        }
        else{
            alert(`Calling ${serviceName} ${serviceCall}...`)
        }

        coins -= 20; 
        getElement("coin-count").innerText = coins;

        console.log("Remaining coins:", coins);

        ///cart-container k dor..
        const cartContainer = getElement("cart-container");

        ///const div banao...

        const newCart = document.createElement("div");

        var now = new Date();
        const time = now.toLocaleTimeString();
        


        newCart.innerHTML=`
                <div class="bg-[#fafafa] flex justify-around" >
                    <div>
                        <h1>${serviceName}</h1>
                        <p>${serviceCall}</p>
                    </div>
                        <p>${time}</p>
                </div>
        `;

        cartContainer.append(newCart);





    });

}

document.getElementById("btn-clear").addEventListener("click",function(){
                const cartContainer = getElement("cart-container");
                cartContainer.innerHTML="";

});



//2nd..

let heartCount = 0;

const heartBtns = document.getElementsByClassName("heart-btn");
const heartCountDisplay = document.getElementById("heart-count");

 
for(let cartButton of heartBtns){
    const wishCart = cartButton;
    console.log(wishCart);

    wishCart.addEventListener("click",function(){
           heartCount++;

           heartCountDisplay.innerText = heartCount;

    });


}




    //copy
        
        const copyCountDisplay = document.getElementById("copy-count");
        const copyBtns = document.getElementsByClassName("copy-btn");

        for(let cartButton of copyBtns){
            const copyCart = cartButton;
            console.log(copyCart);
            
            const serviceCall = copyCart.parentNode.parentNode.childNodes[5].childNodes[1].innerText;
            console.log(serviceCall);
            
            copyCart.addEventListener("click",function(){
             totalCopy++;
             copyCountDisplay.innerText = totalCopy;

             
             navigator.clipboard.writeText(serviceCall)
             .then(() => {
                     
                 alert(`Number Copied ${serviceCall}`);

             });



        });
    }












/*&let coins = 100;
let heartCount = 0;
let copyCount = 0;

// Get DOM elements
const heartButton = document.querySelector('.heart-btn');
const heartCountDisplay = document.getElementById('heart-count');
const coinsDisplay = document.getElementById('coin-count');
const callButtons = document.querySelectorAll('.call-btn');
const copyCountDisplay = document.getElementById('copy-count-display'); // Single span showing copy count
const copyButtons = document.querySelectorAll('.copy-btn'); // All copyable areas

// Increase heart count
function increaseHeartCount() {
  heartCount++;
  heartCountDisplay.textContent = heartCount;
}

// Handle call button
function handleCallButtonClick() {
  if (coins < 20) {
    alert('Insufficient coins to make a call!');
    return;
  }
  coins -= 20;
  coinsDisplay.textContent = coins;
  alert('Call initiated!');
}

// Increase copy count
function increaseCopyCount() {
  copyCount++;
  copyCountDisplay.textContent = copyCount;
}

// Event listener for heart button
heartButton.addEventListener('click', increaseHeartCount);

// Event listeners for all call buttons
callButtons.forEach(button => {
  button.addEventListener('click', handleCallButtonClick);
});

// Event listeners for all copy button areas
copyButtons.forEach(copyDiv => {
  copyDiv.addEventListener('click', increaseCopyCount);
});*/



