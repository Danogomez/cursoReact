import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// import { CounterApp } from './01-usestate/CounterApp'
// import { HooksApp } from './HooksApp'
// import { CounterWithCustomHook } from './01-usestate/CounterWithCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { MultipleCustomHook } from './03-examples/MultipleCustomHook'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Memorize } from './06-memos/Memorize'
import { MemoHook } from './06-memos/MemoHook'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <MemoHook/>
  // </React.StrictMode>,
)
