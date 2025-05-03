
import { NextResponse } from 'next/server';

export async function GET() {
  const apiToken = 'acb1558c6dcbea89574301730c7c64b0'
  const formId = '037337fe77c7';

  const url = `https://usebasin.com/api/v1/submissions?form_id=${formId}&page=1&api_token=${apiToken}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      // 'Authorization': `Bearer ${apiToken}`,
      'Accept': 'application/json',
    },
  });

  if (!response.ok) {
    return NextResponse.json({ error: 'Failed to fetch submissions' }, { status: response.status });
  }

  const data = await response.json();
  return NextResponse.json(data);
}
