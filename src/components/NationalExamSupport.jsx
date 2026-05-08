const ITEMS = [
  {
    num: '01',
    title: '少人数チュートリアル',
    body: '少人数グループで教員が丁寧に指導。わからない点をすぐに解消できる環境を整えています。',
  },
  {
    num: '02',
    title: '弱点克服プログラム',
    body: '定期的な到達度テストで個人の弱点を把握し、オーダーメイドのカリキュラムで補強します。',
  },
  {
    num: '03',
    title: '模擬試験の定期実施',
    body: '本番を想定した模擬試験を年4回以上実施。試験慣れと時間管理の力を養います。',
  },
  {
    num: '04',
    title: '専任指導教員制度',
    body: '担当教員が4年間継続して学習状況をサポート。安心して勉強に取り組める体制です。',
  },
  {
    num: '05',
    title: '自習室・学習環境の整備',
    body: '専用自習室を完備。参考書・過去問集を自由に利用でき、集中して学べる環境を提供します。',
  },
  {
    num: '06',
    title: '個別メンタルサポート',
    body: '試験前の不安に寄り添うカウンセリング体制。精神面からも合格を後押しします。',
  },
]

export default function NationalExamSupport() {
  return (
    <section className="support" id="support">
      <div className="support__orb support__orb--1" aria-hidden />
      <div className="support__orb support__orb--2" aria-hidden />

      <div className="support__inner container">
        <div data-reveal>
          <p className="eyebrow">国試対策 / Exam Support</p>
          <h2 className="section-title">合格率96%を支える<br />6つのサポート体制</h2>
          <p className="support__subtitle">
            管理栄養士国家試験は難関ですが、本学科では手厚いサポート体制により、
            全国トップクラスの合格率を維持しています。
          </p>
        </div>

        <div className="support__grid">
          {ITEMS.map((item, i) => (
            <div
              key={i}
              className="support-item"
              data-reveal
              data-reveal-delay={String((i % 3) + 1)}
            >
              <p className="support-item__num">{item.num}</p>
              <h3 className="support-item__title">{item.title}</h3>
              <p className="support-item__body">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
