import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TweetList from './components/TweetList';
import ComposeTweet from './components/ComposeTweet';

interface Tweet {
  id: string;

  content: string;
}

const App: React.FC = () => {
  const [tweets, setTweets] = useState<Tweet[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/tweets')
      .then(response => response.json())
      .then(data => setTweets(data));
  }, []);

  const handleNewTweet = (content: string) => {
    fetch('http://localhost:5000/tweets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: 'User', content }),
    })
    .then(response => response.json())
    .then(newTweet => setTweets([newTweet, ...tweets]));
  };

  return (
    <div>
      <Header />
      <ComposeTweet onTweet={handleNewTweet} />
      <TweetList tweets={tweets} />
    </div>
  );
};

export default App;
