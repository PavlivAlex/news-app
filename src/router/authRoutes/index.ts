// helpers
import { IRoute } from "../../interfaces/routes";

// components
import LogInPage from "../../pages/LogInPage";
import WelcomePage from "../../pages/WelcomePage";

enum AuthRoutesEnum {
  Root = "/",
  LogIn = "/login",
}

const authRoutes: IRoute[] = [
  {
    path: AuthRoutesEnum.Root,
    component: WelcomePage,
    title: "Welcome",
  },
  {
    path: AuthRoutesEnum.LogIn,
    component: LogInPage,
    title: "Log In",
  },
];

export { authRoutes, AuthRoutesEnum };
