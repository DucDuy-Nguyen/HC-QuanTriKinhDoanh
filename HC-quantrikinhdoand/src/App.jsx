import './App.css'

const reasons = [
  'Tư duy quản lý hiện đại',
  'Kỹ năng lãnh đạo và ra quyết định',
  'Hiểu vận hành doanh nghiệp',
  'Cơ hội nghề nghiệp rộng mở',
]

const subjects = [
  'Nguyên lý quản trị',
  'Marketing căn bản',
  'Quản trị nhân sự',
  'Quản trị tài chính',
  'Khởi nghiệp kinh doanh',
  'Chiến lược doanh nghiệp',
]

const careers = [
  'Chuyên viên kinh doanh',
  'Chuyên viên quản lý dự án',
  'Nhân viên phát triển thị trường',
  'Chuyên viên nhân sự',
  'Chuyên viên vận hành',
  'Quản lý cửa hàng/chi nhánh',
  'Business Analyst',
  'Founder/Startup Owner',
]

const timeline = [
  'Khám phá năng lực bản thân',
  'Hiểu ngành Quản trị Kinh doanh',
  'Đăng ký tư vấn cùng VHU',
]

function CheckIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 6 9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SectionHeading({ eyebrow, title, description, dark = false }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className={`text-sm font-bold uppercase tracking-[0.18em] ${dark ? 'text-sky-200' : 'text-sky-700'}`}>
        {eyebrow}
      </p>
      <h2 className={`mt-3 text-3xl font-extrabold md:text-4xl ${dark ? 'text-white' : 'text-slate-950'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-7 md:text-lg ${dark ? 'text-sky-100' : 'text-slate-600'}`}>
          {description}
        </p>
      )}
    </div>
  )
}

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-50 text-slate-800">
      <section className="relative isolate bg-gradient-to-br from-sky-950 via-blue-800 to-cyan-700 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.22),transparent_32%),radial-gradient(circle_at_84%_24%,rgba(14,165,233,0.32),transparent_28%)]" />
        <div className="mx-auto grid min-h-[92svh] max-w-7xl items-center gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[1.06fr_0.94fr] lg:px-10">
          <div className="max-w-4xl pt-8 lg:pt-0">
            <div className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold shadow-lg shadow-sky-950/20 backdrop-blur">
              Đại học Văn Hiến VHU
            </div>
            <h1 className="mt-7 text-4xl font-black leading-tight text-white md:text-6xl lg:text-7xl">
              Khám phá ngành Quản trị Kinh doanh tại Đại học Văn Hiến
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-sky-50 md:text-xl">
              Trang bị tư duy quản lý, chiến lược kinh doanh và năng lực lãnh đạo để sẵn sàng phát triển trong môi trường doanh nghiệp hiện đại.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#dang-ky"
                className="group inline-flex min-h-12 items-center justify-center rounded-2xl bg-white px-7 py-3 text-base font-bold text-blue-800 shadow-xl shadow-sky-950/20 transition duration-300 hover:-translate-y-1 hover:bg-sky-50 hover:shadow-2xl"
              >
                Đăng ký tư vấn ngay
                <span className="ml-2 transition duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#lo-trinh"
                className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-white/30 px-7 py-3 text-base font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                Xem lộ trình
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl pb-6 lg:pb-0">
            <div className="rounded-[2rem] border border-white/18 bg-white/12 p-5 shadow-2xl shadow-sky-950/30 backdrop-blur-md">
              <div className="rounded-[1.5rem] bg-white p-5 text-slate-900 shadow-xl">
                <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4">
                  <div>
                    <p className="text-sm font-bold text-sky-700">Business Administration</p>
                    <p className="mt-1 text-2xl font-black text-slate-950">VHU</p>
                  </div>
                  <div className="rounded-2xl bg-gradient-to-br from-sky-600 to-blue-800 px-4 py-3 text-right text-white">
                    <p className="text-xs font-semibold uppercase">Ngành học</p>
                    <p className="text-lg font-black">QT KD</p>
                  </div>
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {reasons.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-sky-100 bg-sky-50 p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-md"
                    >
                      <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-blue-700 text-white">
                        <CheckIcon />
                      </div>
                      <p className="font-bold leading-6 text-slate-900">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Lý do lựa chọn"
            title="Vì sao chọn Quản trị Kinh doanh tại VHU?"
            description="Chương trình hướng đến năng lực quản trị thực tiễn, giúp người học nhìn doanh nghiệp như một hệ thống và tự tin tham gia vào các vai trò kinh doanh."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {reasons.map((item, index) => (
              <article
                key={item}
                className="rounded-3xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-200/70 transition duration-300 hover:-translate-y-2 hover:border-sky-200 hover:shadow-xl"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-blue-800 text-lg font-black text-white">
                  {index + 1}
                </div>
                <h3 className="text-xl font-extrabold text-slate-950">{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-sky-50 to-white px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Chương trình học"
            title="Bạn sẽ học gì?"
            description="Các học phần cốt lõi giúp sinh viên xây nền tảng quản trị, tài chính, marketing, nhân sự, khởi nghiệp và chiến lược."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {subjects.map((item) => (
              <div
                key={item}
                className="group flex items-center gap-4 rounded-3xl border border-sky-100 bg-white p-5 shadow-md shadow-sky-100/80 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-sky-100 text-blue-800 transition duration-300 group-hover:bg-blue-700 group-hover:text-white">
                  <CheckIcon />
                </span>
                <p className="text-lg font-bold text-slate-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Định hướng tương lai"
            title="Cơ hội nghề nghiệp"
            description="Nền tảng quản trị kinh doanh mở ra nhiều lựa chọn nghề nghiệp trong doanh nghiệp, dự án, thị trường, nhân sự, vận hành và khởi nghiệp."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {careers.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-slate-100 bg-slate-50 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:bg-white hover:shadow-lg"
              >
                <p className="font-extrabold leading-7 text-slate-950">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="lo-trinh" className="bg-slate-950 px-5 py-20 text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Timeline lộ trình"
            title="Ba bước bắt đầu cùng VHU"
            description="Từ nhận diện năng lực cá nhân đến hiểu ngành học và kết nối tư vấn tuyển sinh."
            dark
          />
          <div className="grid gap-5 md:grid-cols-3">
            {timeline.map((item, index) => (
              <article
                key={item}
                className="rounded-3xl border border-white/10 bg-white/8 p-6 shadow-xl shadow-sky-950/20 transition duration-300 hover:-translate-y-2 hover:bg-white/12"
              >
                <div className="mb-5 inline-flex rounded-full bg-sky-400/15 px-4 py-2 text-sm font-bold text-sky-200">
                  Bước {index + 1}
                </div>
                <h3 className="text-2xl font-black text-white">{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="dang-ky" className="bg-gradient-to-br from-blue-800 via-sky-700 to-cyan-600 px-5 py-20 text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-black leading-tight md:text-5xl">
            Sẵn sàng bắt đầu hành trình trở thành nhà quản trị tương lai?
          </h2>
          <a
            href="mailto:tuyensinh@vhu.edu.vn"
            className="mt-9 inline-flex min-h-12 items-center justify-center rounded-2xl bg-white px-8 py-4 text-base font-black text-blue-800 shadow-xl shadow-sky-950/20 transition duration-300 hover:-translate-y-1 hover:bg-sky-50 hover:shadow-2xl"
          >
            Đăng ký tư vấn ngay
          </a>
        </div>
      </section>
    </main>
  )
}

export default App
