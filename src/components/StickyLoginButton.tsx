interface StickyLoginButtonProps {
  viewMode: 'ngo' | 'volunteer';
  isAtBottom: boolean;
}

const StickyLoginButton = ({ viewMode, isAtBottom }: StickyLoginButtonProps) => {
  const isNgo = viewMode === 'ngo';
  
  const buttonConfig = {
    ngo: {
      text: 'Go to Dashboard',
      href: '/ngo/login',
      gradient: 'from-brand-blue to-brand-green'
    },
    volunteer: {
      text: 'Join the Community',
      href: '/volunteer/login', 
      gradient: 'from-brand-purple to-brand-pink'
    }
  };

  const config = buttonConfig[viewMode];

  return (
    <div 
      className={`transition-all duration-300 ${
        isAtBottom 
          ? 'relative' 
          : 'fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50'
      }`}
    >
      <a
        href={config.href}
        className={`inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r ${config.gradient} rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl ${
          !isAtBottom ? 'animate-pulse' : ''
        }`}
      >
        {config.text}
        <span className="ml-2">{isNgo ? '→' : '🚀'}</span>
      </a>
    </div>
  );
};

export default StickyLoginButton;