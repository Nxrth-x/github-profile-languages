import animationData from "../../assets/loading";
import Lottie from "react-lottie";
import { Modal, ModalBody } from "./styles";

function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRation: "xMidYMid slice",
    },
  };
  return (
    <Modal>
      <ModalBody>
        <Lottie
          options={defaultOptions}
          width={window.innerWidth / 5}
          height={window.innerWidth / 5}
        />
      </ModalBody>
    </Modal>
  );
}

export default Loading;
