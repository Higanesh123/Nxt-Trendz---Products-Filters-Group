import './index.css'

import {BsSearch} from 'react-icons/bs'

const FiltersGroup = props => {
  const rendersRatingsFiltersList = () => {
    const {ratingsList} = props

    return ratingsList.map(rating => {
      const {changeRating, activeRatingId} = props 
      const onClickRatingItem = () => changeRating(rating.ratingId)


      const ratingClassName =
      activeRatingId === rating.ratingId ? `and-up active-rating` : `and-up`


      return (
        <li 
        className="rating-item"
        key={rating.ratingId}
        onClick={onClickRatingItem}
        >
        <img 
        src={rating.imageUrl}
        alt={`rating ${rating.ratingId}`}
        className="rating-img"
        />
        <p className={ratingClassName}>& up</p>
        
        
        </li>


      )
    })
  }
  const rendersRatingsFilters = () => (
    <div>
    <h1>Rating</h1>
    <ul>{rendersRatingsFiltersList()}</ul>
    
    </div>
  )
  const renderCategoriesList = () => {
    const {categoryOptions} = props 
    return categoryOptions.map(category => {
     const {changeCategory, activeCategoryId} = props 
     const onClickCategoryItem = () => changeCategory(category.categoryId)
     const isActive = category.categoryId === activeCategoryId
     const cateoryClassName=isActive

     ? `category-name active-category-name`
     :`category-name`
     return (
      <li className="category-item"
      key={category.categoryId}
      onClick={onClickCategoryItem}
      >
      <p className={cateoryClassName}>{category.name}</p>

      
      
      </li>
     )
    })
  }

  const renderProdcutsCategories = () => (
    <>
    <h1>Category</h1>
    <ul>{renderCategoriesList()}</ul>
    </>

  )

  const onEnterSearchInput = event => {
    const { enterSearchInput} = props 
    if (event.key  === 'Enter') {
      enterSearchInput()
    }
  }
  const onChangeSearchInput = event => {
    const {changeSearchInput} = props 
    changeSearchInput(event.target.value)
  }

  const renderSearchInput = () => {
    const {searchInput} = props
  

    return (

      <div>
      <input 
      value={searchInput}
      type="search"
      className="search-input"
      placeholder="Search"
      onChange={onChangeSearchInput}
      onKeyDown={onEnterSearchInput}
      />
      <BsSearch className="search-icon" />

      
      </div>
    )
  }
  const {clearFilters} = props 

  return (
    <div>
    {renderSearchInput()}
    {renderProdcutsCategories()}
    {rendersRatingsFilters()}
    <button 
    type="button"
    onClick={clearFilters}
    >
    Clear Filters
    
    </button>
    
    
    </div>
  )
}

export default FiltersGroup
