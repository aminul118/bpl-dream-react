import PropTypes from "prop-types";

export default function ToggleBar({
  handleAvailable,
  handleSelected,
  activeView,
  selectedCount, // New prop for selected count
}) {
  // Set the title conditionally based on the active view
  const title =
    activeView === "selected" ? `Selected: ${selectedCount}/6` : "Available";

  return (
    <div className="py-14 flex justify-between items-center">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="space-x-8">
        <button
          onClick={handleAvailable}
          className={`btn-free-credit ${
            activeView === "available" ? "active" : ""
          }`}
          aria-pressed={activeView === "available"}
          tabIndex={0}
        >
          Available
        </button>
        <button
          onClick={handleSelected}
          className={`btn-free-credit ${
            activeView === "selected" ? "active" : ""
          }`}
          aria-pressed={activeView === "selected"}
          tabIndex={0}
        >
          Selected
        </button>
      </div>
    </div>
  );
}

ToggleBar.propTypes = {
  handleAvailable: PropTypes.func.isRequired,
  handleSelected: PropTypes.func.isRequired,
  activeView: PropTypes.oneOf(["available", "selected"]).isRequired,
  selectedCount: PropTypes.number.isRequired, // New prop type for selected count
};
