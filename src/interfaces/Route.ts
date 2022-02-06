export interface IRoute {
  route: string;
  destination: string;
  station: string;
  mins: number;
}

export type IRouteList = IRoute[];
