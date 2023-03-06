export type CardCategory = {
  id: number;
  category: string;
  score: number;
  totalScore: number;
};

export type NavCategory = {
  id: number;
  title: string;
  subCategories: string[];
};

export type AppContextType = {
  isMobile: boolean;
  setIsMobile: (isMobile: boolean) => void;
};

