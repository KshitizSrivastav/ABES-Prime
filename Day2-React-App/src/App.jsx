import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import NotFoundPage from "./pages/NotFoundPage";
import {BrowserRouter,Routes,Route} from 'react-router';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
  )
}


export default App;