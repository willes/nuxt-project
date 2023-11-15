export default defineEventHandler(async (event) => {
    const query = getQuery(event)
    const data = await (await fetch(`https://mod-api.xinpianchang.com/mod/api/v2/media/${query.video_library_id}?appKey=61a2f329348b3bf77&extend=userInfo%2CuserStatus`)).json()
    return data
  }
)