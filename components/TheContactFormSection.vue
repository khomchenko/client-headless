<template>
  <div
    class="section section--contact-form"
    v-if="
      props.data && getRepeaterByReferenceName(props.data, 'form')?.length > 0
    "
  >
    <div class="container">
      <div class="section--contact-form__inner">
        <div
          class="section--contact-form__info"
          v-html="getByReferenceName(props.data, 'text')"
          v-if="getByReferenceName(props.data, 'text') !== null"
        />
        <form
          action="#"
          class="section--contact-form__form"
          v-if="
            formFields.length
          "
        >
          <template
            v-for="item in formFields"
          >
            <ContactInput
              :label="getByReferenceName(item, 'label')"
              :type="getByReferenceName(item, 'type')"
              v-if="isAvailableGroup(item, 'input')"
            />
            <ContactTextarea
              :label="getByReferenceName(item, 'label')"
              :info="getByReferenceName(item, 'info')"
              :maxLength="getByReferenceName(item, 'max_length')"
              v-else-if="isAvailableGroup(item, 'textarea')"
            />
            <ContactCheckbox
              :text="getByReferenceName(item, 'text')"
              v-else-if="isAvailableGroup(item, 'checkbox')"
            />
            <ContactText
              :text="getByReferenceName(item, 'rich_text')"
              v-else-if="isAvailableGroup(item, 'text')"
            />
          </template>
          <button type="submit" class="btn btn--primary mt-30">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  getByReferenceName,
  getRepeaterByReferenceName,
  isAvailableGroup,
} from "@/helpers/persistenceStorage";
import { PropType } from "vue";
import { FieldGroup } from "@/types";

const props = defineProps({
  data: {
    type: Object as PropType<FieldGroup>,
  },
});

// Temp solution for default form
const defaultFormFields = [{"id":383,"uuid":"b11f4c3c-d9cd-447a-afaf-96044833b970","field_group_template_id":180,"parent_type":"App\\Models\\FieldValue","parent_id":1003,"order":0,"fields":[{"id":957,"uuid":"2c19c7f7-dcb6-41d8-b705-c0a146806e93","type_name":"text","field_group_id":383,"field_template_id":445,"created_at":null,"updated_at":null,"field_template":{"id":445,"uuid":"3a5ab713-ab11-49b2-80e7-b5905448d5ee","name":"Label","reference_name":"label","description":"descr","config":[],"type_name":"text","group_template_id":180,"field_group_templates":[]},"field_values":[{"id":1004,"uuid":"38435721-ac0f-420d-8dca-0e99151cad6a","field_id":957,"language_id":1,"type_name":"text","state":"First name","created_at":"2022-11-23T17:01:28.000000Z","updated_at":"2022-11-24T10:29:27.000000Z","language":{"id":1,"uuid":"f0ddc28d-a16e-41c3-9c1c-ee4db9f8b154","name":"english","code":"en"}}]},{"id":958,"uuid":"360270a8-7edb-40b2-a6e5-5ab5fb23c94a","type_name":"text","field_group_id":383,"field_template_id":446,"created_at":null,"updated_at":null,"field_template":{"id":446,"uuid":"97501db2-bc7e-497b-81e0-200c7960c364","name":"Type","reference_name":"type","description":"descr","config":[],"type_name":"text","group_template_id":180,"field_group_templates":[]},"field_values":[{"id":1005,"uuid":"460f1112-f424-4a4f-a3ba-c8a9b65b155c","field_id":958,"language_id":1,"type_name":"text","state":"text","created_at":"2022-11-23T17:01:28.000000Z","updated_at":"2022-11-25T09:55:18.000000Z","language":{"id":1,"uuid":"f0ddc28d-a16e-41c3-9c1c-ee4db9f8b154","name":"english","code":"en"}}]}],"template":{"id":180,"uuid":"0c9241ca-d344-4ff1-85b5-4aff01e31331","name":"Input","description":"descr","reference_name":"input","parent_type":"App\\Models\\FieldTemplate","parent_id":444}},{"id":798,"uuid":"e6c27eed-f1dd-4cb0-a5c6-08582de2c68e","field_group_template_id":180,"parent_type":"App\\Models\\FieldValue","parent_id":1003,"order":1,"fields":[{"id":2052,"uuid":"eb011ac5-d6f6-4c2c-bdd6-dc02c9e97f0b","type_name":"text","field_group_id":798,"field_template_id":445,"created_at":null,"updated_at":null,"field_template":{"id":445,"uuid":"3a5ab713-ab11-49b2-80e7-b5905448d5ee","name":"Label","reference_name":"label","description":"descr","config":[],"type_name":"text","group_template_id":180,"field_group_templates":[]},"field_values":[{"id":2132,"uuid":"e22e4a5a-df01-4a5b-ac25-95650455ef8b","field_id":2052,"language_id":1,"type_name":"text","state":"Last name","created_at":"2022-11-25T09:52:45.000000Z","updated_at":"2022-11-25T09:55:18.000000Z","language":{"id":1,"uuid":"f0ddc28d-a16e-41c3-9c1c-ee4db9f8b154","name":"english","code":"en"}}]},{"id":2053,"uuid":"e000f63f-2ed1-4896-b3de-14ff84758ef0","type_name":"text","field_group_id":798,"field_template_id":446,"created_at":null,"updated_at":null,"field_template":{"id":446,"uuid":"97501db2-bc7e-497b-81e0-200c7960c364","name":"Type","reference_name":"type","description":"descr","config":[],"type_name":"text","group_template_id":180,"field_group_templates":[]},"field_values":[{"id":2133,"uuid":"3ef49ecf-5ed5-49c8-88cf-c536e718cdd4","field_id":2053,"language_id":1,"type_name":"text","state":"text","created_at":"2022-11-25T09:52:45.000000Z","updated_at":"2022-11-25T09:55:18.000000Z","language":{"id":1,"uuid":"f0ddc28d-a16e-41c3-9c1c-ee4db9f8b154","name":"english","code":"en"}}]}],"template":{"id":180,"uuid":"0c9241ca-d344-4ff1-85b5-4aff01e31331","name":"Input","description":"descr","reference_name":"input","parent_type":"App\\Models\\FieldTemplate","parent_id":444}},{"id":799,"uuid":"eee6a983-532e-40ab-b002-24054d266a72","field_group_template_id":180,"parent_type":"App\\Models\\FieldValue","parent_id":1003,"order":2,"fields":[{"id":2054,"uuid":"c1b0ec12-f3c7-476a-81e1-0540515cc299","type_name":"text","field_group_id":799,"field_template_id":445,"created_at":null,"updated_at":null,"field_template":{"id":445,"uuid":"3a5ab713-ab11-49b2-80e7-b5905448d5ee","name":"Label","reference_name":"label","description":"descr","config":[],"type_name":"text","group_template_id":180,"field_group_templates":[]},"field_values":[{"id":2134,"uuid":"36a78aa0-7cda-4108-aca0-9a867a7994c2","field_id":2054,"language_id":1,"type_name":"text","state":"Email","created_at":"2022-11-25T09:52:57.000000Z","updated_at":"2022-11-25T09:55:18.000000Z","language":{"id":1,"uuid":"f0ddc28d-a16e-41c3-9c1c-ee4db9f8b154","name":"english","code":"en"}}]},{"id":2055,"uuid":"95da1446-e680-465b-952a-5f93c75119e8","type_name":"text","field_group_id":799,"field_template_id":446,"created_at":null,"updated_at":null,"field_template":{"id":446,"uuid":"97501db2-bc7e-497b-81e0-200c7960c364","name":"Type","reference_name":"type","description":"descr","config":[],"type_name":"text","group_template_id":180,"field_group_templates":[]},"field_values":[{"id":2135,"uuid":"4666ff90-f71d-429c-87c4-9f684fed58e9","field_id":2055,"language_id":1,"type_name":"text","state":"text","created_at":"2022-11-25T09:52:57.000000Z","updated_at":"2022-11-25T09:55:52.000000Z","language":{"id":1,"uuid":"f0ddc28d-a16e-41c3-9c1c-ee4db9f8b154","name":"english","code":"en"}}]}],"template":{"id":180,"uuid":"0c9241ca-d344-4ff1-85b5-4aff01e31331","name":"Input","description":"descr","reference_name":"input","parent_type":"App\\Models\\FieldTemplate","parent_id":444}},{"id":800,"uuid":"e492f360-64ee-48a1-a9d0-dc1c32bf8d1b","field_group_template_id":180,"parent_type":"App\\Models\\FieldValue","parent_id":1003,"order":3,"fields":[{"id":2056,"uuid":"5f68a173-b2e8-4247-a921-379d5f0a6219","type_name":"text","field_group_id":800,"field_template_id":445,"created_at":null,"updated_at":null,"field_template":{"id":445,"uuid":"3a5ab713-ab11-49b2-80e7-b5905448d5ee","name":"Label","reference_name":"label","description":"descr","config":[],"type_name":"text","group_template_id":180,"field_group_templates":[]},"field_values":[{"id":2136,"uuid":"743adaa9-32e8-43fc-a4dd-d5109f760790","field_id":2056,"language_id":1,"type_name":"text","state":"Phone Number","created_at":"2022-11-25T09:53:08.000000Z","updated_at":"2022-11-25T09:55:18.000000Z","language":{"id":1,"uuid":"f0ddc28d-a16e-41c3-9c1c-ee4db9f8b154","name":"english","code":"en"}}]},{"id":2057,"uuid":"067b3eab-dcfd-43d1-803b-fac7c4411ba7","type_name":"text","field_group_id":800,"field_template_id":446,"created_at":null,"updated_at":null,"field_template":{"id":446,"uuid":"97501db2-bc7e-497b-81e0-200c7960c364","name":"Type","reference_name":"type","description":"descr","config":[],"type_name":"text","group_template_id":180,"field_group_templates":[]},"field_values":[{"id":2137,"uuid":"90e043f4-b85b-4beb-873f-ea0b6d9663da","field_id":2057,"language_id":1,"type_name":"text","state":"text","created_at":"2022-11-25T09:53:08.000000Z","updated_at":"2022-11-25T09:55:18.000000Z","language":{"id":1,"uuid":"f0ddc28d-a16e-41c3-9c1c-ee4db9f8b154","name":"english","code":"en"}}]}],"template":{"id":180,"uuid":"0c9241ca-d344-4ff1-85b5-4aff01e31331","name":"Input","description":"descr","reference_name":"input","parent_type":"App\\Models\\FieldTemplate","parent_id":444}},{"id":801,"uuid":"c8342987-d1ce-438d-9412-91b262d1058c","field_group_template_id":180,"parent_type":"App\\Models\\FieldValue","parent_id":1003,"order":4,"fields":[{"id":2058,"uuid":"6864e31b-a169-4a8f-a1d5-7e191b50934d","type_name":"text","field_group_id":801,"field_template_id":445,"created_at":null,"updated_at":null,"field_template":{"id":445,"uuid":"3a5ab713-ab11-49b2-80e7-b5905448d5ee","name":"Label","reference_name":"label","description":"descr","config":[],"type_name":"text","group_template_id":180,"field_group_templates":[]},"field_values":[{"id":2138,"uuid":"dbd51cac-edb3-49e1-8767-5e295b365747","field_id":2058,"language_id":1,"type_name":"text","state":"Company","created_at":"2022-11-25T09:53:29.000000Z","updated_at":"2022-11-25T09:55:18.000000Z","language":{"id":1,"uuid":"f0ddc28d-a16e-41c3-9c1c-ee4db9f8b154","name":"english","code":"en"}}]},{"id":2059,"uuid":"a22f9ebc-8d09-4f70-9fda-ee543527f867","type_name":"text","field_group_id":801,"field_template_id":446,"created_at":null,"updated_at":null,"field_template":{"id":446,"uuid":"97501db2-bc7e-497b-81e0-200c7960c364","name":"Type","reference_name":"type","description":"descr","config":[],"type_name":"text","group_template_id":180,"field_group_templates":[]},"field_values":[{"id":2139,"uuid":"de87ee8d-4afe-41a4-8a26-41e81431d3e6","field_id":2059,"language_id":1,"type_name":"text","state":"text","created_at":"2022-11-25T09:53:29.000000Z","updated_at":"2022-11-25T09:55:19.000000Z","language":{"id":1,"uuid":"f0ddc28d-a16e-41c3-9c1c-ee4db9f8b154","name":"english","code":"en"}}]}],"template":{"id":180,"uuid":"0c9241ca-d344-4ff1-85b5-4aff01e31331","name":"Input","description":"descr","reference_name":"input","parent_type":"App\\Models\\FieldTemplate","parent_id":444}},{"id":802,"uuid":"87898f08-cc1b-480a-952b-7337f44de66a","field_group_template_id":181,"parent_type":"App\\Models\\FieldValue","parent_id":1003,"order":5,"fields":[{"id":2060,"uuid":"09b9e7db-a686-4e1b-8aba-7b284dcd6182","type_name":"text","field_group_id":802,"field_template_id":447,"created_at":null,"updated_at":null,"field_template":{"id":447,"uuid":"db8143ef-e784-46ef-b85b-36d6f172a2ab","name":"Label","reference_name":"label","description":"descr","config":[],"type_name":"text","group_template_id":181,"field_group_templates":[]},"field_values":[{"id":2140,"uuid":"57444bd9-06f8-47eb-aadc-4c0ed23000bf","field_id":2060,"language_id":1,"type_name":"text","state":"Message","created_at":"2022-11-25T09:53:40.000000Z","updated_at":"2022-11-25T09:55:19.000000Z","language":{"id":1,"uuid":"f0ddc28d-a16e-41c3-9c1c-ee4db9f8b154","name":"english","code":"en"}}]},{"id":2061,"uuid":"195b6c87-1c62-4674-9f87-0ecca277c35a","type_name":"text","field_group_id":802,"field_template_id":448,"created_at":null,"updated_at":null,"field_template":{"id":448,"uuid":"ab4f1c9d-444f-45e7-897d-d5e04da8e592","name":"Info","reference_name":"info","description":"descr","config":[],"type_name":"text","group_template_id":181,"field_group_templates":[]},"field_values":[{"id":2141,"uuid":"9f0821ce-84cc-4152-af25-e0198bb45aaf","field_id":2061,"language_id":1,"type_name":"text","state":"Max. 500 characters","created_at":"2022-11-25T09:53:40.000000Z","updated_at":"2022-11-25T09:57:18.000000Z","language":{"id":1,"uuid":"f0ddc28d-a16e-41c3-9c1c-ee4db9f8b154","name":"english","code":"en"}}]},{"id":2062,"uuid":"7e5e4c12-3fca-4225-81e3-cf1d6badf67e","type_name":"text","field_group_id":802,"field_template_id":449,"created_at":null,"updated_at":null,"field_template":{"id":449,"uuid":"ff48a458-4526-4f4d-abf2-04c90b020809","name":"Max Length","reference_name":"max_length","description":"descr","config":[],"type_name":"text","group_template_id":181,"field_group_templates":[]},"field_values":[{"id":2142,"uuid":"81f26b64-5adc-4373-afd0-a39a4ced8f68","field_id":2062,"language_id":1,"type_name":"text","state":"500","created_at":"2022-11-25T09:53:40.000000Z","updated_at":"2022-11-25T09:56:35.000000Z","language":{"id":1,"uuid":"f0ddc28d-a16e-41c3-9c1c-ee4db9f8b154","name":"english","code":"en"}}]}],"template":{"id":181,"uuid":"49e110ab-8529-458e-bfdf-ef859df8b777","name":"Textarea","description":"descr","reference_name":"textarea","parent_type":"App\\Models\\FieldTemplate","parent_id":444}},{"id":803,"uuid":"87cf3595-6204-48d9-8050-7c62f6e48973","field_group_template_id":183,"parent_type":"App\\Models\\FieldValue","parent_id":1003,"order":6,"fields":[{"id":2063,"uuid":"f200cc3d-d1fb-4031-9a38-6fd06e760aa2","type_name":"rich-text","field_group_id":803,"field_template_id":451,"created_at":null,"updated_at":null,"field_template":{"id":451,"uuid":"80006f10-6e05-45c0-af21-7975dfade840","name":"Rich Text","reference_name":"rich_text","description":"descr","config":[],"type_name":"rich-text","group_template_id":183,"field_group_templates":[]},"field_values":[{"id":2143,"uuid":"f67ad9ac-3d3b-4af3-a4e1-d8b7203d8b5f","field_id":2063,"language_id":1,"type_name":"rich-text","state":"<p>HAKI would like to keep you up-to-date with our products and services. Please tick below to say how you would like us to contact you:</p>","created_at":"2022-11-25T09:53:52.000000Z","updated_at":"2022-11-25T09:55:19.000000Z","language":{"id":1,"uuid":"f0ddc28d-a16e-41c3-9c1c-ee4db9f8b154","name":"english","code":"en"}}]}],"template":{"id":183,"uuid":"cb7757a3-144e-452e-ad9a-13870ff49fe3","name":"Text","description":"descr","reference_name":"text","parent_type":"App\\Models\\FieldTemplate","parent_id":444}},{"id":804,"uuid":"e23eede8-4750-4e40-a8b1-42812c65ece8","field_group_template_id":182,"parent_type":"App\\Models\\FieldValue","parent_id":1003,"order":7,"fields":[{"id":2064,"uuid":"9f425d7d-9120-42df-b441-ce901e0248ec","type_name":"text","field_group_id":804,"field_template_id":450,"created_at":null,"updated_at":null,"field_template":{"id":450,"uuid":"39c9de67-6296-4339-a333-989f34dd94ec","name":"Text","reference_name":"text","description":"descr","config":[],"type_name":"text","group_template_id":182,"field_group_templates":[]},"field_values":[{"id":2144,"uuid":"8b405ad1-72b4-485c-8c1d-b9ddd5f7a333","field_id":2064,"language_id":1,"type_name":"text","state":"I would like to be keep up to date with offers, news and events including product updates and training","created_at":"2022-11-25T09:54:08.000000Z","updated_at":"2022-11-25T09:55:19.000000Z","language":{"id":1,"uuid":"f0ddc28d-a16e-41c3-9c1c-ee4db9f8b154","name":"english","code":"en"}}]}],"template":{"id":182,"uuid":"17014521-a15c-482b-8aa6-440a59975a25","name":"Checkbox","description":"descr","reference_name":"checkbox","parent_type":"App\\Models\\FieldTemplate","parent_id":444}},{"id":805,"uuid":"20417459-1ab6-430f-885e-d74e37c04afd","field_group_template_id":183,"parent_type":"App\\Models\\FieldValue","parent_id":1003,"order":8,"fields":[{"id":2065,"uuid":"45a8dd7a-2277-4885-8ad8-27a15944eefe","type_name":"rich-text","field_group_id":805,"field_template_id":451,"created_at":null,"updated_at":null,"field_template":{"id":451,"uuid":"80006f10-6e05-45c0-af21-7975dfade840","name":"Rich Text","reference_name":"rich_text","description":"descr","config":[],"type_name":"rich-text","group_template_id":183,"field_group_templates":[]},"field_values":[{"id":2145,"uuid":"7929a79e-b50c-47e9-a047-0205083a3821","field_id":2065,"language_id":1,"type_name":"rich-text","state":"<p>By submitting your details you are agreeing to our <a href=\"#\">terms and conditions</a> and <a href=\"#\">privacy policy</a>. Please note your personal data will be held and processed in accordance with the General Data Protection Regulations. For further details on how your data is used and stored please read our <a href=\"#\">privacy</a> and <a href=\"#\">cookie policies</a>.</p><p>&nbsp;</p><p>This site is protected by reCAPTCHA and the <a href=\"#\">Google Privacy Policy</a> and <a href=\"#\">Terms of Service</a> apply.</p>","created_at":"2022-11-25T09:54:25.000000Z","updated_at":"2022-11-25T09:55:19.000000Z","language":{"id":1,"uuid":"f0ddc28d-a16e-41c3-9c1c-ee4db9f8b154","name":"english","code":"en"}}]}],"template":{"id":183,"uuid":"cb7757a3-144e-452e-ad9a-13870ff49fe3","name":"Text","description":"descr","reference_name":"text","parent_type":"App\\Models\\FieldTemplate","parent_id":444}}];

const formFields = computed(() => {
  if (props.data && getByReferenceName(props.data, 'use_custom_fields')) {
    return getRepeaterByReferenceName(props.data, 'form');
  }

  return defaultFormFields;
});
</script>

<style lang="scss">
.section--contact-form {
  display: flex;
  padding: 100px 0;
  background: #f2f5f7;

  @media only screen and (max-width: 865px) {
    padding: 40px 0 20px 0;
  }

  &__inner {
    display: flex;

    @media only screen and (max-width: 865px) {
      flex-direction: column;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    max-width: 438px;
    width: 100%;
    margin-right: 30px;

    @media only screen and (max-width: 865px) {
      max-width: 100%;
      margin-right: 0;
      margin-bottom: 20px;
    }

    h3 {
      font-weight: bold;
      font-size: 36px;
      line-height: 42px;
      margin-bottom: 30px;

      @media only screen and (max-width: 865px) {
        font-size: 24px;
        line-height: 30px;
        margin-bottom: 10px;
      }
    }

    p {
      max-width: 382px;
      width: 100%;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;

      @media only screen and (max-width: 865px) {
        max-width: 100%;
      }
    }
  }

  &__form {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    max-width: 906px;
    width: 100%;

    @media only screen and (max-width: 865px) {
      max-width: 100%;

      .btn {
        max-width: 100%;
      }
    }

    .block {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      max-width: 438px;
      width: 100%;
      margin-bottom: 16px;

      @media only screen and (max-width: 865px) {
        max-width: 100%;
        margin-bottom: 20px;
      }

      &.w-100 {
        max-width: 100%;
      }

      label {
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 8px;
      }

      input[type="text"] {
        width: inherit;
        height: 40px;
        border-radius: 3px;
        background: $color-white;
        border: 1px solid #d1d5db;
        padding: 0 16px;
        outline: none;
        transition: all 0.3s ease;

        &:focus {
          border: 1px solid #01a3ec;
        }
      }

      textarea {
        width: 100%;
        height: 150px;
        border-radius: 3px;
        background: $color-white;
        border: 1px solid #d1d5db;
        padding: 16px;
        outline: none;
        transition: all 0.3s ease;

        &:focus {
          border: 1px solid #01a3ec;
        }
      }

      .info {
        font-weight: normal;
        font-size: 13px;
        line-height: 16px;
        color: #7b7c7c;
        margin: 0 0 8px auto;
      }
    }

    .text {
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      width: 100%;

      p {
        margin-bottom: 24px;

        &:last-child {
          margin-bottom: 0;
        }
      }

      a {
        color: #01a3ec;
        text-decoration: none;
        transition: all 0.3s ease;

        &:hover {
          color: $color-black;
        }
      }
    }

    .checkbox {
      display: flex;
      margin: 30px 0;
      cursor: pointer;
      width: 100%;

      @media only screen and (max-width: 865px) {
        margin: 20px 0;
      }

      input[type="checkbox"] {
        display: none;

        &:checked {
          & + .checkbox__mark {
            background: #01a3ec;
            img {
              opacity: 1;
            }
          }
        }
      }

      &__mark {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        min-width: 20px;
        height: 20px;
        background: transparent;
        border: 1px solid #01a3ec;
        margin-right: 10px;

        img {
          width: 15px;
          height: 15px;
          opacity: 0;
          transition: all 0.3s ease;
        }
      }

      &__text {
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
      }
    }
  }
}
</style>
