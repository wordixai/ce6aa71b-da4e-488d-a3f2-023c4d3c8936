import { Shirt, Check } from "lucide-react";

interface ClothingItem {
  id: string;
  name: string;
  category: string;
  image: string;
}

const clothingItems: ClothingItem[] = [
  {
    id: "1",
    name: "经典白衬衫",
    category: "上衣",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop",
  },
  {
    id: "2",
    name: "深蓝西装",
    category: "外套",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop",
  },
  {
    id: "3",
    name: "休闲连衣裙",
    category: "裙装",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop",
  },
  {
    id: "4",
    name: "运动卫衣",
    category: "上衣",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop",
  },
  {
    id: "5",
    name: "皮夹克",
    category: "外套",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop",
  },
  {
    id: "6",
    name: "碎花长裙",
    category: "裙装",
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0uj7r?w=400&h=500&fit=crop",
  },
];

interface ClothingSelectorProps {
  selectedClothing: string | null;
  onSelect: (id: string) => void;
}

export function ClothingSelector({ selectedClothing, onSelect }: ClothingSelectorProps) {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
        <Shirt className="w-6 h-6 text-primary" />
        选择服装
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {clothingItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
            className={`clothing-card rounded-xl overflow-hidden text-left ${
              selectedClothing === item.id ? "selected" : ""
            }`}
          >
            <div className="relative aspect-[4/5]">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              {selectedClothing === item.id && (
                <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-primary flex items-center justify-center animate-scale-in">
                  <Check className="w-4 h-4 text-primary-foreground" />
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-background/90 to-transparent">
                <p className="font-medium text-foreground text-sm">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.category}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
