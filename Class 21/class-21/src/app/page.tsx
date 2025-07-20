import Link from "next/link";
import Header from "./components/Header";
import Image from "next/image";


export default function Home() {
  return (
<div>
  <Header />
  <h1 className="text-4xl font-extrabold text-center text-yellow-600 mt-5">Pak Wheels</h1>

  <div className="cars flex justify-center gap-4">
    <div className="corolla border w-28 h-24"><Image src={'/Corolla.webp'} alt="Toyotta Corolla" height={100} width={100}/></div>
    <div className="alto border w-28 h-24">a</div>
    <div className="civic border w-28 h-24"><Image src={"/Civic.webp"} alt="Civic" width={100} height={100}/></div>
    <div className="swift border w-28 h-24">c</div>
  </div>
  

</div>
  );
}
