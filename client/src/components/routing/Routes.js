import React from "react";
import { Route, Switch } from "react-router-dom";
import Register from "components/auth/Register";
import Login from "components/auth/Login";
import Alert from "components/layout/Alert";
import Dashboard from "components/dashboard/Dashboard";
import CreateProfile from "components/profile-forms/CreateProfile";
import EditProfile from "components/profile-forms/EditProfile";
import AddExperience from "components/profile-forms/AddExperience";
import Profiles from "components/profiles/Profiles";
import Profile from "components/profile/Profile";
import Stories from "components/stories/Stories";
import Story from "components/story/Story";
import NotFound from "components/layout/NotFound";
import PrivateRoute from "components/routing/PrivateRoute";

const Routes = () => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profiles" component={Profiles} />
        <Route exact path="/profile/:id" component={Profile} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/create-profile" component={CreateProfile} />
        <PrivateRoute exact path="/edit-profile" component={EditProfile} />
        <PrivateRoute exact path="/add-guestbook" component={AddExperience} />
        <PrivateRoute exact path="/stories" component={Stories} />
        <PrivateRoute exact path="/stories/:id" component={Story} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
