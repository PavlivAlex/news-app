export interface IRoute {
  path: string;
  title: string;
  component: () => JSX.Element;
}
