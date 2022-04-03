import React from 'react';
import {BrowserRouter as Router,Route,Redirect} from 'react-router-dom'
import Subcategory from "./Subcategory"
import Displayall from './Displayall';
import Formatteddisplay from "./DisplayAllSubcategory"
import Category from "./Category"
import Dashboard from './dashboard/Dashboard'
// import Admin from "./subcomponents/Admin"
import Display from './DisplayAllVideo'
import Video from './Video';
// import AdminRouter from './subcomponents/AdminRouter';
import DisplayallEpisode from './DisplayallEpisode';
// import UserMainPage from './subcomponents/user/UserMainPage';
import UserCategoryAll from './user/UserCategoryAll'
import Userlogin from './user/Userlogin'
// import Dashboard from './dashboard/Dashboard'
import Admin from './Admin'
import UserMainPage from './user/UserMainPage'
// import Userlogin from './user/Userlogin'
import SignUp from './user/UserRegisteration'
export default function AdminRouter(props) {
 return(
  <Router>
<div>
{/* <Route path='/usercategoryall' exact strict component={UserCategoryAll}  history={props.history}/>
<Route path='/displayallepisodes' exact strict component={DisplayallEpisode}  history={props.history}/>
<Route path='/video' exact strict component={Video}  history={props.history}/>
<Route path='/display' exact strict component={Display}  history={props.history}/>
<Route path='/category' exact strict component={Category}  history={props.history}/>
<Route path='/displayallsubcategory' exact strict component={Formatteddisplay}  history={props.history}/>
<Route path='/displayall' exact strict component={Displayall}  history={props.history}/>
<Route path='/subcategory' exact strict component={Subcategory}  history={props.history}/>
 <Route path='/signup' exact strict component={SignUp}  history={props.history}/>
<Route path='/login' exact strict component={Userlogin}  history={props.history}/> */}
  <Route path='/admin' exact strict component={Admin}  history={props.history}/>
  <Route path='/dashboard' exact strict component={Dashboard}  history={props.history}/>
  <Route path='/home' exact strict component={UserMainPage}  history={props.history}/>

</div>

  </Router>  

  

 )
}