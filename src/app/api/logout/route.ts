import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
async function handler(req: NextRequest) {
  // set ccokies from request body
  const cookie = cookies();

  // remove cookies
  cookie.delete('auth.token');

  return NextResponse.json({ message: 'Successful Logout' });
}

export { handler as POST };
