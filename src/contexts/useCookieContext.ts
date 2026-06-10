// CookieContext.tsx
import React, { createContext, useContext, useState } from 'react';

// Define the shape of individual cookie categories
export interface CookiePreferencesType {
  essentials: boolean;
  noEssentials: boolean;
  marketing: boolean;
}

// Define the structure of everything exposed by our hook
interface CookieContextType {
  showBanner: boolean;
  setShowBanner: (show: boolean) => void;
  showPreferences: boolean;
  setShowPreferences: (show: boolean) => void;
  preferences: CookiePreferencesType;
  setPreferences: React.Dispatch<React.SetStateAction<CookiePreferencesType>>;
  saveConsent: (updatedPrefs: CookiePreferencesType) => void;
  acceptAll: () => void;
}

const CookieContext = createContext<CookieContextType | undefined>(undefined);

const defaultPreferences: CookiePreferencesType = {
  essentials: true,
  noEssentials: false,
  marketing: false,
};

interface CookieProviderProps {
  children: React.ReactNode;
}

export const CookieProvider: React.FC<CookieProviderProps> = ({ children }) => {
  const [showBanner, setShowBanner] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return !localStorage.getItem('cookie_consent');
  });
  const [showPreferences, setShowPreferences] = useState<boolean>(false);
  const [preferences, setPreferences] = useState<CookiePreferencesType>(() => {
    if (typeof window === 'undefined') return defaultPreferences;
    const savedConsent = localStorage.getItem('cookie_consent');
    if (!savedConsent) return defaultPreferences;
    try {
      return JSON.parse(savedConsent);
    } catch {
      return defaultPreferences;
    }
  });

  const saveConsent = (updatedPrefs: CookiePreferencesType): void => {
    setPreferences(updatedPrefs);
    localStorage.setItem('cookie_consent', JSON.stringify(updatedPrefs));
    setShowBanner(false);
    setShowPreferences(false);
    
    if (updatedPrefs.noEssentials) {
      console.log("Inicialize os scripts analíticos.");
    }
  };

  const acceptAll = (): void => {
    const allAccepted: CookiePreferencesType = { essentials: true, noEssentials: true, marketing: true };
    saveConsent(allAccepted);
  };

  return React.createElement(
    CookieContext.Provider,
    {
      value: {
        showBanner,
        setShowBanner,
        showPreferences,
        setShowPreferences,
        preferences,
        setPreferences,
        saveConsent,
        acceptAll,
      },
    },
    children
  );
};

export const useCookie = (): CookieContextType => {
  const context = useContext(CookieContext);
  if (!context) {
    throw new Error('useCookie precisa ser utilizado com o CookieProvider');
  }
  return context;
};
