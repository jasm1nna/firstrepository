import Header from "./pages/header/header";
import {Route,Routes} from 'react-router-dom'
import HomePage from "./pages/home-page/home-page";
import DetailPage from "./pages/detail-page/detail-page";
import BasketPage from "./pages/basket-page/basket-page";

function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/details/:id" element={<DetailPage/>} />
      <Route path="/basket" element={<BasketPage/>}/>
    </Routes>
    </div>
  );
}

export default App;
