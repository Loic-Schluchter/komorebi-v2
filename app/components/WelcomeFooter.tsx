import Button from "./Button";
import Torii from "./Torii";

function WelcomeFooter() {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-2 mb-18 ">
      <div className="relative top-10">
        <Torii />
      </div>
      <Button href="/onboarding">Begin the journey</Button>
      <p className="z-10 text-[14px]">
        Already have an account? <span className="underline">Sign in</span>
      </p>
    </div>
  );
}

export default WelcomeFooter;
