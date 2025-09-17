import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { SplitText as GSAPSplitText } from "gsap/SplitText";

gsap.registerPlugin(GSAPSplitText);

const SplitText = ({
  text,
  className = "",
  delay = 100,
  duration = 0.6, 
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  textAlign = "center",
  onLetterAnimationComplete,
  repeatDelay = 5,
}) => {
  const ref = useRef(null);
  const timelineRef = useRef(null);
  const splitterRef = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const animate = () => {
      if (splitterRef.current) {
        splitterRef.current.revert();
      }

      const absoluteLines = splitType === "lines";
      if (absoluteLines) el.style.position = "relative";

      const splitter = new GSAPSplitText(el, {
        type: splitType,
        absolute: absoluteLines,
        linesClass: "split-line",
      });

      splitterRef.current = splitter;

      let targets;
      switch (splitType) {
        case "lines":
          targets = splitter.lines;
          break;
        case "words":
          targets = splitter.words;
          break;
        case "words, chars":
          targets = [...splitter.words, ...splitter.chars];
          break;
        default:
          targets = splitter.chars;
      }

      targets.forEach((t) => {
        t.style.willChange = "transform, opacity";
      });

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay,
        onRepeat: () => {
          gsap.set(targets, from);
        },
        onComplete: () => {
          gsap.set(targets, {
            ...to,
            clearProps: "willChange",
            immediateRender: true,
          });
          onLetterAnimationComplete?.();
        },
      });

      timelineRef.current = tl;

      tl.set(targets, { ...from, immediateRender: false, force3D: true });
      tl.to(targets, {
        ...to,
        duration,
        ease,
        stagger: delay / 1000,
        force3D: true,
      });
    };

    animate();

    return () => {
      timelineRef.current?.kill();
      splitterRef.current?.revert();
      gsap.killTweensOf(ref.current);
    };
  }, [text, delay, duration, ease, splitType, from, to, repeatDelay, onLetterAnimationComplete]);

  return (
    <p
      ref={ref}
      className={`split-parent overflow-hidden inline-block whitespace-normal ${className}`}
      style={{
        textAlign,
        wordWrap: "break-word",
      }}
    >
      {text}
    </p>
  );
};

export default SplitText;
