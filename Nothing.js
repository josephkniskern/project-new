function solution(A) {
  let smallest = 1
  let sortA = A.sort((a,b) => a - b)
  for (let i in sortA) {
      if (sortA[i] > -1 && sortA[i] === smallest) smallest++
  }
  return smallest
}
