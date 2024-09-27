export default function Button({ children, btnEvent }) {  
  return (
    <button onClick={btnEvent} style={{ marginTop: "10px", padding: "10px" }}>
      {children}
    </button>
  );
}
