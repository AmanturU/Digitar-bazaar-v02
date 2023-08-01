export const decodeJWT = (token) => {

  if (!token) {
    return null
  }

  const base64Url = token.split('.')[1]
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  const decodedData = JSON.parse(atob(base64))
  return decodedData.user_id
}


