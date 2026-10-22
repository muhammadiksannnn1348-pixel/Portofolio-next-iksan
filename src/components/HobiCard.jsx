export default function HobiCard({ nama }) {
    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h3 className="text-lg font-semibold text-utama">{nama}</h3>
        </div>
    )
}