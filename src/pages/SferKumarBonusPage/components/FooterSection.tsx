import { Link } from 'react-router-dom';
import LogoGray from '../../SferKumarSoloWebPage/assets/logo-gray.svg';

export const FooterSection = () => {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-12 lg:px-16 xl:px-0 xl:w-312 xl:mx-auto py-8 gap-4">
      <img src={LogoGray} alt="sfer.ai" className="h-6" />
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
        <p className="text-xs text-[#858585] text-center md:text-left">
          2025 ИП Гурбанов Кирилл Игоревич, ОГРНИП 315774600229281. Все права защищены.
        </p>
        <Link to="/privacy-policy" className="text-xs text-[#858585] hover:text-[#275DD8] transition-colors">
          Политика конфиденциальности
        </Link>
      </div>
    </footer>
  );
};
