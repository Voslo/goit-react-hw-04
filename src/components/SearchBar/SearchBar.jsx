import toast from "react-hot-toast";

export const SearchBar = ({ getImages }) => {
    const handleSubmit = e => {
    e.preventDefault();
    
    if (e.target.elements.query.value.trim() === "") {
      toast.error('Empty string!')
      return
    }
      getImages(e.target.elements.query.value)
      e.target.reset()
    }

    return <form action="" onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
    </form>
}