// import React from "react";
// // import { useNavigate } from "react-router-dom";
// import { LinkButton } from "../components/LinkButton";
// // const navigate = useNavigate();
// const StepThree = () => {
//   return (
//     <div className="container">
//       <div className="wrapper">
//         <div className="emoji-quiz">
//           <div className="indicator">
//             <div className="indicator__text">
//               <span className="indicator__description">
//                 Скидка за прохождение опроса:
//               </span>
//               <span className="indicator__value">15%</span>
//             </div>
//             <div className="indicator__progressbar">
//               <div className="indicator__unit indicator__unit-1 _active"></div>
//               <div className="indicator__unit indicator__unit-2 _active"></div>
//               <div className="indicator__unit indicator__unit-3"></div>
//               <div className="indicator__unit indicator__unit-4"></div>
//             </div>
//           </div>
//           <div className="question">
//             <h2>3. Занимательный вопрос</h2>
//             <ul className="emoji-variants">
//               <li className="variant-wrapper">
//                 <input required type="radio" name="variant" id="variant-1" />
//                 <label htmlFor="variant-1">
//                   <img src="./img/laugh.png" alt="laugh" />
//                   <p>Ваш ответ 1</p>
//                 </label>
//               </li>
//               <li className="variant-wrapper">
//                 <input required type="radio" name="variant" id="variant-2" />
//                 <label htmlFor="variant-2">
//                   <img src="./img/hearts.png" alt="hearts" />
//                   <p>Ваш ответ 2</p>
//                 </label>
//               </li>
//               <li className="variant-wrapper">
//                 <input required type="radio" name="variant" id="variant-3" />
//                 <label htmlFor="variant-3">
//                   <img src="./img/smirk.png" alt="smirk" />
//                   <p>Ваш ответ 3</p>
//                 </label>
//               </li>
//               <li className="variant-wrapper">
//                 <input required type="radio" name="variant" id="variant-4" />
//                 <label htmlFor="variant-4">
//                   <img src="./img/fright.png" alt="fright" />
//                   <p>Ваш ответ 4</p>
//                 </label>
//               </li>
//             </ul>
//             {/* <button type="button" disabled id="next-btn">
//               Далее
//             </button> */}
//                     <LinkButton isDisabled={false} linkType="Button" linkText="Далее" linkBtn="/step-four"/>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StepThree;


import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { LinkButton } from "../components/LinkButton";
import { AnswerItem } from "../components/AnswerItem";
import { ProgressBar } from "../components/PorgressBar";    
import {AppHeader} from "../components/AppHeader"
// const navigate = useNavigate();

const StepThree = () => {
  const variants = [
    {
      id: "variant-1",
      labelText: "Ваш ответ 1",
      imgSrc: "./img/laugh.png",
      imgAlt: "laugh",
    },
    {
      id: "variant-2",
      labelText: "Ваш ответ 2",
      imgSrc: "./img/hearts.png",
      imgAlt: "hearts",
    },
    {
      id: "variant-3",
      labelText: "Ваш ответ 3",
      imgSrc: "./img/smirk.png",
      imgAlt: "smirk",
    },
    {
      id: "variant-4",
      labelText: "Ваш ответ 4",
      imgSrc: "./img/fright.png",
      imgAlt: "fright",
    },
  ];

  const [checkedAnswer, setCheckedAnswer] = useState(null);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          {/* <div className="indicator">
            <div className="indicator__text">
              <span className="indicator__description">
                Скидка за прохождение опроса:
              </span>
              <span className="indicator__value">15%</span>
            </div>
            <div className="indicator__progressbar">
              <div className="indicator__unit indicator__unit-1 _active"></div>
              <div className="indicator__unit indicator__unit-2 _active"></div>
              <div className="indicator__unit indicator__unit-3"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div> */}
            <ProgressBar/>
          <div className="question">
          <AppHeader
            headerText="3. Занимательный вопрос"
            headerType="h2"
            />
            {/* <h2>3. Занимательный вопрос</h2> */}
        
            <ul className="emoji-variants">
              {variants.map((elem) => (
                <AnswerItem
                key={elem.id}
                  id={elem.id}
                  imgSrc={elem.imgSrc}
                  imgAlt={elem.imgAlt}
                  labelText={elem.labelText}
                  onChange={() => setCheckedAnswer(elem.id)}
                  checked={checkedAnswer === elem.id}
                />
              ))}
            </ul>
            <LinkButton
              isDisabled={false}
              linkType="Button"
              linkText="Далее"
              linkBtn="/step-four"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepThree;

