function likes(names) {
  let nameArr = [...names];
  if (nameArr.length === 0) {
    return 'no one likes this';
  }
  if (nameArr.length === 1) {
    return `${nameArr[0]} likes this`;
  }
  if (nameArr.length === 2) {
    return `${nameArr[0]} and ${nameArr[1]} likes this`;
  }
  if (nameArr.length === 3) {
    return `${nameArr[0]}, ${nameArr[1]} and ${nameArr[2]} likes this`;
  }
  if (nameArr.length > 3) {
    return `${nameArr[0]}, ${nameArr[1]} and ${nameArr.length - 2} others likes this`;
  }
}

console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']))
