import { Route, Switch, useRouteMatch } from "react-router-dom";
import About from "./About";
import Features from "./Features";
import Benefits from "./Benefits";
import "../../../css/aboutUs.css";

export default function AboutUsPage() {
  const products = useRouteMatch();
  console.log("products:", products);

  return (
    <div className={"products-page"}>
        <Route >
          <About />
          <Features />
          <Benefits />
        </Route>
    </div>
  );
}
