import { render } from "@testing-library/react";
import NavBar from "../NavBar";
import { Provider } from "react-redux";
import { store } from "../../Store/store";
import {StaticRouter} from "react-router-dom/server"

//test cases in react
test("Logo Should Load On Rendering Header", () => {
  const header = render(
   <StaticRouter>
    <Provider store={store}>
      <NavBar />
    </Provider>
    </StaticRouter>
  );
  console.log(header);
});
