interface StickyLoginButtonProps {
  viewMode: 'ngo' | 'volunteer';
  isAtBottom: boolean;
}

const StickyLoginButton = ({ viewMode, isAtBottom }: StickyLoginButtonProps) => {
  const loginUrl = viewMode === 'ngo' ? '/ngo/login' : '/volunteer/login';
  const buttonText = viewMode === 'ngo' ? 'NGO Login' : 'Volunteer Login';
  
  const baseClasses = "text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50";
  const gradientClasses = viewMode === 'ngo' 
    ? "bg-gradient-to-r from-brand-blue to-brand-green hover:scale-105"
    : "bg-gradient-to-r from-brand-purple to-brand-pink hover:scale-105";
  
  const sizeClasses = isAtBottom 
    ? "px-4 py-2 text-sm mx-auto mb-8 block"
    : "px-4 py-2 text-sm fixed bottom-6 left-1/2 transform -translate-x-1/2";

  return (
    <a 
      href={loginUrl}
      className={`${baseClasses} ${gradientClasses} ${sizeClasses}`}
    >
      {buttonText}
    </a>
  );
};

export default StickyLoginButton;