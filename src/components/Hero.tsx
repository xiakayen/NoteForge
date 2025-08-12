import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-background to-muted/20 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl tracking-tight">
                Capture ideas.
                <br />
                <span className="text-primary/70">Stay organized.</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                NoteForge is the distraction-free workspace where your thoughts become actionable. 
                Quick capture, smart organization, seamless sync across all your devices.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6">
                Start Writing Free
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                See How It Works
              </Button>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>✓ No credit card required</span>
              <span>✓ Sync across devices</span>
              <span>✓ 14-day free trial</span>
            </div>
          </div>

          {/* Right Column - App Preview */}
          <div className="relative">
            <div className="bg-card border rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-muted/50 px-4 py-3 border-b">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-destructive rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <div className="ml-4 text-sm text-muted-foreground">NoteForge</div>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground"># Project Ideas</div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Mobile app redesign concepts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 border-2 border-muted-foreground rounded-full"></div>
                      <span>User research findings summary</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 border-2 border-muted-foreground rounded-full"></div>
                      <span>Q4 feature roadmap</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground"># Meeting Notes</div>
                  <div className="bg-muted/30 p-3 rounded-lg">
                    <div className="text-sm">
                      **Action Items from Design Review**
                      <br />
                      - [ ] Update color palette
                      <br />
                      - [x] Create responsive mockups
                      <br />
                      - [ ] Schedule user testing
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <span className="bg-accent px-2 py-1 rounded text-xs">#design</span>
                  <span className="bg-accent px-2 py-1 rounded text-xs">#urgent</span>
                  <span className="bg-accent px-2 py-1 rounded text-xs">#team</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}