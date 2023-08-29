import { gsap } from "gsap";
import CSSPlugin from "gsap/dist/CSSRulePlugin";
import CustomEase from "gsap/dist/CustomEase";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export function registerGsapPlugin() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(CSSPlugin);
  gsap.registerPlugin(CustomEase);
}

let intersectionObserver: IntersectionObserver;

function ensureIntersectionObserver() {
  if (intersectionObserver) return;

  intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const eventName = entry.isIntersecting ? "enterViewport" : "exitViewport";
      entry.target.dispatchEvent(new CustomEvent(eventName));
    });
  });
}

export function viewport(element: HTMLElement) {
  ensureIntersectionObserver();

  intersectionObserver.observe(element);

  return {
    destroy() {
      intersectionObserver.unobserve(element);
    },
  };
}

export default function initAnimation() {
  document.querySelectorAll("[data-animate]").forEach((_el: Element) => {
    const el = _el as HTMLElement;
    const viewportTracker = viewport(el as HTMLElement);
    el.style.opacity = "0";

    el.addEventListener("enterViewport", () => onEnterViewport(el));
  });
}

function onEnterViewport(el:HTMLElement) {
  el.style.opacity = "1";
      if (!el.dataset.animationRepeat && el.dataset.done == "true") return;

      let animation: any;

      switch (el.dataset.animate) {
        case "text":
          animation = {
            autoAlpha: 0,
            y: el.dataset.y || 20,
            duration: el.dataset.duration || 1.2,
            ease: "expo.inOut",
            delay: el.dataset.delay || 0,
          };
          gsap.from(el, animation);
          break;

        case "button":
          const bop = CustomEase.create(
            "custom",
            "M0,0 C0.158,0.586 0.189,1.411 0.352,1.226 0.566,0.982 0.488,1 1,1 "
          );
          animation = {
            autoAlpha: 0,
            scaleX: el.dataset.scaleX ?? 0.4,
            duration: el.dataset.duration ?? 1,
            ease: bop,
            delay: el.dataset.delay ?? 0,
          };
          gsap.from(el, animation);
          break;

        case "image":
          animation = {
            translateX: '100%',
            duration: el.dataset.duration || 1.5,
            delay: el.dataset.delay || 0,
          };
          gsap.from(el, animation);
          break;

        case "card":
          animation = {
            scale: 0.9,
            autoAlpha: 0,
            y: el.dataset.y || 50,
            delay: el.dataset.delay || 0,
            ease: "power4.out",
            duration: el.dataset.duration || 2,
          };
          gsap.from(el, animation);
          break;

        case "clip-rect":
          let t1 = gsap.timeline();
          animation = {
            clipPath: `polygon(${
              el.dataset.direction == "rtl"
                ? "100% 0, 100% 0, 100% 100%, 100% 100%"
                : "0% 0%, 0% 0%, 0% 100%, 0% 100%"
            })`,
            ease: "Circ.easeOut",
            duration: el.dataset.duration || 1.75,
            delay: el.dataset.delay || 0,
          };
          t1.from(el, animation);
          t1.to(el, { scale: el.dataset.scale || 1.05, duration: 5 });
          // gsap.to(el, {
          //   scale: 1.05,
          //   ease: "Circ.easeOut",
          //   duration: el.dataset.duration || 5,
          //   delay: el.dataset.delay || 0,
          // })
          break;

        case "background-pos":
          animation = {
            backgroundPosition: "-100vw 100%",
            ease: "Circ.easeOut",
            delay: el.dataset.delay || 0,
            duration: el.dataset.duration || 2,
          };
          gsap.from(el, animation);
          break;

        case "scroll-bg-color":
          const animationFn = gsap.from(el, {
            scrollTrigger: {
              trigger: el,
              start: el.dataset.start || "top 100%",
              end: el.dataset.end || "top 70%",
              scrub: 0.5,
              onUpdate: (self) => {
                el.style.scale =
                  self.progress >= 1 || self.progress <= 0 ? "1" : "1.5";
              },
            },
          });
          break;

        case "image-position":
          animation = {
            autoAlpha: 0,
            ease: CustomEase.create(
              "custom",
              "M0,0 C0.476,0.48 0.542,0.548 1,1 "
            ),
            duration: el.dataset.duration || 2.5,
            delay: el.dataset.delay || 0,
          };
          if (el.dataset.top) animation.top = el.dataset.top;
          if (el.dataset.bottom) animation.bottom = el.dataset.bottom;
          if (el.dataset.left) animation.left = el.dataset.left;
          if (el.dataset.right) animation.right = el.dataset.right;
          gsap.from(el, animation);
          break;
      }

      el.dataset.done = "true";
      el.removeEventListener('enterViewport', () => onEnterViewport(el));
}
export function animate(ref:any) {
    const ctx = gsap.context(() => {
        initAnimation();
    }, ref)
    return ctx;
} 