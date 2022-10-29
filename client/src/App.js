import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";

import "./App.css";
import Header from "./components/Mailpage/Header/Header";
import Mail from "./components/Mailpage/mail/Mail";
import Sidebar from "./components/Mailpage/sidebar/Sidebar";
import EmailList from "./components/Mailpage/emailList/EmailList";
import SendMail from "./components/Mailpage/sendMail/SendMail";
import { useSelector  } from "react-redux";
// import { openSendMessage, closeSendMessage} from './features/mailSlice'
import {sendMessageIsOpen} from "./features/mailSlice";

function App() {
  const sendMessageIsOpen = useSelector((state)=>state.mail.sendMessageIsOpen );
  // console.log(sendMessageIsOpen)
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar />

          <Switch>
            <Route path="/mail">
              <Mail />
            </Route>

            <Route path="/">
              <EmailList />
            </Route>
          </Switch>
        </div>

        { sendMessageIsOpen && <SendMail/> }
      </div>
    </Router>
  );
}

export default App;
