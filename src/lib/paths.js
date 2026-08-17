const isProd = process.env.NODE_ENV === "production";

export const BASE_PATH = isProd ? "/gutachter-mueller-v2" : "";

export const asset = (path) => `${BASE_PATH}${path}`;
