"use client";

import React, { createContext, useContext, useState } from "react";

interface DonationContextType {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const DonationContext = createContext<DonationContextType | undefined>(undefined);

export function DonationProvider({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <DonationContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </DonationContext.Provider>
  );
}

export const useDonation = () => {
  const context = useContext(DonationContext);
  if (!context) throw new Error("useDonation must be used within a DonationProvider");
  return context;
};