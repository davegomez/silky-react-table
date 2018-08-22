const isValid = (a, b) => b.length > 0 && a.length === b.length

export default (a, b) => isValid(a, b) && b
