import Kartu from "@/components/Kartu";

const hobi = [
    { nama: "Berlari" },
    { nama: "Berenang" },
    { nama: "Bermain game" },
    { nama: "Desain poster" },
    { nama: "Editing video" },
];

const citacita = [
    { deskripsi: "Korps Brimob Polri" },
    { deskripsi: "Masuk Universitas STIN/ITB" },
    { deskripsi: "Menjadi Programer Frontend Dev" },
];

const jadwal = [
    { hari: "Senin", waktu: "19.00 - 21.00", kegiatan: "Belajar Modul Next.js" },
    { hari: "Selasa", waktu: "19.00 - 21.30", kegiatan: "Merangkum Modul Next.js" },
    { hari: "Rabu", waktu: "19.00 - 23.00", kegiatan: "Mengerjakan Praktik Next.js" },
];

export const metadata = {
    title: "Tentang",
    description: "Cerita, hobi, cita-cita, dan jadwal belajar M. Iksanuddin.",
};

export default function Tentang() {
    return (
        <main className="mx-auto max-w-5xl px-4 py-10 space-y-6">
            <h1 className="text-3xl font-bold text-utama md:text-4xl">
                Tentang Saya
            </h1>

            {/* Tentang */}
            <Kartu judul="Perkenalan" className="w-full rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <p className="text-utama">
                    Saya tinggal di Kota Pasuruan dan senang mencoba hal baru di dunia teknologi. Saya ingin bisa membuat website yang bermanfaat untuk sekolah dan UMKM di sekitar rumah.
                </p>
            </Kartu>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {/* Hobi */}
                <Kartu judul="Hobi" className="w-full rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                    <ul className="list-disc space-y-2 pl-5">
                        {hobi.map((item) => (
                            <li key={item.nama} className="text-utama">
                                {item.nama}
                            </li>
                        ))}
                    </ul>
                </Kartu>

                {/* Cita-Cita */}
                <Kartu judul="Cita-Cita" className="w-full rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                    <p className="text-gray-700 mb-2">Dari cita-cita saya, ada 3 plan pilihan:</p>
                    <ul className="list-decimal space-y-2 pl-5">
                        {citacita.map((item, index) => (
                            <li key={index} className="text-utama">
                                {item.deskripsi}
                            </li>
                        ))}
                    </ul>
                </Kartu>
            </div>

            {/* Jadwal Belajar */}
            <div className="w-full">
                <Kartu judul="Jadwal Belajar" className="w-full rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-utama text-white">
                                    <th className="p-3">Hari</th>
                                    <th className="p-3">Waktu</th>
                                    <th className="p-3">Kegiatan</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                {jadwal.map((item) => (
                                    <tr key={item.hari} className="border-b border-gray-200 hover:bg-gray-50">
                                        <td className="p-3 font-medium">{item.hari}</td>
                                        <td className="p-3">{item.waktu}</td>
                                        <td className="p-3">{item.kegiatan}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Kartu>
            </div>
        </main>
    );
}