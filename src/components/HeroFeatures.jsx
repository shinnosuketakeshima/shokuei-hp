import { Award, Users, BookOpen } from 'lucide-react';

const FEATURES = [
  {
    icon: <Award size={20} />,
    title: '管理栄養士養成課程',
    body: '高度な専門知識と実践力を兼ね備えた管理栄養士を育成します。',
  },
  {
    icon: <Users size={20} />,
    title: '臨床栄養',
    body: '病院や医療現場で患者の栄養管理をサポートする専門知識を習得します。',
  },
  {
    icon: <BookOpen size={20} />,
    title: '公衆栄養',
    body: '地域社会の健康増進に貢献するため、食育や健康指導を学びます。',
  },
];

export default function HeroFeatures() {
  return (
    <section className="hero-features">
      <div className="container">
        <div className="hero-features__grid">
          {FEATURES.map((feature, i) => (
            <div key={i} className="hero-feature-card">
              <div className="hero-feature-card__icon">{feature.icon}</div>
              <h3 className="hero-feature-card__title">{feature.title}</h3>
              <p className="hero-feature-card__body">{feature.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
