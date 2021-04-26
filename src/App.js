import './App.css';
import {Main} from "./components/Main";
import {AboutSchool} from "./components/AboutSchool";
import {Study} from "./components/Study";
import {Test} from "./components/Test";
import {Authorization} from "./components/Authorization";
import {ContactUs} from "./components/ContactUs";
import {Footer} from "./components/Footer";
import {Menu} from "./components/Menu";
import {Route, BrowserRouter} from "react-router-dom";
import {Registration} from "./components/Registration";
import {Category} from "./components/Category";



function App() {
  return (
      <div>
         <BrowserRouter>
            <Menu/>
            <Route exact path="/" render={()=><Main/>}/>
            <Route path="/about" render={()=><AboutSchool/>}/>
            <Route path="/admission" render={()=><Study/>}/>
            <Route path="/why" render={()=><Test/>}/>
            <Route path="/category" render={()=><Category/>}/>
            <Route path="/contact" render={()=><ContactUs/>}/>
            <Route path="/authorization" render={()=><Authorization/>}/>
            <Route path="/registration" render={()=><Registration/>}/>
            <Footer/>
         </BrowserRouter>
      </div>
  );
}

export default App;
