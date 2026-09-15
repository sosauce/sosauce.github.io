import { MapPin } from "lucide-react";
import BlurOutUp from "./components/smoothui/blur-out-up";
import { Badge } from "./components/ui/badge";

export function App() {
  return (
    <div>
      <div className="flex min-h-screen flex-row items-center justify-center">
        <div className="flex flex-col items-start">
          <BlurOutUp className="text-4xl font-bold tracking-tight">
            I'm sosauce 🫰🏼🎀
          </BlurOutUp>
          <Badge variant="outline" className="mt-2 mb-2"> <MapPin />Based in France 🇫🇷</Badge>
          <BlurOutUp className="text-muted-foreground text-lg" delay={400}>
            An Android first developer who focuses on building unforgetable experiences with Kotlin & Jetpack Compose.
          </BlurOutUp>
        </div>
      </div>
    </div>
  );
}

export default App;
