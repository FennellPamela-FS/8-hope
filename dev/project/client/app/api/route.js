import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({ hello: 'world' });
}

export async function POST(request) {
    const body = await request.json();
    const data = await getData(body);

    return NextResponse.json(data);
}

function getData(body) {
    // Your implementation here
}



// import { redirect } from 'next/navigation';

// export async function GET(request) {
//     return redirect('/login');
// }
