function myAdding (a, b) {
  let c = a + b
  return c
  console.log(c)
}

function mySubtraction (a, b) {
  let c = a - b
  return c
  console.log(c)
}

function myMultiplication (a, b) {
  let c = a * b
  return c
  console.log(c)
}

function myDivision (a, b) {
  let c = a / b
  return c
  console.log(c)
}

function myDegree (a, b) {
  let d = a
  for (let i = b - 1; i > 0; i--) {
    let c = d * a
    d = c
  }
  return d
  console.log(d)
}

function mySquare (a) {
  let b = Math.sqrt(a)
  return b
  console.log(b)
}

function myCosine (a) {
  let b = Math.cos(a)
  return b
  console.log(b)
}

function mySine (a) {
  let b = Math.sin(a)
  return b
  console.log(b)
}

function myfactorial (n) {
  let a = n
  for (let i = n-1; i > 0; i--) {
    a = a * i
  }
  return a
  console.log(a)
}



