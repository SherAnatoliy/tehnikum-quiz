import React, { useEffect, useState } from "react";
import { AppHeader } from "../components/AppHeader";
import { AppInput} from "../components/AppInput";
import { AppButton } from "../components/AppButton";
const StepOne = () => {
  const [text, setText]=useState("")
  const [textError,setTextError] = useState(false)
  const handleClick =()=>{
    if(!text){
      setTextError(true)
    }else{
      setTextError(false)
    } }

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
            <AppHeader
        />
    
          <AppInput
           hasError={textError}
            inputLable="" 
            inputPlaceholder="Ваш ответ" 
            inputType="text" 
            id="username" 
            errorText="Введите ваш ответ  " 
            // hasError={false} 
            inputValue={text}
            inputChange={setText}
          />
        
            <AppButton
             isDisabled={false} 
             buttonType="button" 
             buttonText="Далее"
             buttonClick={handleClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
