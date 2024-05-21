import React from "react";
import { AppHeader } from "../components/AppHeader";
import { Text } from "../components/Text";
// import { useNavigate } from "react-router-dom";
// const navigate = useNavigate();
const Thanks = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="thanks">
          <img src="./img/bell.png" alt="bell" />
          
          {/* <h1>Спасибо за прохождение опроса!</h1> */}
          
          {/* <p>Получи свою скидку по ссылке ниже или другое блаблабла</p> */}
          <Text
          text="Получи свою скидку по ссылке ниже или другое блаблабла"
          textType="p"
          />
          <button type="button" id="get-link">
            Получить ссылку
          </button>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
