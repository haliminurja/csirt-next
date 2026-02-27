export type HttpErrorInfo = {
  status: number;
  title: string;
  message: string;
  description: string;
};

type HttpErrorDefinition = Omit<HttpErrorInfo, 'status'>;

const HTTP_ERROR_DEFINITIONS: Record<number, HttpErrorDefinition> = {
  400: {
    title: 'Bad Request',
    message: 'Permintaan tidak valid.',
    description: 'Server menerima format request yang tidak sesuai. Periksa parameter, payload, atau header yang dikirim.',
  },
  401: {
    title: 'Unauthorized',
    message: 'Autentikasi dibutuhkan.',
    description: 'Anda harus login atau mengirim kredensial yang valid untuk mengakses resource ini.',
  },
  402: {
    title: 'Payment Required',
    message: 'Akses membutuhkan persyaratan pembayaran.',
    description: 'Kode ini bersifat reservasi dan biasanya dipakai untuk skenario layanan berbayar tertentu.',
  },
  403: {
    title: 'Forbidden',
    message: 'Akses ditolak.',
    description: 'Server memahami permintaan, tetapi kebijakan otorisasi tidak mengizinkan aksi ini.',
  },
  404: {
    title: 'Not Found',
    message: 'Halaman atau resource tidak ditemukan.',
    description: 'URL mungkin salah, konten sudah dipindahkan, atau resource memang tidak tersedia.',
  },
  405: {
    title: 'Method Not Allowed',
    message: 'Metode HTTP tidak diizinkan.',
    description: 'Endpoint ini ada, tetapi tidak menerima metode yang digunakan (misalnya POST pada endpoint GET).',
  },
  406: {
    title: 'Not Acceptable',
    message: 'Format respons tidak bisa dipenuhi.',
    description: 'Server tidak dapat menghasilkan format data sesuai header Accept yang diminta client.',
  },
  407: {
    title: 'Proxy Authentication Required',
    message: 'Autentikasi proxy diperlukan.',
    description: 'Client harus melakukan autentikasi terlebih dahulu pada proxy sebelum request dapat diproses.',
  },
  408: {
    title: 'Request Timeout',
    message: 'Permintaan melebihi batas waktu.',
    description: 'Server menutup koneksi karena request tidak selesai dalam jangka waktu yang ditentukan.',
  },
  409: {
    title: 'Conflict',
    message: 'Terjadi konflik data.',
    description: 'Request bertentangan dengan state resource saat ini, misalnya konflik versi saat update.',
  },
  410: {
    title: 'Gone',
    message: 'Resource sudah tidak tersedia permanen.',
    description: 'Konten pernah ada, tetapi sengaja dihapus dan tidak akan kembali pada URL ini.',
  },
  411: {
    title: 'Length Required',
    message: 'Header Content-Length wajib diisi.',
    description: 'Server menolak request karena ukuran payload tidak disertakan sesuai ketentuan endpoint.',
  },
  412: {
    title: 'Precondition Failed',
    message: 'Pra-kondisi request tidak terpenuhi.',
    description: 'Kondisi dalam header seperti If-Match atau If-Unmodified-Since gagal diverifikasi.',
  },
  413: {
    title: 'Payload Too Large',
    message: 'Ukuran payload terlalu besar.',
    description: 'Data yang dikirim melampaui batas maksimum yang diizinkan oleh server atau gateway.',
  },
  414: {
    title: 'URI Too Long',
    message: 'URI terlalu panjang.',
    description: 'Panjang URL melebihi batas yang dapat diproses server atau infrastruktur perantara.',
  },
  415: {
    title: 'Unsupported Media Type',
    message: 'Tipe media tidak didukung.',
    description: 'Server tidak mendukung Content-Type pada body request yang Anda kirim.',
  },
  416: {
    title: 'Range Not Satisfiable',
    message: 'Rentang data tidak valid.',
    description: 'Header Range meminta bagian resource yang tidak dapat dipenuhi oleh server.',
  },
  417: {
    title: 'Expectation Failed',
    message: 'Ekspektasi request tidak terpenuhi.',
    description: 'Server tidak dapat memenuhi nilai header Expect yang diminta client.',
  },
  418: {
    title: "I'm a Teapot",
    message: 'Permintaan ditolak oleh endpoint spesial.',
    description: 'Kode status non-standar untuk skenario humor/protokol eksperimental; tidak umum untuk produksi.',
  },
  421: {
    title: 'Misdirected Request',
    message: 'Request dikirim ke origin yang salah.',
    description: 'Server ini tidak dapat memproses request untuk host/authority yang diminta.',
  },
  422: {
    title: 'Unprocessable Content',
    message: 'Data valid secara format, tetapi gagal divalidasi.',
    description: 'Payload sudah bisa diparse, namun melanggar aturan bisnis atau validasi domain aplikasi.',
  },
  423: {
    title: 'Locked',
    message: 'Resource sedang dikunci.',
    description: 'Aksi ditolak karena resource berada pada state lock dan belum dapat dimodifikasi.',
  },
  424: {
    title: 'Failed Dependency',
    message: 'Aksi gagal karena dependensi sebelumnya gagal.',
    description: 'Request ini bergantung pada proses lain yang tidak berhasil diselesaikan.',
  },
  425: {
    title: 'Too Early',
    message: 'Request ditolak karena terlalu dini.',
    description: 'Server menolak memproses replay request yang berpotensi tidak aman pada tahap awal koneksi.',
  },
  426: {
    title: 'Upgrade Required',
    message: 'Client harus upgrade protokol.',
    description: 'Endpoint meminta penggunaan protokol lain, misalnya upgrade ke versi HTTP/TLS tertentu.',
  },
  428: {
    title: 'Precondition Required',
    message: 'Request membutuhkan pra-kondisi.',
    description: 'Server mensyaratkan conditional request untuk mencegah lost update pada resource.',
  },
  429: {
    title: 'Too Many Requests',
    message: 'Terlalu banyak permintaan.',
    description: 'Rate limit aktif. Kurangi frekuensi request dan ulangi sesuai kebijakan Retry-After.',
  },
  431: {
    title: 'Request Header Fields Too Large',
    message: 'Ukuran header request terlalu besar.',
    description: 'Satu atau beberapa header melebihi batas infrastruktur web/app gateway.',
  },
  451: {
    title: 'Unavailable For Legal Reasons',
    message: 'Konten dibatasi alasan hukum.',
    description: 'Akses ke resource diblokir untuk memenuhi kewajiban regulasi atau kebijakan legal.',
  },
  500: {
    title: 'Internal Server Error',
    message: 'Terjadi kesalahan internal server.',
    description: 'Sistem mengalami kondisi tak terduga saat memproses request. Tim teknis perlu investigasi lebih lanjut.',
  },
  501: {
    title: 'Not Implemented',
    message: 'Fitur belum diimplementasikan.',
    description: 'Server belum mendukung metode atau kemampuan yang dibutuhkan request ini.',
  },
  502: {
    title: 'Bad Gateway',
    message: 'Respons upstream tidak valid.',
    description: 'Gateway/proxy menerima respons yang tidak sesuai dari server upstream.',
  },
  503: {
    title: 'Service Unavailable',
    message: 'Layanan sedang tidak tersedia.',
    description: 'Aplikasi sedang overload, maintenance, atau dependency penting sedang down.',
  },
  504: {
    title: 'Gateway Timeout',
    message: 'Upstream melebihi batas waktu respons.',
    description: 'Gateway/proxy tidak menerima respons tepat waktu dari layanan backend.',
  },
  505: {
    title: 'HTTP Version Not Supported',
    message: 'Versi HTTP tidak didukung.',
    description: 'Server menolak versi protokol HTTP yang digunakan oleh client.',
  },
  506: {
    title: 'Variant Also Negotiates',
    message: 'Konfigurasi negosiasi konten bermasalah.',
    description: 'Server menemukan siklus/internal issue pada mekanisme variant dan content negotiation.',
  },
  507: {
    title: 'Insufficient Storage',
    message: 'Penyimpanan server tidak mencukupi.',
    description: 'Server tidak memiliki kapasitas storage yang cukup untuk menyelesaikan request.',
  },
  508: {
    title: 'Loop Detected',
    message: 'Terjadi loop saat memproses request.',
    description: 'Server mendeteksi dependensi berulang yang menyebabkan loop tanpa akhir.',
  },
  510: {
    title: 'Not Extended',
    message: 'Ekstensi request wajib tidak terpenuhi.',
    description: 'Server memerlukan ekstensi/protokol tambahan yang tidak disediakan client.',
  },
  511: {
    title: 'Network Authentication Required',
    message: 'Autentikasi jaringan diperlukan.',
    description: 'Client harus terautentikasi ke jaringan (misalnya captive portal) sebelum akses internet penuh.',
  },
};

export const SUPPORTED_HTTP_ERROR_CODES = Object.freeze(
  Object.keys(HTTP_ERROR_DEFINITIONS)
    .map((status) => Number(status))
    .sort((a, b) => a - b),
);

export function getHttpErrorInfo(status: number): HttpErrorInfo | null {
  if (!Number.isInteger(status)) {
    return null;
  }

  const definition = HTTP_ERROR_DEFINITIONS[status];
  if (!definition) {
    return null;
  }

  return {
    status,
    ...definition,
  };
}

export function mustGetHttpErrorInfo(status: number): HttpErrorInfo {
  const errorInfo = getHttpErrorInfo(status);

  if (!errorInfo) {
    throw new globalThis.Error(`HTTP ${status} definition is missing.`);
  }

  return errorInfo;
}
