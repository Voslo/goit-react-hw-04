import { ImageCard } from "./ImageCard"

export const ImageGallery = ({items}) => {
    return (
        <ul>
            {items.map(item =>{
                <ImageCard keyId={item.id} url={item.urls.small} altName={item.alt_description} likes={item.likes}/>
            })}
        </ul>
    )
}