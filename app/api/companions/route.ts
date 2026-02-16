import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Companion from '@/models/Companion';

export async function GET() {
    try {
        await dbConnect();




        const companions = await Companion.find({}).sort({ createdAt: -1 });
        return NextResponse.json(companions);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        await dbConnect();
        const body = await request.json();
        const companion = await Companion.create(body);
        return NextResponse.json(companion, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
