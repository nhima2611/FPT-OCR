import axios from "axios";

export const AIconvert = async (image) => {
  const requestData = new FormData();
  requestData.append("image", image);
  const response = await axios.post(
    "https://api.fpt.ai/vision/idr/vnm",
    requestData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        "api-key": "9IbkqLCra9X4PYM3VBcXiL5EtHOSF2oA",
      },
    }
  );
  return response.data.data[0];
};
