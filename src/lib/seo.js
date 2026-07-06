// JSON-LD ビルダー（旧 App.jsx の customJsonLd 分岐と旧 SEO.jsx の逐語移植）。
// Phase 6 でベースラインと deep-equal 検証するため、内容・順序を変えないこと。
const BASE_URL = 'https://shokuei-hp.web.app'
const SITE_NAME = '十文字学園女子大学 食物栄養学科'

function buildCustomJsonLd(pathname, meta) {
  if (pathname === '/') {
    return {
      '@type': 'CollegeOrUniversity',
      '@id': 'https://shokuei-hp.web.app/#organization',
      name: '十文字学園女子大学 食物栄養学科',
      alternateName: '食物栄養学科',
      description: '埼玉県新座市にある十文字学園女子大学 食物栄養学科。管理栄養士・栄養士を育成する4年間の実践的カリキュラムと国家試験対策サポート体制が特徴。',
      url: 'https://shokuei-hp.web.app/',
      parentOrganization: {
        '@type': 'CollegeOrUniversity',
        name: '十文字学園女子大学',
        url: 'https://www.jumonji-u.ac.jp/'
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '埼玉県新座市菅沢2-1-28',
        addressLocality: '新座市',
        addressRegion: '埼玉県',
        postalCode: '352-8510',
        addressCountry: 'JP'
      },
      telephone: '+81-48-477-0555',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '35.8193',
        longitude: '139.6291'
      },
      foundingDate: '2000',
      areaServed: [
        { '@type': 'State', name: '埼玉県' },
        { '@type': 'State', name: '東京都' },
        { '@type': 'State', name: '神奈川県' },
        { '@type': 'State', name: '千葉県' },
        { '@type': 'State', name: '群馬県' },
        { '@type': 'State', name: '栃木県' },
      ],
      sameAs: [
        'https://www.jumonji-u.ac.jp/',
        'https://www.instagram.com/jumonji_shokuei/',
        'https://www.tiktok.com/@ishokssov49',
      ],
      mainEntity: [
        {
          '@type': 'Question',
          name: '十文字学園女子大学 食物栄養学科はどんな学科ですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '埼玉県新座市にある十文字学園女子大学 食物栄養学科（人間生活学部）は、管理栄養士・栄養士を育成する4年制の学科です。定員78名の少人数教育、全国唯一の管理栄養士＋第一種衛生管理者ダブルライセンス取得、国家試験全員合格を目指す6段階サポートが特徴です。',
          },
        },
        {
          '@type': 'Question',
          name: '管理栄養士になるにはどんな大学に行けばいいですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '管理栄養士になるには、厚生労働省が認定した管理栄養士養成施設（4年制大学など）を卒業し、管理栄養士国家試験に合格する必要があります。十文字学園女子大学 食物栄養学科は管理栄養士養成課程として、1年次からの国試対策サポート体制を整えています。',
          },
        },
        {
          '@type': 'Question',
          name: 'キャンパスはどこにありますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '埼玉県新座市菅沢2-1-28にあります。西武池袋線「ひばりヶ丘駅」からバスでアクセスできます。緑豊かなキャンパスに調理実習室・科学実験室などの充実した施設が整っています。',
          },
        },
        {
          '@type': 'Question',
          name: '十文字学園女子大学 食物栄養学科の就職率はどのくらいですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '就職率100%（2025年3月卒業生実績）を達成しています。保育園・病院・食品メーカー・一般企業など多様な分野で卒業生が活躍しており、関東圏を中心に全国で就職しています。',
          },
        },
        {
          '@type': 'Question',
          name: '研究室（ゼミ）はどのような種類がありますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '獣医ウイルス学・食品加工・公衆栄養学・水圏生命科学・栄養生化学・調理科学・応用栄養学・動物実験・臨床栄養・食品安全学・腸内細菌・医療AIなど、12の多彩な研究室があります。3年次にゼミに配属され、4年次の卒業研究へとつながります。',
          },
        },
      ],
    }
  }

  if (pathname.startsWith('/lab-') && !pathname.includes('report')) {
    const jobTitleMap = {
      '/lab-nakaoka': '准教授',
      '/lab-komeichi': '教授',
      '/lab-yamazaki': '准教授',
      '/lab-niikura': '教授',
    }
    const jobTitle = jobTitleMap[pathname] || '教授'
    return {
      '@type': 'ProfilePage',
      mainEntity: {
        '@type': 'Person',
        name: meta.title.split('（')[0].replace('研究室', '').trim(),
        jobTitle,
        affiliation: {
          '@type': 'CollegeOrUniversity',
          name: '十文字学園女子大学 食物栄養学科',
          address: {
            '@type': 'PostalAddress',
            addressLocality: '新座市',
            addressRegion: '埼玉県',
            addressCountry: 'JP',
          }
        }
      }
    }
  }

  if (pathname === '/support') {
    return {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '管理栄養士国家試験の合格率はどのくらいですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '1年次からの早期意識づけ、4年次の年8回模擬試験、外部講師による特別講義など6段階のサポート体制で国家試験合格をめざします。',
          },
        },
        {
          '@type': 'Question',
          name: '国家試験対策はいつから始まりますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '「4年生からでは遅い」という方針のもと、入学直後の1年次から学習習慣の形成と基礎固めを開始します。3年次の夏・冬に模擬試験を実施し、4年次は年8回の模擬試験で本番力を高めます。',
          },
        },
        {
          '@type': 'Question',
          name: '4年次の模擬試験は何回ありますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '4年次には年8回の模擬試験を実施します。本番さながらの環境で繰り返し演習し、得点力と時間管理の精度を高めます。4年7月の模試で「130点突破」を全員の目標として明確に設定しています。',
          },
        },
        {
          '@type': 'Question',
          name: 'e-Learningはどのように活用できますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'e-Learningシステムにより、自分のペースで反復学習が可能です。苦手分野の集中対策や隙間時間の有効活用に役立ちます。授業外での自学自習をシステムが支援します。',
          },
        },
        {
          '@type': 'Question',
          name: '外部講師による特別講義はありますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'はい。各教員による対策講座に加え、外部の専門講師による特別講義も実施しています。多様な視点で試験範囲を深く理解することができます。',
          },
        },
        {
          '@type': 'Question',
          name: '国家試験に向けて個別サポートはありますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '少人数教育（定員78名）の強みを活かし、教員が一人ひとりの学習状況を把握して個別にサポートします。4年次には就職活動・国家試験対策・卒業研究の三本柱を、教員が個別フォローしながら進めます。',
          },
        },
      ],
    }
  }

  if (pathname === '/qualifications') {
    return {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '食物栄養学科で管理栄養士の資格は取れますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '卒業と同時に管理栄養士国家試験の受験資格が得られます。国家試験に合格することで管理栄養士の資格を取得できます。医療・行政・企業など幅広い分野で活躍できる国家資格です。',
          },
        },
        {
          '@type': 'Question',
          name: '第一種衛生管理者とはどんな資格で、なぜ全国唯一なのですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '第一種衛生管理者は従業員50名以上の事業場への配置が法律で義務付けられた国家資格です。管理栄養士養成課程でこの資格を卒業と同時に取得できるのは全国の大学で本学のみです。管理栄養士との「ダブルライセンス」が企業への就職に大きく有利に働きます。',
          },
        },
        {
          '@type': 'Question',
          name: '卒業と同時に取得できる資格は何ですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '栄養士免許と第一種衛生管理者は卒業と同時に取得できます。管理栄養士は卒業後に国家試験合格が必要です。栄養教諭一種免許状は所定の教職課程修了で取得できます。',
          },
        },
        {
          '@type': 'Question',
          name: '栄養教諭になることはできますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '所定の教職課程を修了することで栄養教諭一種免許状を取得できます。学校に配属され、児童生徒の食習慣改善や食育を担う教育職です。',
          },
        },
        {
          '@type': 'Question',
          name: 'NR・サプリメントアドバイザーとはどんな資格ですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '日本臨床栄養協会が認定する資格で、サプリメント・健康食品の有効性・安全性についてアドバイスする専門家です。食品メーカーや薬局・ドラッグストアなどでの活躍が期待できます。',
          },
        },
        {
          '@type': 'Question',
          name: '取得した資格はどのような職場で活かせますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '管理栄養士は病院・クリニック、保育園・学校、福祉施設、食品メーカー、行政機関など多岐にわたる職場で活躍できます。第一種衛生管理者は一般企業（産業保健）分野での就職にも強みになります。2025年3月卒業生の就職率は100%です。',
          },
        },
      ],
    }
  }

  if (pathname === '/features') {
    return {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '食物栄養学科の定員は何名ですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '定員は78名の少人数教育です。教員が一人ひとりの学習状況を早期に把握し、入学から卒業・就職まで親身にサポートします。先生に名前で呼ばれる関係が生まれるほどの距離感が特徴です。',
          },
        },
        {
          '@type': 'Question',
          name: 'ダブルライセンスとは何ですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '管理栄養士養成課程の中で「第一種衛生管理者」の国家資格を卒業と同時に取得できる、全国唯一の組み合わせです。50名以上の事業場で配置が義務付けられており、企業の産業保健分野への就職に大きく有利です。',
          },
        },
        {
          '@type': 'Question',
          name: '就職率はどのくらいですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '就職率100%（2025年3月卒業生実績）を達成しています。少人数教育と1年次からのキャリア支援、そして管理栄養士＋衛生管理者のダブルライセンスが高い就職実績を支えています。',
          },
        },
        {
          '@type': 'Question',
          name: '4年間のカリキュラムの特徴は何ですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '1年次の基礎固めから4年次の国試対策まで段階的に深める体系的なカリキュラムです。給食経営管理実習（150食の実際の給食運営）、病院・福祉施設での臨地実習、地域連携活動など、現場で役立つ実践力を養います。',
          },
        },
      ],
    }
  }

  if (pathname === '/career') {
    return {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '卒業生の主な就職先はどこですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '2025年3月卒業生127名の就職先は、保育園（25名）・調剤薬局・ドラッグストア（21名）・病院・クリニック（18名）・給食受託会社（14名）・食品メーカー（11名）などが主な就職先です。東京都・埼玉県を中心に関東圏全域で活躍しています。',
          },
        },
        {
          '@type': 'Question',
          name: '病院で管理栄養士として働けますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'はい。2025年3月卒業生では18名が病院・クリニックに就職しています。2年次から病院・福祉施設での臨地実習を行い、患者さんへの栄養アセスメントや栄養管理を実践的に学ぶことで、即戦力として活躍できる力を養います。',
          },
        },
        {
          '@type': 'Question',
          name: '食品メーカーに就職することはできますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'はい。食品メーカー・関連企業には11名が就職しています（2025年3月卒業生実績）。管理栄養士の知識に加え、第一種衛生管理者のダブルライセンスが企業での就職活動で強みになります。',
          },
        },
        {
          '@type': 'Question',
          name: '就職サポートはいつから始まりますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '1年次から就職サポートを開始します。ガイダンスや先輩との交流でキャリアを意識し、2年次には現場実習、3年次には個別進路相談と模擬試験・業界研究会、4年次には教員が一人ひとりの状況に合わせた個別フォローを行います。',
          },
        },
        {
          '@type': 'Question',
          name: '一般企業（食品以外）への就職もできますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'はい。一般企業（金融・物流ほか）に11名、公務員・自衛官に4名が就職しています（2025年3月実績）。第一種衛生管理者の資格は50名以上の事業場への配置が義務付けられているため、幅広い業種の一般企業でも活躍できます。',
          },
        },
      ],
    }
  }

  if (pathname === '/living-alone') {
    return {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: '新座で一人暮らしすると月いくらかかりますか？', acceptedAnswer: { '@type': 'Answer', text: '十文字学園女子大学周辺のアパートは家賃月4.5〜6.5万円が目安です。光熱費・食費・通信費を含めると、月8〜12万円程度が一般的な生活費の目安です。学生寮（ドーミー）を選ぶと、朝夕2食付き・家具家電込みのため、月額6.7〜8.2万円＋電気代で生活費がほぼ確定します。' } },
        { '@type': 'Question', name: '新座市のアパート家賃相場はいくらですか？', acceptedAnswer: { '@type': 'Answer', text: '大学周辺（新座駅・ひばりヶ丘駅方面）のワンルーム・1Kは、家賃月4.5〜6.5万円が相場です。初期費用は敷金・礼金・仲介手数料などで家賃の4〜6か月分が目安になります。' } },
        { '@type': 'Question', name: '十文字学園女子大学の学生寮の費用はいくらですか？', acceptedAnswer: { '@type': 'Answer', text: 'ドーミー（共立メンテナンス）の寮費は月67,700〜82,000円（2025年時点）。入館費29万円・保証金5万円・年間管理費22万円が別途かかります。初年度の総額は約142〜158万円（電気代別）が目安です。' } },
        { '@type': 'Question', name: '食物栄養学科の4年間の学費はいくらですか？', acceptedAnswer: { '@type': 'Answer', text: '2026年度入学者の初年度納入金は約151万円（入学金25万円＋授業料80万円＋施設費40万円＋諸会費等）。2年目以降は入学金なしで年間約126万円。4年間の学費総額は約531万円です。最新の正確な金額は大学公式サイトの募集要項でご確認ください。' } },
        { '@type': 'Question', name: '学生寮とアパート、どちらが安いですか？', acceptedAnswer: { '@type': 'Answer', text: '家賃だけ見るとアパートの方が安く見えますが、寮は食事2食・家具家電・管理費込みで計算できます。4年間の住居費総額では大きな差にならないことも多く、食費やセキュリティの安心感も含めて選ぶのがおすすめです。' } },
      ],
    }
  }

  if (pathname === '/faq') {
    return {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: '食物栄養学科の定員は何名ですか？', acceptedAnswer: { '@type': 'Answer', text: '定員は78名の少人数制です。教員が一人ひとりの学習状況を早期に把握し、入学から卒業・就職まで親身にサポートします。先生に名前で呼ばれるほどの距離感が特徴で、国家試験対策でも個別フォローが可能です。' } },
        { '@type': 'Question', name: '4年間のカリキュラムの特徴は何ですか？', acceptedAnswer: { '@type': 'Answer', text: '1年次の基礎固めから4年次の国試対策まで段階的に深める体系的なカリキュラムです。給食経営管理実習（150食の実際の給食運営）、病院・福祉施設での臨地実習、地域連携活動など、現場で役立つ実践力を養います。' } },
        { '@type': 'Question', name: '給食経営管理実習とはどのような授業ですか？', acceptedAnswer: { '@type': 'Answer', text: '実際の給食施設を使い、学生自身が150食規模の給食を一から企画・調理・提供する授業です。メニュー設計から食材の発注、衛生管理、原価計算まで、給食現場のすべてを体験できる集大成となる実習です。' } },
        { '@type': 'Question', name: '十文字学園女子大学はどこにありますか？', acceptedAnswer: { '@type': 'Answer', text: '埼玉県新座市菅沢2-1-28にあります。JR武蔵野線・新座駅から徒歩10〜15分でアクセスできます。東京都内や埼玉各地から通いやすい立地です。' } },
        { '@type': 'Question', name: '管理栄養士の資格は取得できますか？', acceptedAnswer: { '@type': 'Answer', text: '卒業と同時に管理栄養士国家試験の受験資格が得られます。国家試験に合格することで管理栄養士の資格を取得できます。医療・行政・企業など幅広い分野で活躍できる国家資格です。' } },
        { '@type': 'Question', name: '第一種衛生管理者とはどんな資格で、なぜ全国唯一なのですか？', acceptedAnswer: { '@type': 'Answer', text: '第一種衛生管理者は従業員50名以上の事業場への配置が法律で義務付けられた国家資格です。管理栄養士養成課程でこの資格を卒業と同時に取得できるのは全国の大学で本学のみです。管理栄養士との「ダブルライセンス」が企業への就職に大きく有利に働きます。' } },
        { '@type': 'Question', name: '卒業と同時に取得できる資格は何ですか？', acceptedAnswer: { '@type': 'Answer', text: '栄養士免許と第一種衛生管理者は卒業と同時に取得できます。管理栄養士は卒業後に国家試験合格が必要です。栄養教諭一種免許状は所定の教職課程修了で取得できます。' } },
        { '@type': 'Question', name: '栄養教諭になることはできますか？', acceptedAnswer: { '@type': 'Answer', text: '所定の教職課程を修了することで栄養教諭一種免許状を取得できます。学校に配属され、児童生徒の食習慣改善や食育を担う教育職です。' } },
        { '@type': 'Question', name: '管理栄養士国家試験の合格率はどのくらいですか？', acceptedAnswer: { '@type': 'Answer', text: '1年次からの早期意識づけ、4年次の年8回模擬試験、外部講師による特別講義など6段階のサポート体制で国家試験合格をめざします。' } },
        { '@type': 'Question', name: '国家試験対策はいつから始まりますか？', acceptedAnswer: { '@type': 'Answer', text: '「4年生からでは遅い」という方針のもと、入学直後の1年次から学習習慣の形成と基礎固めを開始します。3年次の夏・冬に模擬試験を実施し、4年次は年8回の模擬試験で本番力を高めます。' } },
        { '@type': 'Question', name: '4年次の模擬試験は何回ありますか？', acceptedAnswer: { '@type': 'Answer', text: '4年次には年8回の模擬試験を実施します。本番さながらの環境で繰り返し演習し、得点力と時間管理の精度を高めます。4年7月の模試で「130点突破」を全員の目標として明確に設定しています。' } },
        { '@type': 'Question', name: '国家試験に向けて個別サポートはありますか？', acceptedAnswer: { '@type': 'Answer', text: '少人数教育（定員78名）の強みを活かし、教員が一人ひとりの学習状況を把握して個別にサポートします。4年次には就職活動・国家試験対策・卒業研究の三本柱を、教員が個別フォローしながら進めます。' } },
        { '@type': 'Question', name: '就職率はどのくらいですか？', acceptedAnswer: { '@type': 'Answer', text: '就職率100%（2025年3月卒業生実績）を達成しています。少人数教育と1年次からのキャリア支援、そして管理栄養士＋衛生管理者のダブルライセンスが高い就職実績を支えています。' } },
        { '@type': 'Question', name: '卒業生の主な就職先はどこですか？', acceptedAnswer: { '@type': 'Answer', text: '2025年3月卒業生の主な就職先は、保育園（25名）・調剤薬局・ドラッグストア（21名）・病院・クリニック（18名）・給食受託会社（14名）・食品メーカー（11名）などです。東京都・埼玉県を中心に関東圏全域で活躍しています。' } },
        { '@type': 'Question', name: '就職サポートはいつから始まりますか？', acceptedAnswer: { '@type': 'Answer', text: '1年次から就職サポートを開始します。ガイダンスや先輩との交流でキャリアを意識し、2年次には現場実習、3年次には個別進路相談と業界研究会、4年次には教員が一人ひとりの状況に合わせた個別フォローを行います。' } },
        { '@type': 'Question', name: '一般企業（食品以外）への就職もできますか？', acceptedAnswer: { '@type': 'Answer', text: 'はい。一般企業（金融・物流ほか）に11名、公務員・自衛官に4名が就職しています（2025年3月実績）。第一種衛生管理者の資格は50名以上の事業場への配置が義務付けられているため、幅広い業種の一般企業でも強みになります。' } },
      ],
    }
  }

  if (
    pathname.includes('column') ||
    pathname.includes('report') ||
    pathname.includes('project') ||
    pathname.includes('event')
  ) {
    const articleDateMap = {
      '/student-column-1': '2026-05-11',
      '/student-column-3': '2026-05-13',
      '/koudai-project': '2026-05-12',
      '/kokushi-report': '2026-05-01',
      '/lab-kamiyama-report': '2026-05-15',
      '/eiyo-app-report': '2026-05-26',
      '/event-0531': '2026-05-18',
    }
    return {
      '@type': 'Article',
      datePublished: articleDateMap[pathname] || '2026-05-01',
      dateModified: '2026-06-04',
      author: {
        '@type': 'Organization',
        name: '十文字学園女子大学 食物栄養学科'
      },
      publisher: {
        '@type': 'CollegeOrUniversity',
        name: '十文字学園女子大学',
        address: {
          '@type': 'PostalAddress',
          addressLocality: '新座市',
          addressRegion: '埼玉県',
          addressCountry: 'JP'
        }
      }
    }
  }

  return {}
}

export function buildPageJsonLd(pathname, meta) {
  const url = `${BASE_URL}${pathname}`
  const base = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: meta.title,
    description: meta.description,
    url,
    publisher: {
      '@type': 'CollegeOrUniversity',
      name: SITE_NAME,
      url: 'https://shokuei-hp.web.app/',
    },
  }
  return { ...base, ...buildCustomJsonLd(pathname, meta) }
}

export function buildBreadcrumbJsonLd(pathname, title) {
  if (pathname === '/') return null

  const url = `${BASE_URL}${pathname}`
  const base = { name: 'ホーム', url: 'https://shokuei-hp.web.app/' }
  const pageLabel = title.split('|')[0].trim()

  let breadcrumbs
  if (pathname.startsWith('/lab-') && !pathname.includes('report')) {
    breadcrumbs = [
      base,
      { name: '研究室一覧', url: 'https://shokuei-hp.web.app/#labs' },
      { name: pageLabel, url },
    ]
  } else if (
    pathname.includes('column') ||
    pathname.includes('report') ||
    pathname.includes('project') ||
    pathname.includes('event')
  ) {
    breadcrumbs = [
      base,
      { name: 'お知らせ・コラム', url: 'https://shokuei-hp.web.app/news' },
      { name: pageLabel, url },
    ]
  } else {
    breadcrumbs = [base, { name: pageLabel, url }]
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  }
}
