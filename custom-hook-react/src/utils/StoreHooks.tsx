import React, { createContext, 
    useContext, 
    useEffect, 
    useReducer, 
    useRef 
} from "react";

export interface Store<S, A = any> {
    getState(): S;
    dispatch(action: A): void;
    subscribe(listener: () => void): () => void; // returns unsubscribe
}

/* ---------- React Context & Provider ---------- */
const StoreContext = createContext<Store<any> | null>(null);

export function StoreProvider<S, A = any>({ store, children }: { store: Store<S, A>; children: React.ReactNode }) {
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
}

function useStore<S, A = any>(): Store<S, A> {
  const store = useContext(StoreContext);
  if (!store) throw new Error("Store not found. Wrap your tree with <StoreProvider store={...}>.");
  return store;
}

export function useDispatch<A = any>(): (action: A) => void {
    const store = useStore<any, A>();
    return store.dispatch;
}

export function useSelector<S, Selected>(
  selector: (state: S) => Selected,
  equalityFn: (a: Selected, b: Selected) => boolean = Object.is
): Selected {
    const store = useStore<S>();
    const selectedRef = useRef<Selected>(selector(store.getState()));
    const [, forceRender] = useReducer((x) => x + 1, 0);

    // Recompute if selector identity changes (advise memoizing selector in parent with useCallback)
    useEffect(() => {
        selectedRef.current = selector(store.getState());
        // subscribe to store changes
        const unsubscribe = store.subscribe(() => {
        const nextSelected = selector(store.getState());
        if (!equalityFn(selectedRef.current, nextSelected)) {
            selectedRef.current = nextSelected;
            forceRender();
        }
        });
        return unsubscribe;
    }, [store, selector, equalityFn]);

    return selectedRef.current;
}

export function createStore<S, A>(
    reducer: (state: S, action: A) => S,
    initialState: S
): Store<S, A> {
    let state = initialState;
    const listeners = new Set<() => void>();
    return {
        getState: () => state,
        dispatch: (action: A) => {
            const next = reducer(state, action);
            if (!Object.is(next, state)) {
                state = next;
                listeners.forEach((l) => l());
            }
        },
        subscribe: (listener: () => void) => {
            listeners.add(listener);
            return () => listeners.delete(listener);
        },
    };
}
