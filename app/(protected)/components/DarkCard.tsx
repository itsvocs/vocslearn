import React from "react";

export default function DarkCard() {
  return (
    <div className="space-y-2">
      <label className="cursor-pointer">
        <input
          aria-hidden="true"
          type="radio"
          value="dark"
          className="hidden"
        />
        <div className="global-theme-div">
          <div className="space-y-2 rounded-md bg-zinc-950 p-2">
            <div className="global-theme-content-1 bg-zinc-900">
              <div className="global-theme-title bg-zinc-600"></div>
              <div className="global-theme-text bg-zinc-600"></div>
            </div>
            <div className="global-theme-content flex bg-zinc-900">
              <div className="global-theme-image bg-zinc-600"></div>
              <div className="global-theme-text bg-zinc-600"></div>
            </div>
            <div className="global-theme-content flex bg-zinc-900">
              <div className="global-theme-image bg-zinc-600"></div>
              <div className="global-theme-text bg-zinc-600"></div>
            </div>
          </div>
        </div>
        <span className="label text-center pt-2">Dark</span>
      </label>
    </div>
  );
}
