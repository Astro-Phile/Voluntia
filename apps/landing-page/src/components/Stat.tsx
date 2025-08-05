interface StatProps {
  value: string;
  label: string;
  color?: 'blue' | 'green' | 'purple' | 'pink';
}

const Stat = ({ value, label, color = 'blue' }: StatProps) => {
  const colorClasses = {
    blue: 'text-brand-blue',
    green: 'text-brand-green',
    purple: 'text-brand-purple', 
    pink: 'text-brand-pink'
  };

  return (
    <div className="text-center group">
      <div className={`text-4xl md:text-5xl font-bold mb-2 ${colorClasses[color]} group-hover:scale-110 transition-transform duration-300`}>
        {value}
      </div>
      <div className="text-lg text-muted-foreground font-medium">
        {label}
      </div>
    </div>
  );
};

export default Stat;