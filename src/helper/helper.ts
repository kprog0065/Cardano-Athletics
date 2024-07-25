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