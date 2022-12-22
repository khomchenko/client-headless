import { Content, FieldGroup } from "@/types";

let currentContentPage: {
  field_groups: FieldGroup[];
} | null = null;

export const pageContent = (contents: Content[], slugs: string[]) => {
  currentContentPage = null;

  if (slugs.length > 0 && currentContentPage === null) {
    contents.forEach((content: Content) => {
      slugs.forEach((slug) => {
        if (content.nested) {
          searchContent(content, slug);
        }
      });
    });

    return currentContentPage;
  } else {
    return contents.find((content: Content) => {
      if (content.slug === "/") return content;
    });
  }
};

const searchContent = (item: Content, slug: string) => {
  if (item.slug === slug) {
    currentContentPage = item;

    return item;
  } else if (item.nested && item.nested.length > 0) {
    item.nested.forEach((content: Content) => {
      searchContent(content, slug);
    });
  }
};
