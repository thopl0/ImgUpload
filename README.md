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
<script type="module">
  import { defineImageUpload } from "image-upload-wc";
  defineImageUpload("image-upload-wc");
</script>

<form id="uploadForm" action="/postForm" method="post">
  <image-upload-wc multiple></image-upload-wc>
  <button type="submit">Submit</button>
</form>
```

### Importing in JavaScript

If you are using a module bundler, you can import the component:

```javascript
import { defineImageUpload } from "image-upload-wc";
defineImageUpload("image-upload-wc");
```

### Customization

The `image-upload-wc` component comes with several customizable properties and event listeners.

#### Attributes

- `multiple`: Allows multiple file selection. If this attribute is present, the user can select multiple files.
- `container-class`: Allows custom class for the main container
- `label-class`: Allows custom class for the Label
- `label-text`: Allows custom text for the Label
- `button-class`: Allows custom class for the Button
- `button-text`: Allows custom text for the Button
- `preview-container-class`: Allows custom text for the Preview Image Container
- `preview-class`: Allows custom text for the Preview Images

#### Example

```
<form id="uploadForm" action="/postForm" method="post">
  <image-upload-wc
    multiple
    container-class="custom-container-classname"
    label-text="Drag and Drop or Click the Button Below"
    ...
  >
  </image-upload-wc>
  <button type="submit">Submit</button>
</form>
```

### Handling Form Submission

Form Submission is intercepted by the component and selected files are added to the form. Errors related to the success of the form submission can be found in the console for now.

## Development

### Project Structure

```
image-upload-wc/
|-- src/
|   |-- index.ts
|   |-- eventListeners.ts
|   |-- handlers.ts
|   |-- icons.ts
|   |-- imagePreview.ts
|   |-- ImageUpload.ts
|   |-- render.ts
|   |-- styles.ts
|-- tests/
|   |-- imageupload.test.ts
|-- jest.config.js
|-- jest.setup.ts
|-- tsconfig.json
|-- package.json
|-- README.md
|-- LICENSE
```

### Running Tests

Tests are written using Jest. To run the tests:

```bash
npm test
```

### Building the Project

Compile the typescript into ECMAScript and CommonJS:

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
