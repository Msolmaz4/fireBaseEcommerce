import { configureStore ,combineReducers} from '@reduxjs/toolkit'
import authReducer from "./slice/authSlice"
import productReducer from "./slice/productSlice"
import filterReducer from "./slice/filterSlice";
import basketSlice from './slice/basketSlice';
const rootReducer = combineReducers({
    auth:authReducer,
    product: productReducer,
    filter: filterReducer,
    basket:basketSlice
}
    
)

const store = configureStore({
    reducer :rootReducer
})

export default store;

//combineReducers birden fazla reducer'ı tek bir reducer'a birleştirmek için kullanılır.
// const rootReducer = combineReducers({ someSlice: someReducer, anotherSlice: anotherReducer });: Bu satır, combineReducers kullanarak farklı reducer'ları tek bir ana reducer'a birleştirir. Her bir reducer, belirli bir "slice" (dilim) adı altında tanımlanır.