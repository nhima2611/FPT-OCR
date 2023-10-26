import { useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import { AIconvert } from "./axios";

function App() {
  const refDropzone = useRef();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileChange = (reader) => {
    setSelectedImage(reader.result);
  };

  const onDrop = (acceptedFiles) => {
    // Set the selected file
    setSelectedImage(acceptedFiles[0]);
  };

  const handleSubmitIdentityBack = async (data) => {
    try {
      const response = await AIconvert(selectedImage);
      if (response?.type === "chip_back") {
        console.log(response);
      } else {
        alert("Anh khong hop le");
      }
    } catch (error) {
      alert("failed");
    }
  };

  const handleUpload = async () => {
    try {
      if (!selectedImage) {
        console.log("No file selected.");
        return;
      }

      const formData = new FormData();

      // formData.append('image_base64', data);
      formData.append("image_base64", selectedImage);

      console.log("formdata all", formData.getAll("image_base64"));

      // Replace 'YOUR_UPLOAD_ENDPOINT' with the actual endpoint where you want to send the image
      const response = await AIconvert(selectedImage);

      console.log("File uploaded successfully:", response.data);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };
  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  return (
    <>
      <div>
        <div {...getRootProps()} className="dropzone">
          <input {...getInputProps()} />
          <p>Drag 'n' drop an image here, or click to select a file</p>
        </div>
        {selectedImage && (
          <div>
            <p>Selected File: {selectedImage.name}</p>
            <button onClick={handleUpload}>Upload</button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
