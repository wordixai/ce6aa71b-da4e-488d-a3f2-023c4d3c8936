import { useState, useRef } from "react";
import { Hero } from "@/components/Hero";
import { PhotoUpload } from "@/components/PhotoUpload";
import { ClothingSelector } from "@/components/ClothingSelector";
import { ResultDisplay } from "@/components/ResultDisplay";
import { Sparkles } from "lucide-react";

export default function Index() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [selectedClothing, setSelectedClothing] = useState<string | null>(null);
  const workspaceRef = useRef<HTMLDivElement>(null);

  const scrollToWorkspace = () => {
    workspaceRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-card">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg">AI换装</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              功能介绍
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              定价方案
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              关于我们
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <Hero onGetStarted={scrollToWorkspace} />

      {/* Workspace Section */}
      <section ref={workspaceRef} className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">三步</span>
              <span className="text-foreground">完成换装</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              上传照片 → 选择服装 → 生成效果，简单三步即可体验虚拟换装
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Left Column: Upload */}
            <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <PhotoUpload
                uploadedImage={uploadedImage}
                onImageUpload={setUploadedImage}
                onImageRemove={() => setUploadedImage(null)}
              />
            </div>

            {/* Right Column: Clothing Selection */}
            <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <ClothingSelector
                selectedClothing={selectedClothing}
                onSelect={setSelectedClothing}
              />
            </div>
          </div>

          {/* Result Section */}
          {uploadedImage && (
            <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <ResultDisplay
                originalImage={uploadedImage}
                selectedClothing={selectedClothing}
              />
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 border-t border-border">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">为什么选择我们</h2>
            <p className="text-muted-foreground">强大的 AI 技术，为你提供最真实的换装体验</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "逼真效果",
                description: "先进的 AI 算法，生成自然逼真的换装效果",
                icon: "✨",
              },
              {
                title: "秒级生成",
                description: "优化的模型架构，几秒钟即可完成换装",
                icon: "⚡",
              },
              {
                title: "海量服装",
                description: "丰富的服装库，涵盖各种风格和场景",
                icon: "👗",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="glass-card rounded-2xl p-6 text-center hover:border-primary/30 transition-colors"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© 2024 AI换装. 保留所有权利.</p>
        </div>
      </footer>
    </div>
  );
}
