import { RadioData } from '../components/RadioData'

const data: RadioData[] = [
  {
    id: 'arispa',
    name: 'ありっちゃありスパーク',
    tag: 'ありっちゃありスパーク',
    regex: 'ありっちゃありスパーク(\\d{1,3})',
    digits_1: 3,
    digits_2: 3,
    url: 'arispa/[num_1]/[num_2].mp3',
    oldest: 1,
    latest: 0,
    ignore: []
  },
  {
    id: 'kayouradio',
    name: 'マンスーン・ヤスミノの音声放送',
    tag: '音声放送',
    regex: '【(\\d{1,3})】',
    digits_1: 3,
    digits_2: 3,
    url: 'kayouradio/[num_1]/[num_2].mp3',
    oldest: 0,
    latest: 0,
    ignore: []
  },
  {
    id: 'itm',
    name: '長島・加藤のイうてるマにイっちゃってる',
    tag: 'イうてるマにイっちゃってる',
    regex: '【(\\d{1,3})】',
    digits_1: 3,
    digits_2: 2,
    url: 'itm/[num_1]/itm_[num_2].mp3',
    oldest: 1,
    latest: 0,
    ignore: []
  },
  {
    id: 'tokumei',
    name: 'ARuFa・恐山の匿名ラジオ',
    tag: '匿名ラジオ',
    regex: '【(\\d{1,3})】',
    digits_1: 3,
    digits_2: 0,
    url: 'tokumei/[num_1].mp3',
    oldest: 1,
    latest: 0,
    ignore: [217]
  },
  {
    id: 'kamamicu',
    name: 'かまってみくのしんLove you',
    tag: 'かまってみくのしん',
    regex: '【(\\d{1,3})】',
    digits_1: 0,
    digits_2: 0,
    url: 'kamamicu/l[num_1]/l[num_2].mp3',
    oldest: 1,
    latest: 0,
    ignore: []
  },
  {
    id: 'ariari',
    name: 'ありっちゃありアワー',
    tag: 'ありっちゃありアワー',
    regex: '',
    digits_1: 3,
    digits_2: 3,
    url: 'ariari/[num_1]/[num_2].mp3',
    oldest: 1,
    latest: 158,
    ignore: []
  },
  {
    id: 'soujanee',
    name: 'そうじゃねえだろのラジオじゃねえだろ！',
    tag: 'ラジオじゃねえだろ',
    regex: '',
    digits_1: 4,
    digits_2: 0,
    url: 'soujanee/[num_1]/soujanee.mp3',
    oldest: 1,
    latest: 100,
    ignore: []
  },
  {
    id: 'pakupaku-1',
    name: 'たかや・マンスーンのパクパクラジオ [1~32]',
    tag: 'パクパクラジオ',
    regex: '',
    digits_1: 3,
    digits_2: 3,
    url: 'pakupaku/[num_1]/[num_2].mp3',
    oldest: 1,
    latest: 32,
    ignore: []
  },
  {
    id: 'pakupaku-2',
    name: 'たかや・マンスーンのパクパクラジオ [33~49]',
    tag: 'パクパクラジオ',
    regex: '',
    digits_1: 3,
    digits_2: 3,
    url: 'pakupaku/[num_1]/pak[num_2].mp3',
    oldest: 33,
    latest: 49,
    ignore: []
  },
  {
    id: 'dainaka',
    name: 'みくのしん・おおきちの大仲良しラジオ',
    tag: '大仲良しラジオ',
    regex: '',
    digits_1: 3,
    digits_2: 3,
    url: 'dainaka/[num_1]/[num_2].mp3',
    oldest: 1,
    latest: 31,
    ignore: []
  },
  {
    id: 'sebu-nagata-1',
    name: 'セブ山・永田の金曜ラジオ [1~104]',
    tag: '金曜ラジオ',
    regex: '',
    digits_1: 0,
    digits_2: 0,
    url: 'sebu-nagata/[num_1]kaime.mp3',
    oldest: 1,
    latest: 104,
    ignore: []
  },
  {
    id: 'sebu-nagata-2',
    name: 'セブ山・永田の金曜ラジオ [105~250]',
    tag: '金曜ラジオ',
    regex: '',
    digits_1: 0,
    digits_2: 0,
    url: 'sebu-nagata/[num_1]kaime/[num_2]kaime.mp3',
    oldest: 105,
    latest: 250,
    ignore: []
  },
  {
    id: 'shimowata-1',
    name: 'シモダテツヤと私（地獄のミサワ）[1~32]',
    tag: 'シモダテツヤと私（地獄のミサワ）',
    regex: '',
    digits_1: 3,
    digits_2: 3,
    url: 'shimowata/[num_1]/[num_2].mp3',
    oldest: 1,
    latest: 32,
    ignore: []
  },
  {
    id: 'shimowata-2',
    name: 'シモダテツヤと私（ヨッピー）[33~58]',
    tag: 'シモダテツヤと私（ヨッピー）',
    regex: '',
    digits_1: 3,
    digits_2: 3,
    url: 'shimowata/[num_1]/[num_2].mp3',
    oldest: 33,
    latest: 58,
    ignore: []
  }
]

export default data