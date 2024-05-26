import { ImageUpload } from "./ImageUpload.js";

export function defineImageUpload(componentName: string) {
  customElements.define(componentName, ImageUpload);
}
