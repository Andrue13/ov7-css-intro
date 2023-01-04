const obj = {
    a: 1,
    b: 2,
    c: {
        d: 'Hello',
        e: 3
    },
    f: [1, 2, 3, 4, 5]
}

// function getValues(obj) {
//     const
//     if (typeof obj === 'object'){
//         for (const el of Object.values(value)) {
//             getValues(el)
//         }
//     } else result.push(value)  
// }
// getValues(obj)
// console.log(getValues(obj));

const objEntrence = {
    a: 1,
    b: 2,
    c: 'hello'
}

function convertObj(obj) {
    const entries = Object.entries
    return Object.fromEntries(entries.map(prop => {
        return [prop[0].toUpperCase(),
        typeof prop[1] === 'number' ? prop[1] * 2 : prop[1]
    ]
    }))
    }
    Object.fromEntries(Object.entries(objEntrence))
}

const obj3 = {
    a: 1
}

function tostring(obj) {
    result `${obj.reduce((res, item) => res + item, '');
}
console.log(tostring(obj3))



