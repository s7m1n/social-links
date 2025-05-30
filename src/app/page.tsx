import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Video Background */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="relative w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            className="absolute min-w-full min-h-full object-cover"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          >
            <source 
              src="https://res.cloudinary.com/dnsovapxr/video/upload/v1748617072/background_st0zbz.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px]" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="p-8 rounded-xl bg-black/40 backdrop-blur-md border border-white/60 shadow-[0_0_40px_rgba(255,255,255,0.4)] flex flex-col gap-8 items-center hover:shadow-[0_0_70px_rgba(255,255,255,0.6)] transition-all duration-500">
          <h1 className="text-white text-3xl font-bold mb-4 text-shadow-glow">s7m1n_</h1>
          
          <div className="flex flex-col gap-6 w-full">
            <a
              href="https://www.instagram.com/s7m1n_/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-lg bg-black/50 backdrop-blur-sm border border-white/40 hover:border-white/80 transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transform hover:scale-105"
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

            <div className="flex items-center gap-4 p-4 rounded-lg bg-black/50 backdrop-blur-sm border border-white/40 hover:border-white/80 transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transform hover:scale-105">
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
              className="flex items-center gap-4 p-4 rounded-lg bg-black/50 backdrop-blur-sm border border-white/40 hover:border-white/80 transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transform hover:scale-105"
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
