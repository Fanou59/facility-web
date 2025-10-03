import { introCv } from "@/data/Intro-cv";
import Image from "next/image";

export default async function ProfilSection() {
  const user = await prisma.user.findFirst();
  if (!user) return null;

  return (
    <section className="container px-6 flex flex-col md:flex-row items-center justify-center gap-12 py-16 md:py-24">
      <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden flex-shrink-0 p-3">
        <Image
          className="w-full h-full scale-150 object-cover"
          src="/assets/images/Profil-steph.png"
          height={400}
          width={400}
          alt="photo de stéphane guery"
        />
      </div>
      <div className="text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
          {user.firstName} {user.lastName}
        </h2>
        <h3 className="mt-2 text-xl md:text-2xl text-orange-500 font-semibold">
          {introCv.actualJob}
        </h3>
        <p className="mt-4 text-gray-600 max-w-2xl">{introCv.presentation}</p>
      </div>
    </section>
  );
}
