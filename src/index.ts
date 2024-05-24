class ImageUploader extends HTMLElement {
  private fileInput: HTMLInputElement;
  private previewContainer: HTMLDivElement;
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }

  connectedCallback() {
    this.fileInput = this.shadowRoot.querySelector('input[type="file"]');
    this.previewContainer = this.shadowRoot.querySelector(".preview-container");
    this.fileInput.addEventListener("change", this.handleFileSelect.bind(this));
  }

  handleFileSelect(event) {
    const files = event.target.files;
    if (files && files.length > 0) {
      for (const file of files) {
        this.previewImage(file);
      }
    }
  }

  previewImage(file: Blob) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const preview = document.createElement("img");
      preview.src = e.target.result as string;
      this.previewContainer.appendChild(preview);
    };
    reader.readAsDataURL(file);
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .preview-container {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .preview {
          width: 100px;
          height: 100px;
          object-fit: cover;
          border: 1px solid #ccc;
        }
      </style>
      <div class="container">
        <h1>Upload Image</h1>
        <input type="file" accept="image/*" multiple />
        <div class="preview-container"></div>
      </div>
    `;
  }
}

customElements.define("image-uploader", ImageUploader);

export default ImageUploader;
