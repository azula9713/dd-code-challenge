import axios from "axios";

const Server = axios.create({
  baseURL: "https://www.dnd5eapi.co/api",
});

export default Server;
