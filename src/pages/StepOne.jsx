import React, { useEffect, useState } from "react";
import { ProgressBar } from "../components/ProgressBar";
import { AppHeader } from "../components/AppHeader";
import { AppInput} from "../components/AppInput";
import { useNavigate } from "react-router-dom";
import { AppButton } from "../components/AppButton";

const StepOne = () => {
  // const [text, setText]=useState("");
  // const [textError,setTextError] = useState(false);
  let [userAnswer, setUserAnswer] =  useState ("");
  let [useError, setUserError] = useState(false);
  let [buttonError, setButtonError] = useState(true);
  const navigate = useNavigate();
  const russianTextRegex = /^[А-ЯЁа-яё0-9\s]+$/;
  const handleClick =()=>{
    if(!russianTextRegex.test(userAnswer)){           
      setUserError(true)
    }else{
      setUserError(false)
      navigate("/step-two")
      localStorage.setItem("question1", JSON.stringify(userAnswer));
    } };
    useEffect(()=>{
      if(!userAnswer){
         setButtonError(true);
      }else{
        setButtonError(false)
       
      }
    },[userAnswer]);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">

            <ProgressBar  currentStep="1"/>
          <div className="question">
            <AppHeader
            headerText= "Откуда вы про нас узнали?"
        />
          <AppInput
            inputLable="" 
            inputPlaceholder="Ваш ответ" 
            inputType="text" 
            id="username" 
            errorText="Введите ваш ответ на русском языке  " 
            inputValue={userAnswer}
            hasError={useError}
            inputChange={setUserAnswer}
          />
        
            <AppButton
             isDisabled={buttonError} 
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


