module.exports = {

    getRequest: (req, res) => {
        const dbInstance = req.app.get('db');
           
        dbInstance.get_inventory()
        .then( products => res.status(200).send(products) )
        .catch( err => {
            res.status(500).send({errorMessage: "Uh uh uh, you didn't say the magic word."});
            console.log(err);
        })
    },

    addProduct: (req, res) => {
        const dbInstance = req.app.get('db');
        const {name, price, imageUrl} = req.body;
        
        dbInstance.create_product([name, price, imageUrl])
        .then( () => res.status(200).send('All good!') )
        .catch( err => {
            res.status(500).send({errorMessage: "Uh uh uh, you didn't say the magic word."})
        })
    }
}