import "dreamland";
import { Route, Router } from "dreamland-router";
import Home from "./routes/home";
new Router(
  (
  <Route>
    <Route path="/" show={<Home />} />
  </Route>
  ),
).mount(document.getElementById("root"));

