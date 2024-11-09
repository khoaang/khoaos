import { useState, useEffect } from 'react';
import './KhoaGPT.css';

const RESPONSES = [
  "Have you tried turning it off and on again?",
  "According to my calculations... maybe?",
  "Let me process that through my neural network... *beep boop*",
  "I'm not ChatGPT, I'm just Khoa's digital clone with questionable AI capabilities",
  "Error 418: I'm a teapot 🫖",
  "Did you read the documentation? Just kidding, neither did I",
  "Let me check my training data... oh wait, I don't have any",
  "Computing response... *plays Mario Kart instead*",
  "I could give you a detailed answer, but I'd rather make a dad joke",
  "My neural networks suggest... we should get coffee ☕",
  "Analyzing... analysis complete: ¯\\_(ツ)_/¯",
  "I'm not saying it's robots, but it's robots 🤖",
  "sudo make_me_a_sandwich",
  "01001000 01101001 ... just kidding, I speak English"
];

export const KhoaGPT = ({ onClose }: { onClose: () => void }) => {
  const [input, setInput] = useState('');
  const [conversation, setConversation] = useState<Array<{type: 'user' | 'bot', text: string}>>([]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setConversation(prev => [...prev, { type: 'user', text: input }]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const response = RESPONSES[Math.floor(Math.random() * RESPONSES.length)];
      setConversation(prev => [...prev, { type: 'bot', text: response }]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  return (
    <div className="khoagpt-content">
      <div className="chat-container">
        {conversation.map((msg, i) => (
          <div key={i} className={`chat-message ${msg.type}`}>
            {msg.type === 'bot' ? '🤖 ' : '👤 '}{msg.text}
          </div>
        ))}
        {isTyping && <div className="typing-indicator">KhoaGPT is thinking...</div>}
      </div>
      <form onSubmit={handleSubmit} className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask KhoaGPT a question..."
          className="chat-input"
        />
        <button type="submit" className="send-button">Send</button>
      </form>
    </div>
  );
};