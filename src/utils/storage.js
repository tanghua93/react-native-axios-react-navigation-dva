import {AsyncStorage} from 'react-native';

export function getItem(key) {
    return AsyncStorage.getItem(key).then((value) => {
        const jsonValue = JSON.parse(value)
        return jsonValue
    });

}

export function setItem(key, value) {
    return AsyncStorage.setItem(key, JSON.stringify(value))
}

export function removeItem(key) {
    return AsyncStorage.removeItem(key)
}

export function update(key, value) {
    return getItem(key).then((item) => {
        value = typeof value === 'string' ? value : Object.assign({}, item, value);
        return AsyncStorage.setItem(key, JSON.stringify(value));
    });
}