import { motion } from 'framer-motion';
import { styles } from '../components/Styles';
import { staggerContainer } from '../utils/motion';

type ComponentType = React.ComponentType<any>;


const StarWrapper = (Component: ComponentType, idName: string) =>
  function HOC() {
    return (
      <motion.section
        variants={{
          hidden: staggerContainer(0.1).hidden,
          show: staggerContainer(0.1).show,
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
