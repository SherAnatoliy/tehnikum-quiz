// import React from "react";
// // import { useNavigate } from "react-router-dom";
// import { LinkButton } from "../components/LinkButton";
// import { ProgressBar } from "../components/ProgressBar";
// import { AppButton } from "../components/AppButton";
// import { AppHeader } from "../components/AppHeader";
// // const navigate = useNavigate();

// const StepFour = () => {
//   return (
//     <div className="container">
//       <div className="wrapper">
//         <div className="emoji-quiz">

//            <ProgressBar  currentStep="4"/>
//           <div className="question">
//             {/* <h2>4. Занимательный вопрос</h2> */}
//             <AppHeader/>
//             <ul className="level-variants">
//               <li className="variant-wrapper">
//                 <input required type="radio" name="variant" id="variant-1" />
//                 <label htmlFor="variant-1">1</label>
//               </li>
//               <li className="variant-wrapper">
//                 <input required type="radio" name="variant" id="variant-2" />
//                 <label htmlFor="variant-2">2</label>
//               </li>
//               <li className="variant-wrapper">
//                 <input required type="radio" name="variant" id="variant-3" />
//                 <label htmlFor="variant-3">3</label>
//               </li>
//               <li className="variant-wrapper">
//                 <input required type="radio" name="variant" id="variant-4" />
//                 <label htmlFor="variant-4">4</label>
//               </li>
//               <li className="variant-wrapper">
//                 <input required type="radio" name="variant" id="variant-5" />
//                 <label htmlFor="variant-5">5</label>
//               </li>
//             </ul>
//             {/* <button type="button" id="next-btn" disabled>
//               Далее
//             </button> */}
//                     <LinkButton isDisabled={false} linkType="Button" linkText="Далее" linkBtn="/Thanks"/>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StepFour;


import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { LinkButton } from "../components/LinkButton";
import { ProgressBar } from "../components/ProgressBar";
import { AppButton } from "../components/AppButton";
import { AppHeader } from "../components/AppHeader";
import { AppInput } from "../components/AppInput";
import { AnswerItem } from "../components/AnswerItem";

const StepFour = () => {
  const navigate = useNavigate();
    const variants = [
      {
        id:"variant-1",
        labelText:"1"
      },
      {
        id:"variant-2",
        labelText:"2"
      },
      {
        id:"variant-3",
        labelText:"3"
      },
      {
        id:"variant-4",
        labelText:"4"
      },
      {
        id:"variant-5",
        labelText:"5" 
      }
    ];
  
    const [checkedAnswer, setCheckedAnswer] = useState(null);
    if(checkedAnswer==null){
      localStorage.setItem("number", "")
    }else{
      localStorage.setItem("number",JSON.stringify(checkedAnswer))
    }
  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">

           <ProgressBar  currentStep="4"/>
          <div className="question">
            <AppHeader
            headerText="Нравится ли Техникум?"
            headerType="h2"
            />
            <ul className="level-variants">
            {variants.map((elem) => ( 
             <AnswerItem
                key={elem.id}
                  id={elem.id}
                  labelText={elem.labelText}
                  onChange={() => setCheckedAnswer(elem.labelText)}
                  checked={checkedAnswer === elem.labelText}
                  />
                ))}
            </ul>
     
                    <LinkButton isDisabled={false} linkType="Button" linkText="Далее" linkBtn="/step-five"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepFour;
