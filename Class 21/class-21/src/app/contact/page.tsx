import Link from "next/link";
import Header from "../components/Header";

export default function contact() {
  return (
    <div>
      <Header />
      <p>
        Hi, This is our Contact Us Page, and Thankyou for visiting us on our
        contact us page.
      </p>
      <Link href={"/"} className="text-blue-800 underline">Back to Home Page</Link>
    </div>
  );
}
