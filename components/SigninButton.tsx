import { signInWithGoogle } from "@/action/auth-action";
import { Button } from "./ui/button";

const SigninButton = ({ value }: { value: String }) => {
  return (
    <form action={signInWithGoogle}>
      <Button type="submit" className="cursor-pointer">
        {value}
      </Button>
    </form>
  );
};

export default SigninButton;
