import Home from "pages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import Gallery from "pages/GalleryPage/GalleryPage";
import Favorite from "pages/FavoritePage/FavoritePage";

export const App = () => {

  return (
    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101'
    //   }}
    // >
      <Routes>      
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="/gallery" element ={<Gallery />}/>
          <Route path="/favorites" element={<Favorite />}/>
        </Route>        
      </Routes>
      
  );
};
