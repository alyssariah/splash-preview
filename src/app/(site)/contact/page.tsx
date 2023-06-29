import ContactForm from '@/components/form/Contact';

export default function ContactPage() {
  return (
    <div className="w-[100%] flex flex-col items-center bg-gray-50">
      <div className="max-w-[1440px] w-[100%] min-h-[calc(100vh-60px)] text-black-500 flex items-center justify-center">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="text-center text-3xl font-extrabold text-gray-900">Contact Me</h2>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
