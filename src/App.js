import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/home/Home";
import AboutPage from "./components/about/AboutPage";
import Header from "./components/common/Header";
import PageNotFound from "./PageNotFound";
import CoursesPage from "./components/courses/CoursePage";
import ManageCoursePage from "./components/courses/ManageCoursePage";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route path="/course" component={ManageCoursePage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
