import styles from './AudioCustom.module.css';
import React, { useRef, useState, useEffect } from 'react';
import play from '../../../assets/icons/play.png';
import pause from '../../../assets/icons/pause.png';
import next from '../../../assets/icons/next.png';

export const AudioCustom = ({ playlist }) => {
    const audioRef = useRef(null);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);

    const handlePlay = () => {
        audioRef.current.play();
        setIsPlaying(true);
    };

    const handlePause = () => {
        audioRef.current.pause();
        setIsPlaying(false);
    };

    const handleNext = () => {
        setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % playlist.currentPlaylist.tracks.length);
        if (isPlaying) {
            setTimeout(() => handlePlay(), 0);
        }
    };

    const handlePrevious = () => {
        setCurrentTrackIndex((prevIndex) => (prevIndex - 1 + playlist.currentPlaylist.tracks.length) % playlist.currentPlaylist.tracks.length);
        if (isPlaying) {
            setTimeout(() => handlePlay(), 0);
        }
    };

    const handleProgressChange = (event) => {
        const newValue = event.target.value;
        audioRef.current.currentTime = (newValue / 100) * audioRef.current.duration;
    };

    useEffect(() => {
        const updateProgress = () => {
            const currentTime = audioRef.current.currentTime;
            const duration = audioRef.current.duration;
            setProgress((currentTime / duration) * 100);
        };

        audioRef.current.addEventListener('timeupdate', updateProgress);
        return () => {
            audioRef.current.removeEventListener('timeupdate', updateProgress);
        };
    }, []);

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [currentTrackIndex]);

    return (
        <div className={styles.audioPlayer}>
            <audio
                className={styles.audio}
                ref={audioRef}
                src={playlist.currentPlaylist.tracks[currentTrackIndex].fileUrl}
                preload="metadata"
            />
            <div className={styles.controls}>
                <img className={styles.icon} src={next} onClick={handlePrevious} alt="Previous" />
                {isPlaying ? (
                    <img className={styles.icon} src={pause} onClick={handlePause} alt="Pause" />
                ) : (
                    <img className={styles.icon} src={play} onClick={handlePlay} alt="Play" />
                )}
                <img className={styles.iconRotate} src={next} onClick={handleNext} alt="Next" />
            </div>
            <input
                type="range"
                min="0"
                max="100"
                value={progress}
                className={styles.progressBar}
                onChange={handleProgressChange}
            />
            <div className={styles.trackInfo}>
                <div className={styles.trackTitle}>
                    {/* <p>{playlist.currentPlaylist.tracks[currentTrackIndex].artistName} - {playlist.currentPlaylist.tracks[currentTrackIndex].title}</p> */}
                    <p>{playlist.currentPlaylist.tracks[currentTrackIndex].artistName} - {playlist.currentPlaylist.tracks[currentTrackIndex].title}</p>
                </div>
            </div>
        </div>
    );
};

// export const AudioCustom = ({playlist}) => {
//     const audioRef = useRef(null);
//     const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
//     const [isPlaying, setIsPlaying] = useState(false);

//     const handlePlay = () => {
//         audioRef.current.play();
//         setIsPlaying(true);
//     };

//     const handlePause = () => {
//         audioRef.current.pause();
//         setIsPlaying(false);
//     };

//     const handleNext = () => {
//         setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % playlist.currentPlaylist.tracks.length);
//         if(isPlaying) {
//             setTimeout(()=>handlePlay(), 0);
//         }
//     };

//     const handlePrevious = () => {
//         setCurrentTrackIndex((prevIndex) => (prevIndex - 1 + playlist.currentPlaylist.tracks.length) % playlist.currentPlaylist.tracks.length);
//         if(isPlaying) {
//             setTimeout(()=>handlePlay(), 0);
//         }
//     };
//     console.log(playlist.currentPlaylist)
//     return (
//         <div className={styles.audioPlayer}>
//             <audio className={styles.audio} ref={audioRef} src={playlist.currentPlaylist.tracks[currentTrackIndex].fileUrl} preload="metadata" />
//             <div className={styles.controls}>
//                 <img className={styles.icon} src={next} onClick={handlePrevious} />
//                 {isPlaying ? <img  className={styles.icon} src={pause} onClick={handlePause} /> : <img className={styles.icon} src={play} onClick={handlePlay}  />}
//                 <img className={styles.iconRotate} src={next} onClick={handleNext} />
//             </div>
//             <div className={styles.trackInfo}>
//                 <p>{playlist.currentPlaylist.tracks[currentTrackIndex].artistName} - {playlist.currentPlaylist.tracks[currentTrackIndex].title}</p>
//             </div>
//         </div>
//     );
// };

