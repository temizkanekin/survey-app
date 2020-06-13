import React from 'react';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar'
import LeftPanel from './components/LeftPanel/LeftPanel'
import RightPanel from './components/RightPanel/RightPanel'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {IntlProvider} from "react-intl";
import { connect } from 'react-redux'
import messages_tr from './localization/tr.json'
import messages_en from './localization/en.json'

const messages = {
  'TR': messages_tr,
  'EN': messages_en
};

const App = ({selectedLanguage,...props}) => {
  return (
    <IntlProvider locale='en' messages={messages[selectedLanguage]}>
    <Router>
    <div className="header">
      <Toolbar />
    </div>
    <div className="content">
      <div className="w-1/2 h-full flex border-r border-white border-solid">
        <LeftPanel />
      </div>
      <div className="w-1/2 h-full flex">
      <Switch>
        <Route path="/operation/:operation" component={RightPanel} exact />
        <Route path="/operation/:operation/survey/:survey" component={RightPanel} exact />
      </Switch>
      </div>
    </div>
    </Router>
    </IntlProvider>
  );
}

const mapStateToProps = (state, ownProps) => {
  return { ...state.surveyState }
}

export default connect(
  mapStateToProps,
  undefined
)(App);
