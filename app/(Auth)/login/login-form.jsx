import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LoginForm = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h2 className="text-2xl font-semibold mb-5">Login</h2>
      <form className="w-[90%] max-w-md mx-auto flex-grow space-y-3">
        <div>
          <Label htmlFor="email">Email:</Label>
          <Input
            className="w-full"
            id="email"
            placeholder="name@example.com"
            type="email"
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect="off"
          />
        </div>

        <div>
          <Label htmlFor="email">Password:</Label>
          <Input id="password" placeholder="****************" type="password" />
        </div>
        <Button type="submit">Log in with Email</Button>
      </form>
    </div>
  );
};

export default LoginForm;
