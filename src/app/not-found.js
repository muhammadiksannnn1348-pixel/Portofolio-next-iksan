export default function NotFound() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center text-center">
            <h1 className="text-6xl font-bold text-center text-aksen md:text-4-xl">
                404
            </h1>

            <h2 className="mt-4 text-2xl font-semibold text-utama dark:text-sky-200">
                Halaman tidak di temukan
            </h2>

            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
                Alamat yang kamu buka tidak ada atau sudah dipindahkan.
            </p>

            <a href="/" className="mt-6 rounded-lg bg-utama px-5 py-2 text-white hover:opacity-80">
                Kembali ke Beranda
            </a>
        </main>
    );
}