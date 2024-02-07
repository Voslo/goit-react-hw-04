import { useEffect, useState } from 'react';
import { SearchBar } from './components/SearchBar/SearchBar'
import { ImageGallery } from './components/ImageGallery/ImageGallery';
import { Loader } from './components/Loader/Loader';
import { ErrorMessage } from './components/ErrorMessage/ErrorMessage';
import { LoadMoreBtn } from './components/LoadMoreBtn/LoadMoreBtn';
import { getData } from './services/api';
import { Toaster } from 'react-hot-toast';

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
          const response = await getData({ newQuery, page });
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
  return (
    <div className='container'>
      <SearchBar getImages={searchImages} />
      {error && <ErrorMessage/>}
      {loading && <Loader/>}
      {images.length > 0 && <ImageGallery items={images} />}
      {images.length > 0 && !loading && <LoadMoreBtn onLoadMore={handleLoad}/>}
      <Toaster/>
   </div>
 )
}

export default App
