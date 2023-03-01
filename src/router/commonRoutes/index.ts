// helpers
import { IRoute } from "../../interfaces/routes";

// components
import NewsPage from "../../pages/NewsPage";

enum CommonRoutesEnum {
  News = "/news",
}

const commonRoutes: IRoute[] = [
  {
    path: CommonRoutesEnum.News,
    component: NewsPage,
    title: "News",
  },
];

export { commonRoutes, CommonRoutesEnum };
