import { contentRefs } from "@/helpers/contentReference";
import {
  Field,
  FieldState,
  FieldValues,
  FieldGroup,
  MediaFieldState,
} from "@/types";

export const getStringField = (
  item: FieldState | FieldGroup,
  name: string
): string | null => {
  return getByReferenceName(item, name);
};

export const getMediaField = (
  item: FieldState | FieldGroup,
  name: string
): MediaFieldState | null => {
  return getByReferenceName(item, name);
};

export const getByReferenceName = (
  item: FieldState | FieldGroup,
  reference_name: string
) => {
  return item.fields
    ?.filter((field: Field) => field.template.reference_name === reference_name)
    ?.pop()
    ?.values.filter((value: FieldValues) => value?.language?.code === "en")
    ?.pop()?.state as any;
};

export const getRepeaterByReferenceName = (
  item: FieldState | FieldGroup,
  reference_name: string
) => {
  return item.fields
    ?.filter((field: Field) => field.template.reference_name === reference_name)
    ?.pop()?.values[0].state as unknown as Field[];
};

export const isAvailableGroup = (
  item: FieldState | FieldGroup,
  reference_name: string
) => {
  return item.template?.reference_name === reference_name;
};

export const getContentReference = (item: FieldState, field_name: string) => {
  if (getByReferenceName(item, field_name) !== null) {
    let link = getByReferenceName(item, field_name)?.slug;

    if (link) return contentRefs[link];
  } else {
    return null;
  }
};

export const parsePath = (path: string) => {
  return path.split("/").filter((item) => item !== "");
};

export const createSitemap = (url: string, keys: string[]) => {
  let string = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  keys.forEach((key, index) => {
    string =
      string + `<url><loc>${url.replace(/\/$/, "") + keys[index]}</loc></url>`;
  });
  return string + `</urlset>`;
};
