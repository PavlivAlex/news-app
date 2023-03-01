// helpers
import { IRoute } from "../../interfaces/routes";

// components
import ProfilePage from "../../pages/ProfilePage";

enum ProfileRoutesEnum {
  Profile = "/profile",
}

const profileRoutes: IRoute[] = [
  {
    path: ProfileRoutesEnum.Profile,
    component: ProfilePage,
    title: "Profile",
  },
];

export { ProfileRoutesEnum, profileRoutes };
