import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from '../HomePage'
import UserContext from "../context/UserContext";
import { useContext } from "react";

const Layout = () => {
  const { data } = useContext(UserContext);
  

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path={"/:id"} element={<HomePage />}/> */}
        {data && data.map(({categoryDescription})=>{
          return(
            <>
              <Route path={"/"+categoryDescription+ "/:id"} element={<HomePage />}/>
            </>
          )
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default Layout;
