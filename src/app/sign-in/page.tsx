import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"; // Corrected import

const Signin = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-center mb-4">Sign In</h2>

        <form className="space-y-4">
          {/* Name Field */}
          <div className="flex flex-col">
            <Label htmlFor="name" className="mb-1">
              Name:
            </Label>
            <Input id="name" placeholder="Enter your name" className="p-2" />
          </div>

          {/* Password Field */}
          <div className="flex flex-col">
            <Label htmlFor="password" className="mb-1">
              Password:
            </Label>
            <Input id="password" type="password" placeholder="Enter password" className="p-2" />
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
