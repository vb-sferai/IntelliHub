import EmailIcon from '../../../assets/imgs/supreme/icon-email.svg';
import LinkedinIcon from '../../../assets/imgs/supreme/icon-linkedin.svg';
import TelegramIcon from '../../../assets/imgs/supreme/icon-telegram.svg';

const CONTACT_CARDS = [
  {
    icon: EmailIcon,
    title: 'Email',
    contact: 'hello@sfer.ai',
    href: 'mailto:hello@sfer.ai',
  },
  {
    icon: LinkedinIcon,
    title: 'Linkedin',
    contact: 'kgurbanov',
    href: 'https://www.linkedin.com/in/kgurbanov/',
  },
  {
    icon: TelegramIcon,
    title: 'Telegram',
    contact: '@kgurbanov',
    href: 'https://t.me/kgurbanov',
    mirrorIcon: true,
  },
];

export const ContactsSection = () => {
  return (
    <section className="bg-white px-6 py-24 md:px-12 lg:px-16" id="contacts">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-[32px]">
        {/* Heading */}
        <div className="flex max-w-[768px] flex-col gap-[20px]">
          <h2 className="text-4xl font-semibold leading-none tracking-[-0.72px] text-black">
            We'd love to hear from you
          </h2>
          <p className="text-xl font-normal leading-[1.4] tracking-[-0.6px] text-[#676767]">
            Our friendly team is always here to chat
          </p>
        </div>

        {/* Contact Cards */}
        <div className="flex flex-col gap-6 md:flex-row md:gap-6">
          {CONTACT_CARDS.map((card, index) => (
            <div
              key={index}
              className="flex h-[231px] flex-1 flex-col justify-between bg-[#f7f7f5] p-10"
            >
              <img 
                src={card.icon} 
                alt="" 
                className={`size-10 ${card.mirrorIcon ? 'scale-x-[-1]' : ''}`} 
              />
              <div className="flex flex-col gap-[20px]">
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold leading-[30px] text-[#101828]">
                    {card.title}
                  </h3>
                  <a 
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-normal leading-[24px] text-[#475467] underline hover:text-[#005ee0] transition-colors"
                  >
                    {card.contact}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex flex-wrap items-center justify-between gap-6 border-t border-[#e4e7ec] pt-8">
          <p className="text-base font-normal leading-[24px] text-[#667085]">© 2025</p>
          <div className="flex gap-4 text-base font-normal leading-[24px] text-[#667085]">
            <p>Terms</p>
            <p>Privacy</p>
            <p>Cookies</p>
          </div>
        </div>
      </div>
    </section>
  );
};

