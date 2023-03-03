import React from 'react'

import Card from "../shared/Card";
import {FaTimes} from "react-icons/fa"

function FeedbackItem({ item }) {
  return (
    <Card className="card">
      <div className="num-display">{item.rating}<FaTimes /></div>
      <div className="text-display">{item.text}</div>
      <FaTimes />
    </Card>
    
  );
}

export default FeedbackItem;
