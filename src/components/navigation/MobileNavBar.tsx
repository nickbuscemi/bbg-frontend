import { Link } from 'react-router-dom';  
import { MobileNavDrawer } from './navbarComponents/MobileNavDrawer';
import logo4 from '../../assets/logos/4.png'


const SideNavBar = () => {
  return (
    <section className="sidebar sticky top-0 z-50">
        <div className="flex justify-between items-center py-4 px-4 w-full">
            <Link to="/" className="flex gap-3 items-center">
                <img 
                    src={logo4}
                    alt="menu icon"
                    width={85}
                    height={85}
                    
                />
            </Link>
            <MobileNavDrawer />
        </div>
    </section>
  )
}

export default SideNavBar