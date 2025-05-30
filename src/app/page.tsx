'use client';

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const playVideo = async () => {
      try {
        if (videoRef.current) {
          console.log('Video element exists');
          
          videoRef.current.addEventListener('loadedmetadata', () => {
            console.log('Video metadata loaded');
          });
          
          videoRef.current.addEventListener('loadeddata', () => {
            console.log('Video data loaded');
          });
          
          videoRef.current.addEventListener('playing', () => {
            console.log('Video is playing');
          });
          
          // Set video to low power mode
          videoRef.current.playbackRate = 1;
          videoRef.current.volume = 0;
          
          const playPromise = videoRef.current.play();
          if (playPromise !== undefined) {
            await playPromise;
            console.log('Video playing successfully');
            setVideoError(false);
          }
        }
      } catch (error) {
        console.error('Error playing video:', error);
        setVideoError(true);
      }
    };

    playVideo();

    // Add click event listener to the document for iOS
    const handleClick = () => {
      if (videoRef.current && videoRef.current.paused) {
        playVideo();
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Video Background */}
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            controls={false}
            className="w-full h-full object-cover"
            style={{
              position: 'fixed',
              right: '0',
              bottom: '0',
              minWidth: '100%',
              minHeight: '100%',
              width: 'auto',
              height: 'auto'
            }}
            onError={(e) => {
              console.error('Video error:', e);
              setVideoError(true);
            }}
          >
            <source 
              src="https://res.cloudinary.com/dnsovapxr/video/upload/v1748617072/background_st0zbz.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/30" />
          {videoError && (
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <button 
                onClick={() => videoRef.current?.play()}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-all"
              >
                Click to Play Video
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="p-8 rounded-xl bg-black/20 backdrop-blur-sm border border-white/60 shadow-[0_0_40px_rgba(255,255,255,0.4)] flex flex-col gap-8 items-center hover:shadow-[0_0_70px_rgba(255,255,255,0.6)] transition-all duration-500">
          <h1 className="text-white text-3xl font-bold mb-4 text-shadow-glow">s7m1n_</h1>
          
          <div className="flex flex-col gap-6 w-full">
            <a
              href="https://www.instagram.com/s7m1n_/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-lg bg-black/30 backdrop-blur-sm border border-white/40 hover:border-white/80 transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transform hover:scale-105"
            >
              <Image
                src="/instagram.svg"
                alt="Instagram"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <span className="text-white">Instagram</span>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-lg bg-black/30 backdrop-blur-sm border border-white/40 hover:border-white/80 transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transform hover:scale-105">
              <Image
                src="/discord.svg"
                alt="Discord"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <span className="text-white">s7m1n_</span>
            </div>

            <a
              href="https://www.tiktok.com/@0j4u"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-lg bg-black/30 backdrop-blur-sm border border-white/40 hover:border-white/80 transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transform hover:scale-105"
            >
              <Image
                src="/tiktok.svg"
                alt="TikTok"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <span className="text-white">TikTok</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
