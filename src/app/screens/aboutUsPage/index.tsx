import { Route, Switch, useRouteMatch } from "react-router-dom";
import About from "./About";
import Features from "./Features";
import Benefits from "./Benefits";
import "../../../css/aboutUs.css";

export default function AboutUsPage() {
  const products = useRouteMatch();
  console.log("aboutUs:", products);

  return (
    <div className={"aboutUs-page"}>
        <Route >
          <About />
          <Features />
          <Benefits />
        </Route>
    </div>
  );
}
