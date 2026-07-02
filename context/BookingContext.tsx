"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";

type BookingContextValue = {
  isOpen: boolean;
  preselectedPackage: string;
  openBooking: (packageId?: string) => void;
  closeBooking: () => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [preselectedPackage, setPreselectedPackage] = useState("");

  const openBooking = useCallback((packageId?: string) => {
    setPreselectedPackage(packageId ?? "");
    setIsOpen(true);
  }, []);

  const closeBooking = useCallback(() => {
    setIsOpen(false);
    setPreselectedPackage("");
  }, []);

  return (
    <BookingContext.Provider
      value={{ isOpen, preselectedPackage, openBooking, closeBooking }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used within BookingProvider");
  return ctx;
}
