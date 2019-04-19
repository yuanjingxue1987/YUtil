const getType = (item) => {
    let type = typeof(item)
    if(
        type === 'object' &&
        !item
    ) {
        type = 'null'
    }else if(
        type === 'object' &&
        Array.isArray(item)
    ) {
        type = 'array'
    }
    return type
}

const compareArrays = (a1, a2) => {
    let isEqual = true,
        a2Copy = [...a2],
        iEl = -1
    if(a1.length !== a2.length) {
        isEqual = false
    }
    for (let el of a1) {
        const typeEl = getType(el)
        if(typeEl === 'object' || typeEl === 'array') {
            a2Copy.forEach((item, i) => {
                if(compare(el, item)) {
                    iEl = i
                }
            })
        }else{
            iEl = a2Copy.indexOf(el)
        }
        if(iEl === -1) {
            isEqual = false
            break
        }else{
            a2Copy.splice(iEl, 1)
        }
    }
    return isEqual
}

export const compare = (a, b) => {
    let isEqual = true
    const aType = getType(a),
        bType = getType(b)
    if(aType === bType) {
        if(aType === 'object') {
            if(Object.keys(a).length === Object.keys(b).length) {
                for (let key in a) {
                    if(!compare(a[key], b[key])) {
                        isEqual = false
                        break
                    }
                }
            } else{
                isEqual = false
            }
        }else if(aType === 'array') {
            isEqual = compareArrays(a, b)
        }else {
            isEqual = (a === b)
        }
    } else {
        isEqual = false
    }
    return isEqual
}
