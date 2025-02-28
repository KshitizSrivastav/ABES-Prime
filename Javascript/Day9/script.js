const getData= (text) =>{
    const pr = fetch("https://dummyjson.com/recipes");
    pr.then((res)=>{
        const pr2 = res.json();
        pr2.then((data)=>{
            showCards(data.recipes);
        });
    });
};

const root = document.getElementById('cards-container');

const showCards = (dataArray) =>{
    root.innerHTML = '';
    dataArray.forEach((elem)=>{
        const newDiv = document.createElement('div');
        newDiv.className = 'card';  
        newDiv.innerHTML = `
            <h4>${elem.name}</h4>
            <img src="${elem.image}" width=100px/>
            <p>${elem.cuisine}</p>`;
        root.appendChild(newDiv);
    });
};

/*
***************Debouncing***************
Debouncing, in the context of programming, means to discard operations 
that occur too close together during a specific interval, and consolidate them into a single invocation.
In other words, a debounced function will only run after a certain amount of time has passed since the last time it was invoked.
In JavaScript, debouncing is a technique used to ensure that a function is not called too frequently. 
It is commonly used in scenarios where events are triggered rapidly, such as typing in an input field or resizing a window. 
Without debouncing, functions might be executed many times in quick succession, causing performance issues or unwanted behaviour.

Debouncing in JavaScript can be defined as the technique that is used to limit the number of times a function gets executed.
Debouncing is useful when the event is frequently being triggered in a short interval of time like typing, scrolling, and resizing.
1.Limit Function Calls: During frequent events like typing, resizing, or scrolling debouncing prevents the frequent function calls.
2.Delays Execution: After the specific delay only the function is executed, ensuring no rapid consecutive calls.
3.Prevents Overload: Efficiently managing high-frequency triggers helps in preventing overloading.

The use cases of the debouncing in javaScript are mentioned below:
1.Search Input Field: In the search bar, the user types characters one after another due to which for each key press an API request is triggered. 
Debouncing makes sure that the API request is only sent when the user has finished typing.
2.Window Resizing: When we resize the window browser, in a short interval of time the resize event gets fired multiple times. 
Debouncing can be used in handling this event.
3.Scrolling: When we scroll the page, the scroll event gets fired multiple times.
4.Mouse Move: When we move the mouse, the mousemove event gets fired multiple times.
5.Drag and Drop: When we drag and drop elements, the drag event gets fired multiple times.
6.Infinite Scrolling: In the infinite scrolling, the API request is triggered when the user reaches the end of the page.
7.Autocomplete: In the autocomplete search, the API request is triggered for each key press.
8.Form Validation: In form validation, the validation is done for each key press.
9.Image Lazy Loading: In image lazy loading, the image is loaded when the user scrolls the page.
10.Real-time Data: In real-time data, the data is updated for each change.

*/


let timeoutId = null;

const handleSearch = (e) =>{
    if (timeoutId){
        clearTimeout(timeoutId);
    }
    timeoutId=setTimeout(()=>{
        getData(e.target.value);
    },1000);
}