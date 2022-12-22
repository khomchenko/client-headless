import _ from "lodash";
import fs from "fs";
import path from "path";
import { useState } from "#app";

const { get } = _;

/**
 * Use data from the server, and fetch a property from it via the path argument, using the lodash PropertyPath syntax.
 *
 * Pass in a generic type argument to set the expected type of the data. This is not checked, but it instead can
 * be used to specify types so that, assuming valid data object exists, the static typing will be correct in
 * code that consumes this data.
 *
 * If the data at the property is undefined, an error will be thrown. If the data is expected to not exist, instead
 * fetch the nearest property that is expected to exist, and then dynamically access data on that.
 *
 * @param key - Hydration key for nuxt
 * @param path - Path specified in lodash PropertyPath syntax
 */
export default function useData<T>(key: string, path: string) {
  return useState(key, () => getSpecificData(path) as T);
}
/**
 * This is called only during the init functions of the useState nuxt composable.
 *
 * Meaning it will run only on the server, not in the browser.
 *
 * @param path
 */
function getSpecificData(path: string) {
  const value = get(loadData(), path);
  if (typeof value === "undefined") {
    throw new Error(
      `Data at path '${path}' is undefined, and no default value was provided`
    );
  }

  return value;
}
function loadData() {
  return validateData(parseDataString(loadDataFile()));
}
function validateData(data: any) {
  if (typeof data !== "object" || !data) {
    throw new Error("Error data is not an object (or array)");
  }
  return data;
}
function parseDataString(dataString: string) {
  try {
    return JSON.parse(dataString);
  } catch (error) {
    throw new Error("Failed to parse content JSON");
  }
}
function loadDataFile() {
  const config = useRuntimeConfig();
  // Todo: add configuration options as environment variables to control this file.
  // Todo: handle error conditions such as file not found and produce useful messages.
  // Todo: perhaps trigger loading of the JSON on the server if the file is missing.
  return fs
    .readFileSync(path.resolve(config.SERVER_PROJECT_ROOT, "static/site.json"))
    .toString();
}
