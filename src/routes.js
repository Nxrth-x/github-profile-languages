import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainPage from "./pages/main-page";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
