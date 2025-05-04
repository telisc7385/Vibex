const url = 'https://vibex-mu.vercel.app'
// const url = 'http://localhost:3000'

export const apiCore = async (
    endpoint: string,
    requestBody: Record<string, unknown> = {},
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'POST'
  ) => {
    const options: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 0 },
    }
  
    if (method !== 'GET') {
      options.body = JSON.stringify({
        jsonrpc: '2.0',
        params: requestBody,
      })
    }
  
    try {
      const response = await fetch(`${url}${endpoint}`, options)
  
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
  
      const responseData = await response.json()
      return responseData
    } catch (error: any) {
      return { error: error.message || 'Unknown error' }
    }
  }
  