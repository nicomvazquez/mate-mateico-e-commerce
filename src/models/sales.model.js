import mongoose from "mongoose";

const saleSchema = new mongoose.Schema(
  {
    client_name: {
      type: String,
      required: true,
    },
    client_tel: {
      type: String,
      required: true,
    },
    adress: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    zipcode: {
      type: String,
      required: true,
    },
    products: [
      {
        product_id: {
          type: mongoose.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          default: 0,
        },
      },
    ],
    total: {
      type: Number,
      required: true,
      default: 0,
    },
    state: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Sale", saleSchema);
