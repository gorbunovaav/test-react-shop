import { motion } from 'framer-motion'
import { useState } from 'react'
import './Modal.scss'

const MAX_LENGTH = 120

const Modal = ({ product, onClose }) => {
  if (!product) return null
  const [expanded, setExpanded] = useState(false)

  const isLongText = product.description.length > MAX_LENGTH
  const text = expanded
    ? product.description
    : product.description.slice(0, MAX_LENGTH)


  return (
    <motion.div 
      className="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose} 
    >
      <motion.div
        className="modal-content"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        onClick={e => e.stopPropagation()} 
      >
         <div className="modal-close" onClick={onClose}>
          ×
        </div>
        <h2>{product.title}</h2>
        <img class="modal-img" src={product.image} alt={product.title} />
        <p className="product-card__description">
        {text}
        {!expanded && isLongText && (
    <span
      className="modal__arrow"
      onClick={() => setExpanded(true)}
    >
      ▼ 
    </span>
     )}
      </p>
      <p>Цена: ${product.price}</p>
        <button onClick={onClose}>Закрыть</button>
      </motion.div>
    </motion.div>
  )
}

export default Modal
