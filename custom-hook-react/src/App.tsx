import { useCallback } from "react";
import { 
    StoreProvider, 
    createStore, 
    useDispatch, 
    useSelector 
} from "./utils/StoreHooks"
import './App.css'

type State = { count: number };
type Action = { type: "inc" } | { type: "setName"; name: string };

const reducer = (s: State, a: Action): State => {
    switch (a.type) {
        case "inc": return { ...s, count: s.count + 1 };
        default: return s;
    }
};

const store = createStore<State, Action>(reducer, { count: 0 });

function Counter() {
    const dispatch = useDispatch<Action>();
    const count = useSelector<State, number>(s => s.count);
    const inc = useCallback(() => dispatch({ type: "inc" }), [dispatch]);
    return <button onClick={inc}>Count: {count}</button>;
}


function App() {
    return (
        <StoreProvider store={store}>
            <h1>Vite + React</h1>
            <div className="card">
                <Counter></Counter>
            </div>
        </StoreProvider>
    )
}

export default App
