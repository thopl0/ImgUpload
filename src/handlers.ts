import { ImageUpload } from "./ImageUpload";

export function initializeEventListeners(component: ImageUpload) {
  component.addEventListener("dragover", handleDragOver.bind(component));
  component.addEventListener("dragleave", handleDragLeave.bind(component));
  component.addEventListener("drop", handleDrop.bind(component));
}

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

ImageUpload.prototype.addFiles = function (files: File[]) {
  if (!this.multiple) {
    this.selectedFiles = files.slice(0, 1);
  } else {
    this.selectedFiles.push(...files);
  }

  // Clear existing previews and render new ones adding the new files
  this.previewContainer.innerHTML = "";
  this.selectedFiles.forEach((file) => this.previewImage(file));
};

ImageUpload.prototype.previewImage = function (file: File) {
  const reader = new FileReader();
  reader.onload = (e) => {
    const preview = document.createElement("img");
    preview.classList.add("image-upload-preview");
    preview.src = e.target?.result as string;
    this.previewContainer.appendChild(preview);
  };
  reader.readAsDataURL(file);
};
