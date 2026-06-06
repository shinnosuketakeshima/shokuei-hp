import { ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function LabTakeshimaColumn() {
  return (
    <div className="lab-page">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/lab-takeshima" className="lab-page__back-link">
            <ArrowLeft size={16} />
            <span>竹嶋研究室に戻る</span>
          </Link>
        </motion.div>

        <motion.div
          className="lab-page__header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="lab-page__eyebrow">教員コラム / Faculty Column</p>
          <h1 className="lab-page__title">
            失敗が消えない時代に、<br />
            どう育つか
          </h1>
          <p className="lab-page__subtitle">2026年6月　食物栄養学科　竹嶋伸之輔 教授</p>
        </motion.div>

        <div className="lab-page__content">

          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="lab-section__body" style={{ fontSize: '1.1rem', fontWeight: 600, lineHeight: 2 }}>
              「マニュアルがないとできないんです、今の子たちは」
            </p>
            <p className="lab-section__body">
              ある病院の栄養士さんが、ぽつりとそう言った。学生の実習巡回で病院を訪れた時のことだ。その言葉が、ずっと頭に引っかかっている。
            </p>
            <p className="lab-section__body">
              怠慢なのだろうか。いや、そうは思わない。むしろ、まじめで勉強熱心な学生ほど、マニュアルの外に踏み出せない傾向があるように感じる。では、なぜなのか。
            </p>
            <p className="lab-section__body">
              考えていくうちに、ひとつの仮説にたどり着いた。「失敗のコスト」が、根本的に変わってしまったのではないか、と。
            </p>
          </motion.section>

          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="takeshima-pull">
              昔、クラスで起きた喧嘩は、クラスで終わった。<br />
              今、クラスで起きた喧嘩は、知らない1万人に届く。
            </div>

            <p className="lab-section__body">
              私が学生だったころ、友人と大喧嘩をしても、それはそのクラスの、その瞬間だけの出来事だった。関係のない人がそれを知ることはなく、時間が経てば自然と収まっていった。失敗しても、環境を少し変えれば、リスタートできた。
            </p>
            <p className="lab-section__body">
              ところが今は違う。ちょっとした言動がSNSで拡散され、見知らぬ人から批判を受ける。本人だけでなく、その様子を見て育った子どもたちは、幼いころから「間違えることの怖さ」を、全身で学んできている。親が叩かれる場面、先生が炎上する場面、テレビで一方的に誰かを責め立てる場面——そういった光景が、日常の中に溶け込んでいる。
            </p>
            <p className="lab-section__body">
              だとすれば、マニュアルにしがみつくのは、臆病なのではなく、合理的な自己防衛なのかもしれない。間違えないための装置として、マニュアルを求める。それは、この時代を生き抜くために身につけた、ひとつの知恵だ。
            </p>
          </motion.section>

          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="takeshima-pull">
              「失敗を許さない社会」が、<br />
              「失敗からしか育たない人間」を育てようとしている。
            </div>

            <p className="lab-section__body">
              これは矛盾だ。しかし、その矛盾の中に、私たち教育に携わる者への問いが含まれているとも思う。正解のある問いばかりで評価してきたのは、私たち自身でもあるからだ。
            </p>
            <p className="lab-section__body">
              実習先の栄養士さんはこうも言っていた。「ここに来る前は知らなかったことを、大切にしてほしい」と。既に知っていることの確認ではなく、現場でしか気づけないことに出会うこと——それが実習の意味だ、と。
            </p>
            <p className="lab-section__body">
              答えのない問いに、自分なりの言葉で向き合う経験。それをどう積み重ねるか。簡単ではないが、そこから目を逸らしてはいけないと、病院の廊下でおにぎりを握る学生の背中を見ながら、あらためて思った。
            </p>
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
              <p>このコラムを執筆した竹嶋先生の研究室についてはこちらをご覧ください。</p>
              <Link to="/lab-takeshima" className="btn btn--primary" style={{ marginTop: '1rem', display: 'inline-block' }}>
                竹嶋研究室 紹介ページ
              </Link>
            </div>
          </motion.section>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .takeshima-pull {
          margin: 2.5rem 0;
          padding: 1.75rem 2rem;
          border-left: 3px solid var(--terracotta, #c0392b);
          background: rgba(192, 57, 43, 0.04);
          font-size: 1rem;
          font-weight: 700;
          line-height: 2;
          color: var(--charcoal, #1a1a2e);
        }
        .btn--primary {
          background: var(--forest);
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
