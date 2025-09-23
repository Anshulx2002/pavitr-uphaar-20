import { useState, useEffect } from "react";
import { X, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

const VideoPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    // Show popup after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-slide-in-right">
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

          {/* Video */}
          <div className="rounded-lg overflow-hidden">
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
  );
};

export default VideoPopup;