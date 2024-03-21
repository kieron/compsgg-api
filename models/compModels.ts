import { Document, Schema, model } from "mongoose";

const compSchema = new Schema({
  key: { type: String, unique: true },
  name: { type: String, required: true },
  endsAt: Date,
  total_entries: Number,
  region: String,
  provider: { type: String, required: true },
});

const Comp = model("Comp", compSchema);
export default Comp;
