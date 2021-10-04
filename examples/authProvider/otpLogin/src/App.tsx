import { Refine, AuthProvider } from "@pankod/refine";
import dataProvider from "@pankod/refine-json-server";
import routerProvider from "@pankod/refine-react-router";

import "@pankod/refine/dist/styles.min.css";

import { PostList, PostCreate, PostEdit, PostShow } from "pages/posts";
import { Login } from "pages/login";

const API_URL = "https://api.fake-rest.refine.dev";

const routeProvider = routerProvider();

const App: React.FC = () => {
    const authProvider: AuthProvider = {
        login: ({ gsmNumber, code }) => {
            if (code === "1234") {
                localStorage.setItem("gsmNumber", gsmNumber);
                return Promise.resolve();
            }

            return Promise.reject({ message: "Login code: 1234" });
        },
        logout: () => {
            localStorage.removeItem("gsmNumber");
            return Promise.resolve();
        },
        checkError: () => Promise.resolve(),
        checkAuth: () =>
            localStorage.getItem("gsmNumber")
                ? Promise.resolve()
                : Promise.reject(),
        getPermissions: () => Promise.resolve(["admin"]),
    };

    return (
        <Refine
            dataProvider={dataProvider(API_URL)}
            routerProvider={routeProvider}
            authProvider={authProvider}
            LoginPage={Login}
            resources={[
                {
                    name: "posts",
                    list: PostList,
                    create: PostCreate,
                    edit: PostEdit,
                    show: PostShow,
                },
            ]}
        />
    );
};

export default App;
