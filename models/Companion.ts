import mongoose from 'mongoose';

const CompanionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name'],
    },
    age: {
        type: Number,
        required: [true, 'Please provide an age'],
    },
    location: {
        type: String,
        required: [true, 'Please provide a location'],
    },
    price: {
        type: Number,
        required: [true, 'Please provide a price'],
    },
    bio: {
        type: String,
        required: [true, 'Please provide a bio'],
    },
    interests: {
        type: [String],
        required: [true, 'Please provide interests'],
    },
    images: {
        type: [String],
        required: [true, 'Please provide image URLs'],
    },
    isAvailable: {
        type: Boolean,
        default: true,
    },
}, {
    timestamps: true,
});

export default mongoose.models.Companion || mongoose.model('Companion', CompanionSchema);
