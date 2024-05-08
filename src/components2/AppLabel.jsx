import React from 'react';

export const AppLabel = () => {
    return(
        <div>
              <label className="input-wrapper">
              <input
                required
                type="text"
                name="answer"
                placeholder="Ваш ответ"
              />
              
              <span id="error-message">
            Введите номер в правильном формате например
              </span>
            </label>
        </div>
    )
}