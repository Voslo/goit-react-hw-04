import Modal from "react-modal";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: "100%", 
    maxHeight: "80vh", 
    objectFit: "cover"
  },
};

Modal.setAppElement("#root");
export const ImageModal = ({ isOpen, onClose, image }) => {
    return(
        <div>
            <Modal onRequestClose={onClose} isOpen={isOpen} style={customStyles}>
                <img src={image}/>
                <button  onClick={onClose}>Close</button>
            </Modal>
        </div>
    )
}