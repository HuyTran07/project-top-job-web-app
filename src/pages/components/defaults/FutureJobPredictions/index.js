import React, { useState } from "react";
import axios from "axios";

const FutureJobPredictions = () => {
  const [jobInfo, setJobInfo] = useState("");
  const [predictions, setPredictions] = useState({});
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    setJobInfo(event.target.value);
  };

  const handleButtonClick = () => {
    setLoading(true);
    axios
      .post("http://localhost:8000/api/predictions/", { jobInfo })
      .then((response) => {
        console.log(response.data);
        setPredictions(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Lỗi khi gửi yêu cầu POST", error);
        setLoading(false);
      });
  };

  return (
    <div>
      <input type="text" value={jobInfo} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Xác nhận</button>
      {loading ? (
        <p>Đang tải...</p>
      ) : (
        <div>
          <h1>Dự đoán:</h1>
          {predictions.predicted_quantity && (
            <p>Số lượng tuyển dụng dự đoán: {predictions.predicted_quantity}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default FutureJobPredictions;
