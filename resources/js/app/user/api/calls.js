import {
    USER_LISTS,
    STORE_USER,
    FIND_USER,
    UPDATE_USER,
    DELETE_USER
} from './api';

import axios from 'axios';
import template from "lodash/fp/template";

export function getPaginatedUsers() {
    return axios.get(USER_LISTS);
}

export function createUser(data) {
    return axios.post(STORE_USER, data);
}

export function findUser(userId) {
	return axios.get(template(FIND_USER)({ userId }));
}

export function updateUser(userId, data) {
	return axios.post(template(UPDATE_USER)({ userId }), data);
}

export function deleteUser(userId) {
	return axios.post(template(DELETE_USER)({ userId }));
}