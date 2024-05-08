import React from 'react';

export const AppInput = ({inputLable, inputPlaceholder}) => {
    return(
            <label className="input-wrapper" htmlFor="username">
            {inputLable}
              <input
                required
                type="text"
                name="username"
                id="username"
                placeholder={inputPlaceholder}
              />
              <span id="error-message">
                Введите номер в правильном формате например
              </span>
            </label>
    )
}