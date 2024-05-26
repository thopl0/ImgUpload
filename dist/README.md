# image-upload-wc

`image-upload-wc` is a web component for handling image uploads within a form. It provides a user-friendly interface for selecting and previewing images before uploading.

## Installation

You can install the package via npm:

```bash
npm install image-upload-wc
```

## Usage

### Basic Usage

Include the `image-upload-wc` component in your HTML:

```
<form id="uploadForm">
  <image-uploader multiple></image-uploader>
  <button type="submit">Submit</button>
</form>
```

### Importing in JavaScript

If you are using a module bundler, you can import the component:

```javascript
import "image-upload-wc";
```

### Customization

The `image-upload-wc` component comes with several customizable properties and event listeners.

#### Attributes

- `multiple`: Allows multiple file selection. If this attribute is present, the user can select multiple files.

#### Example

```html
<image-uploader multiple></image-uploader>
```

<!-- ### Handling Form Submission

You can handle form submission by adding an event listener to the form:

```javascript
document
  .getElementById("uploadForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    fetch("/your-upload-endpoint", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        // Handle response
      })
      .catch((error) => {
        // Handle error
      });
  });
``` -->

## Development

### Project Structure

```
image-upload-wc/
|-- src/
|   |-- index.ts
|   |-- styles.ts
|   |-- form-handler.ts
|-- tests/
|   |-- index.test.ts
|-- jest.config.js
|-- jest.setup.ts
|-- tsconfig.json
|-- package.json
|-- README.md
|-- index.html
```

### Running Tests

Tests are written using Jest. To run the tests:

```bash
npm test
```

### Building the Project

Compile the typescript into ECMAScript and:

```bash
npm run compile
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Issues

If you encounter any issues, please report them on the [GitHub issues](https://github.com/thopl0/ImgUpload/issues) page.

## Author

Created by [thopl0](https://github.com/thopl0).

## Acknowledgments

Special thanks to the open-source community for their invaluable contributions and support.
