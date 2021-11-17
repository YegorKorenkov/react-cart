import { useDispatch } from 'react-redux';

import { AppDispatchType } from 'src/store';

export const useAppDispatch = () => useDispatch<AppDispatchType>();
