import FilterProyek from "@/components/FilterProyek";
import { proyek } from "@/data/proyek";

export const metadata = {
    title: "Proyek",
    description: "Daftar proyek HTML, CSS, dan JavaScript karya M.Iksanuddin.",
};

export default function DaftarProyek() {
    return (
        <main className="mx-auto w-full max-w-5xl px-4 py-10">
            <h1 className="text-3xl font-bold text-utama md:text-4xl">
                Proyek Saya
            </h1>
            <p className="mt-3 text-lg text-gray-700">
                Kumpuan hasil belajar saya di kelas Industri UBIG. Klik kartu utuk melihat detailnya.
            </p>

            <FilterProyek proyek={proyek} />
        </main>
    );
}