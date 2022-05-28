import { motion, useTransform, useViewportScroll } from 'framer-motion'
import styled from '@emotion/styled'

const ProgressBar = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  background: #55b6c2;
  height: 8px;
  /*transition: 0.2s ease;*/
  z-index: 3;
`

export const ReadingProgress: React.FC = () => {
  const { scrollYProgress } = useViewportScroll()
  const progressValue = useTransform(
    scrollYProgress,
    value => `${value * 100}%`
  )

  return <ProgressBar style={{ width: progressValue }} />
}
