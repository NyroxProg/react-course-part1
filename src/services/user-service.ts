// import apiClient from "./api-client";
import HttpService, { Entity } from "./http-service";

interface UserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: { lat: string; long: string };
}

export interface User extends Entity {
  username: string;
  email?: string;
  address?: UserAddress;
}

export default new HttpService<User>("/users");
