import * as motion from "motion/react-client"

const FadeInWhenVisible = ({ children, style }: { children: React.ReactNode, style?: string} ) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 2, ease: "easeOut" }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 }
      }}
      className={style || ""}
    >
      {children}
    </motion.div>
  )
}

export default FadeInWhenVisible;