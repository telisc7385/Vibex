'use client'

import { useEffect, useState } from 'react'

const SHEETDB_API = 'https://sheetdb.io/api/v1/26d7bwczbvrpn'

export default function SubmissionsTable() {
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const res = await fetch(SHEETDB_API)
        const result = await res.json()
        setData(result || [])
      } catch {
        setError('Failed to fetch data')
      } finally {
        setLoading(false)
      }
    }

    fetchSubmissions()
  }, [])

  if (loading) return <p>Loading submissions...</p>
  if (error) return <p className="text-red-500">{error}</p>
  if (data.length === 0) return <p>No submissions found.</p>

  return (
    <table className="min-w-full border border-gray-300 text-sm text-left overflow-x-auto">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-2 border">#</th>
          <th className="p-2 border">Name</th>
          <th className="p-2 border">Email</th>
          <th className="p-2 border">Phone</th>
          <th className="p-2 border">Subject</th>
          <th className="p-2 border">Message</th>
        </tr>
      </thead>
      <tbody>
        {data.map((entry, index) => (
          <tr key={index} className="hover:bg-gray-50">
            <td className="p-2 border">{index + 1}</td>
            <td className="p-2 border">{entry.Name}</td>
            <td className="p-2 border">{entry.email}</td>
            <td className="p-2 border">{entry.phone}</td>
            <td className="p-2 border">{entry.subject}</td>
            <td className="p-2 border">{entry.message}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
