import mongoose, {Model} from "mongoose";

interface IVerification extends mongoose.Document {
    email: {
        type: string;
        required: true;
    };
    secret: {
        type: string;
        required: true;
    };
}

const VerificationSchema = new mongoose.Schema<IVerification>({
    email: {
        type: String,
        required: true
    },
    secret: {
        type: String,
        required: true
    }
}, {timestamps: true});

const Verification: Model<IVerification> = mongoose.models.Verification || mongoose.model<IVerification>("Verification", VerificationSchema);

export default Verification;