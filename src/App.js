import React from 'react';
import './App.css';
import Header from "./Components/Header/Header"
import Nav from './Components/Sidebar/Nav';
import Footer from './Components/Footer/Footer';
import {Route} from 'react-router-dom';
import DialogsContainer from "./Components/Content/Dialogs/DialogsContainer";
import ContentContainer from "./Components/Content/ContentContainer";
import ContentUsersFind from "./Components/UsersFind/usersFindContainer";


const App = () => {
    return (
        <div className="header__bg">
            <div className="container">
                <Header/>
                <Nav/>
                <div className="content__wrapper">
                    <Route path="/Content"
                           render={() => <ContentContainer/>}/>
                    <Route path="/Dialogs"
                           render={() => <DialogsContainer/>}/>
                    <Route path={"/UsersFind"}
                           render={() => <ContentUsersFind/>}/>
                </div>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
