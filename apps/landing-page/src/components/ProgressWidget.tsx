const ProgressWidget = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-lg hover:scale-[1.03] hover:border-l-4 hover:border-l-orange-400 transition-all duration-300 cursor-pointer animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-semibold text-foreground">Progress Tracker</h4>
        <span className="text-lg">🏅</span>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Community Hero Badge</span>
          <span className="font-medium text-brand-purple">2/4 events</span>
        </div>
        
        <div className="w-full bg-muted rounded-full h-2">
          <div className="bg-gradient-to-r from-brand-purple to-brand-pink h-2 rounded-full transition-all duration-300" style={{ width: '50%' }}></div>
        </div>
        
        <p className="text-sm text-muted-foreground">
          You're <span className="font-medium text-brand-purple">2 events</span> away from unlocking the 
          <span className="font-medium"> 'Community Hero' </span>🏅 badge!
        </p>
      </div>
    </div>
  );
};

export default ProgressWidget;