import React from 'react';
import { Link } from "react-router-dom";

const PostCard = ({title, body, user, ...props}) => {

  return (
    <div className="post">
    <div className="mb-2">
      <h2>{props.id} : {title.substring(0, 15) + "..." }</h2>
      <p className="mb-1">{body.substring(0, 40) + "..." }</p>
      <em>{user.name}</em>
    </div>
      <Link to={`/posts/${props.id}`}>En savoir plus</Link>
    </div>
  )
}

export default PostCard;