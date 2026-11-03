import FormKontak from "@/components/FormKontak";

export const metadata = {
  title: "Kontak",
  description:
    "Hubungi M. Iksanuddin melalui form kontak, email, atau GitHub.",
};

export default function Kontak() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold text-utama dark:text-sky-200 md:text-4xl">
        Hubungi Saya
      </h1>

      <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
        Punya pertanyaan atau ingin bekerja sama? Isi form berikut.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:col-span-2">
          <FormKontak />
        </section>
        <div>
          <div className="h-full rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="font-bold text-utama dark:text-sky-200">
              Temukan Saya di
            </h2>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="https://github.com/muhammadiksannnn1348-pixel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-aksen hover:underline"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="mailto:muhammadiksan1348@gmail.com"
                  className="text-aksen hover:underline"
                >
                  Email Saya
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
