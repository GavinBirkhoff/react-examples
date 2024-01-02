import { Component } from 'react'

export default class Son extends Component {
  // mount1
  constructor(props) {
    super(props)
    this.state = { count: 1 }
    console.log(`Son constructor`)
  }

  // 会在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。它应返回一个对象来更新 state，如果返回 null 则不更新任何内容。
  // mount2
  // update1
  static getDerivedStateFromProps(props, state) {
    console.log(`Son getDerivedStateFromProps`)
    return null
  }

  // 首次渲染或使用 forceUpdate() 时不会调用该方法
  // mount3
  // update2
  shouldComponentUpdate(nextProps, nextState) {
    console.log(`Son shouldComponentUpdate`)
    return true

  }

  // mount4
  // update3
  render() {
    console.log(`Son render`)
    return (
      <div>
        <h1>Son</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 })
          }}
        >
          {this.state.count}
        </button>
        <hr></hr>
      </div>
    )
  }

  // getSnapshotBeforeUpdate() 在最近一次渲染输出（提交到 DOM 节点）之前调用。它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）。此生命周期方法的任何返回值将作为参数传递给 componentDidUpdate()。
  // update4
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(`Son getSnapshotBeforeUpdate`)
    return null
  }

  // mount5
  componentDidMount() {
    console.log(`Son componentDidMount`)
  }

  // update5
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(`Son componentDidUpdate`)
  }

  // unmount1
  componentWillUnmount() {
    console.log(`Son componentWillUnmount`)
  }
}
