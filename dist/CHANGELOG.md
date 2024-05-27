# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Added the ability to style the component through user-defined custom classes.

## [2.0.1] - 2024-05-27

### Added

- N/A

### Changed

- N/A

### Fixed

- Fixed error from compilation

## [2.0.0] - 2024-05-27

### Added

- Added following Attributes to the component

  - `container-class`: Custom class for Upload Container
  - `label-class`: Custom class for Label
  - `label-text`: Change Label Text
  - `button-class`: Custom class for Button
  - `button-text`: Change Button Text
  - `preview-container-class`: Custom class for Preview Image Container
  - `preview-class`: Custom class for Preview Images

- Added the ability to name the component dynamically.

  - Users can now specify a custom name for the component when defining it.

- Added feature to remove selected files

### Changed

- N/A

### Fixed

- N/A

## [1.0.3] - 2024-05-26

### Added

- Added README

### Changed

- N/A

### Fixed

- N/A

## [1.0.2] - 2024-05-26

### Added

- N/A

### Changed

- N/A

### Fixed

- Fixed path in package.json which resulted in not being able to import the library.

## [1.0.1] - 2024-05-26

### Added

- N/A

### Changed

- Modified how the custom element "image-uploader" is defined. Instead of directly using `customElements.define("image-uploader", ImageUploader);`, the function `defineImageUploader()` should now be called to define the custom element.

### Fixed

- N/A

## [1.0.0] - 2024-05-25

### Added

- Initial release of `image-upload-wc`.
- Added support for multiple file selection.
- Implemented image preview functionality.
- Created basic form handling for image uploads.

### Changed

- N/A

### Fixed

- N/A
