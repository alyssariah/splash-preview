'use client'; // This is a client component 👈🏽
import { useEffect, useRef } from 'react';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { useUI } from '@/contexts/managed-ui';

export const SidebarView = ({ sidebarView, closeSidebar }: any) => {
  return (
    <Sidebar onClose={closeSidebar}>
      {sidebarView === 'DEFAULT' && <div>Side Bar View</div>}
    </Sidebar>
  );
};

export const SidebarUI = () => {
  const { displaySidebar, closeSidebar, sidebarView } = useUI();
  return displaySidebar ? (
    <SidebarView sidebarView={sidebarView} closeSidebar={closeSidebar} />
  ) : null;
};

export const Sidebar = ({ children, onClose }: any) => {
  const sidebarRef = useRef<null | HTMLDivElement>(null);
  const contentRef = useRef<null | HTMLDivElement>(null);

  const onKeyDownSidebar = (event: any) => {
    if (event.code === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    if (sidebarRef.current) {
      sidebarRef.current.focus();
    }

    const contentElement = contentRef.current;

    if (contentElement) {
      disableBodyScroll(contentElement, { reserveScrollBarGap: true });
    }

    return () => {
      clearAllBodyScrollLocks();
    };
  }, []);

  return (
    <div
      className="fixed inset-0 h-full z-50 box-border outline-none"
      ref={sidebarRef}
      onKeyDown={onKeyDownSidebar}
      tabIndex={1}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="h-full flex flex-col text-base bg-dialog-bg shadow-xl overflow-y-auto overflow-x-hidden scrolling-touch"
          onClick={onClose}
        />
        <section className="absolute inset-y-0 right-0 w-full md:w-auto max-w-full flex outline-none md:pl-10">
          <div className="h-full w-full md:w-screen md:max-w-md">
            <div
              className="absolute inset-0 bg-black bg-opacity-40 duration-100 ease-linear backdrop0-blur-sm"
              ref={contentRef}
            >
              {children}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
