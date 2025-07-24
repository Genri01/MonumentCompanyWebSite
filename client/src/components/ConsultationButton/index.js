import React from "react";
import "./style.css";

const ConsultationButton = ({ top, right, left, bottom, onClick, mobile }) => {
  return (
    <div style={{ position: 'absolute', top, right, left, bottom }} onClick={() => { onClick('e')}} className={`${mobile ? "mobile-btn-consultation" : "btn-consultation"}`}>
      Получить консультацию
    </div>
  );
};

export default ConsultationButton;
