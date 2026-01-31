import { Sparkles } from "lucide-react";
import { Button } from "./ui/button";

interface HeroProps {
  onGetStarted: () => void;
}

export function Hero({ onGetStarted }: HeroProps) {
  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">AI 驱动的虚拟试衣体验</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          <span className="gradient-text">智能换装</span>
          <br />
          <span className="text-foreground">焕新你的风格</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          上传你的照片，选择心仪的服装，AI 将为你生成逼真的换装效果。
          无需试穿，轻松预览任何穿搭风格。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="gradient" size="lg" onClick={onGetStarted}>
            <Sparkles className="w-5 h-5" />
            开始换装
          </Button>
          <Button variant="outline" size="lg">
            了解更多
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: "10K+", label: "用户" },
            { value: "50K+", label: "换装生成" },
            { value: "98%", label: "满意度" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
