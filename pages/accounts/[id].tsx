import { useRouter } from "next/router";

export default function Account() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      Account: {id}
      <div>Transaction details:</div>
      <div>2022-05-05 Added $100 </div>
    </div>
  );
}
