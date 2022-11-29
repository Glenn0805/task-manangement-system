import store from 'resources/js/main/home-store'

import { useDispatch } from 'react-redux'
type AppDispatch = typeof store.dispatch

const useAppDispatch = () => useDispatch<AppDispatch>()

export default useAppDispatch
