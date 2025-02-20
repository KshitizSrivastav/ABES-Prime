const obj=[
    {
        name:"Kshitiz",
        email:"kshitiz@gmail.com",
        city:"Ghaziabad"
    },
    {
        name:"Arpit",
        email:"arpit@gmail.com",
        city:"Jalaun"
    },
    {
        name:"Ishanvi",
        email:"ishanvi@gmail.com",
        city:"Indirapuram"
    },
    {
        name:"Asmit",
        email:"asmit@gmail.com",
        city:"Kanpur"
    }
]
const root=document.getElementById("parent");

obj.forEach((elem)=>{
    const newCard=document.createElement("div");
    //Adding event listener
    //Change the background color of the inner div
    newCard.addEventListener("click",()=>{
        newCard.style.backgroundColor=getRandomColor();
    })
    //Set class name for the inner div
    newCard.className='card';
    newCard.innerHTML=`
        <h4>${elem.name}</h4>
        <h6>${elem.email}</h6>
        <p class="text">${elem.city}</p>
    `;
    root.appendChild(newCard);
})

const body=document.querySelector("body");

//Function for changing the background color
const handleBgChange = () => {
    console.log("Button Clicked");
    //logic to change the background color
    body.style.backgroundColor=getRandomColor();
}

const getRandomColor= () =>{
    const randomRed = Math.floor(Math.random() * 255);
    const randomGreen = Math.floor(Math.random() * 255);
    const randomBlue = Math.floor(Math.random() * 255);
    return `rgb(${randomRed},${randomGreen},${randomBlue})`;
}

//Changing the background color of the city in the inner div
const textElement=document.querySelectorAll(".text");
textElement.forEach((ele)=>{
    ele.addEventListener('click',(event)=>{ // event is used to stop the propapgation of one event to another event.
        event.stopPropagation();
        ele.style.backgroundColor = getRandomColor();
    })
})

