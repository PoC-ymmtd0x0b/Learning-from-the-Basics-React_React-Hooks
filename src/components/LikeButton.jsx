import React, { useState } from "react";

export default function LikeButton() {
  const [liked, setLiked] = useState(false);
  const handleLike = () => setLiked(!liked);

  return (
    <button onClick={handleLike}>{liked ? "いいね済み" : "いいね前"}</button>
  );
}
