import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header style={{ padding: "16px 20px", borderBottom: "1px solid #ddd" }}>
        <nav style={{ display: "flex", gap: 12 }}>
          <Link to="/">Home</Link>
          <Link to="/legal">Legal</Link>
        </nav>
      </header>

      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>

      <footer style={{ padding: "16px 20px", borderTop: "1px solid #ddd" }}>
        <small>© {new Date().getFullYear()} Hunt Technology Group</small>
      </footer>
    </>
  );
}
