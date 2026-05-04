
function KomorebiBackground() {
  return (
    <>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, rgb(45,74,53) 0%, rgb(26,41,32) 40%, rgb(74,109,82) 70%, rgb(31,48,36) 100%)",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "repeating-linear-gradient(45deg, transparent 0px, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 3px)",
          mixBlendMode: "multiply",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 60%, transparent 30%, rgba(0,0,0,0.35) 100%)",
        }}
      />

      <div
        className="absolute top-0 h-full"
        style={{
          left: "40%",
          width: "20%",
          background: "linear-gradient(rgba(243,234,215,0.4) 0%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />
      <div
        className="absolute top-0 h-full"
        style={{
          left: "60%",
          width: "15%",
          background: "linear-gradient(rgba(200,152,88,0.3) 0%, transparent 60%)",
          filter: "blur(15px)",
        }}
      />
    </>
  );
}

export default KomorebiBackground;
