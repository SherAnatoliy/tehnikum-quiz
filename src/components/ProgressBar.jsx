import React from "react"
export const ProgressBar = ({currentStep}) => {
    const variants = [1,2,3,4];
    return (
        <div className="indicator">
            <div className="indicator__text">
                <span className="indicator__description">
                    Скидка за прохождение опроса:
                </span>
                <span className="indicator__value">15%</span>
            </div>
            <div className="indicator__progressbar">
             {variants.map((e,i)=> (
              <div
              key={e} 
              className={`indicator__unit indicator__unit-${e} 
              ${currentStep > i && "_active"}`}></div>  
             ))}
            
            </div>
        </div>
    );
};

{/* <div className="indicator__unit indicator__unit-1 _active"></div>
<div className="indicator__unit indicator__unit-2"></div>
<div className="indicator__unit indicator__unit-3"></div>
<div className="indicator__unit indicator__unit-4"></div> */}
// let a = [1,2,3,4,5]
// let b = [1,2,3,4,5]
// a.map((e)=>{
//     return e*4
// })
// b.forEach((e)=>{
//     return e*4
// })
// conso