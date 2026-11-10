const aliasGambar = {
    "/proyek/proyek-profil.png": "/proyek/profil.png",
    "/proyek/form-kontak.png": "/proyek/kontak.png",
    "/proyek/proyek-responsif.png": "/proyek/responsif.png",
};

export function gambarProyek(url) {
    const urlBersih = url?.trim();
    return aliasGambar[urlBersih] ?? urlBersih;
}

export function daftarFitur(value) {
    if (Array.isArray(value)) {
        return value;
    }
    if (typeof value !== "string" || !value.trim()) {
        return [];
    }

    try {
        const hasil = JSON.parse(value);
        if (Array.isArray(hasil)) {
            return hasil;
        }
    } catch {
        return value.split(/\r?\n/).map((fitur) => fitur.trim()).filter(Boolean);
    }

    return [value];
}
