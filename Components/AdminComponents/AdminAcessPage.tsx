'use client'

import { SectionConfig } from '@/apiCall/sectionType'
import SectionToggles from '@/Components/AdminComponents/SectionToggles'
import SubmissionsTable from '@/Components/AdminComponents/SubmissionsTable'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

type Props = {
    sectionResponse: any;
}

export default function AdminAccessPage({ sectionResponse }: Props) {
    const [tab, setTab] = useState<'submissions' | 'toggles'>('submissions')
    const [isAuthorized, setIsAuthorized] = useState(false)
    const [passwordInput, setPasswordInput] = useState('')

    const router = useRouter()

    const correctPassword = 'vibexAdmin'

    useEffect(() => {
        const access = localStorage.getItem('admin_access')
        if (access === 'granted') setIsAuthorized(true)
    }, [])

    const handleLogin = () => {
        if (passwordInput === correctPassword) {
            localStorage.setItem('admin_access', 'granted')
            setIsAuthorized(true)
        } else {
            alert('Incorrect password')
        }
    }

    if (!isAuthorized) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold mb-4">Admin Access</h2>
                    <input
                        type="password"
                        placeholder="Enter password"
                        value={passwordInput}
                        onChange={(e) => setPasswordInput(e.target.value)}
                        className="w-full px-3 py-2 border rounded mb-4"
                    />
                    <button
                        onClick={handleLogin}
                        className="px-4 py-2 bg-black text-white rounded w-full"
                    >
                        Submit
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="p-6 sm:max-w-5xl mx-auto">
            <div className="sm:flex justify-between items-center mb-6">
                <div className="space-x-4 sm:mb-0 mb-4">
                    <button
                        onClick={() => setTab('submissions')}
                        className={`px-4 py-2 rounded ${tab === 'submissions' ? 'bg-black text-white' : 'bg-gray-200'}`}
                    >
                        Submissions
                    </button>
                    <button
                        onClick={() => setTab('toggles')}
                        className={`px-4 py-2 rounded ${tab === 'toggles' ? 'bg-black text-white' : 'bg-gray-200'}`}
                    >
                        Section Toggles
                    </button>
                </div>
                <button
                    onClick={() => {
                        localStorage.removeItem('admin_access')
                        // location.reload()
                        router.push('/')
                    }}
                    className="px-4 py-2 bg-black min-w-[200px] text-white rounded hover:bg-white hover:text-black border border-black transition-all duration-200"
                >
                    Logout
                </button>
            </div>

            {tab === 'submissions' ? <SubmissionsTable /> : <SectionToggles sectionResponse={sectionResponse} />}
        </div>
    )
}
