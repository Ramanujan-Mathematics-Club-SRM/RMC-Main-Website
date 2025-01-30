'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';
import {
  ClipboardDocumentListIcon,
  DocumentMagnifyingGlassIcon,
  NewspaperIcon
  // PlayCircleIcon,
} from '@heroicons/react/24/outline';

const resources = [
  {
    name: 'Class Notes',
    description: 'Chapter Wise PPTs for all subjects.',
    href: 'resources',
    icon: NewspaperIcon,
  },
  {
    name: 'Previous Year Papers',
    description: 'Previous year papers for all subjects.',
    href: 'resources',
    icon: ClipboardDocumentListIcon,
  },
  {
    name: 'Additional Resources',
    description: 'Links to video lectuers, books and much more.',
    href: 'resources',
    icon: DocumentMagnifyingGlassIcon,
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-br from-blue-0 to-blue-200 fixed inset-x-0 z-20 backdrop-blur-md">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 bg-gradient-to-br "
      >
        {/* Logo */}
        <div className="flex items-center lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center space-x-3">
            {/* <Image
              alt="Bryha Logistics Logo"
              src="/assets/clean_bryha_logo.png"
              width={24}
              height={24}
            /> */}
            <span className="text-lg font-semibold text-gray-800">Ramanujan Mathematics Club</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-800"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-12 bg-blue">
          <Link href="/about" className="text-sm font-semibold text-gray-800">
            About
          </Link>
          <Link href="/team" className="text-sm font-semibold text-gray-800">
            Events
          </Link>
          <Link href="/team" className="text-sm font-semibold text-gray-800">
            Team
          </Link>
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold text-gray-800">
              Resources
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-800" />
            </PopoverButton>
            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
            >
              <div className="p-4">
                {resources.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm hover:bg-blue-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-blue group-hover:bg-white">
                      <item.icon aria-hidden="true" className="h-6 w-6 text-gray-400 group-hover:text-blue-400 bg-blue" />
                    </div>
                    <div className="flex-auto">
                      <Link href={item.href} className="block font-semibold text-gray-800">
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
        </PopoverGroup>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/Contact" className="text-sm font-semibold text-gray-800">
            Contact Us
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center space-x-3">
              <Image
                alt="Bryha Logistics Logo"
                src="/assets/clean_bryha_logo.png"
                width={24}
                height={24}
              />
              <span className="text-lg font-semibold text-gray-800">Bryha Logistics</span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-800"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold text-gray-800 hover:bg-gray-50">
                    resources
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {resources.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold text-gray-800 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Link
                  href="/OurTeam"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-800 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Our Team
                </Link>
                <Link
                  href="/Company"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-800 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Company
                </Link>
                <Link
                  href="/Contact"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-800 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
