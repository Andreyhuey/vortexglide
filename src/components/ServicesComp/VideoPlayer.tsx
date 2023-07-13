import React from "react";
import { FiPlayCircle } from "react-icons/fi";
import dynamic from "next/dynamic";
//@ts-ignore
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

interface props {
  vidUrl: string;
  heighT: number;
  widtH: string;
  thumbNail?: string;
  hidePlayBtn?: boolean;
  vidPlaying?: boolean;
  setVidPlaying?: any;
  className?: any;
}

const VideoPlayer = ({
  vidUrl,
  heighT,
  widtH,
  thumbNail,
  hidePlayBtn,
  vidPlaying,
  setVidPlaying,
  className,
}: props) => {
  return (
    <div>
      <ReactPlayer
        //@ts-ignore
        url={vidUrl}
        controls={true}
        width={widtH}
        height={heighT}
        playing={vidPlaying}
        light={thumbNail}
        className={className}
        playIcon={
          <div className="flex items-center justify-center rounded-full">
            <div
              className={`
              
              items-center justify-center  rounded-full z-10`}
              onClick={() => setVidPlaying(true)}
            >
              <FiPlayCircle size="50" color="white" />
            </div>
          </div>
        }
      />
    </div>
  );
};

export default VideoPlayer;
