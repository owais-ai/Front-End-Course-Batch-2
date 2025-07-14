import Link from "next/link";


export default function Home() {
  return (
<div>
  <h1>This is Our Class 21</h1>
  <p>In this class we will learn about Next.js</p>

  <p>Click down to Navigate to Contact us Page</p>
    <Link href={"/contact"} className="text-blue-800 underline">Contact Us</Link>
    <br />
    <Link href={"/about"} className="text-blue-800 underline">About-us</Link>

</div>
  );
}
