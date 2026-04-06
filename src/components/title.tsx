const Title = ({ className, text }: { className?: string; text: string }) => {
  return (
    <h1
      className={`text-5xl text-bege-700 font-cabinet font-black py-24 px-4 ${className}`}
    >
      {text}
    </h1>
  );
};

export default Title;