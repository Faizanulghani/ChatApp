import axios from "axios";

export const api = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "https://chatapp-9ourksjb1-faizan-ul-ghanis-projects.vercel.app/"
      : "/api",
  withCredentials: true,
});
