import AuthForm from "@/components/auth/AuthForm";
import heroImage from "@/assets/hero-banner.jpg";

const Register = () => {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <div className="flex flex-1 flex-col items-center justify-center bg-background p-8">
        <div className="mx-auto flex w-full max-w-md flex-col items-center text-center">
          <h1 className="mb-6 text-3xl font-bold tracking-tight">
            Join Voluntree
          </h1>
          <p className="mb-8 text-muted-foreground">
            Create an account to start managing your organization, volunteers,
            and events.
          </p>
          <AuthForm type="register" />
        </div>
      </div>
      <div
        className="hidden flex-1 bg-cover bg-center lg:block"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="flex h-full w-full items-center justify-center bg-black/40 p-8">
          <div className="max-w-md text-white">
            <h2 className="mb-6 text-4xl font-bold">
              Create impact with powerful tools
            </h2>
            <p className="text-lg">
              Gain access to a comprehensive dashboard to organize events, manage
              volunteers, track donations, and generate detailed reports.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;