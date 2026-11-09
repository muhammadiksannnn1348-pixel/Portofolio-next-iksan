import Hero from "@/components/Hero";
import SkillCard from "@/components/SkillCard";
import Kartu from "@/components/Kartu";
import ProyekCard from "@/components/ProyekCard";
import { proyek } from "@/data/proyek";
import Link from "next/link";


const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan GitHub", level: "Dasar" },
  { nama: "Desain poster dengan Canva", level: "Mahir" },
  { nama: "JavaScript", level: "Dasar" },
];

const proyekTerbaru = proyek.slice(-3);

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <main className="mx-auto max-w-5xl px-4 py-10 space-y-5">
        {/* Hero */}
        <Hero
          nama="M.Iksanuddin"
          tagline="Siswa kelas XI SMK, calon Junior Web Developer di Kelas Industri UBIG."
        />
        {/* Keahlian */}
        <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <h2 className="mb-4 text-2xl font-bold text-utama dark:text-sky-200">Keahlian</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {skills.map((skill) => (
              <SkillCard key={skill.nama} nama={skill.nama} level={skill.level} />
            ))}
          </div>
        </section>
        {/* Proyek Terbaru */}
        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-bold text-utama dark:text-sky-200">
            Proyek Terbaru
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {proyekTerbaru.map((item) => (
              <ProyekCard key={item.slug} proyek={item} />
            ))}
          </div>
          <Link href="/proyek" className="mt-6 inline-block rounded-lg bg-utama px-5 py-2 font-semibold text-white">
            Lihat semua proyek
          </Link>
        </section>
      </main>
    </div>
  );
}