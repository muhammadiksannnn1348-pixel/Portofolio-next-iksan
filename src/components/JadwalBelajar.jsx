export default function JadwalBelajar({ hari , waktu , kegiatan }) {
    return (
        <tr className="border-b border-gray-200 text-utama">
            <td className="p-3">{hari}</td>
            <td className="p-3">{waktu}</td>
            <td className="p-3">{kegiatan}</td>
        </tr>
    )   
}