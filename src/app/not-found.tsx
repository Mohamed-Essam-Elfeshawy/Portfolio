import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#07090e] text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 max-w-md w-full shadow-2xl">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 mb-4 font-mono">
          404
        </h1>
        <h2 className="text-2xl font-bold text-white mb-2">Page Not Found</h2>
        <p className="text-sm text-gray-400 mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/25 transition-all"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
