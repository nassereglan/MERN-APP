import Product from '../models/product.model.js';



//show all products function
export const getProducts = async(req, res) =>{
    try {
        const products = await Product.find({});
        res.status(200).json({
            success: true,
            data: products
        });
    } catch (error) {
        console.log("error in showing products:", error.message);
        res.sendStatus(500).json({
            success: false,
            message: "server error or no found products"
        });
    }
}

//create a new product function
export const createNewProduct = async(req, res) => {
    const product = req.body;

    if (!product.name || !product.price || !product.image){
        return res.status(400).json({
            success: false,
            message: "pleae provide all Fields"
        });
    }

    const newProduct = new Product(product)

    try {
        await newProduct.save();
        res.status(201).json({
            success: true,
            data: newProduct,
            message: "the product add successfully"
        });
    } catch (error) {
        console.error("create product is error", error.message);
        res.status(500).json({
            success: false,
            message: "server Error"
        });
    }
}

//update a product function
export const updateProduct = async(req, res) =>{
    const { id } = req.params;
    const product = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404),json({
            success: false,
            message: "product not found"
        });
    }

    try {
        const upadateProduct = await Product.findByIdAndUpdate(id, product, {new: true});
        res.status(200).json({
            success: true,
            data: upadateProduct,
            message: "the product is updated successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "server error"
        });
    }

}

//delete a product
export const deleteProduct = async(req, res) => {
    const { id } = req.params;

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            message: "product deleted successfully"
        });
    } catch (error) {
        console.log("error in deleting produc:", error.message);
        res.sendStatus(404).json({
            success: false,
            message: "product not found"
        });
    }
}