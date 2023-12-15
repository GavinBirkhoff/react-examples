function useHistory() {
  function pushStateAndTriggerPopstate(stateObj, title, url) {
    history.pushState(stateObj, title, url)

    // 创建一个新的 popstate 事件
    const popstateEvent = new PopStateEvent('popstate', { state: stateObj })

    // 触发 popstate 事件
    window.dispatchEvent(popstateEvent)
  }
  return { push: pushStateAndTriggerPopstate }
}

export default useHistory
