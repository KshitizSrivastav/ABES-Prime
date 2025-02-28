const getData = (text) => {
    const pr = fetch(`https://google-map-places.p.rapidapi.com/maps/api/place/autocomplete/json?input=${text}&language=en&region=en`,
        {
            method:"GET",
            headers:
            {
                'x-rapidapi-host': 'google-map-places.p.rapidapi.com',
                'x-rapidapi-key': '50724e4e22msh3056f141c1efc51p1ce63ajsn609a39970aa6'
            }
        }
    );
    pr.then((res) => {
        const pr2 = res.json();
        pr2.then((data) => {
            showLocations(data.predictions);
        });
    });
};

const root = document.getElementById("locations");

const showLocations = (data) => {
    root.innerHTML = "";
    data.forEach((elem) => {
        const newDiv = document.createElement("div");
        newDiv.innerHTML = 
        `<h4>${elem.description}</h4>
        <h3></h3>`;
        root.appendChild(newDiv);
    });
}

// Debouncing the function to reduce the number of API calls

let timeoutId = null;

const handleSearch = (e) =>{
    if (timeoutId){
        clearTimeout(timeoutId);
    }
    timeoutId=setTimeout(()=>{
        getData(e.target.value);
    },1000);
}
