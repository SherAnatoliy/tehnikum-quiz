import React from 'react';

export const AnswerItem = ({id,labelText, onChange, checked, imgSrc, imgAlt, }) => {
    return(
        <li className="variant-wrapper">
        <input 
        required 
        type="radio"
         name="question" 
         id={id}
         onChange={onChange}
         checked={checked} 
         />
        <label htmlFor={id}> 
        {imgSrc && <img src={imgSrc} alt={imgAlt} />}
        {labelText} 
        </label>
        
      </li>
    )
}