import { ImageUpload } from "./ImageUpload.js";

export function handleFileSelect(this: ImageUpload, event: Event) {
  const input = event.target as HTMLInputElement;
  const files = Array.from(input.files || []);
  if (files.length > 0) {
    this.addFiles(files);
  }
}

export function handleDragOver(this: ImageUpload, event: DragEvent) {
  event.preventDefault();
  if (event.dataTransfer?.files.length > 0) {
    this.style.cursor = "grabbing";
  }
}

export function handleDragLeave(this: ImageUpload, event: DragEvent) {
  event.preventDefault();
  this.style.cursor = "default";
}

export function handleDrop(this: ImageUpload, event: DragEvent) {
  event.preventDefault();
  const files = Array.from(event.dataTransfer?.files || []);
  if (files.length > 0) {
    this.addFiles(files);
  }
  this.style.cursor = "default";
}

export function handleFormSubmit(event: Event, selectedFiles: File[]) {
  event.preventDefault();

  const form = event.target as HTMLFormElement;
  const formData = new FormData(form);

  // Append selected files to formData
  selectedFiles.forEach((file, index) => {
    formData.append(`file${index}`, file);
  });

  // Create an XMLHttpRequest to submit the form data
  const xhr = new XMLHttpRequest();
  xhr.open(form.method, form.action, true);
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log("Form submitted successfully:", xhr.responseText);
    } else {
      console.error("Form submission failed:", xhr.statusText);
    }
  };
  xhr.send(formData);
}
