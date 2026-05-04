

function Torii() {
  return (
    <svg
      viewBox="0 0 200 120"
      className="w-48 h-auto"
      fill="#8E2A20"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Torii"
    >
      {/* Toit (kasagi) - dépasse aux extrémités, avec biseaux aux coins inférieurs externes */}
      <polygon points="20,20 180,20 180,25 178,27 22,27 20,25" />

      {/* Traverse (nuki) - dépasse légèrement des piliers */}
      <rect x="36" y="30" width="128" height="6" />

      {/* Pilier gauche - commence SOUS le toit avec un gap */}
      <rect x="20" y="32" width="6" height="92" />

      {/* Pilier droit - commence SOUS le toit avec un gap */}
      <rect x="174" y="32" width="6" height="92" />
    </svg>
  );
}

export default Torii
