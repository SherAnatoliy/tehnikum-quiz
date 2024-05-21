import React from "react";

export const Text = ({ text, textType }) => {
  switch (textType) {
    case "p":
      return <p>{text}</p>;
    case "span":
      return <span>{text}</span>;
    case "ul":
      return (
        <ul>
          {text.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol>
          {text.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      );
    default:
      return null; 
  }
};
