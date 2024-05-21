import React, { useState } from "react";
import { LinkButton } from "../components/LinkButton";
import { ProgressBar } from "../components/ProgressBar";
import {AppHeader} from "../components/AppHeader"
import { AnswerItem } from "../components/AnswerItem";
import { useNavigate } from "react-router-dom";

const StepTwo = () => {
  const navigate = useNavigate();
  const variants = [
    {
      id:"variant-1",
      labelText:"Fronted"
    },
    {
      id:"variant-2",
      labelText:"BackEnd"
    },
    {
      id:"variant-3",
      labelText:"Ux"
    },
    {
      id:"variant-4",
      labelText:"Uzum"
    },
  ]
  const [checkedAnswer,setCheckedAnswer] = useState(null)
console.log(checkedAnswer)
  // checkedAnswer==null ? localStorage.setItem("checkedCourse", "") :localStorage.setItem
  if(checkedAnswer==null){
    localStorage.setItem("checkedCourse", "")
  }else{
    localStorage.setItem("checkedCourse",JSON.stringify(checkedAnswer))
  }
  return (
    <div className="container">
      <div className="wrapper">
        <div className="variants-quiz">
          <ProgressBar  currentStep="2"/>
          <div className="question">
            <AppHeader
            headerText="На каком курсе вы обучаетесь?"
            headerType="h2"
            />
            <ul className="variants">
              {variants.map((elem) => {
              return<AnswerItem 
              key={elem.id} 
              id={elem.id} 
               labelText={elem.labelText}
              onChange={()=> setCheckedAnswer(elem.labelText)}
              checked={checkedAnswer ===elem.labelText}
              />
              
            })}
            </ul>
            {/* <button type="button" disabled id="next-btn">
              Далее
            </button> */}
                    <LinkButton isDisabled={checkedAnswer ===null} 
                    linkType="Button" 
                    linkText="Далее" 
                    linkBtn="/step-three"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
