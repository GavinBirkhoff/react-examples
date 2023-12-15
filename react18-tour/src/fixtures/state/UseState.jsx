import { useState } from 'react'

const getBooks = () => {
  console.log('getBooks')
  return [{ id: 1, label: 'xxx' }]
}
const getPens = () => {
  console.log('getPens')
  return [{ id: 1, label: 'xxx' }]
}
const UseState = () => {
  const [id, setId] = useState(1)
  // 请注意，你传递的是 getBooks 函数本身，而不是 getBooks() 调用该函数的结果。如果将函数传递给 useState，React 仅在初始化期间调用它。
  const [book, setBook] = useState(() => {
    return getBooks()
  })
  // 尽管 getPens() 的结果仅用于初始渲染，但你仍然在每次渲染时调用此函数。如果它创建大数组或执行昂贵的计算，这可能会浪费资源。
  const [pen, setPen] = useState(getPens()) //  每次更新，getPens()都会调用
  return (
    <div>
      UseState id:{id}
      <button onClick={() => setId(id + 1)}>id</button>
      <button onClick={() => setBook([{ id: 2, label: 'xxx' }])}>book</button>
      <button onClick={() => setPen([{ id: 3, label: 'xxx' }])}>pen</button>
    </div>
  )
}

export default UseState
