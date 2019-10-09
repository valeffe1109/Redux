import {createStore} from 'redux'
import reducer from '../reducer/index.js'

const initialState = {
    loading : false 
}


export default function configureStore(){
    return createStore(reducer,initialState)
}


