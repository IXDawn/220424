import NoFooterLayout from './NoFooterLayout'
import Footer from '../footer/Footer'

const AppLayout = ({ children, title = 'Mfers' }) => {
  return (
    <NoFooterLayout title={title}>
      {children}

      <Footer />
    </NoFooterLayout>
  )
}

export default AppLayout
