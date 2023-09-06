class ProductManager {
    constructor (){
        this.products = [];
    }

    getProducts = () => {
        return this.products;
    }

    generateIds=()=>{
        const counter = this.products.length
        if(counter==0){
            return 1
        }
        else{
            return (this.products[counter-1].id)+1
        }
    }

    addProduct = (title, description, price, thumbnail, code, stock) => {
        
        if(!title || !description || !price || !thumbnail || !code || !stock){
            console.error("Ingrese todos los datos del producto")
            return
        }
        else{

            const productFilter= this.products.find(element=>element.code==code)
            const id=this.generateIds();
                if (!productFilter){
                const newProduct = {
                    id: id,
                    title, 
                    description, 
                    price, 
                    thumbnail, 
                    code, 
                    stock
                };
                return this.products.push(newProduct);
            }

            else{
                console.error("El codigo del pruducto ya existe")
            }
            
        }
    }
    getProdcutById=(id)=>{
        const productFound=this.products.find(element=>element.id==id)
        if (!productFound){
            console.error("No encontrado")
            return
        }
        else{
            return productFound
        }
    }
}

const productManager = new ProductManager();
productManager.addProduct("Product 1", "Description 1", 10.99, "thumbnail1.jpg", "ABC123", 100);
productManager.addProduct("Product 2", "Description 2", 19.99, "thumbnail2.jpg", "XYZ789", 50);
productManager.addProduct("Product 3", "Description 3", 20.99, "thumbnail3.jpg", "ASD789", 600);
productManager.addProduct("Product 4", "Description 4", 22.99, "thumbnail4.jpg", "ASDF789", 700);


console.log(productManager.getProducts());
console.log(productManager.getProdcutById(1));
