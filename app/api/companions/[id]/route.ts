import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Companion from '@/models/Companion';

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        await dbConnect();
        const companion = await Companion.findById(params.id);

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
    { params }: { params: { id: string } }
) {
    try {
        await dbConnect();
        const body = await request.json();
        const companion = await Companion.findByIdAndUpdate(params.id, body, {
            new: true,
            runValidators: true,
        });

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
    { params }: { params: { id: string } }
) {
    try {
        await dbConnect();
        const companion = await Companion.findByIdAndDelete(params.id);

        if (!companion) {
            return NextResponse.json({ error: 'Companion not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Companion deleted successfully' });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
