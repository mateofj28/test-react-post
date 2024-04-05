import * as React from "react";

type PostContextType = {
  post: any[]; // Reemplaza 'any[]' con el tipo real de tus datos de post
  setPost: React.Dispatch<React.SetStateAction<any[]>>; // Reemplaza 'any[]' con el tipo real de tus datos de post
};

const PostContext = React.createContext<PostContextType | undefined>(undefined);

export const usePostContext = () => {
  const context = React.useContext(PostContext);

  if (!context) {
    throw new Error("usePostContext debe ser usado en un dataprovider");
  }
  return context;
};

export const PostProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [post, setPost] = React.useState<any[]>([]);

  return (
    <PostContext.Provider value={{ post, setPost }}>
      {children}
    </PostContext.Provider>
  );
};
