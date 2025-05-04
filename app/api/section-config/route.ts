import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const configPath = path.join(process.cwd(), 'data', 'sectionConfig.json')

export async function GET() {
  const data = fs.readFileSync(configPath, 'utf-8')
  return NextResponse.json(JSON.parse(data))
}

export async function PUT(request: Request) {
  const body = await request.json()
  fs.writeFileSync(configPath, JSON.stringify(body, null, 2))
  return NextResponse.json({ message: 'Config updated' })
}
