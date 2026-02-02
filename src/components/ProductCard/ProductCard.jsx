import './ProductCard.scss'
import { motion } from 'framer-motion'




const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const ProductCard = ({ product, onSelect }) => {
 
  return (
    <motion.div 
    className="product-card"
        variants={cardVariants}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
    > 
    <img
        className="product-card__image"
        src={product.image}
        alt={product.title}
      />
    <div className="product-card__content">
    <h3 className="product-card__title">
        {product.title}
      </h3>

      <p className="product-card__category">
        {product.category}
      </p>

      <span className="product-card__price">
        {product.price} $
      </span>
    </div>
      
      <button
      className="product-card__button"
      onClick={() => onSelect(product)}
      >
        Подробнее
      </button>
    </motion.div>
  )
}

export default ProductCard
