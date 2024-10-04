import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

async function handler(req: NextRequest) {
  // get body from request
  const data = await req.json();

  const cookie = cookies();
  // set cookies from request body
  cookie.set('auth.token', data.auth.token, {
    httpOnly: true,
    // expire 7 days
    maxAge: 60 * 60 * 24 * 7,
  });

  return NextResponse.json({ message: 'Successful Login' });
}

export { handler as POST };
