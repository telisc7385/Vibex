import { apiCore } from "./apiCore";

export const getsectionApi = async () => {
    const response = await apiCore('/api/section-config/', {}, 'GET');
    return response;
  };