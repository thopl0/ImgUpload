import { ImageUpload } from "./ImageUpload.js";
import styles from "./styles.js";

export function render(element: ImageUpload) {
  element.shadowRoot.innerHTML = `
    <style>
      ${styles}
    </style>
    <div class="image-upload-container">
      <span class="image-upload-label">${
        element.labelText || "Drag and Drop or"
      }</span>
      <button class="image-upload-button">${
        element.buttonText || "Select from folder"
      }</button>
      <input type="file" accept="image/*" class="image-upload-input" ${
        element.multiple ? "multiple" : ""
      } />
      <div class="image-upload-preview-container"></div>
    </div>
  `;
}
