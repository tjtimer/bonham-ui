export function hasSpecialChars(value) {
  return value.match(/\W/g)
}
export function hasDigits(value) {
  return value.match(/\d/g)
}
export function hasUpperCaseLetters(value) {
  return value.match(/[A-Z]/g)
}
export function hasLowerCaseLetters(value) {
  return value.match(/[a-z]/g)
}
export function hasWhitespaces(value) {
  return value.match(/\s/g)
}

export function validEmail(value) {
  try {
    const [name,
      domain] = value.split('@')
    const [host,
      tld] = domain.split('.')
    const parts = name.split('.').concat([host, tld])
    if (host.length && tld.length >= 2) {
      for (let part of parts) {
        if (hasSpecialChars(part) === '-' || hasSpecialChars(part) === null) {
          return true
        }
      }
    }
    return false
  } catch (e) {
    return false
  }
}

export function validPassword(value) {
  if (hasSpecialChars(value) && hasDigits(value) && hasLowerCaseLetters(value) && hasUpperCaseLetters(value) && !hasWhitespaces(value)) {
    return true
  }
  return false
}
