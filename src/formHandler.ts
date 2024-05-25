export function handleFormSubmit(event: Event, selectedFiles: File[]) {
  event.preventDefault();

  const form = event.target as HTMLFormElement;
  const formData = new FormData(form);

  // Append selected files to formData
  selectedFiles.forEach((file, index) => {
    formData.append(`file${index}`, file);
  });

  // Create an XMLHttpRequest to submit the form data
  const xhr = new XMLHttpRequest();
  xhr.open(form.method, form.action, true);
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log("Form submitted successfully:", xhr.responseText);
    } else {
      console.error("Form submission failed:", xhr.statusText);
    }
  };
  xhr.send(formData);
}
