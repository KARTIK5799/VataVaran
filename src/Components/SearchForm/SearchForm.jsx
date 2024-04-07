import style from './SearchForm.module.css'

const SearchForm = () => {
  return (
    <div className={style.searchbarSection}>
      <form className={style.searchbar}>
        <input type="text" placeholder='search wanted city' className={style.searchInput}/>
        <button className={style.searchButton}><span className="material-symbols-outlined">
search
</span></button>
      </form>
    </div>
  )
}

export default SearchForm
