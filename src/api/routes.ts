import { http } from "@/utils/http";

type Result = {
  content: Array<any>;
};

export const getAsyncRoutes = () => {
  return http.request<Result>("get", "/get-async-routes");
};
