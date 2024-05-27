import { initEventListeners } from "./eventListeners.js";
import { render } from "./render.js";
import { initializeAttributes, attributeChanged } from "./attributes.js";
import { previewImage } from "./imagePreview.js";

export class ImageUpload extends HTMLElement {
  public uploadContainer: HTMLDivElement;
  public uploadLabel: HTMLSpanElement;
  public fileUploadButton: HTMLButtonElement;
  public fileInput: HTMLInputElement;
  public previewContainer: HTMLDivElement;
  public previews: HTMLImageElement[];
  public selectedFiles: File[] = [];

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
    render(this);
    initializeAttributes(this);
    initEventListeners(this);

    // Intercept form submission to add the selected images to the form
  }

  addFiles(files: File[]) {
    if (!this.multiple) {
      this.selectedFiles = files.slice(0, 1);
    } else {
      this.selectedFiles.push(...files);
    }

    //clear existing previews and render new ones adding the new files
    this.previewContainer.innerHTML = "";
    this.selectedFiles.forEach((file) => previewImage(file, this));
  }
}
