import mongoose, {Model} from "mongoose";

interface IAdmin extends mongoose.Document {
    name: {
        type: string;
        required: [true, "Name is required"];
    },
    email: {
        type: string;
        required: [true, unique: true, "Email is required"];
    },
    password: {
        type: string;
        required: [true, "Password is required"];
    },
    isAdmin: {
        type: boolean;
        default: false;
    },
    isVerified: {
        type: boolean;
        default: false;
    }
}

const adminSchema = new mongoose.Schema<IAdmin>({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isVerified: {
        type: Boolean,
        default: false
    }

}, {timestamps: true});

const Admin: Model<IAdmin> = mongoose.models.Admin || mongoose.model<IAdmin>("Admin", adminSchema);

export default Admin;