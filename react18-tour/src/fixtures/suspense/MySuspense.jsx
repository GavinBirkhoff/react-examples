import { Suspense, useState } from "react"
import { fetchData } from './data.js';
const Foo = ()=>{
    console.log('Foo');
    debugger
    // const posts = use(fetchData('/posts'));
    // let promise;
    // throw promise = new Promise((resolve)=>{
    //     setTimeout(()=>{resolve()},3000)
    // }).then(result=>{
    //     promise.status = 'fulfilled';
    //     promise.value = result;
    // })
    const promise = Promise.resolve()
    promise.status = 'fulfilled'
    throw promise
    return <div>Foo</div>
}

function use(promise) {
    if (promise.status === 'fulfilled') {
      return promise.value;
    } else if (promise.status === 'rejected') {
      throw promise.reason;
    } else if (promise.status === 'pending') {
      throw promise;
    } else {
      promise.status = 'pending';
      promise.then(
        result => {
          promise.status = 'fulfilled';
          promise.value = result;
        },
        reason => {
          promise.status = 'rejected';
          promise.reason = reason;
        },
      );
      throw promise;
    }
  }

const MySuspense = ()=>{
    const [flag, setFlag] = useState(false)
    return <div>
        hello MySuspense
        <button onClick={()=>{
          setFlag(!flag)
        }}>kit</button>
        <Suspense fallback={<h1>🌀 Loading...</h1>}>
            {/* <button onClick={()=>setFlag(!flag)}>kit</button> */}
            hello{flag && <Foo></Foo>}
        </Suspense>
    </div>
}

export default MySuspense