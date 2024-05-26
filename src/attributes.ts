import { ImageUpload } from "./ImageUpload";

export function initializeAttributes(component: ImageUpload) {
  component.uploadContainer = component.shadowRoot.querySelector(
    ".image-upload-container"
  ) as HTMLDivElement;
  component.uploadLabel = component.shadowRoot.querySelector(
    ".image-upload-label"
  ) as HTMLSpanElement;
  component.fileInput = component.shadowRoot.querySelector(
    ".image-upload-input"
  ) as HTMLInputElement;
  component.fileUploadButton = component.shadowRoot.querySelector(
    ".image-upload-button"
  ) as HTMLButtonElement;
  component.previewContainer = component.shadowRoot.querySelector(
    ".image-upload-preview-container"
  ) as HTMLDivElement;
  component.previews = [
    ...component.shadowRoot.querySelectorAll(".image-upload-preview"),
  ] as HTMLImageElement[];

  if (component.containerClass)
    component.uploadContainer.classList.add(component.containerClass);
  if (component.labelClass)
    component.uploadLabel.classList.add(component.labelClass);
  if (component.buttonClass)
    component.fileUploadButton.classList.add(component.buttonClass);
  if (component.previewContainerClass)
    component.previewContainer.classList.add(component.previewContainerClass);
  if (component.previewClass)
    component.previews.forEach((preview) => {
      preview.classList.add(component.previewClass);
    });
}

export function attributeChanged(
  component: ImageUpload,
  name: string,
  oldValue: string | null,
  newValue: string | null
) {
  switch (name) {
    case "multiple":
      component.fileInput?.setAttribute("multiple", newValue);
      break;
    case "container-class":
      component.uploadContainer?.classList.remove(oldValue);
      component.uploadContainer?.classList.add(newValue!);
      break;
    case "label-class":
      component.uploadLabel?.classList.remove(oldValue!);
      component.uploadLabel?.classList.add(newValue!);
      break;
    case "label-text":
      component.uploadLabel?.appendChild(document.createTextNode(newValue!));
      break;
    case "button-class":
      component.fileUploadButton?.classList.remove(oldValue!);
      component.fileUploadButton?.classList.add(newValue!);
      break;
    case "button-text":
      component.fileUploadButton?.appendChild(
        document.createTextNode(newValue!)
      );
      break;
    case "preview-container-class":
      component.previewContainer?.classList.remove(oldValue!);
      component.previewContainer?.classList.add(newValue!);
      break;
    case "preview-class":
      component.previews.forEach((preview) => {
        preview.classList.remove(oldValue!);
        preview.classList.add(newValue!);
      });
      break;
    default:
      console.error(`Attribute ${name} not found`);
  }
}
