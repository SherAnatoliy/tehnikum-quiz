import React from "react";
import { AppHeader } from "../components/AppHeader";
import { AppButton } from "../components/AppButton";
import { AppInput } from "../components/AppInput";
const Welcome = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <AppHeader/>
          <form className="welcome__form">
         <AppInput inputLable="Ваше имя" inputPlaceholder="Ваш ответ"/>
         <AppInput inputLable="Ваш номер" inputPlaceholder="+998-90"/>
      
            <AppButton/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
