interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  subText?: string;
  color?: 'blue' | 'green' | 'purple' | 'pink';
}

const FeatureCard = ({ icon, title, description, subText, color = 'blue' }: FeatureCardProps) => {
  const colorClasses = {
    blue: 'from-brand-blue/10 to-brand-blue/5 border-brand-blue/20',
    green: 'from-brand-green/10 to-brand-green/5 border-brand-green/20',
    purple: 'from-brand-purple/10 to-brand-purple/5 border-brand-purple/20',
    pink: 'from-brand-pink/10 to-brand-pink/5 border-brand-pink/20'
  };

  const iconBgClasses = {
    blue: 'bg-brand-blue',
    green: 'bg-brand-green', 
    purple: 'bg-brand-purple',
    pink: 'bg-brand-pink'
  };

  return (
    <div className={`p-8 rounded-2xl border bg-gradient-to-br ${colorClasses[color]} hover:shadow-lg hover:scale-[1.03] transition-all duration-300 group cursor-pointer`}>
      <div className={`w-16 h-16 ${iconBgClasses[color]} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
        <span className="text-2xl text-white">{icon}</span>
      </div>
      
      <h3 className="text-2xl font-bold mb-4 text-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed mb-4">{description}</p>
      {subText && (
        <div className="pt-4 border-t border-border/50">
          <p className="text-sm text-muted-foreground/80 italic">{subText}</p>
        </div>
      )}
    </div>
  );
};

export default FeatureCard;