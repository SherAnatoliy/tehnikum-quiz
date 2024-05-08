import React from "react";
import { AppHeader } from "../components2/AppHeader";
import { AppLabel } from "../components2/AppLabel";
import { AppButton } from "../components2/AppButton";
const StepOne = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <div className="indicator">
            <div className="indicator__text">
              <span className="indicator__description">
                скидка за прохождение опроса: 
              </span>
              <span className="indicator__value">15%</span>
            </div>
            <div className="indicator__progressbar">
              <div className="indicator__unit indicator__unit-1"></div>
              <div className="indicator__unit indicator__unit-2"></div>
              <div className="indicator__unit indicator__unit-3"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div>
          <div className="question">
            <AppHeader/>
    
          <AppLabel/>
        
            <AppButton/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
