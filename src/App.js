

import './App.css';
import {BrowserRouter,Route,Switch} from "react-router-dom"
import Headerspage from './Components/Headerpage/Headerspage';
import Contactus from './Components/Headerpage/Contactus';
import Productspage from "./Components/Headerpage/Productspage"
import Product from './Components/Headerpage/Product';
import Formvalidationusingfunctioncomponent from './Components/Headerpage/Formvalidationusingfunctioncomponent';
//import Usereducercounter from './Components/HOOKS/Usereducercounter';
import Todousingusereducer from './Components/TODOREDUCER/Todousingusereducer';
import Productspageusingredux from './Components/Productspageusingredux.js/Productspageusingredux';
import Productredux from './Components/Productspageusingredux.js/Productredux';
import Cartpageredux from './Components/Productspageusingredux.js/Cartpageredux';
import UseContexthooksender from './Components/HOOKS/UseContexthooksender';
import UsecontextAcomponent from './Components/HOOKS/UsecontextAcomponent';
import UsecontextDcomponent from './Components/HOOKS/UsecontextDcomponent';
import Usememohook from './Components/HOOKS/Usememohook';
import Ageandsalarydetails from './Components/USECALLBACK/Ageandsalarydetails';
import UseMemorevision from './Components/HOOKS/UseMemorevision';
import UseCallbackrevision from './Components/USECALLBACK/UseCallbackrevision';
import Forwardref from './Components/Useimperativehandleandforwardref.js/Forwardref';
import Useimperativehandle from './Components/Useimperativehandleandforwardref.js/Useimperativehandle';
import Clickcounter from './Components/Higherordercomponent/Clickcounter';
import Mouseonhovercount from './Components/Higherordercomponent/Mouseonhovercount';
import Childrenusingfunction from './Components/Higherordercomponent/Childrenusingfunction';
import Header from './Components/Reactrouter/Header';
import Contact from './Components/Reactrouter/Contactus';
import Login from './Components/Reactrouter/Login';
import Logout from './Components/Reactrouter/Logout';
import { Redirect } from 'react-router-dom';
import Privateroute from './Components/Reactrouter/Privateroute';
import About from "./Components/Reactrouter/About"
import Dashboard from "./Components/Reactrouter/Dashboard"
import Myprojects from "./Components/Reactrouter/Myprojects"
import Mytopics from "./Components/Reactrouter/Mytopics"
import Foodapp from './Components/SearchMovieMiniProject/Firebasedeployproject/Moviesearch';
import Todopractice from './Components/SearchMovieMiniProject/Firebase Todo project/Todopractice';
import Gmapsproject from './Components/SearchMovieMiniProject/Gmapsproject';
import Authentication_Form from './React_Firebase_Authentication/Authentication_Form';
import Home_page from './React_Firebase_Authentication/Home_page';
import Logic_to_form from './React_Firebase_Authentication/Logic_to_form';
import Covid_tracker from './COVID tracker/Covid_tracker';
import Sign_in_Auth_Google from './Signinwithgooglefirebase/Sign_in_Auth_Google';
import Count_down from './Count down timer/Count_down';
import Movie_Based_on_search from './Movie_Basedon_search/Movie_Based_on_search';
import Pagination_newprocess from './Pagination/Pagination_newprocess';

//import ExampleTodouereducer from './Components/TODOREDUCER/ExampleTodouereducer';
//import Paginationusinguseeffect from './Components/HOOKS/Paginationusinguseeffect';
//import Unmountusinguseeffect from './Components/HOOKS/Unmountusinguseeffect';
//import TODOAPPLICATIONUSINGUSESTATE from './Components/HOOKS/TODOAPPLICATIONUSINGUSESTATE';
//import USEEFFECTHOOK from './Components/HOOKS/USEEFFECTHOOK';

//import Counterappusingusestate from './Components/HOOKS/Counterappusingusestate';
//import Formvalidationusingusingclasscomponent from './Components/Formvalidationusingusingclasscomponent';

//import Getderivedstatefromprops from './Components/Getderivedstatefromprops';
//import Getsnapshotupdate from './Components/getsnapshotupdate';
//import Shouldcomponentupdate from './Components/Shouldcomponentupdate';
//import Conditonalrenderingandbuttons from './Components/Conditonalrenderingandbuttons';
//import Counter from './Components/Counter';
//import Lists from './Components/Lists';
//import Listandkeys from './Components/Listandkeys';
//import Profile from './Components/Profile';
//import Lifecyclemethodsclass1 from './Components/Lifecyclemethodsclass1';
//import Unmountingphase from './Components/Unmountingphase';
//mport UpdatePhaseComponentdidupdate from './Components/UpdatePhaseComponentdidupdate';


function App() {

  //var name = [1,2,3,4,5]
  return (
    <div >
    {/* <Profile serial= {1} name="Raghav" work="Wipro"/>
      <Profile serial= {2} name="pavan" work="capgemini"/>
      <Profile serial= {3} name="Rajesh" work="cognizant"/> 

      <Conditonalrenderingandbuttons/>
      <Counter name="Raghav"/>
      <Listandkeys/>
      <Lists values = {name}/>
  <Lifecyclemethodsclass1/> 
      <Unmountingphase/>
      <UpdatePhaseComponentdidupdate/>
      <Getderivedstatefromprops/>
      <Getsnapshotupdate/>
      <Shouldcomponentupdate/>
       <Counterappusingusestate/>
      <Formvalidationusingusingclasscomponent/>
     
  
      <TODOAPPLICATIONUSINGUSESTATE/>
      <USEEFFECTHOOK/>
      <Paginationusinguseeffect/>
      <Unmountusinguseeffect/>
      <Usereducercounter/>
      <ExampleTodouereducer/>
      <Productspage/>
      <Todousingusereducer/>
      
    <BrowserRouter>
    <Headerspage/>
      <Switch>
          <Route path="/contactusclass" exact component={Contactus}/>
          <Route path="/contactusfunction" exact component={Formvalidationusingfunctioncomponent}/>
          <Route path="/productspage" exact component={Productspageusingredux}/>
          <Route path="/product/:id" exact component={Productredux}/>
          <Route path="/cartpage" exact component={Cartpageredux}/>
      </Switch>
    </BrowserRouter>

      <UseContexthooksender/>
      <UsecontextAcomponent/>
      <UsecontextDcomponent/>

      <Usememohook/>
      <Ageandsalarydetails/> 
   
      <UseMemorevision/>
      <UseCallbackrevision/>
      <Forwardref/>
      <Useimperativehandle/>
      <Clickcounter/>
      <Mouseonhovercount/>
      <Childrenusingfunction name="raghav"/>*/}

      <Header/>
      <Switch>
        <Route path="/Foodrecipe" exact component={Movie_Based_on_search}/>
        <Route path="/todo" exact component={Todopractice}/>
        <Route path="/createaccount" exact component={Logic_to_form}/>
        {/*<Route path="/signin" exact component={Sign_in_Auth_Google}/>*/}
        
        <Route path="/login" component={Login}/>
        <Route path="/covidcount" exact component={Covid_tracker}/>
        <Route path="/logout"> <Redirect to="/login"/></Route>
        <Route path="/page" component={Pagination_newprocess}/>
        <Privateroute  path="/dashboard/:id" component={Dashboard}/>
           
        <Route path="/Myprojects" component={Count_down}/>
            
        <Privateroute path="/Mytopics" component={Mytopics}/>
          
        <Privateroute path="/contactus" component={Contact}/>
      </Switch>
    
      
    </div>
  );
}

export default App;
