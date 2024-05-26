import { handleFormSubmit } from "./formHandler.js";
import { initEventListeners } from "./eventListeners.js";
import { render } from "./render.js";
import { initializeAttributes, attributeChanged } from "./attributes.js";

export class ImageUpload extends HTMLElement {
  public uploadContainer: HTMLDivElement;
  public uploadLabel: HTMLSpanElement;
  public fileUploadButton: HTMLButtonElement;
  public fileInput: HTMLInputElement;
  public previewContainer: HTMLDivElement;
  public previews: HTMLImageElement[];
  private selectedFiles: File[] = [];

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return [
      "multiple",
      "container-class",
      "label-class",
      "label-text",
      "button-class",
      "button-text",
      "preview-container-class",
      "preview-class",
    ];
  }

  get multiple() {
    return this.hasAttribute("multiple");
  }

  set multiple(value: boolean) {
    if (value) {
      this.setAttribute("multiple", "");
    } else {
      this.removeAttribute("multiple");
    }
  }

  get containerClass() {
    return this.getAttribute("container-class");
  }

  set containerClass(value: string) {
    if (value) {
      this.setAttribute("container-class", value);
    } else {
      this.removeAttribute("container-class");
    }
  }

  get labelClass() {
    return this.getAttribute("label-class");
  }

  set labelClass(value: string) {
    if (value) {
      this.setAttribute("label-class", value);
    } else {
      this.removeAttribute("label-class");
    }
  }

  get labelText() {
    return this.getAttribute("label-text");
  }

  set labelText(value: string) {
    if (value) {
      this.setAttribute("label-text", value);
    } else {
      this.removeAttribute("label-text");
    }
  }

  get buttonClass() {
    return this.getAttribute("button-class");
  }

  set buttonClass(value: string) {
    if (value) {
      this.setAttribute("button-class", value);
    } else {
      this.removeAttribute("button-class");
    }
  }

  get buttonText() {
    return this.getAttribute("button-text");
  }

  set buttonText(value: string) {
    if (value) {
      this.setAttribute("button-text", value);
    } else {
      this.removeAttribute("button-text");
    }
  }

  get previewContainerClass() {
    return this.getAttribute("preview-container-class");
  }

  set previewContainerClass(value: string) {
    if (value) {
      this.setAttribute("preview-container-class", value);
    } else {
      this.removeAttribute("preview-container-class");
    }
  }

  get previewClass() {
    return this.getAttribute("preview-class");
  }

  set previewClass(value: string) {
    if (value) {
      this.setAttribute("preview-class", value);
    } else {
      this.removeAttribute("preview-class");
    }
  }

  attributeChangedCallback(
    name: string,
    oldValue: string | null,
    newValue: string | null
  ) {
    attributeChanged(this, name, oldValue, newValue);
  }

  connectedCallback() {
    initEventListeners(this);
    render(this);
    initializeAttributes(this);

    // Intercept form submission to add the selected images to the form
    const form = this.closest("form");
    if (form) {
      form.addEventListener("submit", (event) =>
        handleFormSubmit(event, this.selectedFiles)
      );
    }
  }

  handleDragOver(event: DragEvent) {
    event.preventDefault();
    if (event.dataTransfer?.files.length > 0) {
      this.style.cursor = "grabbing";
    }
  }

  handleDragLeave(event: DragEvent) {
    event.preventDefault();
    this.style.cursor = "default";
  }

  handleDrop(event: DragEvent) {
    event.preventDefault();
    const files = Array.from(event.dataTransfer?.files || []);
    if (files.length > 0) {
      this.addFiles(files);
    }
    this.style.cursor = "default";
  }

  handleFileSelect(event: Event) {
    const input = event.target as HTMLInputElement;
    const files = Array.from(input.files || []);
    if (files.length > 0) {
      this.addFiles(files);
    }
  }

  addFiles(files: File[]) {
    if (!this.multiple) {
      this.selectedFiles = files.slice(0, 1);
    } else {
      this.selectedFiles.push(...files);
    }

    //clear existing previews and render new ones adding the new files
    this.previewContainer.innerHTML = "";
    this.selectedFiles.forEach((file) => this.previewImage(file));
  }

  previewImage(file: File) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const preview = document.createElement("img");
      preview.classList.add("image-upload-preview");
      preview.src = e.target?.result as string;
      this.previewContainer.appendChild(preview);
    };
    reader.readAsDataURL(file);
  }
}
