'use client';

import { ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Box } from '@mui/material';

const backdrop = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
};

const scaleVariant = {
    hidden: { scale: 0.5 },
    visible: {
        scale: 1,
        transition: { duration: 0.3, ease: 'easeOut' },
    },
    exit: {
        scale: 0.5,
        transition: { duration: 0.2, ease: 'easeIn' },
    },
};

type DialogComponentProps = {
    open: boolean;
    onClose: () => void;
    children: ReactNode;
};

export default function DialogComponent({ open, onClose, children }: DialogComponentProps) {
    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    variants={backdrop}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1300,
                    }}
                    onClick={onClose}
                >
                    <motion.div
                        variants={scaleVariant}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Box
                            sx={{
                                backgroundColor: '#d2d2d2',
                                padding: 4,
                                borderRadius: 2,
                                boxShadow: 24,
                                minWidth: 300,
                            }}
                        >
                            {children}
                        </Box>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
