import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center text-center">
            <h1 className="text-6xl font-bold text-center text-aksen md:text-4xl">
                404
            </h1>
            <h2 className="mt-4 text-2xl font-semibold text-primary">
                Halaman tidak ditemukan
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
                Alamat yang kamu buka tidak ada atau sudah dipindahkan.
            </p>
            <Link href="/" className="mt-6 rounded-lg bg-primary px-5 py-2 text-primary-foreground hover:opacity-80">
                Kembali ke Beranda
            </Link>
        </main>
    );
}