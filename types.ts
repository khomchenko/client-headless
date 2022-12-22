export interface CommonStore {
  isOpenSearchPopup: boolean;
  isOpenLanguagesPopup: boolean;
  isOpenMobileMenu: boolean;
  isOpenSharePopup: boolean;
  isOpenChangePopup: boolean;
  isOpenFilterPopup: boolean;
}

export interface Site {
  content_group: ContentGroup;
  created_at: string;
  domain: string;
  id: number;
  languages: Language[];
  name: string;
  slug: string;
  updated_at: string;
  uuid: string;
}

export interface ContentGroup {
  contents: Content[];
  id: number;
  name: string;
  site_id: number;
  uuid: string;
}

export interface Content {
  content_template: [];
  content_template_id: number;
  created_at: string;
  deleted_at: string;
  field_groups: FieldGroup[];
  id: number;
  nested: [];
  order: number;
  slug: string;
  title: string;
  updated_at: string;
  uuid: string;
}

export interface Language {
  children: [];
  content_template: string;
  content_template_id: number;
  created_at: string;
  deleted_at: string;
  field_groups: FieldGroup[];
  id: number;
  slug: string;
  title: string;
  updated_at: string;
  uuid: string;
}

export interface FieldGroup {
  field_group_template_id: number;
  fields: Field[];
  id: number;
  parent_id: number;
  parent_type: string;
  template: FieldGroupTemplate;
  uuid: string;
}

export interface Field {
  state: null | FieldState;
  created_at: string;
  field_group_id: number;
  field_template: FieldTemplate;
  field_template_id: number;
  field_values: FieldValues[];
  id: number;
  type_name: string;
  updated_at: string;
  uuid: string;
}

export interface FieldTemplate {
  config: [];
  description: string;
  group_template_id: number;
  id: number;
  name: string;
  reference_name: string;
  type: string;
  uuid: string;
}

export interface FieldValues {
  created_at: string;
  field_id: number;
  id: number;
  language: {
    id: number;
    uuid: string;
    name: string;
    code: string;
  };
  language_id: number;
  state: FieldState;
  type_name: string;
  updated_at: string;
  uuid: string;
}

export interface FieldState {
  created_at: string;
  description?: string;
  file_name?: string;
  id: number;
  mime_type?: string;
  title?: string;
  type_name: string;
  updated_at: string;
  url?: string;
  uuid: string;
  slug?: string;
  template?: {
    reference_name: string;
  };
  fields?: Field[];
}

export interface FieldGroupTemplate {
  description: string;
  id: number;
  name: string;
  parent_id: number | null;
  parent_type: string | null;
  reference_name: string;
  uuid: string;
}

export interface MediaFieldState {
  description: string;
  file_name: string;
  file_path: string;
  id: number;
  info: {
    size: number;
  };
  mime_type: string;
  storage: string;
  title: string;
  type_name: string;
  url: string;
  uuid: string;
  created_at: string;
  updated_at: string;
}
