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
                    <p className="event-overview__meta-value">2025年5月25日（日）10:30〜11:30</p>
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
              <p className="event-catch__label">総合型選抜対策にもピッタリ！</p>
              <p className="lab-section__body">
                正解を求めるのではなく、議論を通じて新しい視点を発見する探求型イベントです。
                管理栄養士の多様な活躍について学びながら、食と栄養の力で幸せな未来を築く方法を一緒に考えてみましょう！
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
                  <h3 className="event-program__title">管理栄養士の仕事を知る！</h3>
                  <p className="event-program__desc">
                    病院・学校・企業・行政など、多彩なフィールドで活躍する管理栄養士の仕事をわかりやすく紹介します。
                    「管理栄養士って何をするの？」という疑問をこのセッションで解消しましょう。
                  </p>
                </div>
              </div>
              <div className="event-program__item">
                <div className="event-program__number">2</div>
                <div className="event-program__body">
                  <h3 className="event-program__title">グループワークで深堀り！</h3>
                  <p className="event-program__desc">
                    参加者同士でディスカッション。「食と栄養で社会をどう変えられるか」を自由に語り合います。
                    正解はありません。あなたの考えを聞かせてください。
                  </p>
                </div>
              </div>
              <div className="event-program__item">
                <div className="event-program__number">3</div>
                <div className="event-program__body">
                  <h3 className="event-program__title">現場経験者からのコメント！</h3>
                  <p className="event-program__desc">
                    実際の現場を知る管理栄養士・教員がグループワークにコメントします。
                    リアルな経験談から、未来のキャリアのヒントをつかみましょう。
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
                <h3>総合型選抜を検討している方</h3>
                <p>グループワークや議論の経験は総合型選抜対策に直結します。本番さながらの雰囲気を体験できます。</p>
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
