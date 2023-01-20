const { Product } = require("./../models/");

exports.createProduct = async (req, res) => {
  try {
    const { name, brand, desc, price, image } = req.body;

    const product = new Product({
      name: name,
      brand: brand,
      desc: desc,
      price: price,
      image: image,
    });
    const savedProduct = await product.save();
    res.status(200).send(savedProduct);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
exports.getAllProducts = async (req, res) => {
  const qbrand = req.query.brand;
  try {
    let products;

    if (qbrand) {
      products = await Product.find({
        brand: qbrand,
      });
    } else {
      products = await Product.find();
    }

    res.status(200).send(products);
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).send("Product has been deleted...");
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).send(updatedProduct);
  } catch (error) {
    res.status(500).send(error);
  }
};
