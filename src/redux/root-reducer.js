import { combineReducers } from "redux";
import UserReducer from "./user/UserReducer";
import cartReducer from "./cart/CartReducer";

export default combineReducers({
    user: UserReducer,
    cart: cartReducer
})