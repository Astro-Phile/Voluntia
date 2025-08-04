const SuggestedEventWidget = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-semibold text-foreground">Suggested for You</h4>
        <span className="text-lg">🎯</span>
      </div>
      
      <div className="space-y-4">
        <div className="border border-border/50 rounded-lg p-4 hover:bg-muted/20 transition-colors cursor-pointer">
          <div className="flex items-start justify-between mb-2">
            <h5 className="font-medium text-foreground text-sm">Beach Cleanup Drive</h5>
            <div className="flex gap-1">
              <span className="px-2 py-1 bg-brand-green/10 text-brand-green text-xs rounded-full">Environment</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mb-2">Organized by Marine Conservation Society</p>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>📅 This Saturday</span>
            <span>📍 2.3 km away</span>
          </div>
        </div>
        
        <div className="border border-border/50 rounded-lg p-4 hover:bg-muted/20 transition-colors cursor-pointer">
          <div className="flex items-start justify-between mb-2">
            <h5 className="font-medium text-foreground text-sm">Math Tutoring Session</h5>
            <div className="flex gap-1">
              <span className="px-2 py-1 bg-brand-blue/10 text-brand-blue text-xs rounded-full">Education</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mb-2">Organized by Local Community Center</p>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>📅 Next Week</span>
            <span>📍 1.8 km away</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuggestedEventWidget;