import { ImageUpload } from "./ImageUpload.js";
import {
  handleDragOver,
  handleDragLeave,
  handleDrop,
  handleFileSelect,
  handleFormSubmit,
} from "./handlers.js";

export function initEventListeners(component: ImageUpload) {
  component.addEventListener("dragover", handleDragOver.bind(component));
  component.addEventListener("dragleave", handleDragLeave.bind(component));
  component.addEventListener("drop", handleDrop.bind(component));

  component.fileUploadButton.addEventListener("click", () => {
    component.fileInput.click();
  });

  component.fileInput.addEventListener(
    "change",
    handleFileSelect.bind(component)
  );

  const form = this.closest("form");
  if (form) {
    form.addEventListener("submit", (event) =>
      handleFormSubmit(event, this.selectedFiles)
    );
  }
}
