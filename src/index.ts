import { ImageUpload } from "./ImageUpload.js";

export function defineImageUpload(componentName = "image-upload") {
  customElements.define(componentName, ImageUpload);
}
