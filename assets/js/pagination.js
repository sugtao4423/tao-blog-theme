function paginate(current, max) {
  const ellipsis = '…'
  const items = [1]
  if (current === 1 && max === 1) return items
  if (current > 4) items.push(ellipsis)

  const r = 2
  const r1 = current - r
  const r2 = current + r

  for (let i = r1 > 2 ? r1 : 2; i <= Math.min(max, r2); i++) items.push(i)

  if (r2 + 1 < max) items.push(ellipsis)
  if (r2 < max) items.push(max)

  return items
}

function appendPagination(el, page, pages, createPageUrl) {
  const items = paginate(page, pages)
  items.forEach((num) => {
    const div = (() => {
      const d = document.createElement('div')
      d.classList.add('page')
      if (num === page) d.classList.add('current')
      d.innerText = num
      return d
    })()

    if (typeof num === 'number' && num !== page) {
      const a = document.createElement('a')
      a.href = createPageUrl(num)
      a.appendChild(div)
      el.appendChild(a)
    } else {
      el.appendChild(div)
    }
  })
}
