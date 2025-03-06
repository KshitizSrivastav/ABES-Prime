import "./SearchPage.css";
import Card from "../Components/Card";
const cards = [
    {
        title: "Invitation",
        text: "You are invited",
    },
    {
        title: "Notice",
        text: "Please look at the notice",
    }
]

const SearchPage = () =>{
    return (
        <div className="search-page">
            <header>Logo</header>
            <main>
                <h2>Search Here</h2>
                <div>
                    {/* <div>
                        <h3>{cards[0].title}</h3>
                        <label>{cards[0].text}</label>
                    </div>
                    <div>
                        <h3>{cards[1].title}</h3>
                        <label>{cards[1].text}</label>
                    </div> 
                    ****************forEach does not return values so we use map() in react for the purpose of looping and returning a value***************
                    */}

                    {/* {cards.map((elem)=>{
                        return(
                            <div key={elem.title}>
                                <h3>{elem.title}</h3>
                                <label>{elem.text}</label>
                            </div>
                        )
                    })} */}

                    {cards.map((elem)=>{
                        return <Card key={elem.title} title={elem.title} text={elem.text} />
                    })}
                </div>
            </main>
        </div>
    )
}

export default SearchPage;