export default defineEventHandler(async (event) => {
    const data = await (await fetch('https://www.xinpianchang.com/_next/data/6gcSsKLfycSmmSBhYnQYx/discover/article/76-0.json?utm_source=IndexPick&part=%E5%88%9B%E6%84%8F%E7%B2%BE%E9%80%89&position=more&param=76-0')).json()
    return data
  }
)