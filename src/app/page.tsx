import MainSection from "@/components/MainSection";
import { MacbookScrollDemo } from "@/components/MacbookScrollDemo";
import { LampDemo } from "@/components/LampDemo";
import { StickyScrollRevealDemo } from "@/components/StickyScrollRevealDemo";
import { SparklesPreview } from "@/components/SparklesPreview";




export default function Home() {
 return(
  <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] ">
    
    <MainSection/>
    <MacbookScrollDemo/>
    <LampDemo/>
    <SparklesPreview/>
    <StickyScrollRevealDemo/>
    
  
    


  </main>
  
 );
}
