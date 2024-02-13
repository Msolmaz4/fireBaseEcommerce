import { configureStore ,combineReducers} from '@reduxjs/toolkit'
import authReducer from "./slice/authSlice"

const rootReducer = combineReducers({
    auth:authReducer
}
    
)

const store = configureStore({
    reducer :rootReducer
})

export default store;

//combineReducers birden fazla reducer'ı tek bir reducer'a birleştirmek için kullanılır.
// const rootReducer = combineReducers({ someSlice: someReducer, anotherSlice: anotherReducer });: Bu satır, combineReducers kullanarak farklı reducer'ları tek bir ana reducer'a birleştirir. Her bir reducer, belirli bir "slice" (dilim) adı altında tanımlanır.