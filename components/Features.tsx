import { Card, CardContent } from "./ui/card";
import { Zap, Tags, RefreshCw, FileText } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Quick Capture",
    description: "Capture thoughts instantly with our minimal interface. No distractions, just pure focus on your ideas."
  },
  {
    icon: FileText,
    title: "Markdown Support",
    description: "Write with the power of Markdown. Format text, create lists, and structure your notes effortlessly."
  },
  {
    icon: Tags,
    title: "Smart Organization",
    description: "Tag, categorize, and find anything instantly. Your notes stay organized automatically as you write."
  },
  {
    icon: RefreshCw,
    title: "Seamless Sync",
    description: "Access your notes anywhere, anytime. Real-time sync across all your devices keeps you in flow."
  }
];

export default function Features() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl tracking-tight">
            Everything you need to stay productive
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            NoteForge combines simplicity with powerful features to help you capture, organize, and act on your ideas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-0 shadow-none">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}