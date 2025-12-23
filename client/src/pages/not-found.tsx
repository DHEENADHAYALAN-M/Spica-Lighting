import { Link } from "wouter";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black text-white p-4">
      <div className="text-center">
        <div className="flex justify-center mb-8">
          <AlertTriangle className="h-20 w-20 text-primary opacity-50" />
        </div>
        <h1 className="text-6xl font-display font-light mb-4 text-white">404</h1>
        <p className="text-xl text-zinc-400 mb-8 max-w-md mx-auto">
          The page you are looking for has been moved or does not exist.
        </p>

        <Link href="/">
          <button className="clickable px-8 py-3 bg-primary text-black font-bold uppercase tracking-widest hover:bg-white transition-colors rounded">
            Return Home
          </button>
        </Link>
      </div>
    </div>
  );
}
