'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'



export const PresenceWrapper = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname()
    const [currentPath, setCurrentPath] = useState<string | null>(null)
    const [isMounted, setIsMouted] = useState(false)

    useEffect(() => {
        setIsMouted(true)
        if (currentPath === null) {
            setCurrentPath(pathname)
        }
    }, [pathname, currentPath])

    if (!isMounted) {
        return
    }

    // const handleExitComplete = () => {
    //     // Update the current path after the exit animation is complete
    //     setCurrentPath(pathname)
    // }
    return (
        <div>
            <AnimatePresence initial={false} mode='wait'>
                <motion.div 
                key={pathname}
                exit={{y: 500}}
                transition={{duration: 1}}
                >
                {children}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}