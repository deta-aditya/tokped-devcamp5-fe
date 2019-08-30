function createFontLink(url) {
  if ([...document.head.getElementsByTagName('link')].find(
    item => item.href === url
  )) {
    return 
  }
  
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = url
  document.head.append(link)
}

export { createFontLink }