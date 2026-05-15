import { ArrowLeft, Quote } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import saImg1 from '../assets/kamiyama-sa/image1.jpg'
import saImg2 from '../assets/kamiyama-sa/image2.jpg'

export default function LabKamiyamaReport() {
  return (
    <div className="lab-page">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="lab-page__back-link">
            <ArrowLeft size={16} />
            <span>トップページに戻る</span>
          </Link>
        </motion.div>

        <motion.div
          className="lab-page__header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="lab-page__eyebrow">教員コラム / Special Report</p>
          <h1 className="lab-page__title">
            先輩が授業をサポート！<br />
            総合科目「いちから学ぶnutrition science」SAレポート
          </h1>
          <p className="lab-page__subtitle">2026年5月15日 食物栄養学科 神山真澄 教授</p>
        </motion.div>

        <div className="lab-page__content">

          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="lab-section__body">
              共通科目のなかの総合科目「いちから学ぶnutrition science」において、神山ゼミの3年生、4年生がstudent assistant (SA)をしています。
            </p>
            <p className="lab-section__body">
              「いちから学ぶnutrition science」は、共通科目ですので、食物栄養学科のほかにも他学科の学生も履修しています。前期科目の一つで、これまで、栄養とは何か、糖質の構造と糖尿病について、脂質の構造と乳化の原理について、などを学びました。1年生がほとんどなので、入学間もない初々しい学生に、先輩の3年生、4年生が授業補佐をしています。
            </p>
            <p className="lab-section__body">
              先輩達からは、学んできたことを復習できる、教えると理解がより深まる、などの意見をいただいており、毎年、ゼミ生にはSAをお願いしています。
            </p>
          </motion.section>

          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">体験しながら学ぶ授業スタイル</h2>
            <p className="lab-section__body">
              この授業、おもしろくて、受け身の座学ではなく、ディスカッション、プレゼンテーション、工作までする、ちょっと変わった授業スタイルです。
            </p>
            <p className="lab-section__body">
              脂質の回では、SAの学生がマヨネーズを作るところを履修学生に見せ、酢 (水)と植物油 (油)がどのように混ざるのか、まずは目で確かめました。次に、混ざるための乳化のポイントとなる卵黄について学び、卵黄に含まれているリン脂質、レシチンについて学びました。
            </p>

            <div className="column-figure">
              <img src={saImg1} alt="授業でのSAによるデモンストレーション" />
              <p className="column-figure__caption">SAによるマヨネーズ作りの実演。分離していた油と水が混ざる様子を観察します。</p>
            </div>

            <p className="lab-section__body">
              マヨネーズは、水中油滴型という乳化方法によりできていますが、それを工作で表したものをグループで作成し、提出してもらいました。履修学生の皆さん、とてもよく理解できたようでした。
            </p>

            <div className="column-figure">
              <img src={saImg2} alt="乳化の仕組みを表現した工作" />
              <p className="column-figure__caption">リン脂質やレシチンの構造を工作で表現。視覚的に理解を深めます。</p>
            </div>
          </motion.section>

          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">知識を深め、応用に繋げる</h2>
            <p className="lab-section__body">
              最後は、糖質や脂質の摂りすぎは、なぜいけないか、ということの応用として、‘沖縄クライシス’について学びました。とても活発なディスカッションができ、楽しく授業できました。
            </p>
            <p className="lab-section__body">
              授業している私も、学生から思わぬ発言にドキッとしたり、慌てて調べなおしたりすることもあります。基礎知識がたくさん身につくといいのですが。
            </p>
          </motion.section>

          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="student-voice-box">
              <div className="student-voice-box__header">
                <Quote className="student-voice-box__icon" size={24} />
                <h2 className="student-voice-box__title">SAの学生のコメント</h2>
              </div>
              <div className="student-voice-box__content">
                <p className="lab-section__body">
                  授業補佐（SA）という貴重な機会をいただき、毎回とても楽しく参加させていただいています。SAは「教える立場」ではありますが、実際には私自身が学ばせてもらうことも多くあります。
                </p>
                <p className="lab-section__body">
                  1年生にどうしたらわかりやすく伝わるかを考えながら関わることで、自分がこれまで学んできた知識を改めて整理し直すことができ、「理解しているつもり」を本当に理解へと深めることができました。また、声のかけ方や説明の仕方一つで相手の反応や理解度が変わることを実感し、「伝えること」の難しさと面白さも学ぶことができています。
                </p>
                <p className="lab-section__body">
                  この授業は、ただ知識を覚えるだけではなく、実際に“体験しながら学べる”ところが魅力だと感じています。履修学生の皆さんが「わかった！」と表情を変える瞬間を見るたびに、私自身も嬉しい気持ちになっています。授業補佐という経験は、普段の講義だけでは得られない特別な学びの連続であり、自分自身の成長にもつながっていると感じています。
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="lab-section__card">
              <h3>関連リンク</h3>
              <p>このコラムを執筆した神山先生の研究室についてはこちらをご覧ください。</p>
              <Link to="/lab-kamiyama" className="btn btn--primary" style={{ marginTop: '1rem', display: 'inline-block' }}>
                神山研究室 紹介ページ
              </Link>
            </div>
          </motion.section>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .student-voice-box {
          background: #f8fafc;
          border-radius: 1rem;
          padding: 2rem;
          margin: 3rem 0;
          border-left: 4px solid var(--primary-color, #2563eb);
        }
        .student-voice-box__header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }
        .student-voice-box__icon {
          color: var(--primary-color, #2563eb);
          opacity: 0.5;
        }
        .student-voice-box__title {
          font-size: 1.25rem;
          font-weight: 700;
          margin: 0;
          color: #1e293b;
        }
        .btn--primary {
          background: var(--primary-color, #2563eb);
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          text-decoration: none;
          font-weight: 600;
          transition: opacity 0.2s;
        }
        .btn--primary:hover {
          opacity: 0.9;
        }
      `}} />
    </div>
  )
}
