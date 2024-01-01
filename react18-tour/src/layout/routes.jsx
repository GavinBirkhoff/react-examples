import Callback from '../fixtures/callback/App'
import Context from '../fixtures/context/App'
import DebugValue from '../fixtures/debugValue/App'
import Deferred from '../fixtures/deferred/App'
import Effect from '../fixtures/effect/App'
import Id from '../fixtures/id/App'
import ImperativeHandle from '../fixtures/imperativeHandle/App'
import Insertion from '../fixtures/insertion/App'
import LayoutEffect from '../fixtures/layoutEffect/App'
import Memo from '../fixtures/memo/App'
// import Optimistic from '../fixtures/optimistic/App'
import Reducer from '../fixtures/reducer/App'
import Ref from '../fixtures/ref/App'
import State from '../fixtures/state/App'
import SyncExternalStore from '../fixtures/syncExternalStore/App'
import Transition from '../fixtures/transition/App'
// hooks end
import SuspenseApp from '../fixtures/suspense/App'
// api start
import MemoApp from '../fixtures/api/memo/App'
const routes = [
  { path: '/useCallback', label: 'useCallback', component: <Callback /> },
  { path: '/useContext', label: 'useContext', component: <Context /> },
  { path: '/useDebugValue', label: 'useDebugValue', component: <DebugValue /> },
  { path: '/useDeferred', label: 'useDeferred', component: <Deferred /> },
  { path: '/useEffect', label: 'useEffect', component: <Effect /> },
  { path: '/useId', label: 'useId', component: <Id /> },
  { path: '/useImperativeHandle', label: 'useImperativeHandle', component: <ImperativeHandle /> },
  { path: '/useInsertion', label: 'useInsertion', component: <Insertion /> },
  { path: '/useLayoutEffect', label: 'useLayoutEffect', component: <LayoutEffect /> },
  { path: '/useMemo', label: 'useMemo', component: <Memo /> },
  // { path: '/useOptimistic', label: 'useOptimistic', component: <Optimistic /> },
  { path: '/useReducer', label: 'useReducer', component: <Reducer /> },
  { path: '/useRef', label: 'useRef', component: <Ref /> },
  { path: '/useState', label: 'useState', component: <State /> },
  { path: '/useSyncExternalStore', label: 'useSyncExternalStore', component: <SyncExternalStore /> },
  { path: '/useTransition', label: 'useTransition', component: <Transition /> },
  { path: '/Suspense', label: '<Suspense>', component: <SuspenseApp /> },
  { path: '/memo', label: 'memo', component: <MemoApp /> }
]

export default routes
