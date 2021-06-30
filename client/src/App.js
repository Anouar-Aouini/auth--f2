import Register from "./components/Register";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";
import { useDispatch } from "react-redux";
import { current } from "./redux/actions/actions";
import { useEffect } from "react";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(current());
    }, [dispatch]);
    return (
        <div className="App">
            <NavBar />
            <Switch>
                <Route path="/home">
                    <LandingPage />
                </Route>
                <Route path="/user/register" component={Register} />
                <Route path="/login" component={Login} />
                <PrivateRoute path="/user/profile" component={Profile} />
            </Switch>
        </div>
    );
}

export default App;