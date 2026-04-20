import { Message } from "@/types/contact";
import axios, { AxiosError } from "axios";

const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

if (!apiUrl) {
  throw new Error(`Backend API not setup properly: ${apiUrl}`);
}

export const api = axios.create({
  baseURL: apiUrl,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (req) => req,
  (error: AxiosError<{ error: string }>) => {
    const message =
      error.response?.data.error ?? error.message ?? "something went wrong";
    return Promise.reject(new Error(message));
  },
);

export const sendMessageApi = async (message: Message) => {
  await api.post("/contact", message);
};
