"use client";
import styles from '@/components/cartpage/Cart.module.css'
const InstructionModa = ({children, closeModal}) => {
  return (
    <>
    <div className={styles.backdrop} onClick={closeModal}/>
    {children}
    </>
  )
}

export default InstructionModa