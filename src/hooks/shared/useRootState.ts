import { RootState } from 'src/store/configureStore'
import { useSelector } from 'react-redux'

type StateSelector<T> = (state: RootState) => T
type EqualityFn<T> = (left: T, right: T) => boolean

export const useRootState = <T>(selector: StateSelector<T>, equalityFn?: EqualityFn<T>) =>
    useSelector(selector, equalityFn)
