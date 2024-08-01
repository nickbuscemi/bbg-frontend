import phone from '../../assets/icons/phone.png';
import email from '../../assets/icons/email.png';

const NavBarHeader = () => {
  return (
    <section className="bg-logoDarkGray text-gray-50 h-10 flex px-4 md:px-24 md:py-4 justify-between items-center text-sm font-helvetica-bold-condensed">
        <div className='flex flex-row gap-2 items-center'>
            <img src={phone} alt="phone" className="h-5 w-5" />
            <a href="tel:+1234567890"> Call +1 (631) 316-5475</a>
        </div>
        <div></div>
        <div className='flex flex-row gap-2 items-center'>
            <img src={email} alt="phone" className="h-5 w-5" />
            <a  href="mailto:info@bugsbgone.com">info@BugsBGone.com</a>
        </div>
    </section>
  )
}

export default NavBarHeader