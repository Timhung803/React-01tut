const SearchItem = ({ search, setSearch }) => {
  return (
   <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
       <label htmlFor="search">Search</label>
       <input
        id='seacrh'
        type='text'
        role='searchbox'
        placeholder='Seacrh Items'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
    />

   </form>
  )
}

export default SearchItem