export const SearchBar = ({ handleSubmit }) => {
    return <form action="" onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
    </form>
}