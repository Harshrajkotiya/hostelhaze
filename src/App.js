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
                    <Route exact path={`${process.env.PUBLIC_URL + '/'}`} component={Demo}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/home-one'}`} component={HomeOne}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/home-two'}`} component={HomeTwo}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/services'}`} component={Service}/>

                    <Route exact path={`${process.env.PUBLIC_URL + '/messmenu'}`} component={MessMenu}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/mypost'}`} component={MyPost}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/mycomplain'}`} component={MyComplain}/>


                    <Route exact path={`${process.env.PUBLIC_URL + '/studentinfo'}`} component={StudentInfo}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/newcomplainbox'}`} component={NewComplainbox}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/complainbox'}`} component={ComplainBox}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/register'}`} component={Register}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/login'}`} component={Login}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/posts'}`} component={Posts}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/postrequest'}`} component={PostRequest}/>

                    <Route path={`${process.env.PUBLIC_URL + '/service/:serviceID'}`} component={ServiceDetails}/>
                    <Route exact path={`${process.env.PUBLIC_URL + "/blog-grid-right-sidebar"}`}
                           component={BlogGridRightSidebar}/>
                    <Route exact path={`${process.env.PUBLIC_URL + "/blog-grid-left-sidebar"}`}
                           component={BlogGridLeftSidebar}/>
                    <Route exact path={`${process.env.PUBLIC_URL + "/blog-grid-without-sidebar"}`}
                           component={BlogGridWithoutSidebar}/>
                    <Route exact path={`${process.env.PUBLIC_URL + "/blog-list-left-sidebar"}`}
                           component={BlogListLeftSidebar}/>
                    <Route exact path={`${process.env.PUBLIC_URL + "/blog-list-right-sidebar"}`}
                           component={BlogListRightSidebar}/>
                    <Route path={`${process.env.PUBLIC_URL + "/blog/:blogID"}`} component={BlogDetailsPage}/>
                    <Route exact path={`${process.env.PUBLIC_URL + "/team"}`} component={Team}/>
                    <Route path={`${process.env.PUBLIC_URL + "/team-member/:teamID"}`} component={TeamDetails}/>
                    <Route exact path={`${process.env.PUBLIC_URL + "/about"}`} component={About}/>
                    <Route exact path={`${process.env.PUBLIC_URL + "/contact"}`} component={Contact}/>
                    <Route exact component={Error404}/>
                </Switch>
            </ScrollToTop>
        </Router>
    );
};

export default App;