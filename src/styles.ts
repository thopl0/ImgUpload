const styles = `
  .image-upload-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    height: fit-content;
    margin-inline: auto;
  }
  .image-upload-label {
    margin-bottom: 10px;
  }
  .image-upload-input {
    display: none;
  }
  .image-upload-button {
    padding: 5px 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .image-upload-preview-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
    justify-content: flex-start;
    margin-top: 10px;
  }
  .image-upload-preview {
    width: 250px;
    object-fit: cover;
    border: 1px solid #ccc;
    position: relative;
  }
  .image-upload-preview-img {
    width: 100%;
    height: 100%;
  }
  .image-upload-remove-preview {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 20px;
    height: 20px;
    background-color: #ccc;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;

export default styles;
