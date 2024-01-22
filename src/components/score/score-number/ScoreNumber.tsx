type Props = { children: number };

const ScoreNumber = ({ children }: Props) => {
  return (
    <span className="text-4xl sm:text-5xl font-extrabold ">{children}</span>
  );
};

export default ScoreNumber;
