import menu from "../../../assets/icons/menu.png"
import reject from "../../../assets/icons/reject.png"
import xicon from "../../../assets/icons/xicon.svg"
//import { cloudFlareIcons } from "@/data/cloudFlareImagesConfig"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  //DrawerDescription,
  DrawerFooter,
  //DrawerHeader,
  //DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { FC } from "react"
import { Link } from "react-router-dom"
const pTagClasses = "text-3xl  tracking-widest hover:bg-white/20 backdrop-blur-sm rounded-md p-2 transition duration-300 ease-in-out";


export const MobileNavDrawer: FC = () => {
  return (
    <div>
      <Drawer>
        <DrawerTrigger className="focus:outline-none">
          <button>
            <img src={menu} alt="menu" height={45} width={25}/>
          </button>
        </DrawerTrigger>
        <DrawerContent>
            
          <div className="flex flex-col font-helvetica-bold-condensed gap-4 p-4 items-center justify-center pt-48 text-white">
          
            <Link to="/about-us" className={pTagClasses}>
              <DrawerClose>
                About Us
              </DrawerClose>
            </Link>
            
            <Link to="/services" className={pTagClasses}>
              <DrawerClose>
                Residential 
              </DrawerClose>
            </Link>

            <Link to="/aboutus" className={pTagClasses}>
              <DrawerClose>
                Commercial
              </DrawerClose>
            </Link>

            <Link to="/pest-library" className={pTagClasses}>
              <DrawerClose>
                Pest Library
              </DrawerClose>
            </Link>

            <Link to="/contact" className={pTagClasses}>
              <DrawerClose>
                Quotes
              </DrawerClose>
            </Link>

            <Link to="/" className={pTagClasses}>
              <DrawerClose>
                home
              </DrawerClose>
            </Link>
            
          </div>

          <DrawerFooter>
            <DrawerClose>
                <button>
                    <img src={xicon} alt="menu" height={55} width={25}/>
                </button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

