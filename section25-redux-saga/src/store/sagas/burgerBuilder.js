import { put } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../actions';

export function* initIngredientsSaga(action) {

    try {
        const response = yield axios.get('https://react-my-burguer-acb34-default-rtdb.firebaseio.com/ingredients.json');
        yield put(actions.setIngredients(response.data));
    }catch(error){
        yield put(actions.fetchIngredientsFailed());
    }
}