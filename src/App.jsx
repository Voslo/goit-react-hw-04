import { useEffect, useState } from 'react';
import { SearchBar } from './SearchBar/SearchBar'
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { ErrorMessage } from './ErrorMessage/ErrorMessage';
import { LoadMoreBtn } from './LoadMoreBtn/LoadMoreBtn';
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const searchImages = async (newQuery) => {
    setQuery(`${Date.now()}/${newQuery}`)
    setError(false)
    setLoading(false)
    setImages([])
    setPage(1)
  }

  useEffect(() => {
    if (query === '') {
      return
    }
    async function fetchImages() {
      const newQuery = query.split('/')[1];
      try {
          setError(false)
          setLoading(true)
          const response = await axios.get("https://api.unsplash.com/search/photos", {
              params: {
                  client_id: "u2w6oniCmyO05TJAcholZgmw5OYIXNNjoAVyg7DrohE",
                  query: newQuery,
                  page,
                  per_page: 12
            }            
          });
          setImages( prevData =>[...prevData, ...response.data.results])
      } catch (error) {
          setError(true)
      } finally {
          setLoading(false)
      }
    }
    fetchImages()
  }, [query, page])
  const handleLoad = () => {
    setPage(page+1)
  }

  const handleSubmit = e => {
    e.preventDefault();
    
    if (e.target.elements.query.value.trim() === "") {
      toast.error('Empty string!')
      return
    }
      searchImages(e.target.elements.query.value)
      e.target.reset()
    }
  return (
    <div className='container'>
      <SearchBar handleSubmit={handleSubmit} />

      {error && <ErrorMessage/>}
      {loading && <Loader/>}
      {images.length > 0 && <ImageGallery items={images} />}
      {images.length > 0 && !loading && <LoadMoreBtn onLoadMore={handleLoad}/>}
      <Toaster/>
   </div>
 )
}

export default App
