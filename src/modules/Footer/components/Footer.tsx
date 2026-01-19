import { Link } from 'react-router-dom';
import Logo from '../../../assets/imgs/logo-gray.svg';
import { ROUTES } from '../../../constants/routes';

export const Footer = () => {
    return (
        <div className="flex flex-row mt-20 md:mt-15 lg:mt-21 mx-4 sm:mx-12 lg:mx-16 xl:mx-[calc(calc(100vw-1408px)/2)] mb-8 lg:mb-11 border-t border-gray-200 justify-between items-end h-14 md:h-10 lg:h-12 xl:h-14">
            <img className="hidden md:flex w-32 lg:w-35 xl:w-[186px]" src={Logo} alt="Логотип" />
            <span className="flex md:hidden text-gray-500">© 2025</span>
            <Link
                to={ROUTES.privacyPolicy}
                className="text-gray-500 text-sm hover:text-gray-700 transition-colors"
            >
                Политика конфиденциальности
            </Link>
        </div>
    );
};
