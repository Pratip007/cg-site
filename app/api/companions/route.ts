import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Companion from '@/models/Companion';

export async function GET() {
    try {
        await dbConnect();

        // Auto-seed if empty
        const count = await Companion.countDocuments();
        if (count === 0) {
            const MOCK_COMPANIONS = [
                {
                    name: 'Aisha',
                    age: 24,
                    location: 'Mumbai',
                    price: 3500,
                    bio: 'Fashion designer who loves food and travel. I enjoy meaningful conversations and exploring new places.',
                    interests: ['Fashion', 'Food', 'Travel'],
                    images: ['https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'],
                    isAvailable: true,
                },
                {
                    name: 'Priya',
                    age: 26,
                    location: 'Bangalore',
                    price: 5000,
                    bio: 'Software engineer by day, artist by night. I love visiting art galleries and discussing modern literature.',
                    interests: ['Art', 'Literature', 'Tech'],
                    images: ['https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'],
                    isAvailable: true,
                },
                {
                    name: 'Riya',
                    age: 23,
                    location: 'Delhi',
                    price: 4000,
                    bio: 'Aspiring model and dancer. Energetic and fun-loving, perfect for parties and social events.',
                    interests: ['Dancing', 'Modeling', 'Parties'],
                    images: ['https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'],
                    isAvailable: true,
                },
            ];
            await Companion.insertMany(MOCK_COMPANIONS);
        }

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
