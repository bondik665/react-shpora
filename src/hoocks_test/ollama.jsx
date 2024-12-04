import React, { useState } from 'react';

const   ChatComponent   = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChat = async () => {
    setLoading(true);
    try {
      const ollama = {
        chat: async ({ model, messages }) => {
          // Здесь должен быть ваш код для отправки запроса на сервер
          // В данном примере просто возвращаем фиктивный ответ
          return {
            message: {
              content: 'The sky appears blue due to the scattering of sunlight by the Earth\'s atmosphere. This phenomenon is known as Rayleigh scattering.'
            }
          };
        }
      };

      const response = await ollama.chat({
        model: 'llama3.1',
        messages: [{ role: 'user', content: 'Why is the sky blue?' }],
      });

      setResponse(response.message.content);
    } catch (error) {
      console.error('Error fetching chat response:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleChat} disabled={loading}>
        {loading ? 'Loading...' : 'Ask about the sky'}
      </button>
      {response && (
        <div>
          <h3>Response:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default ChatComponent;