import React from "react";
import "./style.css";

const ConsultationButton = ({ onClick, mobile }) => {
  return (
    <div  onClick={() => { onClick('e')}} className={`${mobile ? "mobile-btn-consultation" : "btn-consultation"}`}>
      Получить консультацию
    </div>
  );
};

export default ConsultationButton;
