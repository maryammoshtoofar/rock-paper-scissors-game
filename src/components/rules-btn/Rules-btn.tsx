type Props = { openModal: () => void };

const RulesBtn = ({ openModal }: Props) => {
  return (
    <button
      onClick={openModal}
      className="text-white uppercase text-2xl border-2 rounded-lg px-10 py-2 sm:self-end sm:me-5"
    >
      Rules
    </button>
  );
};

export default RulesBtn;
