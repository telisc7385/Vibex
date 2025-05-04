'use client'

import { apiCore } from '@/apiCall/apiCore'
import { getsectionApi, getsectionWitSpreadSheetApi } from '@/apiCall/getSection'
import { SectionConfig } from '@/apiCall/sectionType'
import { useState } from 'react'

type Props = {
    sectionResponse: SectionConfig
}

export default function SectionToggles({ sectionResponse }: Props) {
    const [config, setConfig] = useState<SectionConfig>(sectionResponse)
    const [loading, setLoading] = useState(false)

    const fetchSectionData = async () => {
        setLoading(true)
        try {
            const data = await getsectionWitSpreadSheetApi()
            setConfig(data.params as SectionConfig)
        } catch (err: any) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }

    const handleChange = (key: keyof SectionConfig) => {
        setConfig(prev => ({ ...prev, [key]: !prev[key] }))
    }

    const handleSubmit = async () => {
        setLoading(true);
        try {
            const updates = Object.entries(config).map(([key, value]) => ({
                section: key,
                visible: value,
            }));

            for (const update of updates) {
                await fetch(`https://sheetdb.io/api/v1/61mt3x2q974l4/section/${update.section}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ data: { visible: update.visible.toString() } }),
                });
            }

            await fetchSectionData();
        } catch (err) {
            console.log('Submit error:', err);
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded-md mt-10 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-6">Toggle Website Sections</h2>

            {loading ? (
                <p className="text-gray-500 mb-4">Updating configuration...</p>
            ) : null}

            <div className="space-y-2">
                {Object.entries(config).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between border-b py-2">
                        <span className="capitalize text-gray-700">{key.replace('show', '')}</span>

                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={value}
                                onChange={() => handleChange(key as keyof SectionConfig)}
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-500 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                        </label>
                    </div>
                ))}
            </div>

            <button
                onClick={handleSubmit}
                className="mt-6 w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
                disabled={loading}
            >
                {loading ? 'Saving...' : 'Save Changes'}
            </button>
        </div>
    )
}
