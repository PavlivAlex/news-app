export interface IReduxAction<T = any> {
  type: string;
  payload: T;
  key: string;
}
