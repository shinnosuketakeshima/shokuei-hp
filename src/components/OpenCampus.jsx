import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Calendar, Clock, MapPin, ChevronRight } from 'lucide-react'

const OC_DATES = [
  { date: '7月12日（日）', time: '10:00〜15:00（予定）' },
  { date: '7月19日（日）', time: '10:00〜15:00（予定）' },
]

const PROGRAM = [
  {
    num: '01',
    title: '学科説明',
    desc: '食物栄養学科の特色・カリキュラムを教員が説明します。管理栄養士の資格や就職実績についても詳しく紹介します。',
  },
  {
    num: '02',
    title: '模擬授業',
    desc: '実際の授業の一場面を体験。管理栄養士の学びが、4年間でどのように積み重なるかを先取りできます。',
  },
  {
    num: '03',
    title: '施設見学',
    desc: '最新の調理実習室・実験室・給食実習室などを見学。150食規模の給食実習を行う施設を実際に確認できます。',
  },
  {
    num: '04',
    title: '個別相談',
    desc: '入試・資格・就職・学費など、教員や在学生に何でも聞ける時間。気になることを直接確認できる機会です。',
  },
]

const AUDIENCES = [
  '管理栄養士になりたい・興味がある',
  '少人数（定員78名）のアットホームな環境で学びたい',
  '管理栄養士＋第一種衛生管理者のダブルライセンスについて詳しく知りたい',
  '調理実習室や実験室を実際に見てみたい',
  '先生や在学生に直接話を聞きたい',
]

const RELATED = [
  { label: '在学生の声を読む', href: '/voices' },
  { label: '取得できる資格を確認する', href: '/qualifications' },
  { label: '就職・進路の実績を見る', href: '/career' },
  { label: 'よくある質問（FAQ）', href: '/faq' },
]

export default function OpenCampus() {
  return (
    <main className="oc-page">
      <section className="oc-hero">
        <div className="container">
          <motion.div
            className="oc-hero__inner"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow">Open Campus 2025 / オープンキャンパス</p>
            <h1 className="oc-hero__title">
              食物栄養学科で、<br />
              管理栄養士を目指す毎日を体験しよう。
            </h1>
            <p className="oc-hero__subtitle">
              少人数教育・ダブルライセンス・就職率100%——数字の背景にある学びを、この目で確かめてください。
            </p>
            <a
              href="https://mypage.s-axol.jp/jumonji-u/login"
              target="_blank"
              rel="noopener noreferrer"
              className="oc-hero__cta"
            >
              オープンキャンパスに申し込む <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <p className="oc-hero__cta-note">※ 初めての方はアカウント登録（無料）が必要です</p>
          </motion.div>
        </div>
      </section>

      <section className="oc-dates">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow">開催日程 / Schedule</p>
            <h2 className="section-title">2025年 開催スケジュール</h2>
          </motion.div>
          <div className="oc-dates__grid">
            {OC_DATES.map((d, i) => (
              <motion.div
                key={i}
                className="oc-date-card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="oc-date-card__row">
                  <Calendar size={18} aria-hidden="true" />
                  <span className="oc-date-card__date">{d.date}</span>
                </div>
                <div className="oc-date-card__row">
                  <Clock size={16} aria-hidden="true" />
                  <span className="oc-date-card__time">{d.time}</span>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="oc-dates__location">
            <MapPin size={14} aria-hidden="true" />
            十文字学園女子大学（埼玉県新座市菅沢2-1-28 / JR武蔵野線・新座駅 徒歩10〜15分）
          </p>
        </div>
      </section>

      <section className="oc-program">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow">当日のプログラム / Program</p>
            <h2 className="section-title">当日の流れ</h2>
          </motion.div>
          <div className="oc-program__grid">
            {PROGRAM.map((p, i) => (
              <motion.div
                key={i}
                className="oc-program__item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <span className="oc-program__num">{p.num}</span>
                <h3 className="oc-program__title">{p.title}</h3>
                <p className="oc-program__desc">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="oc-audience">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow">こんな方へ / For You</p>
            <h2 className="section-title">こんな方におすすめです</h2>
          </motion.div>
          <ul className="oc-audience__list">
            {AUDIENCES.map((a, i) => (
              <motion.li
                key={i}
                className="oc-audience__item"
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <span className="oc-audience__check" aria-hidden="true">✓</span>
                {a}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section className="oc-signup">
        <div className="container">
          <motion.div
            className="oc-signup__inner"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="oc-signup__title">参加申し込み</h2>
            <p className="oc-signup__body">
              公式サイトの申込フォームから参加登録をしてください。初めての方はアカウント登録（無料）が必要です。
            </p>
            <a
              href="https://mypage.s-axol.jp/jumonji-u/login"
              target="_blank"
              rel="noopener noreferrer"
              className="oc-signup__btn"
            >
              オープンキャンパスに申し込む <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <p className="oc-signup__note">※ 初めての方はアカウント登録（無料）が必要です</p>
          </motion.div>
        </div>
      </section>

      <section className="oc-related">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow">参加前に / Before You Come</p>
            <h2 className="section-title">参加前に読んでおきたい</h2>
          </motion.div>
          <ul className="oc-related__list">
            {RELATED.map((r, i) => (
              <motion.li
                key={r.href}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <Link to={r.href} className="oc-related__link">
                  {r.label} <ChevronRight size={14} aria-hidden="true" />
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
