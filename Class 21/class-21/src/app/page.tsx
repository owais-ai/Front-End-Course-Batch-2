import Link from "next/link";
import Header from "./components/Header";
import Image from "next/image";



export default function Home() {
  return (
<div>
  <Header />
  <h1 className="text-4xl font-extrabold text-center text-yellow-600 mt-5">Pak Wheels</h1>

  <div className="cars flex flex-wrap justify-center gap-10">
    <div className="corolla border"><Image src="/corolla.jpg" alt="Corolla" height={100} width={100} className="w-48 "/></div>
    <div className="alto border w-64 h-64">a</div>
    <div className="civic border w-64 h-64"><Image src={"/Civic.webp"} alt="Civic" width={500} height={500}/></div>
    <div className="swift border w-64 h-64">c</div>
  </div>
  

</div>
  );
}
