import styles from "./styles.js";
import { handleFormSubmit } from "./formHandler.js";

class ImageUploader extends HTMLElement {
  private fileInput: HTMLInputElement;
  private previewContainer: HTMLDivElement;
  private fileUploadButton: HTMLButtonElement;
  private selectedFiles: File[] = [];

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }

  static get observedAttributes() {
    return ["multiple"];
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

  attributeChangedCallback(
    name: string,
    oldValue: string | null,
    newValue: string | null
  ) {
    if (name === "multiple") {
      this.fileInput.multiple = newValue !== null;
    }
  }

  connectedCallback() {
    this.addEventListener("dragover", this.handleDragOver.bind(this));
    this.addEventListener("dragleave", this.handleDragLeave.bind(this));
    this.addEventListener("drop", this.handleDrop.bind(this));

    this.fileInput = this.shadowRoot.querySelector(
      ".image-upload-input"
    ) as HTMLInputElement;
    this.fileUploadButton = this.shadowRoot.querySelector(
      ".image-upload-button"
    ) as HTMLButtonElement;
    this.previewContainer = this.shadowRoot.querySelector(
      ".image-upload-preview-container"
    ) as HTMLDivElement;

    this.fileUploadButton.addEventListener("click", () => {
      this.fileInput.click();
    });

    this.fileInput.addEventListener("change", this.handleFileSelect.bind(this));

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

  render() {
    this.shadowRoot.innerHTML = `
      <style>${styles}</style>
      <div class="image-upload-container">
        <span class="image-upload-label">Drag and Drop or</span>
        <button class="image-upload-button">Select from file</button>
        <input type="file" accept="image/*" class="image-upload-input" ${
          this.multiple ? "multiple" : ""
        } />
        <div class="image-upload-preview-container"></div>
      </div>
    `;
  }
}

export function defineImageUploader() {
  customElements.define("image-uploader", ImageUploader);
}
