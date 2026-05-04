import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  altText: string;
}

export const ImageModal = ({ isOpen, onClose, imageSrc, altText }: ImageModalProps) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-md p-4 md:p-10 cursor-zoom-out"
        >
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={onClose}
            className="absolute top-6 right-6 z-[110] h-12 w-12 rounded-full bg-foreground/10 flex items-center justify-center text-foreground hover:bg-foreground/20 transition-colors"
          >
            <X size={24} />
          </motion.button>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center pointer-events-none"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={imageSrc}
              alt={altText}
              className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl pointer-events-auto"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageModal;
