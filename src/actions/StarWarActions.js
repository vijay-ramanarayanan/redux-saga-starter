import {call, put} from 'redux-saga/effects'
import * as types from '../types/StarWarActionTypes';

/**
 * Call and put are referred to as object effects 
 * 
 * Call :
 * Yielded value is assigned to const person
 * First parameter is a function and rest are arguments to those functions
 * 
 * Put dispatches an action to the store
 */


const api = (url) => fetch(url).then(response => response.json());


export const fetchStarWarsRequest = () => ({
    type : types.FETCH_STAR_WARS_REQUEST
});

export function* fetchPerson(action) {
    try {
        //yield put({type: types.FETCH_STAR_WAR_SUCCESS, data : {isFetching: true}})
        const person = yield call(api, 'https://swapi.co/api/people/');
        yield put({type: types.FETCH_STAR_WAR_SUCCESS, data : person.results})
    } catch(error) {
        console.log(error);
    }
}

