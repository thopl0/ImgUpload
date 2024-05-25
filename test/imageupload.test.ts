import { getByRole, getByLabelText } from "@testing-library/dom";
import "@testing-library/jest-dom";
import ImageUploader from "../src/index";

describe("ImageUploader Component", () => {
  let element: ImageUploader;
  beforeEach(() => {
    document.body.innerHTML =
      "<form><image-uploader multiple></image-uploader></form>";
    element = document.querySelector("image-uploader") as ImageUploader;
  });

  test("should initialize correctly", () => {
    const fileInput = element.shadowRoot?.querySelector(".image-upload-input");
    expect(fileInput).toBeInTheDocument();
    expect(fileInput).toHaveAttribute("type", "file");
  });
});
