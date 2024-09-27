export default function Button({ children, btnEvent, className }) {  
  return (
    <button className={className} onClick={btnEvent} style={{ marginTop: "10px", padding: "10px" }}>
      {children}
    </button>
  );
}
