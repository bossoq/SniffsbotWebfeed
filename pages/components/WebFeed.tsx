import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCartPlus,
  faCoins,
  faCrosshairs,
  faGift,
  faHandHoldingUsd,
  faHandPointLeft,
  faHandPointUp,
  faMusic,
  faRss,
  faRunning,
  faTicketAlt,
  faUserAltSlash,
  faUserSecret,
} from '@fortawesome/free-solid-svg-icons'

const defaultSpan = 'icon-text is-align-items-center'
const text = 'text-white'

const defaultTagName = 'tag is-info has-text-weight-bold ml-2 mr-2 is-medium'
const defaultTagViewer = 'tag is-black has-text-weight-bold ml-2 mr-2 is-medium'
const defaultSnapName = 'tag is-danger has-text-weight-bold ml-2 mr-2 is-medium'
const defaultInfo = 'tag is-warning has-text-weight-bold ml-2 mr-2 is-medium'

const WebFeedComponent = (props: any): JSX.Element => {
  switch (props.type) {
    case 'webfeed':
      if (props.message.status) {
        return (
          <span className={defaultSpan}>
            <span className={defaultInfo}>
              <span className="icon">
                <FontAwesomeIcon icon={faRss} />
              </span>
            </span>
            <span className={text}>Webfeed System started</span>
          </span>
        )
      } else {
        return (
          <span className={defaultSpan}>
            <span className={defaultInfo}>
              <span className="icon">
                <FontAwesomeIcon icon={faRss} />
              </span>
            </span>
            <span className={text}>Webfeed System stopped</span>
          </span>
        )
      }
    case 'subPayout':
      return (
        <>
          <p>
            <span className={defaultSpan}>
              <span className={defaultTagName}>{props.message.username}</span>
              <span className={text}>
                ได้รับ
                <span className="icon">
                  <FontAwesomeIcon icon={faCoins} />
                </span>
              </span>
              <span className={text}>
                {props.message.coin} Sniffscoin จากการ Subscribe
              </span>
              <span className={defaultTagViewer}>T{props.message.plan}</span>
            </span>
          </p>
          <p>
            <span className={defaultSpan}>
              <span className={text}>สมาชิก</span>
              <span className={defaultTagViewer}>{props.message.viewer}</span>
              <span className={text}>
                คน ได้รับ 1 Sniffscoin
                <span className="icon">
                  <FontAwesomeIcon icon={faCoins} />
                </span>
              </span>
              <span className={text}>จากการ Subscribe ของ</span>
              <span className={defaultTagName}>{props.message.username}</span>
            </span>
          </p>
        </>
      )
    case 'giftSubPayout':
      return (
        <>
          <p>
            <span className={defaultSpan}>
              <span className={defaultTagName}>{props.message.username}</span>
              <span className={text}>
                ได้รับ
                <span className="icon">
                  <FontAwesomeIcon icon={faCoins} />
                </span>
                {props.message.coin} Sniffscoin จากการ
                <span className="icon">
                  <FontAwesomeIcon icon={faGift} />
                </span>
                Gift ให้
              </span>
              <span className={defaultTagName}>{props.message.recipent}</span>
              <span className={defaultTagViewer}>T{props.message.plan}</span>
            </span>
          </p>
          <p>
            <span className={defaultSpan}>
              <span className={defaultTagName}>{props.message.recipent}</span>
              <span className={text}>
                ได้รับ
                <span className="icon">
                  <FontAwesomeIcon icon={faCoins} />
                </span>
                {props.message.coin} Sniffscoin
              </span>
            </span>
          </p>
          <p>
            <span className={defaultSpan}>
              <span className={text}>สมาชิก</span>
              <span className={defaultTagViewer}>{props.message.viewer}</span>
              <span className={text}>
                คน ได้รับ 1 Sniffscoin
                <span className="icon">
                  <FontAwesomeIcon icon={faCoins} />
                </span>
              </span>
            </span>
          </p>
        </>
      )
    case 'giftMystSubPayout':
      return (
        <span className={defaultSpan}>
          <span className={defaultTagName}>{props.message.username}</span>
          <span className={text}>
            ได้รับ
            <span className="icon">
              <FontAwesomeIcon icon={faCoins} />
            </span>
            {props.message.coin} Sniffscoin จากการ
            <span className="icon">
              <FontAwesomeIcon icon={faGift} />
            </span>
            Gift Sub x {props.message.giftCount}
          </span>
          <span className={defaultTagViewer}>T{props.message.plan}</span>
        </span>
      )
    case 'anonGiftSubPayout':
      return (
        <>
          <p>
            <span className={defaultSpan}>
              <span className={defaultTagName}>{props.message.recipent}</span>
              <span className={text}>
                ได้รับ
                <span className="icon">
                  <FontAwesomeIcon icon={faCoins} />
                </span>
                {props.message.coin} Sniffscoin
              </span>
              <span className={defaultTagViewer}>T{props.message.plan}</span>
            </span>
          </p>
          <p>
            <span className={defaultSpan}>
              <span className={text}>สมาชิก</span>
              <span className={defaultTagViewer}>{props.message.viewer}</span>
              <span className={text}>
                คน ได้รับ 1 Sniffscoin
                <span className="icon">
                  <FontAwesomeIcon icon={faCoins} />
                </span>
              </span>
            </span>
          </p>
        </>
      )
    case 'raidfeed':
      return (
        <span className={defaultSpan}>
          <span className={text}>ขอบคุณ</span>
          <span className={defaultTagName}>{props.message.username}</span>
          <span className={text}>สำหรับการ Raid ผู้ชมจำนวน</span>
          <span className={defaultTagViewer}>{props.message.viewer}</span>
          <span className={text}>คน</span>
        </span>
      )
    case 'bitfeed':
      return (
        <span className={defaultSpan}>
          <span className={defaultTagName}>{props.message.username}</span>
          <span className={text}>
            ได้รับ
            <span className="icon">
              <FontAwesomeIcon icon={faCoins} />
            </span>
            {props.message.coin} Sniffscoin จากการให้ {props.message.bits} bit
          </span>
        </span>
      )
    case 'paydayfeed':
      return (
        <span className={defaultSpan}>
          <span className={text}>สมาชิก</span>
          <span className={defaultTagViewer}>{props.message.viewer}</span>
          <span className={text}>
            คน ได้รับ {props.message.coin} Sniffscoin
            <span className="icon">
              <FontAwesomeIcon icon={faCoins} />
            </span>
          </span>
        </span>
      )
    case 'givecoinfeed':
      return (
        <span className={defaultSpan}>
          <span className={defaultTagName}>{props.message.username}</span>
          <span className={text}>
            ได้รับ
            <span className="icon">
              <FontAwesomeIcon icon={faCoins} />
            </span>
            {props.message.coin} Sniffscoin
          </span>
        </span>
      )
    case 'deductcoinfeed':
      return (
        <span className={defaultSpan}>
          <span className={defaultTagName}>{props.message.username}</span>
          <span className={text}>
            ถูกหัก
            <span className="icon">
              <FontAwesomeIcon icon={faCoins} />
            </span>
            {props.message.coin} Sniffscoin
          </span>
        </span>
      )
    case 'sniffsnos':
      return (
        <span className={defaultSpan}>
          <span className={defaultTagName}>SNIFFSNOS</span>
          <span className={text}>
            <span className="icon">
              <FontAwesomeIcon icon={faHandPointUp} />
            </span>
          </span>
          <span className={defaultSnapName}>{props.message.username}</span>
          <span className={text}>
            (
            <span className="icon">
              <FontAwesomeIcon icon={faUserAltSlash} />
            </span>
            {props.message.idx}/{props.message.total})
          </span>
        </span>
      )
    case 'songReqStat':
      if (props.message.status) {
        return (
          <span className={defaultSpan}>
            <span className={defaultInfo}>
              <span className="icon">
                <FontAwesomeIcon icon={faMusic} />
              </span>
            </span>
            <span className={text}>เปิดระบบขอเพลง (!sr)</span>
          </span>
        )
      } else {
        return (
          <span className={defaultSpan}>
            <span className={defaultInfo}>
              <span className="icon">
                <FontAwesomeIcon icon={faMusic} />
              </span>
            </span>
            <span className={text}>ปิดระบบขอเพลง</span>
          </span>
        )
      }
    case 'userSongReq':
      return (
        <span className={defaultSpan}>
          <span className={defaultTagName}>{props.message.username}</span>
          <span className={text}>
            โหวตเพลง {props.message.songName}
            <span className="icon">
              <FontAwesomeIcon icon={faMusic} />
            </span>
            ({props.message.coinleft})
          </span>
        </span>
      )
    case 'shooterSuicideFeed':
      return (
        <span className={defaultSpan}>
          <span className={defaultSnapName}>{props.message.username}</span>
          <span className={text}>
            <span className="icon">
              <FontAwesomeIcon icon={faHandPointLeft} />
            </span>
            แวะไปเยือนยมโลก {props.message.timeout}s
          </span>
        </span>
      )
    case 'shooterSuccessFeed':
      return (
        <>
          <span className={defaultSpan}>
            <span className={defaultTagName}>{props.message.username}</span>
            <span className={text}>
              จ้างมือปืนสนิฟ
              <span className="icon">
                <FontAwesomeIcon icon={faCrosshairs} />
              </span>
              ยิง
            </span>
            <span className={defaultSnapName}>{props.message.target}</span>
            <span className={text}>
              {props.message.timeout}s ({props.message.coinleft})
            </span>
          </span>
          <audio autoPlay>
            <source src="/reload.mp3" type="audio/mpeg" />
          </audio>
        </>
      )
    case 'shooterDodgeFeed':
      return (
        <>
          <span className={defaultSpan}>
            <span className={defaultSnapName}>{props.message.target}</span>
            <span className={text}>
              หลบมือปืนสนิฟได้
              <span className="icon">
                <FontAwesomeIcon icon={faRunning} />
              </span>
              ({props.message.dodgeRate.toFixed()}%)
            </span>
          </span>
          <audio autoPlay>
            <source src="/dodge.mp3" type="audio/mpeg" />
          </audio>
        </>
      )
    case 'shooterUnsuccessFeed':
      return (
        <span className={defaultSpan}>
          <span className={defaultSnapName}>{props.message.username}</span>
          <span className={text}>
            ไม่มีเงินจ้างมือปืน ถูกยิงเอง
            <span className="icon">
              <FontAwesomeIcon icon={faCrosshairs} />
            </span>
            {props.message.timeout}s
          </span>
        </span>
      )
    case 'shooterVIPFeed':
      return (
        <span className={defaultSpan}>
          <span className={defaultSnapName}>{props.message.username}</span>
          <span className={text}>
            บังอาจยิง
            <span className="icon">
              <FontAwesomeIcon icon={faUserSecret} />
            </span>
            VIP โดนยิงเอง
            <span className="icon">
              <FontAwesomeIcon icon={faCrosshairs} />
            </span>
            {props.message.timeout}s
          </span>
        </span>
      )
    case 'lottoStat':
      if (props.message.status) {
        return (
          <span className={defaultSpan}>
            <span className={defaultInfo}>
              <span className="icon">
                <FontAwesomeIcon icon={faCartPlus} />
              </span>
            </span>
            <span className={text}>เปิดระบบ SniffsLotto (!lotto)</span>
          </span>
        )
      } else {
        return (
          <span className={defaultSpan}>
            <span className={defaultInfo}>
              <span className="icon">
                <FontAwesomeIcon icon={faCartPlus} />
              </span>
            </span>
            <span className={text}>ปิดระบบ SniffsLotto รอประกาศรางวัล</span>
          </span>
        )
      }
    case 'buyLottoFeed':
      return (
        <span className={defaultSpan}>
          <span className={defaultTagName}>{props.message.username}</span>
          <span className={text}>
            ซื้อ
            <span className="icon">
              <FontAwesomeIcon icon={faCartPlus} />
            </span>
            SniffsLotto หมายเลข {props.message.lotto} สำเร็จ (
            {props.message.coinleft})
          </span>
        </span>
      )
    case 'drawLottoFeed':
      return (
        <>
          <p>
            <span className={defaultSpan}>
              <span className={defaultInfo}>SniffsLotto</span>
              <span className={text}>เลขที่ออก</span>
              <span className={defaultTagViewer}>
                {props.message.winNumber}
              </span>
              <span className={text}>
                เงินรางวัลรวม
                <span className="icon">
                  <FontAwesomeIcon icon={faCoins} />
                </span>
                {props.message.payout} Sniffscoin
              </span>
            </span>
          </p>
          {Object.entries(props.message.usernames).map(([username, prize]) => {
            return (
              <p>
                <span className={defaultSpan}>
                  <span className={defaultTagName}>{username}</span>
                  <span className={text}>
                    ได้รับ
                    <span className="icon">
                      <FontAwesomeIcon icon={faCoins} />
                    </span>
                    {prize} Sniffscoin
                  </span>
                </span>
              </p>
            )
          })}
        </>
      )
    case 'raffleStat':
      if (props.message.status) {
        return (
          <span className={defaultSpan}>
            <span className={defaultInfo}>
              <span className="icon">
                <FontAwesomeIcon icon={faTicketAlt} />
              </span>
            </span>
            <span className={text}>เปิดให้ซื้อตั๋วชิงโชค (!raffle)</span>
          </span>
        )
      } else {
        return (
          <span className={defaultSpan}>
            <span className={defaultInfo}>
              <span className="icon">
                <FontAwesomeIcon icon={faTicketAlt} />
              </span>
            </span>
            <span className={text}>ปิดการซื้อตั๋วชิงโชค รอจับรางวัล</span>
          </span>
        )
      }
    case 'buyRaffleFeed':
      return (
        <span className={defaultSpan}>
          <span className={defaultTagName}>{props.message.username}</span>
          <span className={text}>
            ซื้อตั๋วชิงโชค
            <span className="icon">
              <FontAwesomeIcon icon={faTicketAlt} />
            </span>
            {props.message.count} ใบ
          </span>
        </span>
      )
    case 'drawRaffleFeed':
      return (
        <span className={defaultSpan}>
          <span className={defaultTagName}>{props.message.username}</span>
          <span className={text}>
            ได้รับรางวัล
            <span className="icon">
              <FontAwesomeIcon icon={faTicketAlt} />
            </span>
          </span>
        </span>
      )
    case 'coinflipFeed':
      if (props.message.win) {
        return (
          <span className={defaultSpan}>
            <span className={defaultTagName}>{props.message.username}</span>
            <span className={text}>
              ได้รับ {props.message.prize} Sniffscoin
              <span className="icon">
                <FontAwesomeIcon icon={faHandHoldingUsd} />
              </span>
              Coinflip ออก{props.message.winside} ({props.message.coinleft})
            </span>
          </span>
        )
      } else {
        return (
          <span className={defaultSpan}>
            <span className={defaultSnapName}>{props.message.username}</span>
            <span className={text}>
              เสียใจด้วยนะ Coinflip ออก{props.message.winside} (
              {props.message.coinleft})
            </span>
          </span>
        )
      }
    default:
      return <span className={defaultSpan}></span>
  }
}

export default WebFeedComponent
