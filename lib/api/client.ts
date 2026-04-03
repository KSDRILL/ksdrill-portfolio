import type { ApiError } from "@/types/api";
import { loadApiConfig } from "@/lib/config-loader";

async function handleResponse<T>(res: Response): Promise<T> {
  if (!res.ok) {
    const error: ApiError = {
      message: "Request failed",
      status: res.status,
      code: String(res.status)
    };
    throw error;
  }
  return (await res.json()) as T;
}

export const apiClient = {
  async get<T>(path: string): Promise<T> {
    const config = loadApiConfig();
    const url = `${config.baseUrl}${path}`;
    const res = await fetch(url);
    return handleResponse<T>(res);
  }
};

