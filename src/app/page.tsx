import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="p-8 rounded-xl bg-black border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)] flex flex-col gap-8 items-center">
        <h1 className="text-white text-3xl font-bold mb-4">s7m1n_</h1>
        
        <div className="flex flex-col gap-6 w-full">
          <a
            href="https://www.instagram.com/s7m1n_/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-lg bg-black border border-white/10 hover:border-white/30 transition-all hover:shadow-[0_0_10px_rgba(255,255,255,0.1)]"
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

          <div className="flex items-center gap-4 p-4 rounded-lg bg-black border border-white/10 hover:border-white/30 transition-all hover:shadow-[0_0_10px_rgba(255,255,255,0.1)]">
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
            className="flex items-center gap-4 p-4 rounded-lg bg-black border border-white/10 hover:border-white/30 transition-all hover:shadow-[0_0_10px_rgba(255,255,255,0.1)]"
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
  );
}
