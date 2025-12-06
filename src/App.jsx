const App = () => {
  const colors = [
    { name: "base-100", className: "bg-base-100 text-base-content" },
    { name: "base-200", className: "bg-base-200 text-base-content" },
    { name: "base-300", className: "bg-base-300 text-base-content" },
    { name: "primary", className: "bg-primary text-primary-content" },
    { name: "secondary", className: "bg-secondary text-secondary-content" },
    { name: "accent", className: "bg-accent text-accent-content" },
    { name: "neutral", className: "bg-neutral text-neutral-content" },
    { name: "info", className: "bg-info text-info-content" },
    { name: "success", className: "bg-success text-success-content" },
    { name: "warning", className: "bg-warning text-warning-content" },
    { name: "error", className: "bg-error text-error-content" },
  ];

  return (
    <div className="p-10 space-y-8">
      <h1 className="text-3xl font-bold">🎨 LocalChefBazaar Theme Preview</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {colors.map((c) => (
          <div key={c.name} className={`card shadow-lg ${c.className}`}>
            <div className="card-body">
              <h2 className="card-title capitalize">{c.name}</h2>
              <p className="opacity-80">Class: {c.className}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
