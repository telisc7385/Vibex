import { getsectionApi } from '@/apiCall/getSection'
import AdminAccessPage from '@/Components/AdminComponents/AdminAcessPage'
import React from 'react'

const page = async () => {

  const response = await getsectionApi();

  return (

    <AdminAccessPage
      sectionResponse={response.params}
    />
  )
}

export default page