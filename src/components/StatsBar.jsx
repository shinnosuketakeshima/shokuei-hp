import { motion } from 'framer-motion'

const STATS = [
  {
    number: '99.2', unit: '%',
    label: '就職率',
    note: '(2025年3月卒業生実績)',
  },
  {
    number: '78',   unit: '名',
    label: '募集定員',
    note: '少人数教育を徹底',
  },
  {
    number: '8',    unit: '回',
    label: '4年次 国試模擬試験',
    note: '3年次にも夏・冬の2回実施',
  },
  {
    number: '全国',  unit: '唯一',
    label: '管理栄養士課程で',
    note: '第一種衛生管理者が取れる大学',
  },
]

export default function StatsBar() {
  return (
    <section className="stats">
      <div className="stats__grid">
        {STATS.map((s, i) => (
          <motion.div 
            key={i} 
            className="stats__item"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="stats__number">
              {s.number}
              <span className="stats__unit">{s.unit}</span>
            </div>
            <div className="stats__label">{s.label}</div>
            <div className="stats__note">{s.note}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

