import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToAnchor() {
    const { hash } = useLocation();
    const lastHash = useRef('');

    useEffect(() => {
        if (hash) {
            lastHash.current = hash;
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        } else {
            // Scroll to top if no hash (e.g. going to /privacy needs to start at top)
            window.scrollTo(0, 0);
        }
    }, [hash]);

    return null;
}
