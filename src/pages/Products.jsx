import { useEffect, useState } from 'react'
import axios from 'axios'
import { AnimatePresence, motion } from 'framer-motion'
import './Products.scss'
import ProductCard from '../components/ProductCard/ProductCard'
import Filter from '../components/Filter/Filter'
import Loader from '../components/Loader/Loader'
import Modal from '../components/Modal/Modal'


const Products = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState('all')
  const [selectedProduct, setSelectedProduct] = useState(null)


  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data)
      })
      .finally(() => setLoading(false))
  }, [])
    const categories = ['all', ...new Set(products.map(p => p.category))]
    const filteredProducts =
        category === 'all'
        ? products
        : products.filter(p => p.category === category)

        const containerVariants = {
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }
        
  return (
    <div className="products">
        <Filter
        categories={categories}
        activeCategory={category}
        onChange={setCategory}
      />

      {loading && <Loader />}
    

    <motion.div
    className="products__list"
    initial="hidden"
    variants={containerVariants}
    animate="visible"
    >
    <AnimatePresence>
      {filteredProducts.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onSelect={setSelectedProduct} 
        />
      ))}
      </AnimatePresence>
      <AnimatePresence>
  {selectedProduct && (
    <Modal 
      product={selectedProduct} 
      onClose={() => setSelectedProduct(null)} 
    />
  )}
</AnimatePresence>

       </motion.div>
  </div>
  )
}

export default Products
