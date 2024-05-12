import React from 'react';

// export const AppLabel = () => {
//     return(
//         <div>
//               <label className="input-wrapper">
//               <input
//                 required
//                 type="text"
//                 name="answer"
//                 placeholder="Ваш ответ"
//               />
              
//               <span id="error-message">
//             Введите номер в правильном формате например
//               </span>
//             </label>
//         </div>
//     )
// }

 export const AppLabel = ({ inputLable, inputPlaceholder, isRequired, inputType, id, errorText, inputValue, hasError, inputChange  }) => {
  return (
    <label className={`input-wrapper ${hasError && "_error"} `} htmlFor={id}>
      {inputLable}
      <input
        required = {isRequired}
        type={inputType}
        name={id}
        id={id}
        placeholder={inputPlaceholder}
        value={inputValue}
        onChange={(e)=>inputChange(e.target.value)}
      />
      {hasError && <span id="error-message">{errorText}</span>}
        {/* Введите номер в правильном формате например */}
    </label>
  );
}