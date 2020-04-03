import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import BaseLayout from './components/layout/BaseLayout'
import Blog from './components/Blog'
import Chat from './components/Chat'
import NoMatch from './components/NoMatch'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import Forms from './components/Forms'
import LiftingState from './components/LiftingState';

ReactDOM.render(

  // <BrowserRouter>
  //   <BaseLayout>
  //     <Switch>
  //       <Route exact path="/" component={App} />
  //       <Redirect from="aboutus" to="/" />
  //       <Route path="/aboutus" component={AboutUs} />
  //       <Route path="/contactus" component={ContactUs} />
  //       <Route exact path="/blog" component={Blog} />
  //       <Route path="/blog/:blogID" component={Blog} />
  //       <Route path="/chat" component={Chat} />
  //       <Route path="/forms" component={Forms} />
  //       <Route path="/liftingstate" component={LiftingState} />
  //       <Route component={NoMatch} />
  //     </Switch>
  //   </BaseLayout>
  // </BrowserRouter>,
  <App />,
  document.getElementById('root')
);


