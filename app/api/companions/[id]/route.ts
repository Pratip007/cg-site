import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(
    request: Request,
    context: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await context.params;
        const companion = await db.companions.findById(id);

        if (!companion) {
            return NextResponse.json({ error: 'Companion not found' }, { status: 404 });
        }

        return NextResponse.json(companion);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function PUT(
    request: Request,
    context: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await context.params;
        const body = await request.json();
        const companion = await db.companions.findByIdAndUpdate(id, body);

        if (!companion) {
            return NextResponse.json({ error: 'Companion not found' }, { status: 404 });
        }

        return NextResponse.json(companion);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}

export async function DELETE(
    request: Request,
    context: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await context.params;
        const companion = await db.companions.findByIdAndDelete(id);

        if (!companion) {
            return NextResponse.json({ error: 'Companion not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Companion deleted successfully' });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
