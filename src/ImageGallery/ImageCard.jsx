export const ImageCard = ({ keyId, url, altName, likes }) => {
    return (
    <li key={keyId}>
        <img src={url} alt={altName} />
        <p>Likes: {likes}</p>
    </li>
)};