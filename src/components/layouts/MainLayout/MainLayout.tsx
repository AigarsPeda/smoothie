import type { FC } from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="mb-5 grid w-full max-w-[80%] grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
      {children}
    </div>
  );
};

export default MainLayout;
