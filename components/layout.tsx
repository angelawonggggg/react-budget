import Header from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  const isUserLoggedIn = children[1].props.user.isLoggedIn;
  const username = children[1].props.user.username;

  return (
    <div className="content">
      {isUserLoggedIn && <Header username={username} />}
      <div className="main">{children}</div>
    </div>
  );
}
