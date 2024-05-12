import React from 'react';

export const AppButton = ({buttonText,isDisabled,buttonType}) => {
    return(
        <div>
            <button disabled={isDisabled} type={buttonType === "submit" ? "submit" : "button"} id="next-btn">
              {buttonText}
            </button>
        </div>
    )
}