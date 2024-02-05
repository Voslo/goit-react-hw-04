import { useState } from "react";
import { ImageModal } from "../ImageModal/ImageModal";

export const ImageCard = ({ url, altName, image }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
    <li>
        <img className="listImg" src={url} alt={altName} width="300px" height="300px" onClick={()=>setModalIsOpen(true)} />
        {modalIsOpen && <ImageModal isOpen={modalIsOpen} onClose={()=>setModalIsOpen(false)} image={image}/>}    
    </li>
)};