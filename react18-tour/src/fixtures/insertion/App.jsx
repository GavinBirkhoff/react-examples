import { useLayoutEffect } from 'react'
import { useEffect, useInsertionEffect, useRef } from 'react'
function getStyleForRule(rule) {
  let style = document.createElement('style')
  style.innerHTML = rule
  return style
}

function useCSS(rule) {
  useInsertionEffect(() => {
    console.log('每次渲染前')
    // 插入style标签
    document.head.appendChild(getStyleForRule(rule))
  })
  return rule
}

export default function App() {
  useLayoutEffect(() => {
    console.log('每次渲染后的同步')
  })
  useEffect(() => {
    console.log('每次渲染后')
  })
  let className = useCSS(`.red{
    background-color:red;
}`)
  return <div className={'red'}>hello</div>
}
