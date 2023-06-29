'use client';
import Image from 'next/image';
import Link from 'next/link';
import { HamburgerMenu } from '../hamburger-menu/HamburgerMenu';
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { BsCart, BsPerson, BsSearch } from 'react-icons/bs';
import { useUI } from '@/contexts/managed-ui';
import { Button } from '../button/Button';

export interface NavbarProps {
  logo?: {
    image: string;
    shortImage: string;
    alt: string;
  };
  links: {
    label: string;
    url: string;
  }[];
  hamburger?: {
    animation: string;
    color: string;
  };
  darkmode?: boolean;
  actionItem?: {
    type: 'icon';
  };
  format: 'Right links' | 'Left links' | 'Center links';
}

export default function Navbar({
  logo = {
    image: '/logo.webp',
    shortImage: '/logo.webp',
    alt: 'Apps for Scratch Logo',
  },
  links = [],
  hamburger = { animation: '', color: '' },
  darkmode = false,
  format = 'Right links',
}: NavbarProps) {
  const ref = useRef<null | HTMLDivElement>(null);
  const { displayHamburger, openHamburger, closeHamburger, openModal } = useUI();

  useEffect(() => {
    const dropdown = ref.current;
    if (displayHamburger) {
      disableBodyScroll(dropdown as HTMLElement, { reserveScrollBarGap: false });
    }
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [displayHamburger]);

  return (
    <>
      <header
        className={clsx(
          'flex justify-center w-[100%] h-[60px] border-b-[1px] border-b-black-50 sticky top-0 z-[50] backdrop-blur-sm backdrop-saturate-180',
          {
            ['bg-nav-dark text-white-500 border-b-black-400']: darkmode,
            ['bg-nav-light text-black-500 border-b-black-50']: !darkmode,
          }
        )}
      >
        <nav
          className={clsx('flex items-center justify-center w-[100%] max-w-[1440px] px-4', {
            ['justify-between']: format == 'Center links',
            ['justify-start']: format !== 'Center links',
          })}
        >
          <div
            className={clsx('flex justify-start items-center hover:cursor-pointer', {
              ['w-[100%]']: format == 'Right links',
              ['w-[200px]']: format == 'Center links',
            })}
          >
            <Link href="/">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={logo.image} className="hidden sm:block" alt={logo.alt} width={180} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.shortImage}
                className="block sm:hidden"
                alt={logo.alt}
                width={60}
                height={60}
              />
            </Link>
          </div>

          <ul
            className={clsx('hidden lg:flex justify-start items-center space-x-8', {
              ['w-[100%]']: format == 'Left links',
            })}
          >
            {links.map((link, i) => {
              return (
                <li key={i} className="text-base">
                  <Link href={link.url}>{link.label}</Link>
                </li>
              );
            })}
          </ul>
          <span
            className={clsx('hidden lg:flex items-center space-x-6 ml-6', {
              ['w-[200px] justify-end']: format == 'Center links',
            })}
          >
            <Link href="/search" title="search">
              <BsSearch />
            </Link>
            <Link href="/cart" title="cart">
              <BsCart />
            </Link>
            <Link href="/profile" title="profile">
              <BsPerson />
            </Link>
          </span>
          <div className="block lg:hidden w-[60px]">
            <HamburgerMenu
              animationType={hamburger.animation ? hamburger.animation : 'sweetX'}
              stroke={hamburger.color ? hamburger.color : '#000000'}
              active={displayHamburger}
              setActive={displayHamburger ? closeHamburger : openHamburger}
            />
          </div>
        </nav>
      </header>
      <div
        ref={ref}
        className={clsx(
          'lg:hidden w-[100%] h-full box-border bg-dialog-bg overflow-hidden  text-black fixed top-[60px] flex justify-end',
          {
            ['opacity-[100] z-[50]']: displayHamburger,
            ['opacity-[0] z-[-1]']: !displayHamburger,
          }
        )}
        onClick={closeHamburger}
      >
        <nav
          className={clsx(
            'w-[100%] max-w-[320px] bg-white-500 text-black-500 py-4 transition-translate ease-in duration-200 overflow-hidden',
            {
              ['translate-x-[0]']: displayHamburger,
              ['translate-x-[320px]']: !displayHamburger,
            }
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="flex flex-col">
            {links.map((link, i) => {
              return (
                <li key={i} className="text-base flex" onClick={closeHamburger}>
                  <Link href={link.url} className="w-[100%] flex-grow-1 px-6 py-3 h-[100%]">
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}
