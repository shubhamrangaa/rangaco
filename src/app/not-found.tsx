import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <Image
            src="/LogoRangaCo.svg"
            alt="Ranga & Company"
            width={80}
            height={80}
            className="mx-auto mb-4"
          />
          <h1 className="text-4xl font-bold text-gray-900 mb-2">404</h1>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist. It might have been moved or deleted.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-[#128948] text-white px-6 py-3 rounded-2xl font-medium hover:bg-[#0f6b3a] transition-colors"
          >
            Go to Homepage
          </Link>
          
          <div className="text-sm text-gray-500">
            <p>Or contact us directly:</p>
            <a
              href="tel:+919829021030"
              className="text-[#128948] hover:underline"
            >
              +91 98290 21030
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 