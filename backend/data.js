import bcrypt from 'bcryptjs';

 const data = {
    users: [
        {
          name: 'Ziedah',
          email: 'admin@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: true,
          isSeller: true,
          seller: {
            name: 'Puma',
            logo: '/images/logo1.png',
            description: 'best seller',
            rating: 4.5,
            numReviews: 120,
          },
        },
        {
          name: 'Ward',
          email: 'user@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: false,
        },
      ],
    products: [{
        _id:"1",
        name: "Slim Shirt",
        category: "Shirts",
        image: "/images/slimshirt.jpeg",
        price:60,
        brand: "Nike",
        rating: 4.5,
        numReviews:10,
        countInStock: 6,
    },
    {
        _id:"2",
        name: "Fit Shirt",
        category: "Shirts",
        image: "/images/slimshirt.jpeg",
        price:60,
        brand: "Nike",
        rating: 4.5,
        numReviews:10
    },
    {
        _id:"3",
        name: "Tight Shirt",
        category: "Shirts",
        image: "/images/slimshirt.jpeg",
        price:60,
        brand: "Nike",
        rating: 4.5,
        numReviews:10
    },
    {
        _id: "4",
        name: "Best Pants",
        category: "Pants",
        image: "/images/slimshirt.jpeg",
        price:65,
        brand: "Nike",
        rating: 4,
        numReviews:10
    },
    {
        _id:"5",
        name: "Slim Pants",
        category: "Pants",
        image: "/images/slimshirt.jpeg",
        price:70,
        brand: "Nike",
        rating: 5,
        numReviews:10
    },
    {
        _id:"6",
        name: "Short Pants",
        category: "Pants",
        image: "/images/slimshirt.jpeg",
        price:45,
        brand: "Nike",
        rating: 4.5,
        numReviews:10
    },

]
}
export default data;