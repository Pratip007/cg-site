import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
    try {
        const companions = await db.companions.find();
        return NextResponse.json(companions);
    } catch (error: any) {
        console.error('Error in GET /api/companions:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const companion = await db.companions.create(body);
        return NextResponse.json(companion, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
