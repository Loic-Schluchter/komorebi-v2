import { motion } from "motion/react";

type ProgressionBarProps = {
  currentStep: number;
  total: number;
};

function ProgressionBar({ currentStep, total }: ProgressionBarProps) {
  const progress = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <div className="flex gap-1">
      {progress.map((step) => {
        const isActive = step === currentStep + 1;
        return (
          <motion.div
            key={step}
            className={`h-2 rounded-full ${isActive ? "bg-komorebi-gold" : "bg-white/80"}`}
            animate={{
              width: isActive ? 28 : 14,
            }}
          />
        );
      })}
    </div>
  );
}

export default ProgressionBar;
