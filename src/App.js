import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from './components/header'
import Search from './components/search'
import { getItems } from './store/catalog'

const App = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const { items, isLoading } = useSelector(state => state.catalog)

  useEffect(() => {
    dispatch(getItems(value))
  }, [dispatch, value])
  return (
    <>
      <Header />
      <div className="container">
        <Search searchValue={value} setSearchValue={setValue} />
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <ul className="flex flex-col justify-center items-center">
            {items.map(item => (
              <li
                key={item.artistId}
                className="px-2 py-1 my-4 rounded-lg blockr w-[300px] drop-shadow-2xl"
              >
                <h2 className="font-bold text-3xl">{item.artistName}</h2>
                <img
                  className="w-full h-60"
                  src={item.artworkUrl100}
                  alt="Track img"
                />
                <p>{item.trackCensoredName}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  )
}

export default App
