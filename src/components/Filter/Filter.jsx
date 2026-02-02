import { useState } from 'react'

import './Filter.scss'

const Filter = ({ categories, activeCategory, onChange }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="filter">
      <button 
        className="filter__toggle" 
        onClick={() => setOpen(!open)}
      >
        Фильтры {open ? '▲' : '▼'}
      </button>
      {open && (
        <div className="filter__menu">
      {categories.map(category => (
        <button
          key={category}
          className={
            category === activeCategory
              ? 'filter__button filter__button--active'
              : 'filter__button'
          }
          onClick={() =>{
             onChange(category)
            setOpen(false) 
          }}
        >
          {category}
        </button>
        ))}
        </div>
      )}
    </div>
  )
}

export default Filter
