import React from 'react';

export const AppButton = ({buttonText,isDisabled,buttonType,buttonClick, className}) => {
    return(
        <div>
            <button disabled={isDisabled}
             type={buttonType === "submit" ? "submit" : "button"} 
            id="next-btn"
            onClick={buttonClick}
                className={className}>
              {buttonText}
            </button>
        </div>
    )
}