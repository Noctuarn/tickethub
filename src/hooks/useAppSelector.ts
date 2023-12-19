import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../redux/store'; // Підключіть тип RootState зі свого store.ts

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;