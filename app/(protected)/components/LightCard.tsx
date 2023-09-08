import React from "react";

function LightCard() {
  return (
    <div className="space-y-2">
      <label>
        <input
          aria-hidden="true"
          type="radio"
          value="dark"
          className="hidden"
        />
        <div className="global-theme-div">
          <div className="space-y-2 rounded-md bg-zinc-50 p-2">
            <div className="global-theme-content-1 bg-zinc-100">
              <div className="global-theme-title bg-zinc-300"></div>
              <div className="global-theme-text bg-zinc-300"></div>
            </div>
            <div className="global-theme-content flex bg-zinc-100">
              <div className="global-theme-image bg-zinc-300"></div>
              <div className="global-theme-text bg-zinc-300"></div>
            </div>
            <div className="global-theme-content flex bg-zinc-100">
              <div className="global-theme-image bg-zinc-300"></div>
              <div className="global-theme-text bg-zinc-300"></div>
            </div>
          </div>
        </div>
        <span className="label text-center pt-2">Light</span>
      </label>
    </div>
  );
}

export default LightCard;
