import { Navbar } from "../navbar";

export const Page = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col w-full">
      <Navbar />
      <div className="flex flex-col p-10">{children}</div>
    </div>
  );
};
