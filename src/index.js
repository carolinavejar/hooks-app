import React from 'react';
import ReactDOM from 'react-dom';
import { MemoHook } from './components/06-memos/memoHook';
// import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
// import { FocusScreen } from './components/04-useRef/FocusScreen';
// import { RealExampleRef } from './components/04-useRef/RealExampleRef';
// import { Layout } from './components/05-useLayoutEffect/LayoutEffect';
// import { Memorize } from './components/06-memos/Memorize';
// import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
// import { SimpleForm } from './components/02-useEffect/SimpleForm';
// import { HooksApp } from './HooksApp';

ReactDOM.render(
  <div className="container">
    <MemoHook />
  </div>,
    
  document.getElementById('root')
);

