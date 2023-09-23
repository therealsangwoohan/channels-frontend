import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import PageLoader from "./components/PageLoader"
import Home from "./views/Home";
import CreateChannel from "./views/CreateChannel";
import Profile from "./views/Profile";
import Discover from "./views/Discover";
import Channel from "./views/Channel";
import { AuthenticationGuard } from "./components/AuthentificationGuard";

function Website() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <PageLoader></PageLoader>
    )
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route
          path="/discover"
          element={<AuthenticationGuard component={Discover} />}
        />
        <Route
          path="/create-channel"
          element={<AuthenticationGuard component={CreateChannel} />}
        />
        <Route
          path="/profile"
          element={<AuthenticationGuard component={Profile} />}
        />
        <Route
          path="/channels/:channel_id"
          element={<AuthenticationGuard component={Channel} />}
        />
      </Routes>
    </Router>
  );
}

export default Website;
