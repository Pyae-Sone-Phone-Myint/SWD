import React from "react";
import "./Loading.css"

const Loading = () => {
  return (
    <div class="loading-container">
      <div class="spinner"></div>
      <div class="spinner-center"></div>
      <div class="loading-text">Loading...</div>
    </div>
  );
};

export default Loading;
