import { ArrowRight, MapPin, GraduationCap, Sparkles, Building2, Users } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Career from './Career'

/* ------------------------------------------------------------------
   2025年3月卒業生 127名の進路実績データ
   出典：学校基本調査用業種コード集計（学外公開用に集約）
------------------------------------------------------------------ */

// 業種別の人数（多い順）
const BREAKDOWN = [
  { name: '保育園',                       count: 25 },
  { name: '調剤薬局・ドラッグストア',     count: 21 },
  { name: '病院・クリニック',             count: 18 },
  { name: '給食受託会社',                 count: 14 },
  { name: '食品メーカー・関連企業',       count: 11 },
  { name: '一般企業（金融・物流ほか）',   count: 11 },
  { name: '高齢者・福祉施設',             count:  7 },
  { name: 'スーパー・百貨店・小売',       count:  5 },
  { name: '公務員・自衛官',               count:  4 },
  { name: '歯科クリニック',               count:  4 },
  { name: '進学・留学・その他',           count:  7 },
]

// 勤務地（都県別、未定除く）
const REGIONS = [
  { name: '東京都', count: 50 },
  { name: '埼玉県', count: 43 },
  { name: '千葉県', count:  8 },
  { name: '神奈川県', count:  6 },
  { name: '栃木県', count:  5 },
  { name: 'その他（北関東・全国）', count:  8 },
]

// 4年間の就職サポート
const SUPPORT_STEPS = [
  {
    year: '1年次',
    title: '基礎づくりとキャリア意識',
    body: '学びの土台を作りながら、ガイダンスや先輩との交流を通して「どんな栄養士になりたいか」を少しずつ言葉にしていきます。',
  },
  {
    year: '2年次',
    title: '実習・現場体験',
    body: '給食経営管理実習や臨地実習で、はじめての「現場」を経験。職種のリアルを知り、自分の向き不向きを確かめる時期です。',
  },
  {
    year: '3年次',
    title: '進路選択と対策のはじまり',
    body: '個別の進路相談を本格化し、国家試験対策と就職活動の準備を並行して進めます。模擬試験や業界研究会も実施。',
  },
  {
    year: '4年次',
    title: '内定・国試・卒業研究',
    body: '就職活動・国家試験対策・卒業研究の三本柱。教員が一人ひとりの状況に合わせて個別フォローします。',
  },
]


/* ------------------------------------------------------------------
   水平バーのコンポーネント
------------------------------------------------------------------ */
function HBar({ label, count, total, accent = 'var(--moss, #6b7d52)', delay = 0 }) {
  const pct = (count / total) * 100
  return (
    <div style={{ marginBottom: '14px' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: '6px',
        fontSize: '13px',
      }}>
        <span style={{ color: 'var(--ink, #2b2b2b)', letterSpacing: '0.02em' }}>{label}</span>
        <span style={{ color: 'var(--stone, #8a8175)', fontSize: '12px', fontVariantNumeric: 'tabular-nums' }}>
          {count}名 <span style={{ opacity: 0.6 }}>／ {pct.toFixed(1)}%</span>
        </span>
      </div>
      <div style={{
        height: '6px',
        background: 'rgba(0,0,0,0.05)',
        borderRadius: '3px',
        overflow: 'hidden',
      }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 + delay, ease: [0.22, 1, 0.36, 1] }}
          style={{
            height: '100%',
            background: accent,
            borderRadius: '3px',
          }}
        />
      </div>
    </div>
  )
}


/* ------------------------------------------------------------------
   メインコンポーネント
------------------------------------------------------------------ */
export default function CareerPage() {
  const TOTAL = 127
  const NUTRITION = 84   // 栄養士・管理栄養士として就職
  const GENERAL   = 36   // 一般職
  const OTHER     = 7    // 進学・留学・就活継続等

  return (
    <div className="career-page">
      {/* 既存の Career をそのまま冒頭に活用 */}
      <Career summary={false} />

      {/* ─────────────────────────────────────────
          ① 数字で見る進路
         ───────────────────────────────────────── */}
      <section style={{ padding: '80px 0', background: 'var(--cream, #faf8f3)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '56px' }}
          >
            <p className="eyebrow">Numbers</p>
            <h2 style={{ fontSize: '28px', letterSpacing: '0.04em', marginTop: '8px' }}>
              数字で見る、卒業後のリアル
            </h2>
            <p style={{ fontSize: '13px', color: 'var(--stone)', marginTop: '16px', lineHeight: 1.9 }}>
              2025年3月卒業生 127名の進路実績にもとづく集計です。
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '24px',
            maxWidth: '900px',
            margin: '0 auto',
          }}>
            {[
              { num: '127', unit: '名',  label: '2025年3月卒業生', icon: <Users size={18} /> },
              { num: '66', unit: '%',   label: '栄養士・管理栄養士として就職', icon: <GraduationCap size={18} /> },
              { num: '73', unit: '%',   label: '東京・埼玉エリアで勤務', icon: <MapPin size={18} /> },
              { num: '10', unit: '分野',label: 'にわたる就職先業種', icon: <Building2 size={18} /> },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  background: '#fff',
                  padding: '32px 24px',
                  borderRadius: '4px',
                  textAlign: 'center',
                  border: '1px solid rgba(0,0,0,0.06)',
                }}
              >
                <div style={{ color: 'var(--stone)', display: 'flex', justifyContent: 'center', marginBottom: '14px' }}>
                  {s.icon}
                </div>
                <div style={{
                  fontSize: '44px',
                  fontWeight: 300,
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                  color: 'var(--ink, #2b2b2b)',
                }}>
                  {s.num}
                  <span style={{ fontSize: '18px', marginLeft: '4px', color: 'var(--stone)' }}>{s.unit}</span>
                </div>
                <p style={{
                  fontSize: '12px',
                  color: 'var(--stone)',
                  marginTop: '12px',
                  letterSpacing: '0.04em',
                  lineHeight: 1.6,
                }}>
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          ② 進路の内訳（栄養士 vs 一般職）
         ───────────────────────────────────────── */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '40px' }}
          >
            <p className="eyebrow">Breakdown</p>
            <h2 style={{ fontSize: '24px', letterSpacing: '0.04em', marginTop: '8px' }}>
              進路の構成
            </h2>
            <p style={{ fontSize: '13px', color: 'var(--stone)', marginTop: '14px', lineHeight: 1.9, maxWidth: '640px' }}>
              「管理栄養士」だけが進路ではありません。
              栄養の学びを土台にして、医療・福祉・小売・食品・サービスなど、
              さまざまな業界で卒業生が活躍しています。
            </p>
          </motion.div>

          {/* 大区分のスタックバー */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ marginBottom: '64px', maxWidth: '900px' }}
          >
            <div style={{
              display: 'flex',
              height: '54px',
              borderRadius: '4px',
              overflow: 'hidden',
              boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
            }}>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${(NUTRITION / TOTAL) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  background: 'var(--moss, #6b7d52)',
                  display: 'flex',
                  alignItems: 'center',
                  paddingLeft: '18px',
                  color: '#fff',
                  fontSize: '12px',
                  letterSpacing: '0.04em',
                  whiteSpace: 'nowrap',
                }}
              >
                栄養士・管理栄養士 {NUTRITION}名
              </motion.div>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${(GENERAL / TOTAL) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  background: 'var(--terracotta, #b87654)',
                  display: 'flex',
                  alignItems: 'center',
                  paddingLeft: '14px',
                  color: '#fff',
                  fontSize: '12px',
                  letterSpacing: '0.04em',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                }}
              >
                一般職 {GENERAL}名
              </motion.div>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${(OTHER / TOTAL) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.0, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  background: 'rgba(0,0,0,0.18)',
                  display: 'flex',
                  alignItems: 'center',
                  paddingLeft: '10px',
                  color: '#fff',
                  fontSize: '11px',
                  letterSpacing: '0.04em',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                }}
              >
                進学等 {OTHER}
              </motion.div>
            </div>
            <p style={{ fontSize: '11px', color: 'var(--stone)', marginTop: '12px', opacity: 0.75 }}>
              ※ 一般職には、栄養の知識を活かして食品メーカーや小売・医療事務などに就いた卒業生を含みます。
            </p>
          </motion.div>

          {/* 業種別バー */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '48px',
          }}>
            <div>
              <h3 style={{
                fontSize: '13px',
                letterSpacing: '0.08em',
                color: 'var(--stone)',
                marginBottom: '24px',
                fontWeight: 500,
              }}>
                業種別の人数
              </h3>
              {BREAKDOWN.map((b, i) => (
                <HBar
                  key={b.name}
                  label={b.name}
                  count={b.count}
                  total={TOTAL}
                  accent={i < 4 ? 'var(--moss, #6b7d52)' : 'var(--terracotta, #b87654)'}
                  delay={i * 0.04}
                />
              ))}
            </div>

            <div>
              <h3 style={{
                fontSize: '13px',
                letterSpacing: '0.08em',
                color: 'var(--stone)',
                marginBottom: '24px',
                fontWeight: 500,
              }}>
                勤務地の分布
              </h3>
              {REGIONS.map((r, i) => (
                <HBar
                  key={r.name}
                  label={r.name}
                  count={r.count}
                  total={120}  // 勤務地特定済の卒業生数
                  accent="var(--moss, #6b7d52)"
                  delay={i * 0.05}
                />
              ))}
              <p style={{ fontSize: '11px', color: 'var(--stone)', marginTop: '20px', opacity: 0.7, lineHeight: 1.7 }}>
                ※ 勤務地が確定している卒業生のみ集計。<br />
                首都圏を中心に、北関東から関西・北海道まで広がりがあります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          ③ 4年間の就職サポート
         ───────────────────────────────────────── */}
      <section style={{ padding: '80px 0', background: 'var(--cream, #faf8f3)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '48px' }}
          >
            <p className="eyebrow">Support</p>
            <h2 style={{ fontSize: '24px', letterSpacing: '0.04em', marginTop: '8px' }}>
              4年間の就職サポート
            </h2>
            <p style={{ fontSize: '13px', color: 'var(--stone)', marginTop: '14px', lineHeight: 1.9, maxWidth: '640px' }}>
              入学から卒業まで、教員が一人ひとりの進路に伴走します。
              「いきなり就活」ではなく、4年かけて段階的に準備していく仕組みです。
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px',
          }}>
            {SUPPORT_STEPS.map((s, i) => (
              <motion.div
                key={s.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                style={{
                  background: '#fff',
                  padding: '28px 24px',
                  borderRadius: '4px',
                  border: '1px solid rgba(0,0,0,0.06)',
                  position: 'relative',
                }}
              >
                <span style={{
                  fontSize: '11px',
                  letterSpacing: '0.12em',
                  color: 'var(--moss, #6b7d52)',
                  fontWeight: 600,
                }}>
                  {s.year}
                </span>
                <h3 style={{
                  fontSize: '15px',
                  marginTop: '10px',
                  marginBottom: '12px',
                  letterSpacing: '0.02em',
                  fontWeight: 600,
                }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: '12.5px', color: 'var(--stone)', lineHeight: 1.85 }}>
                  {s.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          ④ 国家試験合格率ページへの導線
         ───────────────────────────────────────── */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              maxWidth: '720px',
              margin: '0 auto',
              padding: '40px 36px',
              background: 'var(--cream, #faf8f3)',
              borderLeft: '3px solid var(--moss, #6b7d52)',
              borderRadius: '2px',
            }}
          >
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '12px' }}>
              <Sparkles size={16} style={{ color: 'var(--moss, #6b7d52)' }} />
              <p className="eyebrow" style={{ margin: 0 }}>関連ページ</p>
            </div>
            <h3 style={{ fontSize: '18px', letterSpacing: '0.02em', marginBottom: '10px' }}>
              管理栄養士国家試験の結果と対策
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--stone)', lineHeight: 1.9, marginBottom: '18px' }}>
              本学科の国家試験合格率や、そこに至るまでの対策、学生一人ひとりの成長の物語を、
              数字と言葉でご紹介しています。
            </p>
            <Link
              to="/kokushi-report"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '13px',
                color: 'var(--moss, #6b7d52)',
                textDecoration: 'none',
                letterSpacing: '0.04em',
                borderBottom: '1px solid currentColor',
                paddingBottom: '2px',
              }}
            >
              国家試験結果のページへ
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          ⑤ CTA
         ───────────────────────────────────────── */}
      <section style={{ padding: '80px 0 100px', background: 'var(--cream, #faf8f3)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              textAlign: 'center',
              maxWidth: '640px',
              margin: '0 auto',
            }}
          >
            <p className="eyebrow">Next Step</p>
            <h2 style={{ fontSize: '24px', letterSpacing: '0.04em', marginTop: '8px', marginBottom: '18px' }}>
              気になったら、見にきてください
            </h2>
            <p style={{ fontSize: '13px', color: 'var(--stone)', lineHeight: 1.9, marginBottom: '32px' }}>
              数字や説明だけでは伝わらない、教室の雰囲気・先輩や教員との距離感は、
              ぜひオープンキャンパスで体感してみてください。
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/event-0531" className="button">
                イベント情報を見る <ArrowRight size={16} style={{ marginLeft: '6px' }} />
              </Link>
              <Link to="/" className="button button--outline">
                トップに戻る
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
