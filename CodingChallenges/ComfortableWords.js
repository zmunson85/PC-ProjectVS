/* A comfortable word is a word which you can type always alternating the hand you type with (assuming you type using a QWERTY keyboard and use fingers as shown in the image below).

That being said, create a function which receives a word and returns true/True if it's a comfortable word and false/False otherwise.

The word will always be a string consisting of only ascii letters from a to z.



To avoid problems with image availability, here's the lists of letters for each hand:

Left: q, w, e, r, t, a, s, d, f, g, z, x, c, v, b
Right: y, u, i, o, p, h, j, k, l, n, m */

const comfortable_word = word => {
    let rightHand = ['y', 'u', 'i', 'o', 'p', 'h', 'j', 'k', 'l', 'n', 'm'];
    let leftHand = ['q', 'w', 'e', 'r', 't', 'a', 's', 'd', 'f', 'g', 'z', 'x', 'c', 'v', 'b'];
    let newArr = [];
    if (rightHand.includes(word[0])) {
        word.split('').map((v, i, a) => {
            if (i % 2 === 0) {
                console.log(v);
                if (rightHand.includes(v)) { newArr.push(true) }
                else { newArr.push(false) }
            }
            if (i % 2 !== 0) {
                if (leftHand.includes(v)) { newArr.push(true) }
                else { newArr.push(false) }
            }
        })
    }
    if (leftHand.includes(word[0])) {
        word.split('').map((v, i, a) => {
            if (i % 2 !== 0) {
                if (rightHand.includes(v)) { newArr.push(true) }
                else { newArr.push(false) }
            }
            if (i % 2 === 0) {
                if (leftHand.includes(v)) { newArr.push(true) }
                else { newArr.push(false) }
            }
        })
    }
    return newArr.every(v => v === true)
};
comfortable_word('yams');