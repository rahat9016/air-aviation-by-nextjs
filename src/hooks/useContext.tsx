import React, { createContext, useContext, useState } from 'react';

export type ReCaptchaContextType = {
  isCaptchaVerified: boolean;
  verifyCaptcha: (value:string | null) => void;
  resetReCaptcha: () => void;
};
const ReCaptchaContext = createContext<ReCaptchaContextType | undefined>(undefined)
 
export function useReCaptcha() {
  return useContext(ReCaptchaContext);
}

export function ReCaptchaProvider({ children }: { children: React.ReactNode }) {
  const [isCaptchaVerified, setCaptchaVerified] = useState(false);

  const verifyCaptcha = (value: string | null) => {
    if (value) {
      setCaptchaVerified(true);
    } else {
      setCaptchaVerified(false);
    }
  };
  const resetReCaptcha = () => {
    setCaptchaVerified(false);
  };
  const contextValue: ReCaptchaContextType = {
    verifyCaptcha, 
    isCaptchaVerified, 
    resetReCaptcha
  }
  return (
    <ReCaptchaContext.Provider value={contextValue}>
      {children}
    </ReCaptchaContext.Provider>
  );
}
