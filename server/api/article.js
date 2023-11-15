export default defineEventHandler(async (event) => {
  const query = getQuery(event)
    const data = await (await fetch(`https://www.xinpianchang.com/_next/data/O9Eq3TJtnACrGU_NwhQzr/discover/article/${query.param}.json`)).json()     
    return data
  }
)