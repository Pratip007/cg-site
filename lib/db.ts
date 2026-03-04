import fs from 'fs/promises';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'db.json');

export interface ICompanion {
    id: string;
    name: string;
    age: number;
    location: string;
    price: number;
    bio: string;
    interests: string[];
    images: string[];
    isAvailable: boolean;
}

interface DBStructure {
    companions: ICompanion[];
}

async function readDB(): Promise<DBStructure> {
    try {
        const data = await fs.readFile(DB_PATH, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        // If file doesn't exist, return empty structure
        return { companions: [] };
    }
}

async function writeDB(data: DBStructure): Promise<void> {
    await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2), 'utf-8');
}

export const db = {
    companions: {
        find: async () => {
            const db = await readDB();
            // Sort by id descending (assuming numeric string IDs) to get newest first
            return db.companions.sort((a, b) => parseInt(b.id) - parseInt(a.id));
        },
        findById: async (id: string) => {
            const db = await readDB();
            return db.companions.find(c => c.id === id) || null;
        },
        create: async (data: Omit<ICompanion, 'id'>) => {
            const db = await readDB();

            // Generate incremental numeric ID
            const lastId = db.companions.reduce((max, c) => Math.max(max, parseInt(c.id) || 0), 0);
            const nextId = (lastId + 1).toString();

            const newCompanion: ICompanion = {
                id: nextId,
                name: data.name,
                age: data.age,
                location: data.location,
                price: data.price,
                bio: data.bio,
                interests: data.interests,
                images: data.images,
                isAvailable: data.isAvailable ?? true
            };
            db.companions.push(newCompanion);
            await writeDB(db);
            return newCompanion;
        },
        findByIdAndUpdate: async (id: string, updates: Partial<ICompanion>) => {
            const db = await readDB();
            const index = db.companions.findIndex(c => c.id === id);
            if (index === -1) return null;

            const updatedCompanion = {
                ...db.companions[index],
                ...updates
            };
            db.companions[index] = updatedCompanion;
            await writeDB(db);
            return updatedCompanion;
        },
        findByIdAndDelete: async (id: string) => {
            const db = await readDB();
            const index = db.companions.findIndex(c => c.id === id);
            if (index === -1) return null;

            const deleted = db.companions.splice(index, 1)[0];
            await writeDB(db);
            return deleted;
        }
    }
};
