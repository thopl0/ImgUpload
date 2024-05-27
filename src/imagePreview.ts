import { closeIcon } from "./icons";
import { ImageUpload } from "./ImageUpload";
export function previewImage(file: File, component: ImageUpload) {
  const reader = new FileReader();
  reader.onload = (e) => {
    const previewDiv = document.createElement("div");
    const preview = document.createElement("img");
    const removePreviewButton = document.createElement("span");

    previewDiv.classList.add("image-upload-preview");
    preview.classList.add("image-upload-preview-img");

    removePreviewButton.classList.add("image-upload-remove-preview");
    removePreviewButton.innerHTML = closeIcon;
    removePreviewButton.addEventListener("click", () => {
      removePreview(file, component);
    });

    preview.src = e.target?.result as string;
    previewDiv.appendChild(preview);
    previewDiv.appendChild(removePreviewButton);
    component.previewContainer.appendChild(previewDiv);
  };
  reader.readAsDataURL(file);
}

export function removePreview(file: File, component: ImageUpload) {
  component.selectedFiles = component.selectedFiles.filter((f) => f !== file);
  component.previewContainer.innerHTML = "";
  component.selectedFiles.forEach((file) => previewImage(file, component));
}
