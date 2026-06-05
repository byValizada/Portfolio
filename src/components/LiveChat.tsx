import { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { sender: 'bot', text: 'Hello! How can we help you today?' }
  ]);

  const handleSend = () => {
    if (!message.trim()) return;
    
    // Add user message
    setChatHistory(prev => [...prev, { sender: 'user', text: message }]);
    setMessage('');
    
    // Simulate bot response
    setTimeout(() => {
      setChatHistory(prev => [...prev, { sender: 'bot', text: "Thanks for reaching out! A representative will be with you shortly." }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white dark:bg-[#0f1422] border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl w-80 sm:w-96 mb-4 overflow-hidden flex flex-col h-[400px]">
          
          {/* Header */}
          <div className="bg-blue-600 p-4 flex justify-between items-center text-white">
            <div>
              <h3 className="font-bold">Live Support</h3>
              <p className="text-xs text-blue-100">Usually replies in a few minutes</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-blue-700 p-1 rounded-full transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Chat Body */}
          <div className="flex-1 p-4 overflow-y-auto bg-slate-50 dark:bg-[#020617] flex flex-col gap-3">
            {chatHistory.map((msg, i) => (
              <div key={i} className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.sender === 'user' ? 'bg-blue-600 text-white self-end rounded-br-none' : 'bg-slate-200 dark:bg-[#1e293b] text-slate-900 dark:text-white self-start rounded-bl-none'}`}>
                {msg.text}
              </div>
            ))}
          </div>
          
          {/* Input Area */}
          <div className="p-3 bg-white dark:bg-[#0f1422] border-t border-slate-200 dark:border-white/5 flex gap-2">
            <input 
              type="text" 
              placeholder="Type a message..." 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 bg-slate-100 dark:bg-[#0a0e17] border border-slate-200 dark:border-white/10 rounded-full px-4 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500"
            />
            <button 
              onClick={handleSend}
              className="bg-blue-600 hover:bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors shrink-0"
            >
              <Send className="w-4 h-4 ml-0.5" />
            </button>
          </div>
          
        </div>
      )}
      
      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-blue-600 hover:bg-blue-500 text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-blue-500/50 transition-all transform hover:scale-105"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>

    </div>
  );
}
