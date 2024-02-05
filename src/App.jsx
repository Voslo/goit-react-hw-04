import { useState } from 'react';
import { SearchBar } from './SearchBar/SearchBar'
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import axios from "axios";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchImages = async (query) => {
      try {
          const response = await axios.get("https://api.unsplash.com/search/photos", {
              params: {
                  client_id: "u2w6oniCmyO05TJAcholZgmw5OYIXNNjoAVyg7DrohE",
                  query,
                  page:1,
                  per_page: 10
              }
          });
          setLoading(true)
          setImages(response.data.results)
          setLoading(false)
      } catch (error) {
          console.error(error)
      }
  }

  const handleSubmit = e => {
      e.preventDefault();
      searchImages(e.target.elements.query.value)
      e.target.reset()
    }
  return (
    <div>
      <SearchBar handleSubmit={handleSubmit} />
      {loading && <Loader/>}
      {images.length > 0 && <ImageGallery items={images} />}
   </div>
 )
}

export default App
