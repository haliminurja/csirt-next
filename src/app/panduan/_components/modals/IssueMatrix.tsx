export interface IssueMatrixItem {
  kondisi: string;
  indikasi: string;
  dampak: string;
  responCepat: string;
  pencegahan: string;
}

interface IssueMatrixProps {
  title?: string;
  items: IssueMatrixItem[];
}

export default function IssueMatrix({
  title = 'Kondisi Masalah dan Tindakan',
  items,
}: IssueMatrixProps) {
  return (
    <div className="space-y-3">
      <h4 className="font-bold text-slate-800">{title}</h4>
      <div className="space-y-3">
        {items.map((item) => (
          <article
            key={item.kondisi}
            className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <p className="text-sm font-bold text-slate-900">{item.kondisi}</p>
            <div className="mt-2 space-y-1 text-xs text-slate-600">
              <p><span className="font-semibold text-slate-800">Indikasi:</span> {item.indikasi}</p>
              <p><span className="font-semibold text-slate-800">Dampak:</span> {item.dampak}</p>
              <p><span className="font-semibold text-slate-800">Respon Cepat:</span> {item.responCepat}</p>
              <p><span className="font-semibold text-slate-800">Pencegahan:</span> {item.pencegahan}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
