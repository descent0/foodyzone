import { lazy, useState, Suspense } from "react";
import { MainBody } from "./Components/MainBody";
import { Header } from "./Components/header";
import { ContextOfRecipeCards, MyContext, ProfileContext } from "./Context";
import { LandingPage } from "./Components/LandingPage";
import { OrderCards } from "./Components/OrderCards";
import { createBrowserRouter, Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar";
import RecipeDetailCards from "./Components/RecipeDetailCard";
import { useRecipe } from "./CustomHooks/RecipeFetch";
import { useOnline } from "./CustomHooks/useOnline";
import {Service} from "./Components/Service";
import Profile from "./Components/Profile";
import ProfileData from "./assets/Profile.Data";
import Login from "./Components/Login";
import Cart from "./Components/Cart";
import { Provider, useSelector } from "react-redux";
import { store } from "./Store/store";


const About = lazy(() => import("./Components/About"));

function App() {
  const [searchQuery, setSearchQuery] = useState();
  const [selected, setSelected] = useState("All");
  const [ingredients, setIngredients] = useState("all");
  const [recipe, setRecipe] = useState(null);
  const { recipeData, isLoading, error } = useRecipe(
    ingredients !== null && selected !== "All"
      ? `https://api.edamam.com/search?q=${ingredients}&from=0&to=100&mealType=${selected}&app_id=61a846f8&app_key=c5271618bc0724e42b750bf8d90b9076`
      : `https://api.edamam.com/search?q=${ingredients}&from=0&to=100&app_id=61a846f8&app_key=c5271618bc0724e42b750bf8d90b9076`
  );
  const context = {
    searchQuery,
    setSearchQuery,
    selected,
    setSelected,
    ingredients,
    setIngredients,
    recipe,
    setRecipe,
    recipeData,
    isLoading,
    error,
  };

  return (
    <>
    
      <MyContext.Provider value={context}>
        <div className="flex flex-col   items-center overflow-x-hidden ">
          <Header />
          <Outlet />
        </div>
      </MyContext.Provider>
      
    </>
  );
}

function AppLayot() {
  const online = useOnline();
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  const [loginButtonClicked,setLoginButtonClicked]=useState(false);
  const profileCont={
    ProfileData,
    isLoggedIn,
    setIsLoggedIn,
    loginButtonClicked,setLoginButtonClicked
  }


  if (!online) {
    return (
      <>
        <h1>Oops !! Check Your internet connection</h1>
      </>
    );
  }
  return (
    <>
    <Provider store={store}>
      <div className={"overflow-x-hidden"}>
        <ProfileContext.Provider value={profileCont}>
        <NavBar />
        <Outlet />
        </ProfileContext.Provider>
      </div>
      </Provider>
    </>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayot />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/home",
        element: <App />,
        children: [
          {
            path: "",
            element: <MainBody />,
          },
          {
            path: "recipeCard",
            element: <RecipeDetailCards />,
          },
        ],
      },
      {
        path: "/about",
        element: (
          <Suspense
            fallback={
              <>
                <div className="w-full sm:p-10 h-fit sm:pr-20 flex flex-wrap items-center justify-center sm:justify-start gap-10"></div>
              </>
            }
          >
            <About />
          </Suspense>
        ),
      },
      {
        path: "services",
        element: <Service />,
      },
      {
        path:"profile",
        element:<Profile/>
            },
            {
              path:"login",
              element:<Login/>
            },
            {
              path:"cart",
              element:<Cart/>
            }
            
    ],
  },
]);

export default App;
