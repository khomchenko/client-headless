import { Content } from "@/types";

export const contentRefs: {
  [key: string]: string;
} = {};

export const contentWalk = (
  contents: Content[],
  parent: { slug: string } | null
) => {
  contents.forEach((content: Content) => {
    let slug = "";

    if (parent && parent.slug !== "/") {
      slug = `/${contentRefs[parent.slug]}/${content.slug}`;
    } else {
      slug = `/${content.slug}`;
    }

    contentRefs[content.slug] = slug.replace(/\/{2,}/g, "/");

    if (content.nested.length > 0) {
      contentWalk(content.nested, content);
    }
  });
};
