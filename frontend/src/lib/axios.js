import axios from "axios";

export const api = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "https://chatapp-nine-woad.vercel.app/"
      : "/api",
  withCredentials: true,
});
