import React, { useState } from 'react';

interface ComposeTweetProps {
  onTweet: (content: string) => void;
}

const ComposeTweet: React.FC<ComposeTweetProps> = ({ onTweet }) => {
  const [content, setContent] = useState('');

  const handleTweet = () => {
    onTweet(content);
    setContent('');
  };

  return (
    <div>
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      <button onClick={handleTweet}>Tweet</button>
    </div>
  );
};

export default ComposeTweet;
