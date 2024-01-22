import close from "../../../assets/images/icon-close.svg";
type Props = { CloseModal: () => void; device: "desktop" | "mobile" };

const CloseModalButton = ({ CloseModal, device }: Props) => {
  return (
    <img
      src={close}
      onClick={CloseModal}
      alt="game-rules"
      className={`cursor-pointer opacity-25 hover:opacity-100 ${
        device === "desktop" ? "hidden sm:block" : "sm:hidden"
      }`}
    />
  );
};

export default CloseModalButton;
