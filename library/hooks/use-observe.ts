import React from 'react';

type Options = {
    selector: string;
    activeClass: string;
    threshold?: number;
}

const observe = (observer: IntersectionObserver, selector: string) => {
    document.querySelectorAll(selector).forEach((el) => observer.observe(el));
};

export const useObserve = ({ selector, activeClass, threshold = 0 }: Options) => {
    React.useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    entry.target.classList.add(activeClass);
                    observer.unobserve(entry.target);
                });
            },
            { threshold }
        );

        observe(observer, selector);

        const mutation = new MutationObserver(() => observe(observer, selector));
        mutation.observe(document.body, { childList: true, subtree: true });

        return () => {
            observer.disconnect();
            mutation.disconnect();
        };
    }, [selector, activeClass, threshold]);
};