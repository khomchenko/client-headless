import fs from "fs";
import { contentRefs, contentWalk } from "@/helpers/contentReference";
import { createSitemap } from "@/helpers/persistenceStorage";
import { Site } from "@/types";
import path from "path";

export default async function (req: any, res: any) {
  const config = useRuntimeConfig();

  try {
    const data: Site = await $fetch(
      `${config.API_BASE_URL}/site/${config.API_SITE_NAME}`
    );

    contentWalk(data.content_group.contents, null);

    let contentPages = Object.values(contentRefs);

    fs.writeFileSync(
      path.resolve(config.SERVER_PROJECT_ROOT, "static/site.json"),
      JSON.stringify(data)
    );
    fs.writeFileSync(
      path.resolve(config.SERVER_PROJECT_ROOT, "sitemap.xml"),
      createSitemap(config.SITE_URL, contentPages)
    );

    return res.end();
  } catch (e: any) {
    return e;
  }
}
