// Definición del componente ProductColorCircle
function ProductColorCircle({ color }) {
    return (
      <div
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: color,
          border: '1px solid #ccc',
          cursor: 'pointer',
        }}
      />
    );
  }