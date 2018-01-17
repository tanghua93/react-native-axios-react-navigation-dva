import {Toast} from 'antd-mobile';

export function failToast(text) {
    Toast.fail(text, 2);
}

export function successToast(text) {
    Toast.success(text, 2);
}

export function loadingToast(uploadtext, failText) {
    Toast.loading(uploadtext, 30, () => {
        failToast(failText);
    });
}
