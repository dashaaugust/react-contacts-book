export const getPages = (contactsList, limit) => {
  const pagesCount = Math.ceil(contactsList.length / limit)
  const pages = []
  for (let i = 1; i <= pagesCount; i += 1) {
    pages.push(i)
  }
  return pages
}

export const calcIsRenderMiddleButtons = (middleButtons, currentPage, pages, page) => {
  const count = middleButtons - 1
  const count2 = middleButtons + 3
  const count3 = count2 + (count / 2 * -1)
  let result = currentPage === page

  if (currentPage < count3) {
    if (page < count2) result = true
  }
  if (currentPage > pages.length + 1 - count3) {
    if (page > pages.length + 1 - count2) result = true
  }
  for (let i = count / 2 * -1; i <= count / 2; i += 1) {
    if (i !== 0) result = result || currentPage + i === page
  }
  return result
}

export const sortByName = array => {
  return array.sort((a, b) => a.name.localeCompare(b.name))
}

export const validateContact = (name, phone) => {
  if (name.trim().length === 0) {
    return { status: false, errorName: '* Введите имя' }
  }
  if (name.length > 150) {
    return { status: false, errorName: '* Максимальная длина 150 символов' }
  }
  if (!isNumberValid(phone) && phone.length > 0) {
    return { status: false, errorPhone: '* Некорректный номер' }
  }
  return { status: true }
}

export const isNumberValid = phone => {
  const phoneNum = /^\+?([0-9]{11})$/
  if (phone.match(phoneNum)) {
    return true
  }
  return false
}
