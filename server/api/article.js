export default defineEventHandler(async (event) => {
  const query = getQuery(event)

    console.log('%c [  ]-4', 'font-size:13px; background:#6d9be2; color:#b1dfff;', `https://www.xinpianchang.com/_next/data/O9Eq3TJtnACrGU_NwhQzr/discover/article/${query.param}.json`)
    const data = await (await fetch(`https://www.xinpianchang.com/_next/data/O9Eq3TJtnACrGU_NwhQzr/discover/article/${query.param}.json`)).json()     
    return data
  }
)