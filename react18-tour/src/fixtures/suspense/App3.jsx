import { Suspense } from 'react'

export default function App() {
  return (
    <Suspense fallback={<h2>loading...</h2>}>
      <MyComponent />
    </Suspense>
  )
}

function MyComponent() {
  console.log('MyComponent')
  // throw new Promise((resolve)=>{
  //   setTimeout(()=>{resolve()},10000)
  // })
  post()
  return <div>MyComponent</div>
}
const cache = {pass:false}
function post(){
  if(!cache.p){
    cache.p = new Promise((resolve)=>{
      setTimeout(()=>{resolve()},10000)
    })
    cache.p.then(()=>{
      cache.pass = true
    })
  }
  if(!cache.pass){
    throw cache.p
  }
}
