// framer-motion の whileInView を置き換える共通スクロール発火（全ページ共有）。
// 設定値は旧 App.jsx の IntersectionObserver と同一。
const els = document.querySelectorAll('[data-reveal]')
if (!('IntersectionObserver' in window)) {
  els.forEach((el) => el.classList.add('is-visible'))
} else {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible')
          io.unobserve(e.target)
        }
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -32px 0px' }
  )
  els.forEach((el) => io.observe(el))
}
