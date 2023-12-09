// Modal.tsx
// Represents a generic modal component with a transparent overlay
import React from 'react'

interface ModalProps {
  onClose: () => void // Callback function for closing the modal
  children: React.ReactNode
}

// Modal component with a transparent overlay
const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Transparent overlay that closes the modal when clicked */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-gray-400 p-1 rounded-full z-10">{children}</div>
    </div>
  )
}

export default Modal
