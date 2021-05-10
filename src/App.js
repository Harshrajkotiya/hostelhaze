import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

/*
* @ All pages Import
*/
import Demo from './pages/Demo'
import HomeOne from './pages/HomeOne'
import HomeTwo from './pages/HomeTwo'
import Service from './pages/Service'
import ServiceDetails from "./pages/ServiceDetails";
import BlogGridRightSidebar from './pages/BlogGridRightSidebar';
import BlogGridLeftSidebar from './pages/BlogGridLeftSidebar';
import BlogGridWithoutSidebar from './pages/BlogGridWithoutSidebar';
import BlogListLeftSidebar from './pages/BlogListLeftSidebar';
import BlogListRightSidebar from './pages/BlogListRightSidebar';
import BlogDetailsPage from "./pages/BlogDetails";
import Team from "./pages/Team";
import TeamDetails from "./pages/TeamDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error404 from "./pages/Error404";
import ScrollToTop from "./helpers/ScrollToTop";
import Posts from './pages/Posts';
import PostRequest from './pages/PostRequest';
import Register from './pages/Register';
import Login from './pages/Login';
import NewComplainbox from './pages/NewComplainbox';
import ComplainBox from './pages/ComplainBox';
import StudentInfo from './pages/StudentInfo';
import MessMenu from './pages/MessMenu';
import MyPost from './pages/MyPost';
import MyComplain from './pages/MyComplain';


const App = () => {
    return (
        <Router>
            <ScrollToTop>
                <Switch>
                    <Route exact path={'/'} component={HomeOne}/>
                    <Route exact path={'/home'} component={HomeOne}/>
                    {/*<Route exact path={'/home-two'} component={HomeTwo}/>*/}
                    <Route exact path={'/services'} component={Service}/>

                    <Route exact path={'/messmenu'} component={MessMenu}/>
                    <Route exact path={'/mypost'} component={MyPost}/>
                    <Route exact path={'/mycomplain'} component={MyComplain}/>


                    <Route exact path={'/studentinfo'} component={StudentInfo}/>
                    <Route exact path={'/newcomplainbox'} component={NewComplainbox}/>
                    <Route exact path={'/complainbox'} component={ComplainBox}/>
                    <Route exact path={'/register'} component={Register}/>
                    <Route exact path={'/login'} component={Login}/>
                    <Route exact path={'/posts'} component={Posts}/>
                    <Route exact path={'/postrequest'} component={PostRequest}/>

                    {/*<Route path={'/service/:serviceID'} component={ServiceDetails}/>*/}
                    {/*<Route exact path={"/blog-grid-right-sidebar"}*/}
                    {/*       component={BlogGridRightSidebar}/>*/}
                    {/*<Route exact path={"/blog-grid-left-sidebar"}*/}
                    {/*       component={BlogGridLeftSidebar}/>*/}
                    {/*<Route exact path={"/blog-grid-without-sidebar"}*/}
                    {/*       component={BlogGridWithoutSidebar}/>*/}
                    {/*<Route exact path={"/blog-list-left-sidebar"}*/}
                    {/*       component={BlogListLeftSidebar}/>*/}
                    {/*<Route exact path={"/blog-list-right-sidebar"}*/}
                    {/*       component={BlogListRightSidebar}/>*/}
                    {/*<Route path={"/blog/:blogID"} component={BlogDetailsPage}/>*/}
                    <Route exact path={"/team"} component={Team}/>
                    <Route path={"/team-member/:teamID"} component={TeamDetails}/>
                    <Route exact path={"/about"} component={About}/>
                    <Route exact path={"/contact"} component={Contact}/>
                    <Route exact component={Error404}/>
                </Switch>
            </ScrollToTop>
        </Router>
    );
};

export default App;