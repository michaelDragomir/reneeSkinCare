export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      {/* Header */}
      <header className="border-b border-neutral-800">
        <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="font-serif text-2xl font-light">Renée Skin Care</div>
          <div className="flex gap-8">
            <a href="#" className="text-sm font-light hover:opacity-80 transition">
              Home
            </a>
            <a href="#" className="text-sm font-light hover:opacity-80 transition">
              Services
            </a>
            <a href="#" className="text-sm font-light hover:opacity-80 transition">
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 gap-12 items-center">
          {/* Image Placeholder */}
          <div className="flex justify-center">
            <div className="w-full aspect-square bg-neutral-700 rounded flex items-center justify-center">
              <span className="text-neutral-500">Portrait placeholder</span>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h1 className="font-serif text-5xl font-light leading-tight">
              Renée Skin Care
            </h1>

            <p className="text-lg font-light text-neutral-300">
              Licensed Aesthetician | Integrative Skincare Specialist
            </p>

            <div className="space-y-4 text-base font-light leading-relaxed text-neutral-200">
              <p>
                Licensed and practicing skincare since 1996, with advanced training in both medical and holistic skincare. With over 25 years of experience working alongside dermatology professionals, I have extensive knowledge in treating problematic and challenging skin conditions.
              </p>

              <p>
                My philosophy blends the best of science and nature to help you achieve healthy, radiant skin. I believe true skin health comes from a balanced approach that combines effective skincare treatments with a healthy lifestyle.
              </p>

              <p>
                Through personalized care and proven techniques, my goal is to help you look and feel your best because beautiful skin is more than skin deep.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
