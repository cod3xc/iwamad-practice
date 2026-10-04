import { createContext, useContext, useState, ReactNode } from 'react';

type LikesContextValue = {
  likes: number;
  addLike: () => void;
};

const LikesContext = createContext<LikesContextValue | undefined>(undefined);

export const LikesProvider = ({ children }: { children: ReactNode }) => {
  const [likes, setLikes] = useState<number>(0);

  const addLike = () => {
    setLikes((prev) => prev + 1);
  };

  return (
    <LikesContext.Provider value={{ likes, addLike }}>
      {children}
    </LikesContext.Provider>
  );
};

export const useLikes = (): LikesContextValue => {
  const context = useContext(LikesContext);
  if (!context) {
    throw new Error('useLikes must be used within a LikesProvider');
  }
  return context;
};