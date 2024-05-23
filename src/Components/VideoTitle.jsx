import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className=" pt-40 px-12 absolute bg-gradient-to-r from-black text-white w-screen aspect-video">
      <h1 className="font-bold text-2xl">{title}</h1>

      <p className="w-1/4 py-4 text-lg">{overview}</p>
      <div>
        <button  className="m-2 p-2 px-10  bg-white text-black rounded-md text-xl hover:opacity-50">▶️Play</button>
        <button  className="m-2 p-2 px-10 bg-gray-500 rounded-md text-xl opacity-80 text-black">ℹ️More info </button>
      </div>
    </div>
  )
}

export default VideoTitle