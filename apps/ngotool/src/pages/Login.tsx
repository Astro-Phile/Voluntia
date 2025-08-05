import AuthForm from "@/components/auth/AuthForm";
import heroImage from "@/assets/hero-banner.jpg";

const Login = () => {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <div className="flex flex-1 flex-col items-center justify-center bg-background p-8">
        <div className="mx-auto flex w-full max-w-md flex-col items-center text-center">
          <h1 className="mb-6 text-3xl font-bold tracking-tight">Voluntree</h1>
          <p className="mb-8 text-muted-foreground">
            Manage your organization, volunteers, and events with our
            comprehensive dashboard.
          </p>
          <AuthForm type="login" />
        </div>
      </div>
      <div
        className="hidden flex-1 bg-cover bg-center lg:block"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="flex h-full w-full items-center justify-center bg-black/40 p-8">
          <div className="max-w-md text-white">
            <h2 className="mb-6 text-4xl font-bold">
              Make a difference in your community
            </h2>
            <p className="text-lg">
              Voluntree helps you manage volunteers, organize events, and track
              your impact. Join us in making the world a better place.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;