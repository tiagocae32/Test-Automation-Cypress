

function generateRandomDNI(): string {
  return Math.floor(10000000 + Math.random() * 90000000).toString()
}

function generateRandomEmail(): string {
  return `test${Math.floor(Math.random() * 100000)}@gmail.com`
}


export { generateRandomDNI, generateRandomEmail }