import React, { useState } from "react";

const DORM_ROOMS = [
  { label: "67,700円タイプ", monthly: 67700 },
  { label: "75,000円タイプ", monthly: 75000 },
  { label: "82,000円タイプ", monthly: 82000 },
];

const DORM_FIXED = {
  entry: 290000,
  deposit: 50000,
  mgmtYear: 220000,
  netMonthly: 3960,
};

const yen = (n) => n.toLocaleString("ja-JP") + "円";

function calcDorm(monthly) {
  const room = monthly * 12;
  const net = DORM_FIXED.netMonthly * 12;
  const firstYear =
    room + DORM_FIXED.mgmtYear + net + DORM_FIXED.entry + DORM_FIXED.deposit;
  const fourYear =
    room * 4 +
    DORM_FIXED.mgmtYear * 4 +
    net * 4 +
    DORM_FIXED.entry +
    DORM_FIXED.deposit;
  return { room, net, firstYear, fourYear };
}

export default function LivingAlone() {
  const [roomIdx, setRoomIdx] = useState(0);
  const room = DORM_ROOMS[roomIdx];
  const d = calcDorm(room.monthly);

  return (
    <div className="la">
      <header className="la-hero">
        <p className="la-eyebrow">はじめての一人暮らし</p>
        <h1 className="la-title">
          住まいは<br />
          <span className="la-accent">学生寮</span>と
          <span className="la-accent">アパート</span>から選べます
        </h1>
        <p className="la-lead">
          進学で一番気になるのが「住まいにいくらかかるのか」。
          月額の家賃だけ見ると分かりにくいので、このページでは
          <strong>1年間・4年間でいくらかかるか</strong>という見方で整理しました。
          寮にもアパートにもそれぞれ良さがあります。生活スタイルに合わせて選んでください。
        </p>
      </header>

      <section className="la-choices">
        <article className="la-card la-card--dorm">
          <h2>学生寮（ドーミー）</h2>
          <ul>
            <li>朝・夕の2食付き</li>
            <li>家具・家電がそろっている</li>
            <li>オートロック・管理人常駐で安心</li>
            <li>引越しの荷物が少なくてすむ</li>
          </ul>
          <p className="la-card-cost">
            初年度費用の目安 <strong>約142万円〜</strong>
            <span>（電気代別）</span>
          </p>
        </article>

        <article className="la-card la-card--apt">
          <h2>アパート・マンション</h2>
          <ul>
            <li>周辺家賃相場は月 4.5〜6.5万円</li>
            <li>自炊など生活スタイルを自由に選べる</li>
            <li>毎年の管理費（約22万円）が通常かからない</li>
            <li>工夫しだいで費用を抑えられる場合も</li>
          </ul>
          <p className="la-card-cost">
            初期費用の目安 <strong>家賃の4〜6か月分</strong>
            <span>（敷金・礼金・仲介手数料など）</span>
          </p>
        </article>
      </section>

      <section className="la-sim">
        <p className="la-eyebrow">学生寮の費用を「総額」で見る</p>
        <h2 className="la-h2">月額表示と実際に払う額は印象が変わります</h2>
        <p className="la-sim-note">
          寮費（月額）のほかに、入館費・保証金・年間管理費・通信費がかかります。
          部屋タイプを選ぶと、1年目と4年間の総額の目安が出ます。
        </p>

        <div className="la-tabs" role="tablist" aria-label="部屋タイプ">
          {DORM_ROOMS.map((r, i) => (
            <button
              key={r.label}
              role="tab"
              aria-selected={i === roomIdx}
              aria-controls="la-breakdown"
              aria-label={`${r.label}を選択`}
              className={"la-tab" + (i === roomIdx ? " is-active" : "")}
              onClick={() => setRoomIdx(i)}
            >
              {r.label}
            </button>
          ))}
        </div>

        <div id="la-breakdown" className="la-breakdown" role="tabpanel" aria-labelledby="la-breakdown">
          <div className="la-bd-col">
            <h3>1年目にかかるお金</h3>
            <dl>
              <div><dt>寮費（{yen(room.monthly)}×12か月）</dt><dd>{yen(d.room)}</dd></div>
              <div><dt>年間管理費</dt><dd>{yen(DORM_FIXED.mgmtYear)}</dd></div>
              <div><dt>通信設備費（{yen(DORM_FIXED.netMonthly)}×12）</dt><dd>{yen(d.net)}</dd></div>
              <div><dt>入館費（4年で1回）</dt><dd>{yen(DORM_FIXED.entry)}</dd></div>
              <div><dt>保証金（4年で1回）</dt><dd>{yen(DORM_FIXED.deposit)}</dd></div>
              <div className="la-bd-total"><dt>1年目合計</dt><dd>{yen(d.firstYear)}<span>＋電気代</span></dd></div>
            </dl>
          </div>

          <div className="la-bd-col la-bd-col--four">
            <h3>4年間の合計</h3>
            <p className="la-four-num">{yen(d.fourYear)}<span>＋電気代</span></p>
            <p className="la-four-sub">
              入館費・保証金は4年で1回、寮費・管理費・通信費は毎年かかる前提の目安です。
            </p>
          </div>
        </div>

        <p className="la-disclaimer">
          ※ 金額は2025年時点の公開情報をもとにした目安です。部屋タイプや契約年により変わります。
          最新の正確な費用は、必ずドーミー（共立メンテナンス）の資料・公式サイトでご確認ください。
        </p>
      </section>

      <section className="la-compare">
        <h2 className="la-h2">寮とアパート、どう違う？</h2>
        <div className="la-table-wrap">
          <table className="la-table">
            <thead>
              <tr><th></th><th>学生寮</th><th>アパート</th></tr>
            </thead>
            <tbody>
              <tr><th>食事</th><td>朝夕2食付き</td><td>自炊・外食</td></tr>
              <tr><th>家具・家電</th><td>そろっている</td><td>自分で用意</td></tr>
              <tr><th>セキュリティ</th><td>オートロック・管理人常駐</td><td>物件による</td></tr>
              <tr><th>毎年の管理費</th><td>あり（約22万円）</td><td>通常なし</td></tr>
              <tr><th>初期費用</th><td>入館費・保証金</td><td>敷金・礼金・仲介手数料</td></tr>
              <tr><th>費用の見えやすさ</th><td>入る前にほぼ確定</td><td>物件や生活で変動</td></tr>
            </tbody>
          </table>
        </div>
        <p className="la-compare-note">
          食費・家具家電・防犯まで含めて考えると、トータルでは大きな差にならないことも多いです。
          「安さ」だけでなく、生活のしやすさや安心感も含めて選ぶのがおすすめです。
        </p>
      </section>

      <section className="la-references">
        <h2 className="la-h2">参考になるリンク</h2>
        <div className="la-reference-grid">
          <a href="https://www.jumonji-u.ac.jp/jumonji-style/about/event-calender/" target="_blank" rel="noopener noreferrer" className="la-reference-card">
            <h3>十文字学園女子大学</h3>
            <p>受験生応援サイト イベントカレンダー</p>
          </a>
          <a href="https://dormy-ac.com/page/jumonji/" target="_blank" rel="noopener noreferrer" className="la-reference-card">
            <h3>ドーミー公式サイト</h3>
            <p>十文字学園女子大学向け学生寮の詳細情報・資料請求</p>
          </a>
          <a href="https://www.suumo.jp/" target="_blank" rel="noopener noreferrer" className="la-reference-card">
            <h3>SUUMO</h3>
            <p>賃貸物件検索。東京都近郊のアパート探しに</p>
          </a>
          <a href="https://www.homes.co.jp/" target="_blank" rel="noopener noreferrer" className="la-reference-card">
            <h3>HOMES</h3>
            <p>賃貸・売買物件情報。家賃相場や条件検索</p>
          </a>
          <a href="https://www.chintai.net/" target="_blank" rel="noopener noreferrer" className="la-reference-card">
            <h3>賃貸情報 チンタイ</h3>
            <p>礼金なし・敷金なしなど条件に合わせた検索</p>
          </a>
        </div>
      </section>

      <footer className="la-foot">
        <p>
          住まい選びで迷ったら、オープンキャンパスや個別相談で気軽に聞いてください。
          先輩たちの実際の暮らし方もお伝えできます。
        </p>
      </footer>
    </div>
  );
}
