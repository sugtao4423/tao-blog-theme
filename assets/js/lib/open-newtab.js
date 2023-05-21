document
  .querySelectorAll(`a[href^='http']:not(a[href*='${window.location.host}'])`)
  .forEach((a) => {
    a.setAttribute('target', '_blank')
    a.setAttribute('rel', 'noopener noreferrer')
  })
