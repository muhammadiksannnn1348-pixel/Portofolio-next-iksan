import Hero from "@/components/Hero";
import SkillCard from "@/components/SkillCard";
import Kartu from "@/components/Kartu";
import HobiCard from "@/components/HobiCard";
import CitaCitaCard from "@/components/Cita-citaCard";
import JadwalBelajar from "@/components/JadwalBelajar";
import Footer from "@/components/Footer";

const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan GitHub", level: "Dasar" },
  { nama: "Desain poster dengan Canva", level: "Mahir" },
  { nama: "JavaScript", level: "Dasar" },
];

const hobi = [
  { nama: "Berlari" },
  { nama: "Berenang" },
  { nama: "bermain game" },
  { nama: "Desain poster" },
  { nama: "Editing video" },
];

const citaCita = [
  { deskripsi: "Menuntaskan Kelas Industri UBIG sampai 4 Semester" },
  { deskripsi: "Magang di Perusahaan Teknologi" },
  { deskripsi: "Bekerja sebagai Web Developer" },
];

const jadwal = [
  { hari: "Senin", waktu: "19.00 - 21.00", kegiatan: "Belajar Modul Next.js" },
  { hari: "Selasa", waktu: "19.00 - 21.30", kegiatan: "Merangkum Modul Next.js" },
  { hari: "Rabu", waktu: "19.00 - 23.00", kegiatan: "Mengerjakan Praktik Next.js" },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <main className="mx-auto max-w-5xl px-4 py-10 space-y-5">
        <Hero
          nama="M.Iksanuddin"
          tagline="Siswa kelas XI SMK, calon Junior Web Developer di Kelas Industri UBIG."
        />

        <Kartu judul="Tentang">
          <p className="text-gray-600">
            Saya tinggal di kota pasuruan dan senang mencoba hal baru di dunia teknologi. saya ingin bisa membuat website yang bermanfaat untuk sekolah dan UMKM di sekitar rumah
          </p>
        </Kartu>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
          <section className="w-full flex-1 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold text-utama">Hobi</h2>
            <ul className="list-disc space-y-2 pl-5">
              {hobi.map((item) => (
                <li key={item.nama} className="text-gray-700">
                  {item.nama}
                </li>
              ))}
            </ul>
          </section>
          <section className="w-full flex-1 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold text-utama">Cita-cita</h2>
            <p className="text-gray-700">Menjadi Full-Stack Web Developer. Langkah yang saya rencanakan : </p>
            <ul className="list-decimal space-y-2 pl-5">
              {citaCita.map((item, index) => (
                <li key={index} className="text-gray-700">
                  {item.deskripsi}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-utama">Keahlian</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {skills.map((skill) => (
              <SkillCard key={skill.nama} nama={skill.nama} level={skill.level} />
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-slate-800">
            Jadwal Belajar
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#1e293b] text-white">
                  <th className="p-3">Hari</th>
                  <th className="p-3">Waktu</th>
                  <th className="p-3">Kegiatan</th>
                </tr>
              </thead>

              <tbody className="text-sm text-slate-700">
                {jadwal.map((item) => (
                  <JadwalBelajar
                    key={item.hari}
                    hari={item.hari}
                    waktu={item.waktu}
                    kegiatan={item.kegiatan}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}