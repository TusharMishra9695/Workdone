export interface POSTS {
  data: {
    id: number;
    title: string;
    image: string;
  };
}
export interface PAGE {
  data: any;
  RenderComponent: Function;
  title: string;
  pageLimit: number;
  dataLimit: number;
}
export interface User {
  username: string;
  password: string | number;
}
//   export interface Cart {
//       id: any;
//       image: string;
//       title: string;
//       quantity :number;
//       price:number;
// }
export interface Item {
  postData: {
    id: any;
    image: string;
    description: string;
    title: string;
    price: number;
  };
}
