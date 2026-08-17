import { BASE_PATH } from "./paths";

const SITE_URL = "https://mz0702.github.io";

export const absoluteUrl = (path = "/") =>
  `${SITE_URL}${BASE_PATH}${path === "/" ? "" : path}`.replace(/(?<!:)\/{2,}/g, "/");

export const SITE_NAME = "Sachverständigenbüro Arne Müller";
