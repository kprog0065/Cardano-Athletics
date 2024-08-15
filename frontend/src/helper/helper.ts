import { store } from '../redux/store';
export const getColor = (val: number) => {

    if (val > 70) {
        return "#479d65"
    }

    if (val > 60) {
        return "#d3ba39"
    }

    if (val > 50) {
        return "#d78a34"
    }
    return "#b52548"
}


export const getToken = () => {
    const state = store.getState();
    console.log(state.auth.jwt)
    return state.auth.jwt;
};
