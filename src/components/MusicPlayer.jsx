import { useEffect, useRef, useState } from "react";

const songs = [
    "audio/aquarium,eyes,.mp3",
    "audio/chairsx.mp3",
    "audio/décalcomanie noisex.mp3",
    "audio/doublelead,girls,v.mp3",
    "audio/flute,girls,ii.mp3",
    "audio/Kadenz,.mp3",
    "audio/lesson roomx.mp3",
    "audio/secret,green,steps.mp3",
    "audio/secret,love,steps.mp3",
    "audio/seesaw,.mp3",
    "audio/seesaw,.mp3",
    "audio/stereo,bright,curve.mp3",
    "audio/surround,test tubes.mp3",
    "audio/tonesx.mp3",
    "audio/wind,glass,bluebird.mp3",
    "audio/wind,glass,girls.mp3",
];

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  function playRandomSong() {
    const randomIndex = Math.floor(Math.random() * songs.length);
    audioRef.current.src = songs[randomIndex];
    audioRef.current.load();
    audioRef.current.play();
  }

  useEffect(() => {
    playRandomSong();
    audioRef.current.addEventListener("ended", playRandomSong);
    return () => {
      audioRef.current.removeEventListener("ended", playRandomSong);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 flex gap-2">
      <button
        onClick={() => {
          if (audioRef.current.paused) {
            audioRef.current.play();
            setIsPlaying(true);
          } else {
            audioRef.current.pause();
            setIsPlaying(false);
          }
        }}
        className="bg-black text-white p-2 rounded-full"
      >
        {isPlaying ? "⏸" : "▶"}
      </button>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="bg-black text-white p-2 rounded-full"
      >
        ↑↑
      </button>
      <audio ref={audioRef} autoPlay>
        <source type="audio/mp3" />
      </audio>
    </div>
  );
}
