'use client'

import React, { useEffect, useState } from 'react'

export default function AdminAccessPage() {
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [passwordInput, setPasswordInput] = useState('')

  const correctPassword = 'vibexAdmin'

  useEffect(() => {
    const storedAccess = localStorage.getItem('admin_access')
    if (storedAccess === 'granted') {
      setIsAuthorized(true)
    }
  }, [])

  useEffect(() => {
    if (isAuthorized) {
      const fetchSubmissions = async () => {
        try {
          const res = await fetch('/api/new-submissions')
          const result = await res.json()
          setData(result.submissions || [])
        } catch (err) {
          setError('Failed to fetch data')
        } finally {
          setLoading(false)
        }
      }
      fetchSubmissions()
    }
  }, [isAuthorized])

  const handlePasswordSubmit = () => {
    if (passwordInput === correctPassword) {
      setIsAuthorized(true)
      localStorage.setItem('admin_access', 'granted')
    } else {
      alert('Incorrect password. Please try again.')
    }
  }

  if (!isAuthorized) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
          <h2 className="text-xl font-semibold mb-4">Admin Access</h2>
          <input
            type="password"
            placeholder="Enter password"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            className="w-full px-3 py-2 border rounded mb-4"
          />
          <button
            onClick={handlePasswordSubmit}
            className="px-4 py-2 bg-black text-white rounded hover:bg-white hover:text-black border border-black transition-all duration-200 w-full"
          >
            Submit
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="overflow-x-auto p-4 container mx-auto ">
      <div className="flex justify-between items-center my-10">
        <h2 className="text-2xl font-bold">Form Submissions</h2>
        <button
          onClick={() => {
            localStorage.removeItem('admin_access')
            location.reload() // Refresh page after logout
          }}
          className="px-4 py-2 bg-black min-w-[200px] text-white rounded hover:bg-white hover:text-black border border-black transition-all duration-200"
        >
          Logout
        </button>
      </div>

      {loading ? (
        <p>Loading submissions...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : data.length === 0 ? (
        <p>No submissions found.</p>
      ) : (
        <table className="min-w-full border border-gray-300 text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">#</th>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Phone</th>
              <th className="p-2 border">Subject</th>
              <th className="p-2 border">Message</th>
              <th className="p-2 border">Submitted At</th>
              <th className="p-2 border">City</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry, index) => (
              <tr key={entry.id} className="hover:bg-gray-50">
                <td className="p-2 border">{index + 1}</td>
                <td className="p-2 border">{entry.payload_params?.Name}</td>
                <td className="p-2 border">{entry.payload_params?.email}</td>
                <td className="p-2 border">{entry.payload_params?.phone}</td>
                <td className="p-2 border">{entry.payload_params?.subject}</td>
                <td className="p-2 border">{entry.payload_params?.message}</td>
                <td className="p-2 border">{new Date(entry.created_at).toLocaleString()}</td>
                <td className="p-2 border">{entry.geocoded_city || '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )

}
