const styles = `
  .image-upload-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    height: fit-content;
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
    width: 120px;
    object-fit: cover;
    border: 1px solid #ccc;
  }
`;

export default styles;
