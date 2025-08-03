import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid  items-center justify-items-center gap-16 p-4 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20`}
    >
      <div className="w-full sm:max-w-sm rounded overflow-hidden bg-white">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Gustavo Caruazu</div>
          <p className="text-gray-700 text-base">
            Oi, me chamo Gustavo, desenvolvo aplicações WEB.
          </p>
        </div>
      </div>
    </div>
  );
}
