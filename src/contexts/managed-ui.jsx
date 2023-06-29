'use client';
import React, { useCallback, useMemo } from 'react';
// import { ThemeProvider } from 'next-themes'

const initialState = {
  displaySidebar: false,
  displayModal: false,
  displayHamburger: false,
  modalView: 'DEFAULT',
  sidebarView: 'DEFAULT',
  setModalView: (value) => {
    return value;
  },
  closeModal: () => {},
  openModal: () => {},
  closeHamburger: () => {},
  openHamburger: () => {},
  closeSidebar: () => {},
  openSidebar: () => {},
};

export const UIContext = React.createContext(initialState);

UIContext.displayName = 'UIContext';

function uiReducer(state, action) {
  switch (action.type) {
    case 'OPEN_SIDEBAR': {
      return {
        ...state,
        displaySidebar: true,
      };
    }
    case 'CLOSE_SIDEBAR': {
      return {
        ...state,
        displaySidebar: false,
      };
    }
    case 'OPEN_MODAL': {
      return {
        ...state,
        displayModal: true,
        displaySidebar: false,
      };
    }
    case 'CLOSE_MODAL': {
      return {
        ...state,
        displayModal: false,
      };
    }
    case 'SET_MODAL_VIEW': {
      return {
        ...state,
        modalView: action.view,
      };
    }
    case 'SET_SIDEBAR_VIEW': {
      return {
        ...state,
        sidebarView: action.view,
      };
    }
    case 'OPEN_HAMBURGER': {
      return {
        ...state,
        displayHamburger: true,
      };
    }
    case 'CLOSE_HAMBURGER': {
      return {
        ...state,
        displayHamburger: false,
      };
    }
  }
}

export const UIProvider = (props) => {
  const [state, dispatch] = React.useReducer(uiReducer, initialState);

  const openSidebar = useCallback(() => dispatch({ type: 'OPEN_SIDEBAR' }), [dispatch]);
  const closeSidebar = useCallback(() => dispatch({ type: 'CLOSE_SIDEBAR' }), [dispatch]);
  const toggleSidebar = useCallback(
    () =>
      state.displaySidebar
        ? dispatch({ type: 'CLOSE_SIDEBAR' })
        : dispatch({ type: 'OPEN_SIDEBAR' }),
    [dispatch, state.displaySidebar]
  );
  const closeSidebarIfPresent = useCallback(
    () => state.displaySidebar && dispatch({ type: 'CLOSE_SIDEBAR' }),
    [dispatch, state.displaySidebar]
  );

  const openModal = useCallback(() => dispatch({ type: 'OPEN_MODAL' }), [dispatch]);
  const closeModal = useCallback(() => dispatch({ type: 'CLOSE_MODAL' }), [dispatch]);

  const openHamburger = useCallback(() => dispatch({ type: 'OPEN_HAMBURGER' }), [dispatch]);
  const closeHamburger = useCallback(() => dispatch({ type: 'CLOSE_HAMBURGER' }), [dispatch]);

  const setModalView = useCallback(
    (view) => dispatch({ type: 'SET_MODAL_VIEW', view }),
    [dispatch]
  );

  const setSidebarView = useCallback(
    (view) => dispatch({ type: 'SET_SIDEBAR_VIEW', view }),
    [dispatch]
  );

  const value = useMemo(
    () => ({
      ...state,
      openSidebar,
      closeSidebar,
      toggleSidebar,
      closeSidebarIfPresent,
      openModal,
      closeModal,
      setModalView,
      setSidebarView,
      openHamburger,
      closeHamburger,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state]
  );

  return <UIContext.Provider value={value} {...props} />;
};

export const useUI = () => {
  const context = React.useContext(UIContext);
  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`);
  }
  return context;
};

export const ManagedUIContext = ({ children }) => <UIProvider>{children}</UIProvider>;
