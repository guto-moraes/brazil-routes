const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-bege-50 h-full w-full grid grid-rows-[6.5rem_[calc(100svh-344px)]_60rem]">
      {children}
    </div>
  );
};

export default Wrapper;
