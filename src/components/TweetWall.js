import React from 'react';
import Tweet from './Tweet';

class TweetWall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };
  }

  // TODO: componentWillMount()
  componentWillMount() {
    this.setState({
      tweets: this.props.newTweets
    });
  }

  // TODO: shouldComponentUpdate()
  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.newTweets.length > 0)
  }

  // TODO: componentWillReceiveProps()
  componentWillReceiveProps(nextProps) {
    var array_1 = nextProps.newTweets;
    var array_2 = this.state.tweets;
    this.setState({
      tweets: array_1.concat(array_2)
    });
  }

  render() {
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;
