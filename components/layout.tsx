import Header from "./header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="content">
      <Header />
      <div className="main">{children}</div>
    </div>
  );
}
