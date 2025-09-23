import { useState, useEffect } from "react";
import { X, Volume2, VolumeX, Maximize2, Minimize2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const VideoPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    // Show popup after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Small popup */}
      <div className={`fixed bottom-4 right-4 z-50 animate-slide-in-right ${isZoomed ? 'hidden' : 'block'}`}>
        <div className="bg-gradient-to-br from-saffron via-gold to-primary p-1 rounded-2xl shadow-2xl max-w-xs overflow-hidden">
          <div className="bg-background rounded-xl p-2 relative">
            {/* Close button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-1 right-1 h-6 w-6 hover:bg-muted z-10 bg-black/20 text-white hover:bg-black/40"
              onClick={() => setIsVisible(false)}
            >
              <X className="h-4 w-4" />
            </Button>

            {/* Mute/Unmute button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-1 left-1 h-6 w-6 hover:bg-muted z-10 bg-black/20 text-white hover:bg-black/40"
              onClick={() => setIsMuted(!isMuted)}
            >
              {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </Button>

            {/* Zoom button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute bottom-1 right-1 h-6 w-6 hover:bg-muted z-10 bg-black/20 text-white hover:bg-black/40"
              onClick={() => setIsZoomed(true)}
            >
              <Maximize2 className="h-4 w-4" />
            </Button>

            {/* Video */}
            <div className="rounded-lg overflow-hidden cursor-pointer" onClick={() => setIsZoomed(true)}>
              <video
                className="w-full max-w-[200px] h-auto"
                autoPlay
                loop
                muted={isMuted}
                playsInline
              >
                <source src="/ads-reel.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* Zoomed modal */}
      {isZoomed && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center animate-fade-in">
          <div className="relative max-w-lg w-full mx-4">
            <div className="bg-gradient-to-br from-saffron via-gold to-primary p-1 rounded-2xl shadow-2xl">
              <div className="bg-background rounded-xl p-4 relative">
                {/* Close button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 h-8 w-8 hover:bg-muted z-10 bg-black/20 text-white hover:bg-black/40"
                  onClick={() => setIsZoomed(false)}
                >
                  <X className="h-5 w-5" />
                </Button>

                {/* Mute/Unmute button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 left-2 h-8 w-8 hover:bg-muted z-10 bg-black/20 text-white hover:bg-black/40"
                  onClick={() => setIsMuted(!isMuted)}
                >
                  {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                </Button>

                {/* Minimize button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute bottom-2 right-2 h-8 w-8 hover:bg-muted z-10 bg-black/20 text-white hover:bg-black/40"
                  onClick={() => setIsZoomed(false)}
                >
                  <Minimize2 className="h-5 w-5" />
                </Button>

                {/* Large Video */}
                <div className="rounded-lg overflow-hidden">
                  <video
                    className="w-full h-auto"
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                  >
                    <source src="/ads-reel.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoPopup;