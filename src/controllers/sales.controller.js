import Sale from "../models/sales.model.js";
import Product from "../models/product.model.js";

export const getSales = async (req, res) => {
  try {
    const sales = await Sale.find();
    res.status(200).json(sales);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const getSale = async (req, res) => {
  try {
    const sale = await Sale.findById(req.params.id);
    if (!sale) return res.sendStatus(400).json({ message: "sale not found" });
    res.status(200).json(sale);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const registerSale = async (req, res) => {
  try {
    const { client_name, client_tel, adress, city, zipcode, products, total } =
      req.body;

    const sale = new Sale({
      client_name,
      client_tel,
      adress,
      city,
      zipcode,
      products,
      total,
    });

    for (const productVendido of products) {
      const product = await Product.findById(productVendido);
      if (!product) {
        return res.status(400).json({ message: "product not found" });
      }
      if (product.stock >= productVendido.quantity) {
        product.stock -= productVendido.quantity;
      } else {
        return res.status(400).json({ message: "not enough product in stock" });
      }
      await product.save();
    }

    const newSale = await sale.save();
    res.status(200).json(newSale);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateSale = async (req, res) => {
  try {
    const saleFound = Sale.findById(req.params.id);
    if (!saleFound) {
      return res.status(400).json({ message: "sale not found" });
    }
    saleFound.state = "true";
    await saleFound.save();
    res.status(200).json(saleFound);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
