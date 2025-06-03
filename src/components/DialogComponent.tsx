import { Dialog } from '@mui/material';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';

const MotionDiv = motion.div;

const scaleVariant = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: { duration: 0.3, ease: 'easeOut' },
    },
    exit: {
        scale: 0.5,
        opacity: 0,
        transition: { duration: 0.2, ease: 'easeIn' },
    },
};

type LoginDialogProps = {
    open: boolean;
    onClose: () => void;
    children: ReactNode;
};

export default function DialogComponent({ open, onClose, children }: LoginDialogProps) {
    return (
        <Dialog open={open} onClose={onClose}>
            <MotionDiv
                variants={scaleVariant}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                {children}
            </MotionDiv>
        </Dialog>
    );
}