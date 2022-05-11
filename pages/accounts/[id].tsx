import { useRouter } from "next/router";

export default function Account() {
  const router = useRouter();
  const { id } = router.query;

  return <div>Account: {id}</div>;
}
