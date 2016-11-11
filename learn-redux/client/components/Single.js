import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Single = React.createClass({
  render() {
    const { posts, params } = this.props;
    const i = posts.findIndex((post) => post.code === params.postId);
    const post = posts[i];

    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        <Comments />
      </div>
    );
  }
});

export default Single;
