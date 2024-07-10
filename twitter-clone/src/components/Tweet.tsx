import React from 'react';

interface TweetProps {
 
  content: string;
}

const Tweet: React.FC<TweetProps> = ({  content }) => {
  return (
    <div>
    
      <p>{content}</p>
    </div>
  );
};

export default Tweet;
