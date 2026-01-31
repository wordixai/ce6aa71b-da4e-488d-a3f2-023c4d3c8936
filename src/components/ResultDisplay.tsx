import { useState } from "react";
import { Wand2, Download, RefreshCw, Loader2 } from "lucide-react";
import { Button } from "./ui/button";

interface ResultDisplayProps {
  originalImage: string;
  selectedClothing: string | null;
}

export function ResultDisplay({ originalImage, selectedClothing }: ResultDisplayProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const handleGenerate = () => {
    if (!selectedClothing) return;

    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      // In real app, this would call an AI API
      setGeneratedImage("https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&h=800&fit=crop");
      setIsGenerating(false);
    }, 3000);
  };

  const handleReset = () => {
    setGeneratedImage(null);
  };

  return (
    <div className="w-full glass-card rounded-2xl p-6">
      <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
        <Wand2 className="w-6 h-6 text-primary" />
        换装效果
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Original */}
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground text-center">原图</p>
          <div className="rounded-xl overflow-hidden border border-border">
            <img
              src={originalImage}
              alt="Original"
              className="w-full h-72 md:h-80 object-cover"
            />
          </div>
        </div>

        {/* Result */}
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground text-center">效果图</p>
          <div className="rounded-xl overflow-hidden border border-border relative h-72 md:h-80 bg-muted/30">
            {generatedImage ? (
              <img
                src={generatedImage}
                alt="Generated"
                className="w-full h-full object-cover animate-fade-in"
              />
            ) : isGenerating ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
                  <Loader2 className="w-8 h-8 text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                </div>
                <p className="text-muted-foreground">AI 正在生成中...</p>
              </div>
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                <Wand2 className="w-12 h-12 text-muted-foreground/50" />
                <p className="text-muted-foreground text-sm">点击生成查看效果</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-3 mt-6 justify-center">
        {generatedImage ? (
          <>
            <Button variant="gradient" onClick={handleReset}>
              <RefreshCw className="w-4 h-4" />
              重新生成
            </Button>
            <Button variant="outline">
              <Download className="w-4 h-4" />
              下载图片
            </Button>
          </>
        ) : (
          <Button
            variant="gradient"
            size="lg"
            onClick={handleGenerate}
            disabled={!selectedClothing || isGenerating}
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                生成中...
              </>
            ) : (
              <>
                <Wand2 className="w-4 h-4" />
                生成换装效果
              </>
            )}
          </Button>
        )}
      </div>
    </div>
  );
}
