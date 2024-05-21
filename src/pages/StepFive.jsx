import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppButton } from '../components/AppButton';
import { ProgressBar } from '../components/ProgressBar';
import { AppHeader } from '../components/AppHeader';
import '../styles/second.css'; // Импортируем новые стили

const ConfirmationPage = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/Thanks');
  };

  const handleRestart = () => {
    localStorage.clear();
    navigate('/step-one');
  };

  const userAnswer = JSON.parse(localStorage.getItem('question1'));
  const checkedCourse = JSON.parse(localStorage.getItem('checkedCourse'));
  const img = JSON.parse(localStorage.getItem('img'));
  const number = JSON.parse(localStorage.getItem('number'));

  return (
    <div className="container">
      <div className="wrapper">
        
        <div className="question">
          <AppHeader headerText="Вы уверены?" headerType="h2" />
          <div className="answers-summary">
            <p>Откуда вы про нас узнали?: {userAnswer}</p>
            <p>На каком курсе вы обучаетесь?: {checkedCourse}</p>
            <p>Занимательный вопрос: {img}</p>
            <p>Нравится ли Техникум?: {number}</p>
          </div>
          <div className="confirmation-buttons">
            <AppButton
              buttonText="Да"
              buttonType="button"
              buttonClick={handleNext}
              className="button-next"
            />
            <AppButton
              buttonText="Начать заново"
              buttonType="button"
              buttonClick={handleRestart}
              className="button-restart"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;




