import { ArrowLeft, BookOpen, Smile, Sparkles, ChevronRight, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
});

export default function KotoSupportPage() {
  return (
    <div className="lab-page">
      <div className="container">

        <motion.div
          className="lab-page__header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/" className="lab-page__back-link">
            <ArrowLeft size={16} />
            <span>トップページに戻る</span>
          </Link>
          <p className="lab-page__eyebrow">2027年度スタート｜全学共通の伴走支援</p>
          <h1 className="lab-page__title">忙しい4年間を、ひとりにしない。</h1>
          <p className="lab-page__subtitle">
            管理栄養士をめざす道は、学ぶことも実習も国家試験もある、密度の濃い4年間です。十文字では2027年度から、その毎日を支える全学の伴走支援「ことサポ」がはじまります。
          </p>
        </motion.div>

        <div className="lab-page__content">

          {/* 第一期生フック */}
          <motion.section
            className="lab-story-feature lab-story-feature--terracotta"
            {...fadeUp(0)}
          >
            <span className="lab-story-feature__label">
              <Sparkles size={12} /> 対象年度
            </span>
            <p className="lab-story-feature__lead" style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: 0, color: 'var(--ink)' }}>
              この支援を最初から受けられるのは、2027年4月に入学するみなさんです。
            </p>
          </motion.section>

          {/* 本文セクション：食栄にとっての「ことサポ」 */}
          <motion.section className="lab-section" {...fadeUp(0.05)}>
            <h2 className="lab-section__title">食物栄養学科にとっての「ことサポ」</h2>
            <p className="lab-section__body">
              食物栄養学科では、もともとある「学科による国家試験指導」と、新しい「ことサポ」が両輪になります。
            </p>
            <div className="sn-evidence-cards">
              <motion.div className="sn-evidence-card" {...fadeUp(0.08)}>
                <span
                  className="sn-evidence-card__dept"
                  style={{
                    background: `color-mix(in srgb, var(--forest) 12%, transparent)`,
                    color: 'var(--forest-dark)',
                  }}
                >
                  学科によるサポート
                </span>
                <div
                  className="sn-evidence-card__icon"
                  style={{ background: `color-mix(in srgb, var(--forest) 12%, transparent)`, color: 'var(--forest)' }}
                >
                  <BookOpen size={28} aria-hidden="true" />
                </div>
                <h3 className="sn-evidence-card__title">学科による国試指導<br /><span style={{ fontSize: '0.85rem', fontWeight: 'normal', color: 'var(--stone)' }}>（これまでも、これからも）</span></h3>
                <p className="sn-evidence-card__body">
                  合格まで、教員が専門的に伴走します。過去問の使い方、苦手分野の克服、直前期の進め方まで、食物栄養学科の教員が直接サポートします。
                </p>
              </motion.div>

              <motion.div className="sn-evidence-card" {...fadeUp(0.16)}>
                <span
                  className="sn-evidence-card__dept"
                  style={{
                    background: `color-mix(in srgb, var(--terracotta) 12%, transparent)`,
                    color: 'var(--terracotta)',
                  }}
                >
                  全学によるサポート
                </span>
                <div
                  className="sn-evidence-card__icon"
                  style={{ background: `color-mix(in srgb, var(--terracotta) 12%, transparent)`, color: 'var(--terracotta)' }}
                >
                  <Smile size={28} aria-hidden="true" />
                </div>
                <h3 className="sn-evidence-card__title">ことサポ<br /><span style={{ fontSize: '0.85rem', fontWeight: 'normal', color: 'var(--stone)' }}>（2027年度から、ここが加わる）</span></h3>
                <p className="sn-evidence-card__body">
                  勉強や進路の不安、心と体の調子、ひとりで抱えがちなことを、専任のスタッフに相談できます。学科の指導とは別の窓口だから、話しやすい。
                </p>
              </motion.div>
            </div>
          </motion.section>

          {/* 保護者向けの一言 */}
          <motion.section
            className="lab-story-feature lab-story-feature--forest"
            {...fadeUp(0.05)}
          >
            <span className="lab-story-feature__label">
              <Heart size={12} /> 保護者のみなさまへ
            </span>
            <h2 className="lab-story-feature__title">
              保護者のみなさまへ
            </h2>
            <p className="lab-story-feature__lead">
              専門職をめざす4年間には、励ましだけでは越えにくい場面もあります。学科の厳しくも丁寧な国試指導に加えて、ことサポによる心とキャリアの支えがある。お子さまが納得して社会へ羽ばたくまで、二重の体制で見守ります。
            </p>
          </motion.section>

          {/* CTA */}
          <motion.section className="lab-section" {...fadeUp(0.05)}>
            <div className="sn-cta-banner">
              <p className="sn-cta-banner__eyebrow">
                <Sparkles size={14} aria-hidden="true" />
                十文字学園女子大学
              </p>
              <h2 className="sn-cta-banner__title">
                2つの伴走体制で、<br />
                あなたの管理栄養士への道をサポートします。
              </h2>
              <div className="sn-cta-banner__buttons">
                <a href="#" className="sn-cta-btn sn-cta-btn--primary" data-ga-click="oc_kotosupport">
                  オープンキャンパスで聞いてみる
                  <ChevronRight size={16} aria-hidden="true" />
                </a>
                <Link to="/submajor" className="sn-cta-btn sn-cta-btn--secondary">
                  副専攻×管理栄養士のページを見る
                  <ChevronRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </motion.section>

        </div>
      </div>
    </div>
  );
}
