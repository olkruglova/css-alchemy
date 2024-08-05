import { API } from "./api";

export async function fetchJSON(path: string, options?: RequestInit) {
  const url = new URL(path, API.base);

  console.log("url", url);

  try {
    const response = await fetch(url);
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new TypeError("Oops, we haven't got JSON!");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
