const paginate = (current, max) => {
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

const replacePagination = (el, page, pages, baseUrl) => {
  const createPageUrl = (num) =>
    num === 1 ? baseUrl : `${baseUrl}page/${num}/`

  const frag = document.createDocumentFragment()

  paginate(page, pages).forEach((num) => {
    const isLink = typeof num === 'number' && num !== page

    const wrapper = document.createElement(isLink ? 'a' : 'div')
    wrapper.classList.add('page')
    if (num === page) wrapper.classList.add('current')
    wrapper.textContent = num
    if (isLink) wrapper.href = createPageUrl(num)

    frag.appendChild(wrapper)
  })

  el.replaceChildren(frag)
}

;(() => {
  const el = document.querySelector('#pagination')
  if (!el) return

  const page = Number(el.dataset.page)
  const pages = Number(el.dataset.pages)
  if (!Number.isFinite(page) || !Number.isFinite(pages)) return

  const base = el.dataset.base
  replacePagination(el, page, pages, base)
})()
