import { LegacyRef, useEffect } from "react";
import { useRef, useState } from "react";
import Player from "react-player";
import screenfull from "screenfull";
import VideoControls from "@components/VideoControls";

//! https://codesandbox.io/s/react-range-forked-y3e1g?file=/src/index.js
//! https://swiftcarrot.dev/react-input-slider
// TODO change to some library
const format = (seconds) => {
  if (isNaN(seconds)) {
    return `00:00`;
  }
  const date = new Date(seconds * 1000);
  const hh = date.getUTCHours();
  const mm = date.getUTCMinutes();
  const ss = date.getUTCSeconds().toString().padStart(2, "0");
  if (hh) {
    return `${hh}:${mm.toString().padStart(2, "0")}:${ss}`;
  }
  return `${mm}:${ss}`;
};

const Video = ({trailerLink}) => {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [loaded, setLoaded] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [played, setPlayed] = useState(0);
  const playerRef = useRef<Player>(null);
  const playerContainerRef = useRef(null);
  const [timeDisplayFormat, setTimeDisplayFormat] = useState("normal");
  const [showControls, setShowControls] = useState(false);
  const [idleCount, setIdleCount] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  // mouse move idle time

  const handleKeyPress = (event: KeyboardEvent) => {
    // if(event.keyCode === 27) {
    //   //Do whatever when esc is pressed
    // }
    if (event.key == "ArrowLeft") handleRewind();
    else if (event.key === "ArrowRight") handleFastForward();
    else if (event.key == "Escape") {
      isFullScreen && toggleFullScreen();
    } else if (event.key == "f") {
      !isFullScreen && toggleFullScreen();
    } else if (event.key == " ") {
      console.log("called space", playing);

      handlePlayPause();
      console.log("called space after", playing);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const toggleFullScreen = () => {
    //@ts-ignore
    screenfull.toggle(playerContainerRef.current);
    setIsFullScreen((value) => !value);
  };
  const handleRewind = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() - 15);
  };
  const handleFastForward = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() + 15);
  };
  const handleMute = () => setMuted(!muted);
  const handlePlayPause = () => setPlaying((value) => !value);
  const handleVolumeChange = (value) => {
    const temp = Number(value) / 100;
    temp == 0 ? setMuted(true) : setMuted(false);

    setVolume(Number(value) / 100);
  };
  const handlePlaybackRate = (value: number) => {
    setPlaybackRate(value);
  };

  const handleProgress = (value) => {
    /* loaded: 1
loadedSeconds: 37.013333 // total length
played: 0.4306726713857409 // played in percentage
playedSeconds: 15.940631 */ // player in seconds
    // console.log("loaded ", value.loaded);
    setLoaded(Number(value.loaded));
    setPlayed(Number(value.played));
    if (showControls) setIdleCount((count) => ++count);
    if (idleCount > 1) setShowControls(false);
  };

  const handleProgressBarChange = (value) => {
    // console.log({ x: value });

    setPlayed(Number(value) / 100);
    playerRef.current.seekTo(Number(value) / 100);
  };
  const currentTime = playerRef && playerRef.current ? playerRef.current.getCurrentTime() : "00:00";

  const duration = playerRef && playerRef.current ? playerRef.current.getDuration() : "00:00";
  const elapsedTime =
    timeDisplayFormat == "normal" // TODO fix this
      ? format(currentTime)
      : `-${format(Number(duration) - Number(currentTime))}`;

  const totalDuration = format(duration);

  const controlsOptions = {
    videoTitle: "Backbench Coder Trailer",
    playing,
    muted,
    volume,
    loaded,
    handleMute,
    handlePlayPause,
    handleFastForward,
    handleRewind,
    handleVolumeChange,
    handlePlaybackRate,
    handleProgressBarChange,
    playbackRate,
    toggleFullScreen,
    played,
    totalDuration,
    elapsedTime,
    showControls,
    isFullScreen,
  };

  return (
    <div
      className="relative w-full h-full border-4 border-gray-900 rounded-lg"
      ref={playerContainerRef}
      onMouseMove={() => {
        setShowControls(true);
        setIdleCount(0);
      }}
    >
      <Player
        width="100%"
        height="100%"
        url={trailerLink}
        playing={playing}
        muted={muted}
        ref={playerRef}
        volume={volume}
        onProgress={handleProgress}
        playbackRate={playbackRate}
      />
      {/* controls */}
      <VideoControls options={controlsOptions} />

      {/* // change props to options object */}
    </div>
  );
};

export default Video;