export const toRad = (degrees, precision = 2) => {
    return ((degrees * Math.PI) / 180).toFixed(precision);
}