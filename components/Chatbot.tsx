import React, { useState } from 'react';

type Node = {
  message: string;
  options: Option[];
}

type Option = {
  text: string;
  nextNode: Node;
}

const startNode: Node = {
  message: 'Hello, how can I assist you today?',
  options: [
    {
      text: 'I need help with my order',
      nextNode: {
        message: 'Sure, could you please provide your order number?',
        options: []
      }
    },
    {
      text: 'I want to know more about your products',
      nextNode: {
        message: 'We have a wide range of products. Could you please specify the category?',
        options: []
      }
    }
  ]
}

const Chatbot: React.FC = () => {
  const [currentNode, setCurrentNode] = useState(startNode);

  const handleOptionClick = (option: Option) => {
    setCurrentNode(option.nextNode);
  }

  return (
    <div>
      <p>{currentNode.message}</p>
      {currentNode.options.map((option, index) => (
        <button key={index} onClick={() => handleOptionClick(option)}>
          {option.text}
        </button>
      ))}
    </div>
  );
}

export default Chatbot;