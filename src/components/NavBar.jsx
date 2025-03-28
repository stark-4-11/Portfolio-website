import { useEffect, useRef, useState } from "react";

const NavBar = ({
  items,
  initialActiveIndex = 0,
  onLinkClick,
}) => {
  const containerRef = useRef(null);
  const navRef = useRef(null);
  const filterRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);

  const updateEffectPosition = (element) => {
    if (!containerRef.current || !filterRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const pos = element.getBoundingClientRect();
    const styles = {
      left: `${pos.x - containerRect.x}px`,
      top: `${pos.y - containerRect.y}px`,
      width: `${pos.width}px`,
      height: `${pos.height}px`,
    };
    Object.assign(filterRef.current.style, styles);
  };

  const handleClick = (e, index, href, smooth) => {
    e.preventDefault();
    const liEl = e.currentTarget;

    if (activeIndex === index) return;

    setActiveIndex(index);
    updateEffectPosition(liEl);

    if (smooth && href) {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: smooth === "true" ? "smooth" : "auto",
          block: "start",
        });
      }
    }

    if (onLinkClick) {
      onLinkClick();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const liEl = e.currentTarget.parentElement;
      if (liEl) {
        handleClick({ currentTarget: liEl }, index);
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 50;
      let newActiveIndex = activeIndex;

      items.forEach((item, index) => {
        const section = document.querySelector(item.href);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            newActiveIndex = index;
          }
        }
      });

      if (newActiveIndex !== activeIndex) {
        setActiveIndex(newActiveIndex);
        const activeLi = navRef.current?.querySelectorAll("li")[newActiveIndex];
        if (activeLi) {
          updateEffectPosition(activeLi);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIndex, items]);

  useEffect(() => {
    if (!navRef.current || !containerRef.current) return;
    const activeLi = navRef.current.querySelectorAll("li")[activeIndex];
    if (activeLi) {
      updateEffectPosition(activeLi);
    }
    const resizeObserver = new ResizeObserver(() => {
      const currentActiveLi = navRef.current?.querySelectorAll("li")[activeIndex];
      if (currentActiveLi) {
        updateEffectPosition(currentActiveLi);
      }
    });
    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, [activeIndex]);

  return (
    <>
      <style>
        {`
          .effect {
            position: absolute;
            opacity: 1;
            pointer-events: none;
            display: grid;
            place-items: center;
            z-index: 1;
          }
          .effect.filter::after {
            content: "";
            position: absolute;
            inset: 0;
            background: white;
            transform: scale(0);
            opacity: 0;
            z-index: -1;
            border-radius: 9999px;
          }
          .effect.active::after {
            animation: pill 0.3s ease both;
          }
          @keyframes pill {
            to {
              transform: scale(1);
              opacity: 1;
            }
          }
          li.active {
            color: black;
            text-shadow: none;
          }
          li.active::after {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          li::after {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            width: 100%;
            height: 100%;
            border-radius: 8px;
            background: white;
            opacity: 0;
            transform: translate(-50%, -50%) scale(0);
            transition: all 0.3s ease;
            z-index: -1;
          }
        `}
      </style>

      <div className="relative" ref={containerRef}>
        <nav
          className="flex relative h-100px"
          style={{ transform: "translate3d(0,0,0.01px)" }}
        >
          <ul
            ref={navRef}
            className="md:flex gap-8  space-y-15 sm:space-y-10 md:space-y-0 list-none p-0 px-4 m-0 relative z-[3]"
            style={{
              color: "white",
              textShadow: "0 1px 1px hsl(205deg 30% 10% / 0.2)",
            }}
          >
            {items.map((item, index) => (
              <li
                key={index}
                className={`py-[0.6em] px-[1em] rounded-full relative cursor-pointer transition-[background-color_color_box-shadow] duration-300 ease shadow-[0_0_0.5px_1.5px_transparent] text-white ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={(e) =>
                  handleClick(e, index, item.href, item.smooth)
                }
              >
                <a
                  href={item.href}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="outline-none"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <span className="effect filter" ref={filterRef} />
      </div>
    </>
  );
};

export default NavBar;