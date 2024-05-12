import React from "react";
import { AppHeader } from "../components/AppHeader";
import { AppButton } from "../components/AppButton";
import { AppInput } from "../components/AppInput";
const Welcome = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <AppHeader
            headerText="Добро пожаловать в квиз от лучшего учебного центра"
            headerType="h1"
          />

          <form className="welcome__form">
            <AppInput 
            inputLable="Ваше имя" 
            inputPlaceholder="Ваш ответ" 
            inputType="text" 
            id="username" 
            errorText="Введите Имя в правильном формате " 
            hasError={true} 
            />
            <AppInput 
            inputLable="Ваш номер" 
            inputPlaceholder="+998-90" 
            inputType="tel" 
            id="phone" 
            errorText="Введите Номер в правильном формате" 
            />

            <AppButton 
            isDisabled={false} 
            buttonType="button" 
            buttonText="Далее" 
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
