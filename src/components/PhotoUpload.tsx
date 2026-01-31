import { useState, useCallback } from "react";
import { Upload, X, User } from "lucide-react";
import { Button } from "./ui/button";

interface PhotoUploadProps {
  uploadedImage: string | null;
  onImageUpload: (image: string) => void;
  onImageRemove: () => void;
}

export function PhotoUpload({ uploadedImage, onImageUpload, onImageRemove }: PhotoUploadProps) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (event) => {
        onImageUpload(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  }, [onImageUpload]);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        onImageUpload(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  }, [onImageUpload]);

  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
        <User className="w-6 h-6 text-primary" />
        上传你的照片
      </h2>

      {uploadedImage ? (
        <div className="relative rounded-2xl overflow-hidden glass-card animate-scale-in">
          <img
            src={uploadedImage}
            alt="Uploaded"
            className="w-full h-80 object-cover"
          />
          <Button
            variant="destructive"
            size="icon"
            className="absolute top-4 right-4"
            onClick={onImageRemove}
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      ) : (
        <label
          className={`upload-zone rounded-2xl p-12 flex flex-col items-center justify-center cursor-pointer h-80 ${
            isDragging ? "border-primary bg-primary/5" : ""
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileSelect}
          />
          <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
            <Upload className="w-8 h-8 text-muted-foreground" />
          </div>
          <p className="text-foreground font-medium mb-2">
            拖拽图片到这里，或点击上传
          </p>
          <p className="text-sm text-muted-foreground">
            支持 JPG, PNG 格式
          </p>
        </label>
      )}
    </div>
  );
}
