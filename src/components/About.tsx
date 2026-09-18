import { MapPin, Plus } from "lucide-react";
import BlurOutUp from "./smoothui/blur-out-up";
import { Badge } from "./ui/badge";

export function About() {
  return (
    <>
      <div className="flex flex-col items-start gap-2">
        <div className="flex flex-row items-center gap-2">
          <BlurOutUp className="text-4xl font-bold tracking-tight">
            I'm sosauce
          </BlurOutUp>
          <BlurOutUp className="text-4xl font-bold tracking-tight" delay={600}>
            🫰🏼
          </BlurOutUp>
          <BlurOutUp className="text-4xl font-bold tracking-tight" delay={800}>
            🎀
          </BlurOutUp>
        </div>
        <BlurOutUp className="text-muted-foreground text-lg" delay={400}>
          An Android first developer who focuses on building unforgettable
          experiences with Kotlin & Jetpack Compose.
        </BlurOutUp>

        <div className="flex flex-row flex-wrap gap-2 pt-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" />
            <span>Based in France 🇫🇷</span>
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <Plus className="h-3.5 w-3.5" />
            <span>American citizenship 🇺🇸</span>
          </Badge>
        </div>
      </div>
    </>
  );
}
