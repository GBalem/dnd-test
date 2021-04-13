
import List from '../../components/List'
import { motion } from 'framer-motion'

const Home = () => {
	return (
		<motion.div initial="hidden" animate="visible" variants={{
			hidden: {
				scale: .8,
				opacity: 0
			},
			visible: {
				scale: 1,
				opacity: 1,
				transition: {
					delay: .4
				}
			}
		}}>
			<List></List>
		</motion.div>

	)
}

export default Home