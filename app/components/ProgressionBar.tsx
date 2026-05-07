import { motion } from "motion/react";

function ProgressionBar({ currentStep }: { currentStep: number }) {
  const progress = [1, 2, 3];

  return (
    <div className="flex gap-1">
      {progress.map((step) => {
        const isActive = step === currentStep + 1;
        return (
          <motion.div
            key={step}
            className={`h-2 rounded-full ${isActive ? "bg-[#C89858]" : "bg-white/80"}`}
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
