import CloseModalButton from "./close-modal-btn/CloseModalButton";
import GameRules from "./game-rules/GameRules";
import Overlay from "./overlay/Overlay";
import ModalBox from "./modal-box/ModalBox";
import ModalTitleContainer from "./modal-title-container/ModalTitleContainer";
import ModalTitle from "./modal-title/ModalTitle";
type Props = { CloseModal: () => void };

const Modal = ({ CloseModal }: Props) => {
  
  const handleClick = (e: Event) => {
    e.stopPropagation();
    if (e.currentTarget === e.target) CloseModal();
  };

  return (
    <Overlay onClick={handleClick}>
      <ModalBox>
        <ModalTitleContainer>
          <ModalTitle>Rules</ModalTitle>
          <CloseModalButton CloseModal={CloseModal} device="desktop" />
        </ModalTitleContainer>
        <GameRules />
        <CloseModalButton CloseModal={CloseModal} device="mobile" />
      </ModalBox>
    </Overlay>
  );
};

export default Modal;
