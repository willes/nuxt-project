export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  try {
    const data = await (await fetch(`https://www.xinpianchang.com/_next/data/S1Q0fmpAQIOriufyqXRz7/discover/article/${query.param}.json`)).json()     
    return data
  } catch (err) {
    // 错误处理
    return { err }
  }
  }
)