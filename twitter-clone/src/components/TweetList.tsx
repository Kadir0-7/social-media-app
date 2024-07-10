import React from 'react';
import Tweet from './Tweet';

// eslint-disable-next-line @typescript-eslint/no-redeclare
interface Tweet {
  id: string;
 
  content: string;
}

interface TweetListProps {
  tweets: Tweet[];
}

const TweetList: React.FC<TweetListProps> = ({ tweets }) => {
  return (
    <div>
      {tweets.map(tweet => (
        <Tweet key={tweet.id}  content={tweet.content} />
      ))}
    </div>
  );
};

export default TweetList;
