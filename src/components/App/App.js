import Conteiner from "../Conteiner";
import NavBar from "../NavBar";
import ComponenetLoder from "../ComponenetLoder";

import PublicRoute from '../PublicRoute';
import PrivateRoute from "../PrivateRoute";

import { lazy, Suspense } from "react";
import { useHistory } from "react-router";
import { useEffect } from "react";
import { Switch } from "react-router";
import { useSelector } from "react-redux";
import authSelector from "../../redux/auth/auth-selector";

const UserPage = lazy(() =>
    import("../UserPage" /* webpackChukName: "user-page" */)
);
const LoginContacts = lazy(() =>
    import("../LoginContacts" /* webpackChukName: "login-page" */)
);
const RegisterForm = lazy(() =>
    import("../RegisterForm" /* webpackChukName: "register-page" */)
);


export default function App() {
    const isLoggedIn = useSelector((state) => authSelector.getIsLoggedIn(state));
    const history = useHistory();

    useEffect(() => {
        isLoggedIn ? history.push('/contacts') : history.push('/login');
    }, [history, isLoggedIn]);
    
    return (
        <Conteiner>
            <NavBar isLoggedId={isLoggedIn} />
            <Switch>
                <Suspense fallback={<ComponenetLoder />}>
                    <PublicRoute exact path="/login">
                        <LoginContacts />
                    </PublicRoute>
                    <PublicRoute exact path="/register">
                        <RegisterForm />
                    </PublicRoute>
                    <PrivateRoute exact path="/contacts">
                        <UserPage />
                    </PrivateRoute>
                </Suspense>
            </Switch>
        </Conteiner>

    );
}
