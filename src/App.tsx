import React, { useRef, useState } from 'react';
import { Instagram } from 'lucide-react';
import { TiktokIcon } from './components/TiktokIcon';

function App() {
  const nineLineRef = useRef<HTMLDivElement>(null);
  const fiveLineRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'locations' | 'gallery' | 'imprint'>('locations');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navigateToLocations = () => {
    setCurrentPage('locations');
    setIsMobileMenuOpen(false);
  };

  const navigateToGallery = () => {
    setCurrentPage('gallery');
    setIsMobileMenuOpen(false);
  };

  const navigateToImprint = () => {
    setCurrentPage('imprint');
    setIsMobileMenuOpen(false);
  };

  const openNineLineMenu = () => {
    window.open('/Speisekarte_NineLine.pdf', '_blank');
  };

  const openFiveLineMenu = () => {
    window.open('/Speisekarte_FiveLine.pdf', '_blank');
  };

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const galleryImages = [
    { src: 'https://i.imgur.com/yQDh8dP.jpeg', alt: 'Shisha Lounge Impression 1' },
    { src: 'https://i.imgur.com/1tXXub0.jpeg', alt: 'Shisha Lounge Impression 2' },
    { src: 'https://i.imgur.com/a2Y4bLl.jpeg', alt: 'Shisha Lounge Impression 3' },
    { src: 'https://i.imgur.com/VairwFE.jpeg', alt: 'Shisha Lounge Impression 4' },
    { src: 'https://i.imgur.com/tqyWaoF.jpeg', alt: 'Shisha Lounge Impression 5' },
    { src: 'https://i.imgur.com/NcANCE0.jpeg', alt: 'Shisha Lounge Impression 6' },
    { src: 'https://i.imgur.com/nxwdER8.jpeg', alt: 'Shisha Lounge Impression 7' },
    { src: 'https://i.imgur.com/7uTLyye.jpeg', alt: 'Shisha Lounge Impression 8' },
    { src: 'https://i.imgur.com/b1Yg6Bh.jpeg', alt: 'Shisha Lounge Impression 9' },
    { src: 'https://i.imgur.com/EWAeqjp.jpeg', alt: 'Shisha Lounge Impression 10' },
    { src: 'https://i.imgur.com/MNknBbH.jpeg', alt: 'Shisha Lounge Impression 11' },
    { src: 'https://i.imgur.com/b4S2O9B.jpeg', alt: 'Shisha Lounge Impression 12' },
    { src: 'https://i.imgur.com/9wAqulY.jpeg', alt: 'Shisha Lounge Impression 13' },
    { src: 'https://i.imgur.com/BbT2h66.jpeg', alt: 'Shisha Lounge Impression 14' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="bg-black py-2 fixed w-full z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img 
                src="https://i.imgur.com/OZqtods.png" 
                alt="NineLine Logo" 
                className="h-16 md:h-20"
              />
              <span className="text-2xl md:text-3xl font-bold text-purple-400 ml-2"></span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button onClick={navigateToLocations} className="text-white hover:text-purple-400">Startseite</button>
              <button onClick={navigateToGallery} className="text-white hover:text-purple-400">Galerie</button>
              <button onClick={navigateToImprint} className="text-white hover:text-purple-400">
                Impressum
              </button>
              <a 
                href="https://www.instagram.com/nineline_pb/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-400"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://www.tiktok.com/@nineline_pb?_t=ZN-8vN56uihhjS&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-400"
              >
                <TiktokIcon size={24} />
              </a>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white hover:text-purple-400"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 py-2 border-t border-gray-700">
              <button onClick={navigateToLocations} className="block w-full text-left py-2 text-white hover:text-purple-400">Startseite</button>
              <button onClick={navigateToGallery} className="block w-full text-left py-2 text-white hover:text-purple-400">Galerie</button>
              <button onClick={navigateToImprint} className="block w-full text-left py-2 text-white hover:text-purple-400">
                Impressum
              </button>
              <div className="flex space-x-4 py-2 px-2">
                <a 
                  href="https://www.instagram.com/nineline_pb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-purple-400"
                >
                  <Instagram size={24} />
                </a>
                <a 
                  href="https://www.tiktok.com/@nineline_pb?_t=ZN-8vN56uihhjS&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-purple-400"
                >
                  <TiktokIcon size={24} />
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      <div>
        {currentPage === 'locations' ? (
          <div className="relative">
            <div className="relative h-screen">
              <div 
                className="absolute inset-0"
                style={{
                  backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0)), url(https://i.imgur.com/CtzB20p.jpeg)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              
              <div className="relative h-full flex items-center">
                <div className="container mx-auto px-4">
                  <h1 className="text-6xl md:text-7xl font-bold text-purple-400 mb-4">X-Line</h1>
                  <p className="text-xl md:text-2xl text-white max-w-2xl mb-8">
                    Erleben Sie erstklassige Shisha-Kultur in entspannter Atmosphäre. 
                    Genießen Sie premium Tabaksorten und exquisite Cocktails in unseren 
                    stilvoll eingerichteten Lounges.
                  </p>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => scrollToSection(nineLineRef)}
                      className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
                    >
                      NineLine
                    </button>
                    <button
                      onClick={() => scrollToSection(fiveLineRef)}
                      className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
                    >
                      FiveLine
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="container mx-auto px-4 py-16 text-center">
              <p className="text-white text-lg leading-relaxed max-w-4xl mx-auto">
                Willkommen in unserem Café, wo Genuss und Gemütlichkeit aufeinandertreffen.
                Unsere Karte ist eine Reise durch die Aromen der Welt, von köstlichen Kaffee-
                spezialitäten bis zu herzhaften Snacks und verlockenden Desserts. Egal, ob Sie
                auf der Suche nach einem entspannten Frühstück oder einer süßen Versuchung
                sind, bei uns werden Sie fündig. Unsere Leidenschaft für erstklassige Zutaten
                und sorgfältige Zubereitung spiegelt sich in jeder Speise wieder. Genießen Sie die
                Atmosphäre unseres Cafés – ein Ort, an dem Sie sich wie zuhause
                fühlen werden.
              </p>
            </div>
            
            <div className="container mx-auto px-4 py-12">
              <div ref={nineLineRef} className="mb-24">
                <div className="bg-black/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative h-96 md:h-full">
                      <img 
                        src="https://i.imgur.com/BscL6QE.jpeg"
                        alt="NineLine Interior" 
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="p-8">
                      <h2 className="text-4xl font-bold text-purple-400 mb-6">NineLine</h2>
                      <div className="space-y-8">
                        <div>
                          <h3 className="text-2xl font-semibold mb-4">Öffnungszeiten</h3>
                          <p className="mb-2">Sonntag - Donnerstag: 16:00 - 02:00</p>
                          <p>Freitag - Samstag: 16:00 - 03:00</p>
                        </div>
                        
                        <div>
                          <h3 className="text-2xl font-semibold mb-4">Standort</h3>
                          <p className="text-lg">Riemekestraße 85</p>
                          <p className="text-lg">33102 Paderborn</p>
                        </div>

                        <div>
                          <h3 className="text-2xl font-semibold mb-4">Besonderheiten</h3>
                          <ul className="grid grid-cols-2 gap-3">
                            <li className="flex items-center space-x-2">
                              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                              <span>So-Do 16-18 Uhr Softdrinks + Pfeife 14,90€</span>
                            </li>
                            <li className="flex items-center space-x-2">
                              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                              <span>Okey Tisch</span>
                            </li>
                            <li className="flex items-center space-x-2">
                              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                              <span>Biergarten</span>
                            </li>
                            <li className="flex items-center space-x-2">
                              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                              <span>Fernseher</span>
                            </li>
                            <li className="flex items-center space-x-2">
                              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                              <span>Fun4Four Spieltisch</span>
                            </li>
                          </ul>
                        </div>

                        <div className="flex space-x-4">
                          <button
                            onClick={openNineLineMenu}
                            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
                          >
                            Speisekarte
                          </button>
                          <a
                            href="https://wa.me/491739191196"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-2 border-purple-600 hover:bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
                          >
                            Tisch reservieren
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 rounded-2xl overflow-hidden shadow-2xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2466.0488879775397!2d8.745595776891518!3d51.71893997181436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ba4d4e9f0f6a67%3A0x4f4c4fae06fdd4b0!2sRiemekestr.%2085%2C%2033102%20Paderborn!5e0!3m2!1sde!2sde!4v1710272144317!5m2!1sde!2sde"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                <div className="mt-4 p-4 bg-purple-600/10 border border-purple-400/20 rounded-lg">
                  <p className="text-white text-center">
                    Aufgrund einer Baustelle bitten wir Sie beim Parkplatz in der Aldengreverstraße zu Parken. 
                    Die Parkkosten werden von uns übernommen.
                  </p>
                </div>

                <div className="relative my-24">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-purple-400/30"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <div className="bg-gray-900 px-4">
                      <div className="w-3 h-3 rounded-full bg-purple-400"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div ref={fiveLineRef} className="mt-24">
                <div className="bg-black/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="p-8 order-2 md:order-1">
                      <h2 className="text-4xl font-bold text-purple-400 mb-6">FiveLine</h2>
                      <div className="space-y-8">
                        <div>
                          <h3 className="text-2xl font-semibold mb-4">Öffnungszeiten</h3>
                          <p className="mb-2">Sonntag - Donnerstag: 17:00 - 00:00</p>
                          <p>Freitag - Samstag: 17:00 - 03:00</p>
                        </div>

                        <div>
                          <h3 className="text-2xl font-semibold mb-4">Standort</h3>
                          <p className="text-lg">Am Twerspring 4</p>
                          <p className="text-lg">33154 Salzkotten</p>
                        </div>

                        <div>
                          <h3 className="text-2xl font-semibold mb-4">Besonderheiten</h3>
                          <ul className="grid grid-cols-2 gap-3">
                            <li className="flex items-center space-x-2">
                              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                              <span>Montag ist Frauentag</span>
                            </li>
                            <li className="flex items-center space-x-2">
                              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                              <span>Playstation mit Beamer</span>
                            </li>
                            <li className="flex items-center space-x-2">
                              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                              <span>Bücherwand</span>
                            </li>
                            <li className="flex items-center space-x-2">
                              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                              <span>Fernseher</span>
                            </li>
                            <li className="flex items-center space-x-2">
                              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                              <span>Fun4Four Spieltisch</span>
                            </li>
                          </ul>
                        </div>

                        <div className="flex space-x-4">
                          <button
                            onClick={openFiveLineMenu}
                            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
                          >
                            Speisekarte
                          </button>
                          <a
                            href="https://wa.me/491739191196"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-2 border-purple-600 hover:bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
                          >
                            Tisch reservieren
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="relative h-96 md:h-full order-1 md:order-2">
                      <img 
                        src="https://i.imgur.com/Ymf6M8A.jpeg"
                        alt="FiveLine Interior" 
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-8 rounded-2xl overflow-hidden shadow-2xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4949.22828476603!2d8.597586376971856!3d51.666900699038436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bbca8727b032b5%3A0xc896e591696bf5d!2sAm%20Twerspring%204%2C%2033154%20Salzkotten!5e0!3m2!1sde!2sde!4v1744565447266!5m2!1sde!2sde"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        ) : currentPage === 'gallery' ? (
          <div className="pt-24 min-h-screen bg-gradient-to-b from-gray-900 to-purple-900">
            <div className="container mx-auto px-4 py-12">
              <div className="mb-16 rounded-2xl overflow-hidden shadow-2xl relative">
                <video 
                  className="w-full h-[50vh] md:h-[70vh] object-cover"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src="https://i.imgur.com/sIHBqPb.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent flex items-end justify-center pb-8">
                  <h1 className="text-3xl md:text-5xl font-bold text-purple-400 text-center">
                    Willkommen in unserer Welt
                  </h1>
                </div>
              </div>

              <div className="md:columns-3 md:gap-6 space-y-6 md:space-y-0">
                {galleryImages.map((image, index) => (
                  <div 
                    key={index}
                    className="relative group cursor-pointer overflow-hidden rounded-xl shadow-xl mb-6 md:mb-6 break-inside-avoid"
                    onClick={() => openLightbox(image.src)}
                  >
                    <div className="aspect-[3/4] md:aspect-auto overflow-hidden">
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {selectedImage && (
              <div 
                className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                onClick={closeLightbox}
              >
                <div className="relative max-w-7xl w-full">
                  <img 
                    src={selectedImage} 
                    alt="Enlarged view"
                    className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                  />
                  <button 
                    className="absolute top-4 right-4 text-white hover:text-purple-400"
                    onClick={closeLightbox}
                  >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="pt-24 min-h-screen bg-gradient-to-b from-gray-900 to-purple-900">
            <div className="container mx-auto px-4 py-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                  <h1 className="text-3xl font-bold text-purple-400 mb-8">NineLine Impressum</h1>
                  
                  <div className="space-y-6">
                    <section>
                      <h2 className="text-xl font-semibold text-purple-400 mb-3">Angaben gemäß § 5 TMG</h2>
                      <p className="text-gray-300">
                        NineLine Shisha Lounge<br />
                        Riemekestraße 85<br />
                        33102 Paderborn
                      </p>
                    </section>

                    <section>
                      <h2 className="text-xl font-semibold text-purple-400 mb-3">Vertreten durch</h2>
                      <p className="text-gray-300">
                        Hanna Shahin
                      </p>
                    </section>

                    <section>
                      <h2 className="text-xl font-semibold text-purple-400 mb-3">Kontakt</h2>
                      <p className="text-gray-300">
                        Telefon: 01739191196<br />
                        E-Mail: hasso.line@outlook.de
                      </p>
                    </section>

                    <section>
                      <h2 className="text-xl font-semibold text-purple-400 mb-3">Umsatzsteuer-ID</h2>
                      <p className="text-gray-300">
                        Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
                        33951923935
                      </p>
                    </section>
                  </div>
                </div>

                <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                  <h1 className="text-3xl font-bold text-purple-400 mb-8">FiveLine Impressum</h1>
                  
                  <div className="space-y-6">
                    <section>
                      <h2 className="text-xl font-semibold text-purple-400 mb-3">Angaben gemäß § 5 TMG</h2>
                      <p className="text-gray-300">
                        FiveLine Shisha Lounge<br />
                        Am Twerspring 4<br />
                        33154 Salzkotten
                      </p>
                    </section>

                    <section>
                      <h2 className="text-xl font-semibold text-purple-400 mb-3">Vertreten durch</h2>
                      <p className="text-gray-300">
                        Quanis Hasso
                      </p>
                    </section>

                    <section>
                      <h2 className="text-xl font-semibold text-purple-400 mb-3">Kontakt</h2>
                      <p className="text-gray-300">
                        Telefon: 01739191196<br />
                        E-Mail: hasso.line@outlook.de
                      </p>
                    </section>

                    <section>
                      <h2 className="text-xl font-semibold text-purple-400 mb-3">Umsatzsteuer-ID</h2>
                      <p className="text-gray-300">
                        Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
                        [Umsatzsteuer-ID]
                      </p>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <footer className="bg-gray-800 py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2024 NineLine Shisha Bar. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;