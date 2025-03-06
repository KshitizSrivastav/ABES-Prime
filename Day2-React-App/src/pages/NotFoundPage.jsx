import { Link } from "react-router";

const NotFoundPage = () => {
    return (
        <div>
            <h2>Page not Found</h2>
            {/* <a href="/">Home</a>    TO reload the page  */}
            <Link to="/">Home</Link>   {/* To prevent the reloading of the page */}
        </div>
    )
}

export default NotFoundPage;