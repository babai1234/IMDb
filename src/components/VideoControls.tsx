import Slider from "rc-slider";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";
import {MdPlayArrow, MdFastForward, MdFastRewind, MdPause, MdVolumeUp, MdSettings, MdFullscreen, MdCancel, MdVolumeOff, MdFullscreenExit,} from "react-icons/md";
import { BiSkipNext } from "react-icons/bi";
import {
  ChangeEventHandler,
  Dispatch,
  FunctionComponent,
  MouseEventHandler,
  useRef,
  useState,
} from "react";
import classnames from "classnames";
import "rc-slider/assets/index.css";
import { useEffect } from "react";
const VideoControls: FunctionComponent<{ options: controlsOptions }> = ({
  options: {
    loaded,
    showControls,
    played,
    handlePlayPause,
    handleMute,
    playing,

    handleVolumeChange,
    handleProgressBarChange,
    muted,
    volume,
    elapsedTime,
    totalDuration,
    handlePlaybackRate,
    toggleFullScreen,
    videoTitle,
    isFullScreen,
  },
}) => {
  const [showPlaybackSpeed, setShowPlaybackSpeed] = useState(false);
  const ResizableBoxWrapperRef = useRef<HTMLDivElement>();
  const [progressBarX, setProgressBarX] = useState(0);

  // console.log({
  //   totalWidth: ResizableBoxWrapperRef.current?.clientWidth,
  //   progressBarX: progressBarX,
  // });

  const preHandleProgressBarChange = (width) => {
    setProgressBarX(width);
    const x = Number((width / ResizableBoxWrapperRef.current?.clientWidth) * 100);
    handleProgressBarChange(x);
  };

  return (
    <div
      className={classnames(
        "absolute bottom-2  flex opacity-0 left-2 right-2 rounded-lg p-2 bg-gray-600 bg-opacity-50 transition items-center space-x-3",
        {
          "opacity-100": showControls,
        }
      )}
    >
      {!playing ? (
        <MdPlayArrow size={23} className="cursor-pointer" onClick={handlePlayPause} />
      ) : (
        <MdPause size={23} className="cursor-pointer" onClick={handlePlayPause} />
      )}

      {!muted ? (
        <MdVolumeUp size={23} className="cursor-pointer" onClick={handleMute} />
      ) : (
        <MdVolumeOff size={23} className="cursor-pointer" onClick={handleMute} />
      )}
      {/* <div className="w-20">
        <Slider value={volume * 100} onChange={handleVolumeChange} />
      </div> */}

      <span className="text-sm">
        {elapsedTime}/{totalDuration}
      </span>
      <div className="relative flex-1 " ref={ResizableBoxWrapperRef}>
        <div
          className="absolute z-40 h-1 cursor-pointer"
          onClick={(e) => preHandleProgressBarChange(e.nativeEvent.offsetX)}
        >
          <ResizableBox
            onResize={(e, data) => {
              preHandleProgressBarChange(data.size.width);
            }}
            onResizeStop={(e, data) => {
              preHandleProgressBarChange(data.size.width);
            }}
            width={played * 451} // TODO change width to dynamic
            height={4}
            className="bg-red-600 cursor-pointer "
            handle={
              <div className="absolute w-4 h-4 bg-red-600 rounded-full cursor-pointer top-[-6px] left-[98%] " />
            }
            axis="x"
            maxConstraints={[ResizableBoxWrapperRef.current?.clientWidth, 4]}
            handleSize={[20, 20]}
            minConstraints={[0, 16]}
          ></ResizableBox>
        </div>
        <div
          className="absolute z-30 w-full h-1 opacity-0 cursor-pointer"
          onClick={(e) => preHandleProgressBarChange(e.nativeEvent.offsetX)}
        ></div>
        {/* <div
          className={classnames(`absolute z-20 h-1 bg-gray-200 cursor-pointer bg-opacity-60 `)}
        ></div> */}
        <div
          className="absolute z-20 h-1 bg-gray-100 cursor-pointer opacity-60"
          style={{ width: `${Number(loaded) * 451}px` }}
        ></div>
        <div className="absolute z-10 w-full h-1 bg-gray-200 cursor-pointer bg-opacity-30"></div>
      </div>
      {/* <Slider value={played * 100} onChange={handleProgressBarChange} /> */}

      <MdSettings
        size={23}
        className="cursor-pointer"
        onClick={() => setShowPlaybackSpeed((value) => !value)}
      />

      {!isFullScreen ? (
        <MdFullscreen size={23} className="cursor-pointer" onClick={toggleFullScreen} />
      ) : (
        <MdFullscreenExit size={23} className="cursor-pointer" onClick={toggleFullScreen} />
      )}
      {
        <PlaybackSpeedControls
          showPlaybackSpeed={showPlaybackSpeed}
          handlePlaybackRate={handlePlaybackRate}
        />
      }
    </div>
  );
};

export default VideoControls;

interface controlsOptions {
  loaded: Number;
  handlePlayPause: MouseEventHandler<any>;
  handleMute: MouseEventHandler<any>;
  handleRewind: MouseEventHandler<any>;
  handleFastForward: MouseEventHandler<any>;
  handlePlaybackRate: Function;
  handleVolumeChange: (value: number) => void;
  toggleFullScreen: MouseEventHandler<any>;
  handleProgressBarChange: (value: number) => void;
  playing: Boolean;
  muted: Boolean;
  videoTitle: string;
  volume: number;
  playbackRate: number;
  played: number;
  elapsedTime: string;
  totalDuration: string;
  showControls: boolean;
  isFullScreen: boolean;
}
const PlaybackSpeedControls = ({ handlePlaybackRate, showPlaybackSpeed }) => {
  return (
    <div
      className={classnames(
        "absolute flex-col flex opacity-0 space-y-3 bg-black rounded-sm w-52 bottom-10 right-4  bg-opacity-60  transition-all transform ",
        { " opacity-100 ": showPlaybackSpeed }
      )}
    >
      <div className="flex items-center justify-around px-4 py-2 space-x-2 border-b ">
        <MdCancel size={22} className="text-gray-500 cursor-pointer" />
        <span>Playback Speed</span>
      </div>
      <span
        className="px-4 py-1 cursor-pointer hover:bg-gray-800"
        onClick={() => handlePlaybackRate(0.23)}
      >
        0.23
      </span>
      <span
        className="px-4 py-1 cursor-pointer hover:bg-gray-800"
        onClick={() => handlePlaybackRate(0.5)}
      >
        0.5
      </span>
      <span
        className="px-4 py-1 cursor-pointer hover:bg-gray-800"
        onClick={() => handlePlaybackRate(1)}
      >
        Normal
      </span>
      <span
        className="px-4 py-1 cursor-pointer hover:bg-gray-800"
        onClick={() => handlePlaybackRate(1.5)}
      >
        1.5
      </span>
      <span
        className="px-4 py-1 cursor-pointer hover:bg-gray-800"
        onClick={() => handlePlaybackRate(2)}
      >
        2
      </span>
    </div>
  );
};