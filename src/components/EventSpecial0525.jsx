import { ArrowLeft, Calendar, MapPin, Users, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
});

export default function EventSpecial0525() {
  return (
    <div className="lab-page">
      <div className="container">
        <motion.div
          className="lab-page__header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <a href="/" className="lab-page__back-link">
            <ArrowLeft size={16} />
            <span>トップページに戻る</span>
          </a>
          <p className="lab-page__eyebrow">十文字学園女子大学 食物栄養学科・学科特別イベント</p>
          <h1 className="lab-page__title">管理栄養士について考える<br />探求型イベント</h1>
          <p className="lab-page__subtitle">食と栄養で未来をデザイン</p>
        </motion.div>

        <div className="lab-page__content">

          {/* イベント概要カード */}
          <motion.section className="lab-section event-overview" {...fadeUp(0)}>
            <div className="event-overview__card">
              <div className="event-overview__badge">参加費 無料</div>
              <div className="event-overview__meta">
                <div className="event-overview__meta-item">
                  <Calendar size={18} className="event-overview__icon" />
                  <div>
                    <p className="event-overview__meta-label">日時</p>
                    <p className="event-overview__meta-value">2026年5月31日（日）10:30〜11:30</p>
                    <p className="event-overview__meta-sub">開場 10:00</p>
                  </div>
                </div>
                <div className="event-overview__meta-item">
                  <MapPin size={18} className="event-overview__icon" />
                  <div>
                    <p className="event-overview__meta-label">場所</p>
                    <p className="event-overview__meta-value">十文字学園女子大学</p>
                  </div>
                </div>
                <div className="event-overview__meta-item">
                  <Users size={18} className="event-overview__icon" />
                  <div>
                    <p className="event-overview__meta-label">対象</p>
                    <p className="event-overview__meta-value">食や栄養・管理栄養士に興味がある高校生</p>
                    <p className="event-overview__meta-sub">保護者の方も参加OK</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* キャッチコピー */}
          <motion.section className="lab-section" {...fadeUp(0.1)}>
            <div className="event-catch">
              <p className="event-catch__label">総合型選抜・学校推薦型選抜対策に！</p>
              <p className="lab-section__body">
                昨年も多くの高校生が参加し、進路決定や入試準備に活用した大好評のイベントです。
                管理栄養士の多様な活躍について学びながら、自分自身の未来をデザインしてみませんか？
                面接や小論文のヒントも満載の内容でお届けします！
              </p>
            </div>
          </motion.section>

          {/* プログラム */}
          <motion.section className="lab-section" {...fadeUp(0.15)}>
            <h2 className="lab-section__title">イベント内容</h2>
            <div className="event-program">
              <div className="event-program__item">
                <div className="event-program__number">1</div>
                <div className="event-program__body">
                  <h3 className="event-program__title">管理栄養士の活躍を知る！</h3>
                  <p className="event-program__desc">
                    病院・学校・企業・行政など、多彩なフィールドで活躍する管理栄養士の「今」をわかりやすく紹介します。
                    「管理栄養士って何をするの？」という基本から、意外な活躍の場まで、最新のキャリア像を提示します。
                  </p>
                </div>
              </div>
              <div className="event-program__item">
                <div className="event-program__number">2</div>
                <div className="event-program__body">
                  <h3 className="event-program__title">管理栄養士の未来を考える！</h3>
                  <p className="event-program__desc">
                    食と栄養の力で、社会をどう幸せに変えられるか。
                    これからの時代に求められる管理栄養士の役割や、食の未来について一緒に考えてみましょう。
                    自分の考えを整理するプロセスが、そのまま入試対策にもつながります。
                  </p>
                </div>
              </div>
              <div className="event-program__item">
                <div className="event-program__number">3</div>
                <div className="event-program__body">
                  <h3 className="event-program__title">入試に役立つヒントが満載！</h3>
                  <p className="event-program__desc">
                    イベントを通じて得られる気づきは、面接での受け答えや小論文のテーマ設定にそのまま活かせる貴重な素材になります。
                    食物栄養学科での学びの深さを体感しながら、自信を持って入試に臨める準備を始めましょう。
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* 対象者 */}
          <motion.section className="lab-section" {...fadeUp(0.2)}>
            <h2 className="lab-section__title">こんな方におすすめ</h2>
            <div className="lab-section__grid">
              <div className="lab-section__card">
                <h3>食や栄養に興味がある高校生</h3>
                <p>管理栄養士という仕事に少しでも興味があれば大歓迎。まずは「知る」ところから始めましょう。</p>
              </div>
              <div className="lab-section__card">
                <h3>面接・小論文対策をしたい方</h3>
                <p>管理栄養士の専門性や社会貢献について深く考える経験は、入試のあらゆる場面であなたの強みになります。</p>
              </div>
              <div className="lab-section__card">
                <h3>保護者の方</h3>
                <p>管理栄養士という職業・食物栄養学科での学びをより深く知りたい保護者の方も歓迎しています。</p>
              </div>
            </div>
          </motion.section>

          {/* 参加申込 */}
          <motion.section className="lab-section" {...fadeUp(0.25)}>
            <h2 className="lab-section__title">参加のご案内</h2>
            <div className="event-cta">
              <div className="event-cta__info">
                <p className="event-cta__free">参加費：無料</p>
                <p className="lab-section__body">
                  事前登録をしていただくと当日がスムーズです。フライヤーに掲載のQRコードからご登録ください。
                  追加情報は学科公式インスタグラム（@jumonji_shokuei）でも随時発信しています。
                </p>
              </div>
              <div className="event-cta__contact">
                <Mail size={16} />
                <span>お問い合わせ：</span>
                <a href="mailto:iimura@jumonji-u.ac.jp" className="event-cta__mail">
                  iimura@jumonji-u.ac.jp
                </a>
              </div>
            </div>
          </motion.section>

        </div>
      </div>
    </div>
  );
}
