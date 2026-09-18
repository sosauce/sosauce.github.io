import { MapPin, Moon, Plus } from "lucide-react";
import BlurOutUp from "./components/smoothui/blur-out-up";
import { Badge } from "./components/ui/badge";
import { Particles } from "./components/ui/particles";
import TechStack from "./components/TeckStack";
import { About } from "./components/About";
import { Button } from "./components/ui/button";


export function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background layer */} 
    
      <Particles className="absolute inset-0" />

      {/* Foreground content */}
      <main className="relative z-10 flex min-h-screen items-center justify-center p-6">
        {/* navbar */}
        <div className="absolute top-6 px-12 flex flex-row items-start w-dvw">
          <h1 className="text-3xl">🫰🏼🎀</h1>
          <h2>🫰🏼🎀</h2>
        </div>
        {/* main content */}
        <div className="flex flex-row w-4/6">
          <About/>
        </div>

      </main>
    </div>
  );
}

export default App;