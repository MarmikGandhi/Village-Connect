// Chat.jsx
import { useState } from 'react';

export default function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Asha', text: 'Hello, anyone available for a quick question?' },
    { id: 2, sender: 'Ramesh', text: 'Sure, Asha. What do you need help with?' },
    { id: 3, sender: 'Asha', text: 'Just wondering about the new crop subsidy process.' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (!newMessage.trim()) return;
    setMessages([...messages, { id: Date.now(), sender: 'You', text: newMessage.trim() }]);
    setNewMessage('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-white px-4 md:px-6 py-12">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-6 text-center">Village Chat</h2>

        <div
          className="bg-white border border-indigo-100 rounded-lg shadow-inner p-4 space-y-3 h-96 overflow-y-auto text-sm md:text-base"
          aria-label="Chat conversation area"
        >
          {messages.map((msg) => (
            <div key={msg.id} className="p-3 rounded bg-indigo-50 border shadow-sm text-gray-800">
              <strong className="text-indigo-600">{msg.sender}:</strong> {msg.text}
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row mt-4 gap-3">
          <input
            type="text"
            aria-label="Type your message"
            className="flex-grow border border-gray-300 rounded px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Enter your message"
          />
          <button
            onClick={handleSend}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
            aria-label="Send message"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
