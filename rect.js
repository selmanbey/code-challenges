/* 
DETERMINE IF 2 RECTANGLES INTERSECT

Assumptions:
I will be given two rectangle objects with x and y coordinates
x coordinates will be from left to right 
y coordinates will be from bottom to up
example rectangle = {
    x: [-2, 2],
    y: [-1, 3]
}

TO RUN THE SCRIPT:
1. Make sure node.js is installed
2. Navigate to the root folder (where rect.js lives)
3. Run "node rect.js" in the terminal
*/

function doesIntersect(rect1, rect2) {
    // find the x perimeters of a rectangle
    const getXPerimeter = rect => {
        let xPerimeter = []
        for(let i = rect.x[0]; i <= rect.x[1]; i++) {
            xPerimeter.push(i);
        }
        return xPerimeter
    }

    // find the y perimeters of a rectangle
    const getYPerimeter = rect => {
        let yPerimeter = []
        for(let i = rect.y[0]; i <= rect.y[1]; i++) {
            yPerimeter.push(i);
        }
        return yPerimeter
    }
    

    let rect1Perms = {
        x: getXPerimeter(rect1),
        y: getYPerimeter(rect1)
    }

    let rect2Perms = {
        x: getXPerimeter(rect2),
        y: getYPerimeter(rect2)
    }

    console.log("perms", rect1Perms, rect2Perms)
    // check if perimeters intersect
    let xIntersection = rect1Perms.x.filter( r1x => rect2Perms.x.includes(r1x) )
    let yIntersection = rect1Perms.y.filter( r1y => rect2Perms.y.includes(r1y) )
    console.log("intersection: ", xIntersection, yIntersection)
    // if both perimeters intersect in at least two values, then the rectangles must intersect too
    return xIntersection.length >= 2 && yIntersection.length >= 2
}

rect1 = {  x: [-1, 3],  y: [1, 3] }
rect2 = {  x: [-2, 1],  y: [2, 3] }


function tests() {
    // SOME BASIC TESTS (not extensive coverage)
    let rect1, rect2;
    rect1  = {  x: [-1, 3],  y: [1, 3] }
    rect2 = {  x: [-2, 1],  y: [2, 3] }
    const test1 = doesIntersect(rect1, rect2)
    
    rect1 = {  x: [1, 4],  y: [-1, 2] }
    rect2 = {  x: [-2, 1],  y: [2, 3] }
    const test2 = doesIntersect(rect1, rect2)

    rect1 = { x: [1, 2], y: [1, 2] }
    rect2 = { x: [-1, 1], y: [-1, 1] }
    const test3 = doesIntersect(rect1, rect2)

    rect1 = { x: [-2, 2], y: [-1, 3] }
    rect2 = { x: [1, 4], y: [1, 3] }
    const test4 = doesIntersect(rect1, rect2)


    console.log(`
    TEST 1:
    Expected Value: true
    Output: ${ test1 }
    `)

    console.log(`
    TEST 2:
    Expected Value: false
    Output: ${ test2 }
    `)

    console.log(`
    TEST 3:
    Expected Value: false
    Output: ${ test3 }
    `)

    console.log(`
    TEST 4:
    Expected Value: true
    Output: ${ test4 }
    `)
}

tests();