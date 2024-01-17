// import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse, NextRequest } from 'next/server'

export const POST = async (req: NextRequest) => {
  if (req.method === 'POST') {
    const endpoint = process.env.APPROVAL_URL;

    if (!endpoint) {
      return NextResponse.json({ ok: false }, { status: 500 });
    }

    let requestData;

    try {
      const reqBody = await req.json();
      requestData = reqBody.request;
    }
    catch {
      return NextResponse.json({ ok: false }, { status: 400 });
    }

    if (!requestData) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }

    const response = await fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify({
        request: requestData,
      }),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })

    if (!response.ok) {
      return NextResponse.json({ ok: false }, { status: 502 });
    }

    const responseData = await response.json();
    if (!responseData.ok) {
      if (!response.ok) {
        return NextResponse.json({ ok: false }, { status: 503 });
      }
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  }
  else {
    return NextResponse.json({ ok: false }, { status: 405 });
  }
}
