import Link from 'next/link';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';

export const Footer = () => {
  const footerLinks = [
    {
      label: 'Quick Links',
      children: [
        {
          label: 'About',
          url: '/about',
        },
        {
          label: 'Contact',
          url: '/contact',
        },
        {
          label: 'Blog',
          url: '/blog',
        },
      ],
    },
  ];

  const companyName = 'NextGen WebWorks';

  const companyDescription =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  return (
    <footer className="flex justify-center w-[100%] bg-black-400 text-white-500 mt-8">
      <div className="max-w-[1440px] w-[100%] px-8 py-12 lg:p-20">
        <div className="flex flex-col lg:flex-row space-y-10 lg:space-x-20 lg:space-y-0">
          <div>
            <p className="text-lg">{companyName}</p>
            <p className="font-thin max-w-[360px] text-sm pt-4">{companyDescription}</p>
          </div>
          <div className="flex justify-between flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-20">
            {footerLinks.map((link, i) => {
              return (
                <div className="lg:pl-4 w-[140px]" key={i}>
                  <p className="mb-4 text-md">{link.label}</p>
                  <ul className="text-sm space-y-4">
                    {link.children.map((child, j) => {
                      return (
                        <li key={j}>
                          <Link href={child.url}>{child.label}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
            <div className="lg:pl-4">
              <p className="mb-4 text-md">Contact</p>
              <p className="text-sm">
                {companyName} <br /> 123 Elm Street <br /> Denver, CO 55328
              </p>
              <p className="pt-8 text-sm">Email: jane@gmail.com</p>
              <p className="pt-4 text-sm">Phone: (123)456-7890</p>
            </div>
            <div className="lg:pl-4">
              <p className="mb-4 text-md">Follow Us</p>
              <div className="flex space-x-6">
                <Link href="https://www.facebook.com" target="_blank" title="facebook">
                  <BsFacebook className="text-body-lg" />
                </Link>
                <Link href="https://www.instagram.com" target="_blank" title="instagram">
                  <BsInstagram className="text-body-lg" />
                </Link>
                <Link href="https://twitter.com" target="_blank" title="twitter">
                  <BsTwitter className="text-body-lg" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-0">
          <p className="text-sm">&copy; 2022 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};
