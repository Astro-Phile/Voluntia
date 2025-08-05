const MapViewWidget = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-lg hover:scale-[1.03] hover:border-l-4 hover:border-l-orange-400 transition-all duration-300 cursor-pointer animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-semibold text-foreground">Discover Opportunities Near You</h4>
        <span className="text-lg">🗺️</span>
      </div>
      
      <div className="relative bg-gradient-to-br from-brand-blue/10 to-brand-green/10 rounded-lg h-32 overflow-hidden">
        {/* Map Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-muted/30 to-muted/10"></div>
        
        {/* Map Pins */}
        <div className="absolute top-4 left-6">
          <div className="w-4 h-4 bg-brand-blue rounded-full border-2 border-white shadow-md animate-pulse"></div>
        </div>
        <div className="absolute top-8 right-8">
          <div className="w-4 h-4 bg-brand-green rounded-full border-2 border-white shadow-md animate-pulse"></div>
        </div>
        <div className="absolute bottom-6 left-12">
          <div className="w-4 h-4 bg-brand-purple rounded-full border-2 border-white shadow-md animate-pulse"></div>
        </div>
        <div className="absolute bottom-4 right-6">
          <div className="w-4 h-4 bg-brand-pink rounded-full border-2 border-white shadow-md animate-pulse"></div>
        </div>
        
        {/* Location Indicator */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-6 h-6 bg-orange-500 rounded-full border-4 border-white shadow-lg">
            <div className="w-full h-full bg-orange-500 rounded-full animate-ping opacity-75"></div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-sm text-muted-foreground">
          <span className="font-medium text-brand-blue">4 events</span> within 5km of your location
        </p>
      </div>
    </div>
  );
};

export default MapViewWidget;