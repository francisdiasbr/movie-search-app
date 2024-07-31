import { useSelector, TypedUseSelectorHook } from 'react-redux'

import { AppState } from './store'

export const useGlobalState: TypedUseSelectorHook<AppState> = useSelector