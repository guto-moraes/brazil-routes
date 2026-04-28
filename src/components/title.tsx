const Title = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <h1 className={`text-5xl text-bege-700 font-cabinet font-black py-24 px-4 xl:px-0 ${className}`}>{children}</h1>;
};

export default Title;
