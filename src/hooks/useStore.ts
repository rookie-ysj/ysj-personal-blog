import type { TypedUseSelectorHook } from 'react-redux'
import type { Dispatch, RootState } from '../store'
import { useDispatch, useSelector } from 'react-redux'

export const useCustomDispatch: () => Dispatch = useDispatch
export const useCustomSelector: TypedUseSelectorHook<RootState> = useSelector
