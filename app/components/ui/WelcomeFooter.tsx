import Button from "./Button";
import Torii from "./Torii";
import {cookies} from "next/headers";

async function WelcomeFooter() {

    const cookieStore = await cookies();

    const completed = cookieStore.get("onboardingCompleted")?.value === "true";

    const href = completed ? "/home" : "/onboarding";

  return (
    <div className="flex flex-col justify-center items-center w-full gap-2 mb-10 ">
      <div className="relative top-10">
        <Torii />
      </div>
      <div className="w-3/4 flex justify-center">
        <Button ariaLabel="start" href={href}>Begin the journey</Button>

      </div>
      <p className="z-10 text-[14px]">
        Already have an account? <span className="underline">Sign in</span>
      </p>
    </div>
  );
}

export default WelcomeFooter;
