import { SupremeHeader } from '../../SupremeMainPage/components/SupremeHeader';
import { ContactsSection } from '../../SupremeMainPage/components/ContactsSection';

export const CustomAutomationsPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <SupremeHeader />

      {/* Work in Progress Section */}
      <section className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-black px-6 py-24 md:px-12 lg:px-16">
        <div className="mx-auto flex max-w-[768px] flex-col gap-8 text-center">
          <h1 className="text-4xl font-semibold leading-none tracking-[-0.72px] text-white md:text-6xl md:tracking-[-1.44px]">
            We're working on this page!
          </h1>
          <p className="text-xl font-normal leading-[1.4] tracking-[-0.6px] text-white/80">
            For now, feel free to reach out via:
          </p>
        </div>
      </section>

      {/* Contacts Section */}
      <ContactsSection />
    </div>
  );
};
