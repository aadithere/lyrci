import './style.css'
import mapA from './assets/map-3d-a.jpg'
import mapB from './assets/map-3d-b.jpg'

document.body.classList.toggle('is-desktop', Boolean(window.verci))

/* ---------------- languages ---------------- */

const I18N = {
  en: {
    size: 'Size', font: 'Font', lock: 'Lock Screen', aesthetics: 'Aesthetics', listen: 'Listen',
    waitingTitle: 'Waiting for playback',
    waitingHint: 'Open Spotify or Apple Music and press play — Spotify Connect works too.',
    listeningTitle: 'Listening…', listeningHint: 'Waiting for the first track…',
    nothingTitle: 'Nothing playing', nothingHint: 'Open Spotify or Apple Music and press play.',
    noLyricsTitle: 'No lyrics for “{track}”',
    noLyricsHint: 'Neither LRCLIB nor lyrics.ovh has a match. Try another track.',
    checkAgain: 'Check again',
  },
  hi: {
    size: 'आकार', font: 'फ़ॉन्ट', lock: 'लॉक स्क्रीन', aesthetics: 'सौंदर्य', listen: 'सुनें',
    waitingTitle: 'प्लेबैक का इंतज़ार',
    waitingHint: 'Spotify या Apple Music खोलें और चलाएँ — Spotify Connect भी काम करता है।',
    listeningTitle: 'सुन रहे हैं…', listeningHint: 'पहले ट्रैक का इंतज़ार…',
    nothingTitle: 'कुछ नहीं चल रहा', nothingHint: 'Spotify या Apple Music खोलें और चलाएँ।',
    noLyricsTitle: '“{track}” के बोल नहीं मिले',
    noLyricsHint: 'LRCLIB और lyrics.ovh पर कोई मैच नहीं। दूसरा ट्रैक आज़माएँ।',
    checkAgain: 'फिर देखें',
  },
  es: {
    size: 'Tamaño', font: 'Fuente', lock: 'Bloqueo', aesthetics: 'Estética', listen: 'Escuchar',
    waitingTitle: 'Esperando reproducción',
    waitingHint: 'Abre Spotify o Apple Music y pulsa play — Spotify Connect también funciona.',
    listeningTitle: 'Escuchando…', listeningHint: 'Esperando la primera canción…',
    nothingTitle: 'Nada sonando', nothingHint: 'Abre Spotify o Apple Music y pulsa play.',
    noLyricsTitle: 'Sin letra para “{track}”',
    noLyricsHint: 'Ni LRCLIB ni lyrics.ovh tienen coincidencia. Prueba otra canción.',
    checkAgain: 'Comprobar',
  },
  fr: {
    size: 'Taille', font: 'Police', lock: 'Verrouillage', aesthetics: 'Esthétique', listen: 'Écouter',
    waitingTitle: 'En attente de lecture',
    waitingHint: 'Ouvrez Spotify ou Apple Music et lancez la lecture — Spotify Connect fonctionne aussi.',
    listeningTitle: 'À l’écoute…', listeningHint: 'En attente du premier morceau…',
    nothingTitle: 'Rien en lecture', nothingHint: 'Ouvrez Spotify ou Apple Music et lancez la lecture.',
    noLyricsTitle: 'Pas de paroles pour « {track} »',
    noLyricsHint: 'Ni LRCLIB ni lyrics.ovh n’ont de résultat. Essayez un autre morceau.',
    checkAgain: 'Vérifier',
  },
  de: {
    size: 'Größe', font: 'Schrift', lock: 'Sperrbildschirm', aesthetics: 'Ästhetik', listen: 'Anhören',
    waitingTitle: 'Warte auf Wiedergabe',
    waitingHint: 'Spotify oder Apple Music öffnen und abspielen — Spotify Connect funktioniert auch.',
    listeningTitle: 'Höre zu…', listeningHint: 'Warte auf den ersten Titel…',
    nothingTitle: 'Nichts läuft', nothingHint: 'Spotify oder Apple Music öffnen und abspielen.',
    noLyricsTitle: 'Kein Text für „{track}“',
    noLyricsHint: 'Weder LRCLIB noch lyrics.ovh haben einen Treffer. Anderen Titel versuchen.',
    checkAgain: 'Erneut prüfen',
  },
  pt: {
    size: 'Tamanho', font: 'Fonte', lock: 'Bloqueio', aesthetics: 'Estética', listen: 'Ouvir',
    waitingTitle: 'Aguardando reprodução',
    waitingHint: 'Abra o Spotify ou Apple Music e dê play — o Spotify Connect também funciona.',
    listeningTitle: 'Ouvindo…', listeningHint: 'Aguardando a primeira faixa…',
    nothingTitle: 'Nada tocando', nothingHint: 'Abra o Spotify ou Apple Music e dê play.',
    noLyricsTitle: 'Sem letra para “{track}”',
    noLyricsHint: 'Nem o LRCLIB nem o lyrics.ovh têm correspondência. Tente outra faixa.',
    checkAgain: 'Verificar',
  },
  ja: {
    size: 'サイズ', font: 'フォント', lock: 'ロック画面', aesthetics: '外観', listen: '聴く',
    waitingTitle: '再生を待っています',
    waitingHint: 'Spotify か Apple Music で再生してください — Spotify Connect でも動きます。',
    listeningTitle: '聴き取り中…', listeningHint: '最初の曲を待っています…',
    nothingTitle: '再生中ではありません', nothingHint: 'Spotify か Apple Music で再生してください。',
    noLyricsTitle: '「{track}」の歌詞がありません',
    noLyricsHint: 'LRCLIB にも lyrics.ovh にも一致がありません。別の曲をお試しください。',
    checkAgain: '再確認',
  },
  ar: {
    size: 'الحجم', font: 'الخط', lock: 'شاشة القفل', aesthetics: 'المظهر', listen: 'استماع',
    waitingTitle: 'بانتظار التشغيل',
    waitingHint: 'افتح Spotify أو Apple Music واضغط تشغيل — يعمل Spotify Connect أيضًا.',
    listeningTitle: 'جارٍ الاستماع…', listeningHint: 'بانتظار أول مقطع…',
    nothingTitle: 'لا شيء يعمل', nothingHint: 'افتح Spotify أو Apple Music واضغط تشغيل.',
    noLyricsTitle: 'لا كلمات لـ «{track}»',
    noLyricsHint: 'لا يوجد تطابق في LRCLIB أو lyrics.ovh. جرّب مقطعًا آخر.',
    checkAgain: 'تحقق مرة أخرى',
  },
}

const t = (key) => I18N[state.lang]?.[key] ?? I18N.en[key] ?? key

/* ---------------- word symbols (the Visual map) ---------------- */

const SYMBOLS = {
  time: '⏱', clock: '⏱', hours: '⏱', minutes: '⏱', seconds: '⏱', wait: '⏳', waiting: '⏳',
  soon: '⏳', later: '⏳', until: '⏳', forever: '∞', always: '∞', never: '∅', nothing: '∅',
  night: '☾', midnight: '☾', moon: '☾', moons: '☾', sleep: '☾', dream: '☾', dreams: '☾',
  sun: '☀', sunrise: '☀', sunset: '☀', morning: '☀', day: '☀', noon: '☀', awake: '☀',
  star: '★', stars: '✦', light: '✦', lights: '✦', glow: '✳', shine: '✳', spark: '✧',
  sparks: '✧', neon: '✳', glitter: '✧', sparkle: '✧', hope: '✦', wish: '✦',
  heart: '♡', love: '♡', kiss: '♡', feel: '♡', kind: '♡', hold: '☍', hug: '☍', hands: '☍',
  together: '☍', friend: '☍', friends: '☍', trust: '☍', touch: '☍', need: '☍',
  eyes: '◉', eye: '◉', look: '◉', see: '◉', watch: '◉', now: '◉', sure: '◉', true: '◉',
  real: '◉', know: '◉', understand: '◉', alive: '✺', life: '✺', live: '✺', win: '✺',
  everything: '✺', every: '✺', all: '✺', everywhere: '✺', party: '✺', birthday: '✺',
  smile: '☺', laugh: '☺', happy: '☺', cry: '☂', tears: '☂', tear: '☂', rain: '☂',
  sad: '☹', scared: '◐', dark: '◐', shadow: '◐', doubt: '◐', maybe: '◐', half: '◐',
  cold: '❄', snow: '❄', winter: '❄', storm: '⚡', thunder: '⚡', lightning: '⚡', flash: '⚡',
  fast: '⚡', power: '⚡', charge: '⚡', electric: '⚡', fire: '✧', flame: '✧', ash: '◌',
  water: '≈', sea: '≈', ocean: '≈', tide: '≈', swim: '≈', smooth: '≈', waves: '〜',
  wave: '〜', river: '〜', snake: '〜', beach: '⛱', sail: '⛵', boat: '⛵',
  city: '▦', town: '▦', skyline: '▦', week: '▦', month: '▦', year: '▦', years: '▦',
  home: '⌂', house: '⌂', family: '⌂', hotel: '⌂', room: '▢', window: '▢', windows: '▢',
  open: '▢', out: '▢', outside: '▢', door: '▯', wall: '▯', glass: '◫', mirror: '◫',
  map: '⌖', maps: '⌖', place: '⌖', places: '⌖', here: '⌖', there: '⌖', where: '⌖',
  find: '⌖', found: '⌖', search: '⌖', arrive: '⌖', near: '⌖', close: '☍',
  road: '⌁', street: '⌁', avenue: '⌁', path: '⌁', way: '⌁', bridge: '⌁', tunnel: '⌁',
  car: '⛟', drive: '⛟', ride: '⛟', train: '⛟', station: '⛟', bus: '⛟',
  plane: '✈', flight: '✈', fly: '✈', airport: '✈', far: '↗', beyond: '↗', over: '↗',
  under: '↘', down: '↓', below: '↓', fall: '↓', deep: '↓', up: '↑', above: '↑',
  rise: '↑', climb: '↑', high: '↑', jump: '↑', tall: '↑', left: '←', back: '↩',
  return: '↩', right: '→', next: '→', ahead: '→', go: '→', leave: '→', into: '→',
  around: '↻', turn: '↻', change: '↻', again: '↻', between: '↔', across: '↔',
  wide: '↔', apart: '↔', mountain: '⛰', hill: '⛰', island: '⛰', valley: '⌄',
  tree: '⍋', trees: '⍋', forest: '⍋', leaf: '❦', leaves: '❦', garden: '❦',
  flower: '✿', flowers: '❀', rose: '❀', spring: '❀', pink: '✿', green: '❦',
  wind: '≫', air: '≫', breathe: '≫', smoke: '≫', ghost: '◌', soul: '◌', mind: '◌',
  thought: '◌', quiet: '◌', silence: '◌', whisper: '◌', slow: '◌', calm: '◌',
  memory: '◌', memories: '◌', remember: '◌', forget: '◌', lost: '◌', lose: '◌',
  alone: '◌', lonely: '◌', empty: '◯', white: '◯', off: '◯', black: '●', full: '●',
  color: '◍', colours: '◍', blue: '◍', world: '◍', earth: '◍', planet: '◍',
  gold: '✷', silver: '✶', honey: '✷', sugar: '✷', sweet: '✷', rich: '✷', spice: '✷',
  money: '⛁', coin: '⛁', pay: '⛁', paid: '⛁', buy: '⛁', sell: '⛁', price: '⛁',
  paper: '▤', book: '▤', page: '▤', pages: '▤', read: '▤', story: '▤', chapter: '▤',
  learn: '▤', teach: '▤', write: '✎', wrote: '✎', words: '✎', word: '✎', name: '✎',
  poem: '✎', poetry: '✎', art: '✎', paint: '✎', draw: '✎', ink: '✎', pen: '✎',
  letter: '✉', letters: '✉', message: '✉', call: '☏', phone: '☏', talk: '☏', say: '☏',
  music: '♫', song: '♪', melody: '♫', sing: '♫', voice: '♫', listen: '♫', hear: '♫',
  rhythm: '♬', beat: '♩', notes: '♬', piano: '♬', guitar: '♩', radio: '♫', dance: '♪',
  screen: '▣', photo: '▣', picture: '▣', video: '▣', film: '▣', camera: '▣', inside: '▣',
  code: '⌘', key: '⚿', lock: '⚿', keep: '⚿', work: '⚒', build: '⚒', fix: '⚒', iron: '⚒',
  strong: '⚒', steel: '⚒', stone: '◆', rock: '◆', hard: '◆', sharp: '◇', taste: '◇',
  crown: '♛', king: '♛', queen: '♛', game: '♟', play: '▶', stop: '■', pause: '❚❚',
  peace: '☮', war: '⚔', fight: '⚔', brave: '⚑', flag: '⚑', first: '①', last: '⚑',
  start: '⚑', end: '⚑', run: '⚑', walk: '⚑', stand: '⚑', try: '⚑', one: '①',
  two: '②', three: '③', four: '④', five: '⑤', today: '☀', tomorrow: '☀',
  yesterday: '☾', evening: '☾', late: '☾', early: '☀', summer: '☀',
  autumn: '❦', season: '❀', seasons: '❀', warm: '☼', lighten: '✦',
}

/* ---------------- emoji (what the line is about) ---------------- */

const EMOJI = {
  love: '❤️', heart: '❤️', kiss: '💋', hold: '🫶', stay: '🫶', together: '🫶', hug: '🤗',
  night: '🌙', moon: '🌙', midnight: '🌌', stars: '✨', star: '⭐', lights: '✨', light: '✨',
  glow: '✨', shine: '✨', spark: '✨', sun: '☀️', morning: '🌅', sunset: '🌇', awake: '👀',
  rain: '🌧️', tears: '😢', cry: '😢', sad: '😔', lost: '🧭', alone: '🚶', lonely: '🚶',
  fire: '🔥', flame: '🔥', storm: '⛈️', fast: '⚡', power: '⚡', flash: '⚡',
  city: '🌃', town: '🌃', skyline: '🌃', street: '🛣️', road: '🛣️', drive: '🚗', car: '🚗',
  walk: '🚶', home: '🏠', house: '🏠', window: '🪟', door: '🚪', room: '🛋️',
  music: '🎶', song: '🎵', sing: '🎤', voice: '🎤', dance: '💃', beat: '🥁', rhythm: '🎶',
  time: '⏰', clock: '🕰️', wait: '⏳', slow: '🐢', water: '🌊', sea: '🌊', ocean: '🌊',
  wave: '🌊', tide: '🌊', beach: '🏖️', swim: '🏊', cold: '❄️', snow: '❄️', winter: '❄️',
  summer: '🌞', warm: '🌤️', gold: '🌟', money: '💰', coin: '🪙', pay: '💳', buy: '🛒',
  dream: '💭', dreams: '💭', sleep: '😴', quiet: '🤫', silence: '🤫', whisper: '🤫',
  smile: '😊', happy: '😊', laugh: '😂', broken: '💔', friend: '🫂', name: '📛',
  write: '✍️', letter: '💌', message: '💬', call: '📞', phone: '📱', photo: '📸',
  camera: '📸', film: '🎬', book: '📖', page: '📖', story: '📖', map: '🗺️', place: '📍',
  here: '📍', fly: '✈️', plane: '✈️', train: '🚆', bridge: '🌉', mountain: '⛰️',
  tree: '🌳', forest: '🌲', flower: '🌸', rose: '🌹', garden: '🌿', wind: '🍃',
  breathe: '🌬️', smoke: '💨', ghost: '👻', soul: '👻', mind: '🧠', memory: '🧠',
  world: '🌍', earth: '🌍', planet: '🪐', color: '🎨', blue: '💙', red: '❤️',
  pink: '🩷', green: '💚', black: '🖤', white: '🤍', king: '👑', queen: '👑',
  crown: '👑', game: '🎮', play: '▶️', war: '⚔️', peace: '🕊️', fight: '🥊',
  brave: '🦁', strong: '💪', tired: '😮‍💨', eyes: '👀', eye: '👀', look: '👀',
  see: '👀', coffee: '☕', tea: '☕', drink: '🥤', wine: '🍷', food: '🍽️',
  sweet: '🍬', honey: '🍯', paper: '📄', code: '💻', screen: '💻', key: '🔑',
  lock: '🔒', open: '🔓', glass: '🥃', mirror: '🪞', shadow: '🌑', dark: '🌑',
  neon: '💡', ice: '🧊', autumn: '🍂', spring: '🌱', birthday: '🎂', party: '🎉',
  work: '💼', job: '💼', build: '🔨', fix: '🔧', learn: '📚', teach: '🧑‍🏫',
  read: '📖', art: '🎨', paint: '🎨', draw: '✏️', ink: '🖋️', pen: '🖊️',
  poem: '📜', poetry: '📜', words: '💬', word: '💬', say: '🗣️', talk: '🗣️',
  listen: '👂', hear: '👂', feel: '🫶', touch: '🤝', hands: '🤝', hope: '🌱',
  wish: '🌠', promise: '🤝', truth: '💯', lie: '🤥', secret: '🤫', remember: '🧠',
  forget: '🌀', find: '🔍', search: '🔍', away: '🚶', back: '🔙', go: '🏃',
  run: '🏃', jump: '🤸', fall: '🍂', rise: '🌅', high: '⛰️', deep: '🌊',
  far: '🔭', near: '🤏', big: '🐘', small: '🐜', hot: '🔥', clean: '🧼',
  new: '✨', old: '📜', young: '🌱', fresh: '🌿', real: '💯', fake: '🎭',
  good: '👍', bad: '👎', best: '🏆', first: '🥇', last: '🏁', end: '🏁',
  start: '🚦', today: '📅', tomorrow: '🌅', yesterday: '📼', evening: '🌆',
  early: '🌅', late: '🌙', citylights: '🌃',
}

const EMOJI_I18N = {
  'प्यार': '❤️', 'दिल': '❤️', 'रात': '🌙', 'शहर': '🌃', 'रोशनी': '✨', 'आग': '🔥', 'सपना': '💭',
  amor: '❤️', corazón: '❤️', noche: '🌙', ciudad: '🌃', luz: '✨', fuego: '🔥', sueño: '💭',
  amour: '❤️', cœur: '❤️', nuit: '🌙', ville: '🌃', lumière: '✨', feu: '🔥', rêve: '💭',
  liebe: '❤️', herz: '❤️', nacht: '🌙', stadt: '🌃', licht: '✨', feuer: '🔥', traum: '💭',
  noite: '🌙', cidade: '🌃', luz: '✨', fogo: '🔥', sonho: '💭',
  '愛': '❤️', '夜': '🌙', '街': '🌃', '光': '✨', '火': '🔥', '夢': '💭',
  'حب': '❤️', 'ليل': '🌙', 'مدينة': '🌃', 'نور': '✨', 'نار': '🔥', 'حلم': '💭',
}

const cleanWord = (text) => String(text).replace(/[.,!?…"'“”«»]/g, '').trim()

const MOOD_RULES = [
  { emoji: '🥰', words: ['love', 'heart', 'kiss', 'hold', 'stay', 'together', 'hug', 'kind'] },
  { emoji: '🔥', words: ['fire', 'lights', 'glow', 'shine', 'storm', 'fast', 'flash'] },
  { emoji: '🌙', words: ['night', 'moon', 'dark', 'sleep', 'dream', 'quiet', 'slow', 'midnight'] },
  { emoji: '🌧️', words: ['rain', 'tears', 'cry', 'sad', 'lost', 'alone', 'lonely', 'broken'] },
  { emoji: '🌃', words: ['city', 'street', 'road', 'drive', 'walk', 'town', 'window'] },
  { emoji: '🎶', words: ['music', 'song', 'sing', 'dance', 'voice', 'melody', 'beat'] },
]

/* ---------------- tracks ---------------- */

const TRACKS = [
  {
    title: 'Waiting for playback',
    artist: 'Spotify · Apple Music',
    album: '',
    duration: 240,
    art: 'linear-gradient(150deg, #2a2330, #12101a 60%, #07070b)',
    palette: { c1: '#f4f4f5', c2: '#fb6e90', c3: '#9b9ba3' },
    lines: [],
  },
]

/* ---------------- styles ---------------- */

const STYLES = [
  { id: 'ship', name: 'Ship', group: 'Kinetic type', desc: 'Words land one by one on a wall that drifts in 3D.' },
  { id: 'fisheye', name: 'Fisheye', group: 'Kinetic type', desc: 'A tight stack of three words, bulging through a lens.' },
  { id: 'visual', name: 'Visual', group: 'Kinetic type', desc: 'A centred stack, with an icon for every word that has one.' },
  { id: 'fisheye-visual', name: 'Fisheye Visual', group: 'Kinetic type', desc: 'Fisheye, with icons beside the words that have one.' },
  { id: 'codestyle', name: 'Codestyle', group: 'Motion scenes', desc: 'The lyric typed out as code, under a blinking red cursor.' },
  { id: 'codestyle-visual', name: 'Codestyle Visual', group: 'Motion scenes', desc: 'Codestyle, with icons beside the words that have one.' },
  { id: 'branches', name: 'Branches', group: 'Motion scenes', desc: 'A line draws itself, and each word lights a node on it.' },
  { id: 'web', name: 'Web', group: 'Motion scenes', desc: 'Each line spun into a spider’s web, a strand for every word.' },
  { id: 'constellation', name: 'Constellation', group: 'Motion scenes', desc: 'Each line traced as a constellation, star by star.' },
  { id: 'native-design', name: 'Native Design', group: 'System screens', desc: 'The song as a Messages thread, a bubble for every line.' },
  { id: 'native-money', name: 'Native Design Money', group: 'System screens', desc: 'The song as a run of payments, one for every line.' },
  { id: 'native-map', name: 'Native Design Map', group: 'System screens', desc: 'A walk across San Francisco, with a pin for every line.' },
  { id: 'native-notifications', name: 'Native Design Notifications', group: 'System screens', desc: 'Lines arrive as lock-screen notifications, stacks and widgets.' },
]

const PLACES = ['Ferry Building', 'Union Square', 'Chinatown', 'North Beach', 'Coit Tower', 'Embarcadero Plaza']

const PLACE_INDEX = [
  'Pitampura', 'Kashmere Gate', 'Kamla Nagar', 'Majnu ka Tila', 'Lajpat Nagar',
  'Connaught Place', 'Hauz Khas', 'Chandni Chowk', 'Karol Bagh', 'Rajouri Garden',
  'Nehru Place', 'Dhaula Kuan', 'GTB Nagar', 'Mukherjee Nagar', 'Sarojini Nagar',
  'Khan Market', 'Lodhi Colony', 'Jamia Nagar', 'Paharganj', 'Seelampur',
  'Saket', 'Dwarka', 'Rohini', 'Shahdara', 'Okhla', 'Noida', 'Gurugram',
  'Delhi', 'Mumbai', 'Bengaluru', 'Kolkata', 'Chennai', 'Jaipur', 'Lucknow', 'Goa',
].sort((a, b) => b.split(' ').length - a.split(' ').length)

const PLACE_ALIAS = { gurgaon: 'gurugram', bombay: 'mumbai', bangalore: 'bengaluru', calcutta: 'kolkata', madras: 'chennai' }

function placeAt(li) {
  const line = byLine[li]
  if (!line) return null
  const toks = line.map((w) => PLACE_ALIAS[key(w.text)] || key(w.text))
  for (let i = 0; i < toks.length; i++) {
    for (const name of PLACE_INDEX) {
      const parts = name.toLowerCase().split(' ')
      if (parts.every((part, j) => toks[i + j] === part)) return { name, word: i + parts.length - 1 }
    }
  }
  return null
}

const TILE_MINI = {
  ship: '<span class="mini mini-ship"><span></span><span></span><span></span></span>',
  fisheye: '<span class="mini mini-fisheye"><span>the</span><span>lights</span><span>glow</span></span>',
  visual: '<span class="mini mini-visual"><b>stay <em>✧</em></b></span>',
  'fisheye-visual': '<span class="mini mini-visual"><b>moon <em>☾</em></b></span>',
  codestyle: '<span class="mini mini-code"><span><b>const</b> lyric =</span><span>"city lights"</span></span>',
  'codestyle-visual': '<span class="mini mini-code"><span><b>const</b> lyric =</span><span>"stay ✧"</span></span>',
  branches: '<span class="mini mini-branch"><i></i><i></i><i></i></span>',
  web: '<span class="mini mini-web"><i></i><i></i><i></i></span>',
  constellation: '<span class="mini mini-constellation"><i></i><i></i><i></i></span>',
  'native-design': '<span class="mini mini-native"><span>every clock</span><span>lucky coin</span></span>',
  'native-money': '<span class="mini mini-money"><span>every clock <b>$1.00</b></span><span>lucky coin <b>$2.00</b></span></span>',
  'native-map': '<span class="mini mini-map"><i></i></span>',
  'native-notifications': '<span class="mini mini-notifications"><span></span><span></span><span></span></span>',
}

const TILE_HUES = [
  ['#7d9ec0', '#2a3c55'], ['#c9a2c6', '#3b2740'], ['#d9b6a0', '#3a2a25'],
  ['#9fc2a8', '#26382d'], ['#8fb3c9', '#1f2c3a'], ['#b6a4d6', '#2b2340'],
  ['#e0b3a0', '#3b2a2a'], ['#a6c2d9', '#1f2e3d'], ['#8fa8d9', '#1d2438'],
  ['#8fb8d6', '#1d3240'], ['#b7c9a2', '#2a3325'], ['#c2d6b0', '#2c3a2a'],
  ['#c9a6b8', '#3a2430'],
]

const PREF_KEY = 'verci2-demo-prefs-v2'

const state = {
  styleIndex: 9,
  trackIndex: 0,
  time: 0,
  playing: true,
  scale: 1,
  font: "'Segoe UI Variable Display', 'Segoe UI', sans-serif",
  matchAlbum: true,
  palette: { ...TRACKS[0].palette },
  selected: null,
  pinned: [],
  panel: null,
  showUnlocked: true,
  displayBuilt: true,
  displayStudio: false,
  fsOpen: false,
  audioName: null,
  external: false,
  duration: 0,
  lang: 'en',
  live: { mode: 'waiting', track: '' },
}

/* ---------------- dom ---------------- */

const $ = (id) => document.getElementById(id)
const stage = $('stage')
const previewEl = $('preview')
const previewBg = $('previewBg')
const hiddenNote = $('hiddenNote')
const panel = $('panel')
const tilesEl = $('tiles')
const dotsEl = $('dots')
const metaGroup = $('metaGroup')
const metaTitle = $('metaTitle')
const metaDesc = $('metaDesc')
const selectBtn = $('selectBtn')
const pinBtn = $('pinBtn')
const pbArt = $('pbArt')
const pbTitle = $('pbTitle')
const pbArtist = $('pbArtist')
const pbElapsed = $('pbElapsed')
const pbDuration = $('pbDuration')
const pbFill = $('pbFill')
const pbProgress = $('pbProgress')
const pbPlay = $('pbPlay')
const pbDemo = $('pbDemo')
const sizeRange = $('sizeRange')
const sizeValue = $('sizeValue')
const matchAlbumInput = $('matchAlbum')
const colorLyric = $('colorLyric')
const colorHighlight = $('colorHighlight')
const colorSecondary = $('colorSecondary')
const keepAwakeInput = $('keepAwake')
const showUnlockedInput = $('showUnlocked')
const displayBuiltInput = $('displayBuilt')
const displayStudioInput = $('displayStudio')
const fullscreen = $('fullscreen')
const fsBg = $('fsBg')
const fsLyrics = $('fsLyrics')
const fsMood = $('fsMood')
const fsTrack = $('fsTrack')
const fsTime = $('fsTime')
const fsFill = $('fsFill')
const fsPlay = $('fsPlay')
const toastEl = $('toast')
const audioFile = $('audioFile')
const uiLang = $('uiLang')

let timedLines = []
let words = []
let byLine = []
let wordEls = []
let activeIndex = -2
let styleUpdate = null
let wakeLock = null
let lastFrame = 0
let fsLines = []
let fsLine = -1
let audioEl = null
let toastTimer = 0

/* ---------------- helpers ---------------- */

function withTiming(track) {
  return track.lines.map((line, i) => {
    const next = track.lines[i + 1]
    const span = Math.max(1.6, (next ? next.start : track.duration) - line.start)
    const step = Math.min(0.62, span / (line.words.length + 0.7))
    return {
      start: line.start,
      words: line.words.map((text, j) => ({ text, at: line.start + j * step })),
    }
  })
}

function prepareWords() {
  words = []
  byLine = timedLines.map((line, li) =>
    line.words.map((w) => {
      const entry = { text: w.text, at: w.at, line: li }
      words.push(entry)
      return entry
    }),
  )
}

const RTL_RE = /[\u0590-\u08ff\u0700-\u074f\u0750-\u077f]/

function splitWords(text) {
  const value = String(text).trim()
  if (!value) return []
  if (!/[\u3040-\u30ff\u3400-\u9fff\uac00-\ud7af\u0e00-\u0e7f]/.test(value)) {
    return value.split(/\s+/).filter(Boolean)
  }
  try {
    const segmenter = new Intl.Segmenter(undefined, { granularity: 'word' })
    return [...segmenter.segment(value)].map((part) => part.segment.trim()).filter(Boolean)
  } catch {
    return value.split(/(?=[\u3040-\u30ff\u3400-\u9fff])/).filter(Boolean)
  }
}

const key = (text) => text.toLowerCase().replace(/[^a-z']/g, '')
const symbolFor = (text) => SYMBOLS[key(text)] || ''
const emojiFor = (text) => EMOJI[key(text)] || EMOJI_I18N[cleanWord(text)] || ''

function esc(text) {
  return String(text).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]))
}

function fmt(seconds) {
  const s = Math.max(0, Math.floor(seconds))
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`
}

const placeFor = (li) => PLACES[li % PLACES.length]

function moodFor(li) {
  const lineWords = byLine[li] || []
  const keys = lineWords.map((w) => key(w.text))
  for (const rule of MOOD_RULES) {
    if (keys.some((k) => rule.words.includes(k))) return rule.emoji
  }
  for (const entry of lineWords) {
    const em = EMOJI_I18N[cleanWord(entry.text)]
    if (em) return em
  }
  return '🎧'
}

function toast(message) {
  toastEl.textContent = message
  toastEl.hidden = false
  clearTimeout(toastTimer)
  toastTimer = setTimeout(() => { toastEl.hidden = true }, 5200)
}

/* ---------------- word helpers ---------------- */

function wordSpan(entry, withSymbol = true) {
  const el = document.createElement('span')
  el.className = 'w'
  el.textContent = entry.text
  if (withSymbol) {
    const sym = symbolFor(entry.text)
    if (sym) {
      const s = document.createElement('span')
      s.className = 'w-sym'
      s.textContent = sym
      s.setAttribute('aria-hidden', 'true')
      el.appendChild(s)
    }
  }
  wordEls.push(el)
  return el
}

function highlight(index) {
  if (wordEls.length === words.length) {
    wordEls.forEach((el, i) => {
      el.classList.toggle('is-active', i === index)
      el.classList.toggle('is-sung', index >= 0 && i < index)
    })
  }
  if (styleUpdate) styleUpdate(index)
  updateFullscreen()
}

/* ---------------- style builders ---------------- */

function buildKinetic() {
  const wrap = document.createElement('div')
  wrap.className = 'kinetic'
  timedLines.forEach((line, li) => {
    const p = document.createElement('p')
    p.className = 'k-line'
    byLine[li].forEach((entry) => p.appendChild(wordSpan(entry)))
    wrap.appendChild(p)
  })
  stage.appendChild(wrap)

  styleUpdate = (idx) => {
    const li = idx >= 0 ? words[idx].line : 0
    ;[...wrap.children].forEach((el, i) => {
      el.classList.toggle('is-current', i === li)
      el.style.setProperty('--d', String(Math.min(3, Math.abs(i - li))))
    })
  }
}

function buildCode(withIcons) {
  const card = document.createElement('div')
  card.className = 'code-card'
  card.innerHTML = `
    <div class="code-top"><span class="code-dots"><i></i><i></i><i></i></span><span>verci — lyric.ts</span></div>
    <div class="code-body"><span class="code-gutter" id="codeGutter">01</span><code class="code-text" id="codeText"></code></div>`
  stage.appendChild(card)
  const gutter = card.querySelector('#codeGutter')
  const text = card.querySelector('#codeText')
  let currentLine = -1

  styleUpdate = (idx) => {
    const li = idx >= 0 ? words[idx].line : 0
    if (li !== currentLine) {
      currentLine = li
      gutter.textContent = String(li + 1).padStart(2, '0')
    }
    let local = -1
    if (idx >= 0) local = words.slice(0, idx + 1).filter((w) => w.line === li).length - 1
    const spans = byLine[li]
      .map((entry, j) => {
        const typed = j <= local
        const active = j === local
        const sym = withIcons ? symbolFor(entry.text) : ''
        return `<span class="code-word${typed ? ' is-typed' : ''}${active ? ' is-active' : ''}">${esc(entry.text)}${sym ? ` <span class="w-sym" style="display:inline">${sym}</span>` : ''}</span>`
      })
      .join(' ')
    text.innerHTML = `<span class="code-comment">// line ${li + 1}</span>\n<span class="code-key">const</span> lyric = <span class="code-str">"${spans}"</span><span class="code-caret"></span>`
  }
}

function scenePoints(kind, count) {
  const pts = []
  for (let i = 0; i < count; i++) {
    if (kind === 'branches') {
      const x = count === 1 ? 500 : 120 + (i * 760) / (count - 1)
      pts.push({ x, y: 210 + Math.sin(i * 1.3) * 46 })
    } else if (kind === 'web') {
      const angle = -1.15 + (i * 2.3) / Math.max(1, count - 1)
      const r = 150 + (i % 2) * 34
      pts.push({ x: 500 + Math.cos(angle) * r * 1.5, y: 210 + Math.sin(angle) * r })
    } else {
      const x = count === 1 ? 500 : 160 + (i * 680) / (count - 1)
      pts.push({ x, y: 120 + ((i * 137) % 190) })
    }
  }
  return pts
}

function buildScene(kind) {
  const wrap = document.createElement('div')
  wrap.className = 'scene-wrap'
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  svg.setAttribute('class', 'scene-svg')
  svg.setAttribute('viewBox', '0 0 1000 420')
  svg.setAttribute('preserveAspectRatio', 'none')
  wrap.appendChild(svg)
  const caption = document.createElement('div')
  caption.className = 'scene-caption'
  caption.textContent = kind === 'web' ? 'one strand per word' : kind === 'branches' ? 'one node per word' : 'one star per word'
  wrap.appendChild(caption)
  stage.appendChild(wrap)

  let currentLine = -1

  function draw(li) {
    const lineWords = byLine[li]
    const pts = scenePoints(kind, lineWords.length)
    let markup = ''
    if (kind === 'branches') {
      const d = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x} ${p.y}`).join(' ')
      markup += `<path class="scene-path" d="${d}" />`
      markup += pts.map((p, i) => `<circle class="scene-node" data-i="${i}" cx="${p.x}" cy="${p.y}" r="9" />`).join('')
    } else if (kind === 'web') {
      markup += `<circle class="scene-ring" cx="500" cy="210" r="120" />`
      markup += `<circle class="scene-ring" cx="500" cy="210" r="196" />`
      markup += pts.map((p, i) => `<line class="scene-strand" data-i="${i}" x1="500" y1="210" x2="${p.x}" y2="${p.y}" />`).join('')
      markup += pts.map((p, i) => `<circle class="scene-node" data-i="${i}" cx="${p.x}" cy="${p.y}" r="5" />`).join('')
    } else {
      const d = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x} ${p.y}`).join(' ')
      markup += `<path class="scene-path" d="${d}" />`
      markup += pts.map((p, i) => `<circle class="scene-star" data-i="${i}" cx="${p.x}" cy="${p.y}" r="5" />`).join('')
    }
    svg.innerHTML = markup
    wrap.querySelectorAll('.scene-word').forEach((el) => el.remove())
    lineWords.forEach((entry, i) => {
      const label = document.createElement('span')
      label.className = 'scene-word'
      label.dataset.i = String(i)
      label.textContent = entry.text
      const p = pts[i]
      label.style.left = `${(p.x / 1000) * 100}%`
      label.style.top = `${(p.y / 420) * 100 + (kind === 'branches' ? 9 : -9)}%`
      wrap.appendChild(label)
    })
  }

  styleUpdate = (idx) => {
    const li = idx >= 0 ? words[idx].line : 0
    if (li !== currentLine) {
      currentLine = li
      draw(li)
    }
    let local = -1
    if (idx >= 0) local = words.slice(0, idx + 1).filter((w) => w.line === li).length - 1
    wrap.querySelectorAll('.scene-word').forEach((el) => {
      const i = Number(el.dataset.i)
      el.classList.toggle('is-active', i === local)
      el.classList.toggle('is-sung', i < local)
    })
    svg.querySelectorAll('[data-i]').forEach((el) => {
      el.classList.toggle('is-lit', Number(el.dataset.i) <= local)
    })
  }
}

const PIN_ICON = '<svg viewBox="0 0 24 24" width="11" height="11" aria-hidden="true"><path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10z" fill="currentColor"/><circle cx="12" cy="11" r="2.1" fill="#fff"/></svg>'

function buildNative() {
  const thread = document.createElement('div')
  thread.className = 'nd-thread'
  const stack = document.createElement('div')
  stack.className = 'nd-stack'
  const day = document.createElement('div')
  day.className = 'nd-day'
  day.textContent = 'Today 9:41 PM'
  stack.appendChild(day)
  timedLines.forEach((line, li) => {
    const row = document.createElement('div')
    row.className = `nd-row${li % 2 ? ' out' : ''}`
    const bubble = document.createElement('div')
    bubble.className = 'nd-bubble'
    bubble.dataset.line = String(li)
    if (RTL_RE.test(byLine[li].map((w) => w.text).join(' '))) bubble.dir = 'rtl'
    byLine[li].forEach((entry) => bubble.appendChild(wordSpan(entry)))
    row.appendChild(bubble)
    stack.appendChild(row)
  })
  thread.appendChild(stack)
  stage.appendChild(thread)

  const mapCard = document.createElement('div')
  mapCard.className = 'nd-map'
  mapCard.innerHTML = '<div class="nd-map-canvas"></div>'

  const place = document.createElement('div')
  place.className = 'nd-place'
  place.innerHTML = `${PIN_ICON}<span></span>`

  let current = -1
  let shownPlace = ''
  styleUpdate = (idx) => {
    const li = idx >= 0 ? words[idx].line : 0
    const local = idx >= 0 ? words.slice(0, idx + 1).filter((w) => w.line === li).length - 1 : -1
    if (li !== current) {
      current = li
      thread.querySelectorAll('.nd-bubble').forEach((b, i) => b.classList.toggle('is-current', i === li))
    }
    const found = placeAt(li)
    const heard = found && local >= found.word
    const bubble = thread.querySelector(`.nd-bubble[data-line="${li}"]`)
    if (heard && bubble) {
      if (shownPlace !== found.name) {
        shownPlace = found.name
        mapCard.querySelector('.nd-map-canvas').innerHTML = mapCardMarkup(found.name)
        place.querySelector('span').textContent = found.name
      }
      if (mapCard.parentElement !== bubble) bubble.insertBefore(mapCard, bubble.firstChild)
      if (place.parentElement !== bubble) bubble.appendChild(place)
    } else {
      shownPlace = ''
      mapCard.remove()
      place.remove()
    }
  }
}

function buildMoney() {
  const card = document.createElement('div')
  card.className = 'money-card'
  card.innerHTML = '<div class="money-head"><b>Apple Pay</b><span>Today</span></div>'
  timedLines.forEach((line, li) => {
    const row = document.createElement('div')
    row.className = 'money-row'
    row.innerHTML = `<span class="money-icon">♪</span><span class="money-line"></span><span class="money-amt">$${(li + 1).toFixed(2)}</span>`
    const lineEl = row.querySelector('.money-line')
    byLine[li].forEach((entry) => lineEl.appendChild(wordSpan(entry)))
    card.appendChild(row)
  })
  stage.appendChild(card)

  styleUpdate = (idx) => {
    const li = idx >= 0 ? words[idx].line : 0
    card.querySelectorAll('.money-row').forEach((r, i) => r.classList.toggle('is-current', i === li))
  }
}

function buildMap() {
  const wrap = document.createElement('div')
  wrap.className = 'map-stage'
  wrap.innerHTML = mapSvg()
  stage.appendChild(wrap)

  const card = document.createElement('div')
  card.className = 'map-card'
  card.innerHTML = '<div class="map-place"><i></i><span id="mapPlace"></span></div><div class="map-lyric" id="mapLyric"></div>'
  wrap.appendChild(card)

  const hint = document.createElement('div')
  hint.className = 'map-hint'
  hint.textContent = 'San Francisco · 6 stops'
  wrap.appendChild(hint)

  let currentLine = -1
  styleUpdate = (idx) => {
    const li = idx >= 0 ? words[idx].line : 0
    if (li !== currentLine) {
      currentLine = li
      card.querySelector('#mapPlace').textContent = placeFor(li)
      card.querySelector('#mapLyric').innerHTML = byLine[li]
        .map((entry) => `<span class="w">${esc(entry.text)}</span>`)
        .join(' ')
      wrap.querySelectorAll('.map-pin').forEach((p, i) => p.classList.toggle('is-current', i === li))
    }
    let local = -1
    if (idx >= 0) local = words.slice(0, idx + 1).filter((w) => w.line === li).length - 1
    card.querySelectorAll('.w').forEach((el, i) => {
      el.classList.toggle('is-active', i === local)
      el.classList.toggle('is-sung', i < local)
    })
  }
}

function buildNotifications() {
  const wrap = document.createElement('div')
  wrap.className = 'notif-stage'
  timedLines.forEach((line, li) => {
    const card = document.createElement('div')
    card.className = 'notif'
    card.innerHTML = `<span class="notif-app">v</span><div class="notif-body"><div class="notif-title"><span>Verci</span><span>now</span></div><div class="notif-text"></div></div>`
    const text = card.querySelector('.notif-text')
    byLine[li].forEach((entry) => text.appendChild(wordSpan(entry)))
    wrap.appendChild(card)
  })
  stage.appendChild(wrap)

  styleUpdate = (idx) => {
    const li = idx >= 0 ? words[idx].line : 0
    wrap.querySelectorAll('.notif').forEach((c, i) => c.classList.toggle('is-current', i === li))
  }
}

const builders = {
  ship: buildKinetic,
  fisheye: buildKinetic,
  visual: buildKinetic,
  'fisheye-visual': buildKinetic,
  codestyle: () => buildCode(false),
  'codestyle-visual': () => buildCode(true),
  branches: () => buildScene('branches'),
  web: () => buildScene('web'),
  constellation: () => buildScene('constellation'),
  'native-design': buildNative,
  'native-money': buildMoney,
  'native-map': buildMap,
  'native-notifications': buildNotifications,
}

/* ---------------- Apple-style map artwork ---------------- */

const MAP_POINTS = [
  [300, 150],
  [420, 205],
  [535, 150],
  [650, 235],
  [762, 300],
  [855, 390],
]

function road(x1, y1, x2, y2, width, major = false) {
  const casing = major ? '#d8d2c4' : '#e0dbcf'
  return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${casing}" stroke-width="${width + 3.5}" stroke-linecap="round"/>` +
    `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#fdfcf8" stroke-width="${width}" stroke-linecap="round"/>`
}

function mapSvg() {
  const roads = []
  for (let y = 40; y < 540; y += 62) roads.push(road(0, y, 1000, y, 5))
  for (let x = 30; x < 1000; x += 78) roads.push(road(x, 0, x, 520, 4.5))
  roads.push(road(0, 470, 1000, 250, 10, true))
  roads.push(road(120, 520, 760, 0, 8, true))
  roads.push(road(330, 0, 470, 520, 6, true))

  const route = MAP_POINTS.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0]} ${p[1]}`).join(' ')
  const pins = MAP_POINTS.map(
    ([x, y], i) =>
      `<g class="map-pin" data-i="${i}" transform="translate(${x} ${y})">
        <circle class="pin-halo" r="24" />
        <circle class="pin-body" r="13" />
        <text y="1">${i + 1}</text>
      </g>`,
  ).join('')

  return `<svg viewBox="0 0 1000 520" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <rect width="1000" height="520" fill="#f2efe6"/>
    <rect x="0" y="392" width="1000" height="128" fill="#cfe4c4"/>
    <path d="M0 0 H150 C120 140 96 300 74 520 H0 Z" fill="#a9d0e2"/>
    <path d="M640 520 H1000 V430 C860 470 740 500 640 520 Z" fill="#a9d0e2"/>
    <rect x="238" y="66" width="210" height="118" rx="6" fill="#eae5d8"/>
    <rect x="566" y="86" width="176" height="96" rx="6" fill="#eae5d8"/>
    <rect x="300" y="286" width="228" height="104" rx="6" fill="#eae5d8"/>
    <rect x="640" y="300" width="120" height="90" rx="6" fill="#eae5d8"/>
    ${roads.join('')}
    <path d="${route}" fill="none" stroke="#fff" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="${route}" fill="none" stroke="#2f7cf6" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="336" cy="118" r="4" fill="#f0a23a"/>
    <circle cx="596" cy="300" r="4" fill="#f0a23a"/>
    <circle cx="700" cy="180" r="4" fill="#67b56b"/>
    <text class="map-label" x="28" y="96">Marina Bay</text>
    <text class="map-label" x="470" y="336">Ferry Building</text>
    <text class="map-label" x="700" y="120">Embarcadero</text>
    <text class="map-label map-water-label" x="18" y="250" transform="rotate(-72 18 250)">San Francisco Bay</text>
    ${pins}
  </svg>`
}

function mapCardMarkup(place) {
  const hash = [...place].reduce((sum, ch) => sum + ch.charCodeAt(0), 0)
  const photo = /connaught/i.test(place) || hash % 5 === 0 ? mapB : mapA
  const pinX = 56 + (hash % 26)
  const pinY = 44 + (hash % 16)
  const endX = (pinX / 100) * 360
  const endY = (pinY / 100) * 120
  return `
    <img class="nd-map-photo" src="${photo}" alt="" draggable="false" />
    <svg class="nd-map-route" viewBox="0 0 360 120" preserveAspectRatio="none" aria-hidden="true">
      <path class="route-casing" d="M-12 112 C 70 104, 150 92, ${endX} ${endY}" />
      <path class="route-line" d="M-12 112 C 70 104, 150 92, ${endX} ${endY}" />
    </svg>
    <span class="nd-map-place">${esc(place)}</span>
    <span class="nd-map-brand">◉ Maps</span>
    <span class="nd-map-pin" style="left:${pinX}%;top:${pinY}%"><i></i></span>
  `
}

/* ---------------- render ---------------- */

function liveText() {
  const { mode, track } = state.live
  if (mode === 'nothing') return { title: t('nothingTitle'), hint: t('nothingHint') }
  if (mode === 'listening') return { title: t('listeningTitle'), hint: t('listeningHint') }
  if (mode === 'nolyrics') {
    return { title: t('noLyricsTitle').replace('{track}', track), hint: t('noLyricsHint') }
  }
  return { title: t('waitingTitle'), hint: t('waitingHint') }
}

function refreshLiveText() {
  const box = stage.querySelector('.live-empty')
  if (!box) return
  const { title, hint } = liveText()
  box.querySelector('#liveTitle').textContent = title
  box.querySelector('#liveHint').textContent = hint
  box.querySelector('#liveRetry').textContent = t('checkAgain')
}

function setLiveMode(mode, track = '') {
  state.live = { mode, track }
  refreshLiveText()
}

function applyLanguage() {
  document.documentElement.lang = state.lang
  const labels = { size: 'size', font: 'font', lock: 'lock', aesthetics: 'aesthetics' }
  document.querySelectorAll('.tab').forEach((tab) => {
    tab.textContent = t(labels[tab.dataset.panel])
  })
  audioBtn.textContent = `◴ ${t('listen')}`
  refreshLiveText()
  savePrefs()
}

function liveEmptyEl() {
  const box = document.createElement('div')
  box.className = 'live-empty'
  box.innerHTML = `
    <span class="live-pulse" aria-hidden="true"><i></i></span>
    <h3 id="liveTitle"></h3>
    <p id="liveHint"></p>
    <button class="live-retry" id="liveRetry" type="button"></button>`
  const { title, hint } = liveText()
  box.querySelector('#liveTitle').textContent = title
  box.querySelector('#liveHint').textContent = hint
  box.querySelector('#liveRetry').textContent = t('checkAgain')
  box.querySelector('#liveRetry').addEventListener('click', () => {
    if (window.verci) {
      listenKey = ''
      pollNowPlaying()
    }
  })
  return box
}

function renderStage() {
  const style = STYLES[state.styleIndex]
  stage.dataset.style = style.id
  stage.classList.toggle('stage-native', style.id === 'native')
  stage.innerHTML = ''
  wordEls = []
  activeIndex = -2
  styleUpdate = null
  if (!timedLines.length) {
    stage.appendChild(liveEmptyEl())
    if (state.fsOpen) {
      fsLyrics.innerHTML = ''
      fsLines = []
      fsLine = -1
    }
    updateMeta()
    updateFrame()
    return
  }
  builders[style.id]?.()
  updateMeta()
  updateFrame()
  if (state.fsOpen) renderFullscreen()
}

function applyVars() {
  for (const el of [stage, fullscreen]) {
    el.style.setProperty('--lyric', state.palette.c1)
    el.style.setProperty('--hl', state.palette.c2)
    el.style.setProperty('--sec', state.palette.c3)
    el.style.setProperty('--scale', String(state.scale))
    el.style.setProperty('--lyric-font', state.font)
  }
}

function applyPalette(palette) {
  state.palette = { ...palette }
  colorLyric.value = palette.c1
  colorHighlight.value = palette.c2
  colorSecondary.value = palette.c3
  applyVars()
}

function setTrack(index, { keepTime = false } = {}) {
  stopListening()
  state.trackIndex = (index + TRACKS.length) % TRACKS.length
  const track = TRACKS[state.trackIndex]
  if (!keepTime) state.time = 0
  timedLines = withTiming(track)
  prepareWords()
  previewBg.style.background = track.art
  pbArt.style.background = track.art
  pbTitle.textContent = track.title
  pbArtist.textContent = track.artist
  pbDuration.textContent = fmt(track.duration)
  pbProgress.setAttribute('aria-valuemax', String(Math.round(track.duration)))
  if (state.matchAlbum) applyPalette(track.palette)
  renderStage()
}

function setStyle(index) {
  state.styleIndex = (index + STYLES.length) % STYLES.length
  renderStage()
  savePrefs()
}

function updateMeta() {
  const style = STYLES[state.styleIndex]
  metaGroup.textContent = style.group
  metaTitle.textContent = style.name
  metaDesc.textContent = style.desc
  const isSelected = state.selected === style.id
  selectBtn.textContent = isSelected ? 'Selected' : 'Select'
  selectBtn.classList.toggle('is-selected', isSelected)
  const isPinned = state.pinned.includes(style.id)
  pinBtn.classList.toggle('is-pinned', isPinned)
  pinBtn.setAttribute('aria-pressed', String(isPinned))
  dotsEl.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('is-active', i === state.styleIndex))
  tilesEl.querySelectorAll('.tile').forEach((t) => t.classList.toggle('is-active', t.dataset.style === style.id))
}

function updateFrame() {
  const track = TRACKS[state.trackIndex]
  const duration = state.external && state.duration ? state.duration : track.duration
  const ratio = Math.min(1, state.time / duration)
  pbFill.style.width = `${ratio * 100}%`
  pbElapsed.textContent = fmt(state.time)
  pbProgress.setAttribute('aria-valuenow', String(Math.round(state.time)))

  let index = -1
  for (let i = 0; i < words.length; i++) {
    if (state.time >= words[i].at) index = i
    else break
  }
  if (index !== activeIndex) {
    activeIndex = index
    highlight(index)
  } else {
    updateFullscreen()
  }
}

function setPlaying(playing) {
  state.playing = playing
  pbPlay.textContent = playing ? '❚❚' : '▶'
  pbPlay.setAttribute('aria-label', playing ? 'Pause' : 'Play')
  if (state.fsOpen) fsPlay.textContent = playing ? '❚❚' : '▶'
  if (audioEl && state.audioName) {
    if (playing) audioEl.play().catch(() => {})
    else audioEl.pause()
  }
  updateWakeLock()
}

function tick(timestamp) {
  if (!lastFrame) lastFrame = timestamp
  const delta = Math.min(0.25, (timestamp - lastFrame) / 1000)
  lastFrame = timestamp

  if (audioEl && state.audioName && !audioEl.paused && isFinite(audioEl.duration) && audioEl.duration > 0) {
    state.time = (audioEl.currentTime / audioEl.duration) * TRACKS[state.trackIndex].duration
    updateFrame()
  } else if (state.playing && !state.external) {
    state.time += delta
    if (state.time >= TRACKS[state.trackIndex].duration) setTrack(state.trackIndex + 1)
    updateFrame()
  }
  requestAnimationFrame(tick)
}

/* ---------------- fullscreen ---------------- */

function renderFullscreen() {
  const track = TRACKS[state.trackIndex]
  fsBg.style.background = track.art
  fsTrack.textContent = `${track.title} — ${track.artist}`
  fsLyrics.innerHTML = timedLines
    .map((line, li) => `<p class="fs-line" data-line="${li}"${RTL_RE.test(byLine[li].map((w) => w.text).join(' ')) ? ' dir="rtl"' : ''}>${byLine[li].map((entry) => `<span class="w">${esc(entry.text)}</span>`).join('')}</p>`)
    .join('')
  fsLines = [...fsLyrics.children]
  fsLine = -1
  updateFullscreen(true)
}

function updateFullscreen(force = false) {
  if (!state.fsOpen || !fsLines.length) return
  const track = TRACKS[state.trackIndex]
  const duration = state.external && state.duration ? state.duration : track.duration
  fsFill.style.width = `${Math.min(1, state.time / duration) * 100}%`
  fsTime.textContent = fmt(state.time)

  const idx = activeIndex
  const li = idx >= 0 ? words[idx].line : 0
  if (li !== fsLine || force) {
    fsLine = li
    fsLines.forEach((el, i) => el.classList.toggle('is-current', i === li))
  }
  const lineEl = fsLines[li]
  if (!lineEl) return
  const wEls = [...lineEl.querySelectorAll('.w')]
  const local = idx >= 0 ? words.slice(0, idx + 1).filter((w) => w.line === li).length - 1 : -1
  fsLyrics.querySelectorAll('.fs-emoji').forEach((el) => el.remove())
  wEls.forEach((el, i) => {
    el.classList.toggle('is-active', i === local)
    el.classList.toggle('is-sung', i < local)
  })
  if (local >= 0 && wEls[local]) {
    const em = emojiFor(byLine[li][local].text)
    if (em) {
      const span = document.createElement('span')
      span.className = 'fs-emoji'
      span.textContent = em
      wEls[local].appendChild(span)
    }
  }
  fsMood.textContent = moodFor(li)
}

async function openFullscreen() {
  state.fsOpen = true
  fullscreen.hidden = false
  applyVars()
  renderFullscreen()
  fsPlay.textContent = state.playing ? '❚❚' : '▶'
  try {
    if (fullscreen.requestFullscreen) await fullscreen.requestFullscreen()
  } catch {
    /* fullscreen API may be blocked; the overlay still works */
  }
}

function closeFullscreen() {
  state.fsOpen = false
  fullscreen.hidden = true
  if (document.fullscreenElement) document.exitFullscreen?.().catch(() => {})
}

/* ---------------- panels + display state ---------------- */

function updateVisibility() {
  const noDisplay = !state.displayBuilt && !state.displayStudio
  const hidden = noDisplay || !state.showUnlocked
  previewEl.classList.toggle('is-hidden-lyrics', hidden)
  hiddenNote.hidden = !hidden
  if (hidden) {
    hiddenNote.querySelector('b').textContent = noDisplay ? 'No display selected' : 'Lyrics hidden while unlocked'
    hiddenNote.querySelector('span:last-child').textContent = noDisplay
      ? 'Choose a display in Lock Screen.'
      : 'Turn on “Show lyrics while unlocked” in Lock Screen.'
  }
}

function closePanel() {
  panel.hidden = true
  state.panel = null
  document.querySelectorAll('.tab').forEach((t) => t.classList.remove('is-open'))
}

function openPanel(name) {
  if (state.panel === name) {
    closePanel()
    return
  }
  state.panel = name
  panel.hidden = false
  panel.querySelectorAll('.panel-inner').forEach((inner) => {
    inner.hidden = inner.dataset.panel !== name
  })
  document.querySelectorAll('.tab').forEach((t) => t.classList.toggle('is-open', t.dataset.panel === name))
}

/* ---------------- wake lock ---------------- */

async function updateWakeLock() {
  if (!('wakeLock' in navigator)) return
  if (keepAwakeInput.checked && state.playing) {
    try {
      wakeLock = await navigator.wakeLock.request('screen')
    } catch {
      wakeLock = null
    }
  } else if (wakeLock) {
    try { await wakeLock.release() } catch { /* already released */ }
    wakeLock = null
  }
}

/* ---------------- preferences ---------------- */

function savePrefs() {
  try {
    localStorage.setItem(PREF_KEY, JSON.stringify({
      styleIndex: state.styleIndex,
      trackIndex: state.trackIndex,
      scale: state.scale,
      font: state.font,
      matchAlbum: state.matchAlbum,
      palette: state.palette,
      selected: state.selected,
      pinned: state.pinned,
      showUnlocked: state.showUnlocked,
      displayBuilt: state.displayBuilt,
      displayStudio: state.displayStudio,
      lang: state.lang,
    }))
  } catch {
    /* storage may be unavailable */
  }
}

function loadPrefs() {
  try {
    const saved = JSON.parse(localStorage.getItem(PREF_KEY) || '{}')
    if (Number.isInteger(saved.styleIndex)) state.styleIndex = Math.min(STYLES.length - 1, Math.max(0, saved.styleIndex))
    if (Number.isInteger(saved.trackIndex)) state.trackIndex = saved.trackIndex % TRACKS.length
    if (typeof saved.scale === 'number') state.scale = Math.min(1.5, Math.max(0.7, saved.scale))
    if (typeof saved.font === 'string' && [...document.querySelectorAll('.font-option')].some((b) => b.dataset.font === saved.font)) {
      state.font = saved.font
    }
    if (typeof saved.matchAlbum === 'boolean') state.matchAlbum = saved.matchAlbum
    if (saved.palette?.c1) state.palette = saved.palette
    if (typeof saved.selected === 'string') state.selected = saved.selected
    if (Array.isArray(saved.pinned)) state.pinned = saved.pinned
    if (typeof saved.showUnlocked === 'boolean') state.showUnlocked = saved.showUnlocked
    if (typeof saved.displayBuilt === 'boolean') state.displayBuilt = saved.displayBuilt
    if (typeof saved.displayStudio === 'boolean') state.displayStudio = saved.displayStudio
    if (typeof saved.lang === 'string' && I18N[saved.lang]) state.lang = saved.lang
  } catch {
    /* ignore malformed prefs */
  }
}

/* ---------------- audio sync ---------------- */

function loadAudio(file) {
  if (!audioEl) audioEl = new Audio()
  audioEl.src = URL.createObjectURL(file)
  audioEl.play().catch(() => toast('The browser blocked playback. Press play to start the track.'))
  state.audioName = file.name
  pbDemo.textContent = 'Synced · audio'
  toast(`Lyrics synced to “${file.name}”. The timeline follows the audio.`)
  setPlaying(true)
}

/* ---------------- listen to other apps ---------------- */

let listenTimer = 0
let listenKey = ''
let pollBusy = false
let lyricsRequestId = 0

const sourceName = (id = '') => {
  const s = String(id).toLowerCase()
  if (s.includes('spotify')) return 'Spotify'
  if (s.includes('applemusic') || s.includes('itunes')) return 'Apple Music'
  if (s.includes('chrome') || s.includes('msedge') || s.includes('firefox')) return 'Browser'
  if (s.includes('vlc')) return 'VLC'
  if (s.includes('tidal')) return 'TIDAL'
  return 'media app'
}

const statusPill = document.querySelector('.status-pill')
const appBadges = {
  spotify: { label: 'Spotify', match: ['spotify'], el: document.querySelector('.app-badge[data-app="spotify"]') },
  apple: { label: 'Apple Music', match: ['applemusic', 'apple music', 'itunes'], el: document.querySelector('.app-badge[data-app="apple"]') },
}

function updateSourceDots(apps) {
  const sessions = Array.isArray(apps) ? apps : []
  const states = {}
  for (const [key, badge] of Object.entries(appBadges)) {
    if (!badge.el) continue
    const hit = sessions.find((session) =>
      badge.match.some((needle) => String(session?.id || '').toLowerCase().includes(needle)),
    )
    const next = hit ? (hit.playing ? 'playing' : 'idle') : 'off'
    states[key] = next
    badge.el.dataset.state = next
    badge.el.classList.toggle('is-playing', next === 'playing')
    badge.el.classList.toggle('is-idle', next === 'idle')
    badge.el.setAttribute(
      'aria-label',
      `${badge.label}: ${next === 'playing' ? 'playing' : next === 'idle' ? 'open but paused' : 'not detected'}`,
    )
  }
  if (!statusPill) return
  const playing = Object.entries(states).filter(([, s]) => s === 'playing').map(([key]) => appBadges[key].label)
  const idle = Object.entries(states).filter(([, s]) => s === 'idle').map(([key]) => appBadges[key].label)
  statusPill.dataset.state = playing.length ? 'playing' : idle.length ? 'idle' : 'off'
  statusPill.title = playing.length
    ? `${playing.join(' and ')} playing`
    : idle.length
      ? `${idle.join(' and ')} open, nothing playing`
      : 'No Spotify or Apple Music session detected'
}

updateSourceDots([])

function stopListening() {
  if (listenTimer) clearInterval(listenTimer)
  listenTimer = 0
  listenKey = ''
  lyricsRequestId++
  state.external = false
  timedLines = []
  words = []
  byLine = []
  updateSourceDots([])
  if (window.verci) {
    pbDemo.textContent = 'Live · waiting'
    setLiveMode('waiting')
    renderStage()
  }
}

function parseLrc(text) {
  const rows = []
  for (const raw of String(text).split(/\r?\n/)) {
    const stamps = [...raw.matchAll(/\[(\d{1,2}):(\d{2}(?:\.\d{1,3})?)\]/g)]
    if (!stamps.length) continue
    const content = raw.replace(/\[[^\]]*\]/g, '').trim()
    if (!content) continue
    for (const stamp of stamps) rows.push({ t: Number(stamp[1]) * 60 + Number(stamp[2]), text: content })
  }
  return rows.sort((a, b) => a.t - b.t)
}

function linesFromRows(rows, duration) {
  return rows.map((row, i) => {
    const next = rows[i + 1]?.t ?? duration
    const span = Math.max(1.2, next - row.t)
    const parts = splitWords(row.text)
    const step = Math.min(0.62, span / (parts.length + 0.7))
    return { start: row.t, words: parts.map((text, j) => ({ text, at: row.t + j * step })) }
  })
}

function linesFromPlain(text, duration) {
  const rows = String(text).split(/\r?\n/).map((line) => line.trim()).filter(Boolean)
  const span = duration / Math.max(1, rows.length)
  return rows.map((line, i) => {
    const start = i * span
    const parts = splitWords(line)
    const step = Math.min(0.7, span / (parts.length + 0.7))
    return { start, words: parts.map((t, j) => ({ text: t, at: start + j * step })) }
  })
}

async function applyExternalLyrics(info, requestId) {
  if (!window.verci?.lyrics) return
  pbDemo.textContent = 'Finding lyrics…'
  let found = { synced: null, plain: null }
  try {
    found = await window.verci.lyrics({ title: info.title, artist: info.artist, album: info.album, duration: info.duration })
  } catch {
    found = { synced: null, plain: null }
  }
  if (requestId !== lyricsRequestId || listenKey !== `${info.title}|${info.artist}`) return
  if (!found?.synced && !found?.plain) {
    state.external = false
    timedLines = []
    words = []
    byLine = []
    prepareWords()
    pbDemo.textContent = 'No lyrics found'
    setLiveMode('nolyrics', info.title)
    renderStage()
    toast(`No lyrics found for “${info.title}”.`)
    return
  }
  state.external = true
  state.duration = info.duration > 0 ? info.duration : 240
  const rows = found.synced ? parseLrc(found.synced) : []
  timedLines = rows.length ? linesFromRows(rows, state.duration) : linesFromPlain(found.plain, state.duration)
  if (!timedLines.length) {
    state.external = false
    words = []
    byLine = []
    pbDemo.textContent = 'No lyrics found'
    setLiveMode('nolyrics', info.title)
    renderStage()
    return
  }
  prepareWords()
  pbTitle.textContent = info.title
  pbArtist.textContent = info.artist
  pbDuration.textContent = fmt(state.duration)
  pbProgress.setAttribute('aria-valuemax', String(Math.round(state.duration)))
  pbDemo.textContent = `${found.synced ? 'Live' : 'Auto-timed'} · ${sourceName(info.source)}`
  renderStage()
  state.time = Math.min(state.duration, Math.max(0, info.position || 0))
  updateFrame()
  toast(`${found.synced ? 'Synced lyrics' : 'Lyrics'} for “${info.title}” — ${info.artist}`)
}

async function pollNowPlaying() {
  if (!window.verci?.nowPlaying || pollBusy) return
  pollBusy = true
  try {
    let info = null
    try {
      info = await window.verci.nowPlaying()
    } catch {
      return
    }
    updateSourceDots(info?.apps)
    if (!info || !info.title) {
      if (listenKey) {
        listenKey = ''
        lyricsRequestId++
        state.external = false
        state.time = 0
        timedLines = []
        words = []
        byLine = []
        renderStage()
      }
      pbDemo.textContent = 'Live · waiting'
      setLiveMode('nothing')
      setPlaying(false)
      return
    }
    const key = `${info.title}|${info.artist}`
    if (key !== listenKey) {
      listenKey = key
      const requestId = ++lyricsRequestId
      state.external = false
      state.duration = info.duration > 0 ? info.duration : 240
      state.time = Math.max(0, info.position || 0)
      timedLines = []
      words = []
      byLine = []
      pbTitle.textContent = info.title
      pbArtist.textContent = info.artist
      pbDuration.textContent = fmt(state.duration)
      pbProgress.setAttribute('aria-valuemax', String(Math.round(state.duration)))
      pbDemo.textContent = 'Finding lyrics…'
      setLiveMode('listening')
      renderStage()
      void applyExternalLyrics(info, requestId)
    }
    if (Boolean(info.playing) !== state.playing) setPlaying(Boolean(info.playing))
    if (state.external) {
      if (info.duration > 0) state.duration = info.duration
      state.time = Math.max(0, info.position || 0)
      updateFrame()
    }
  } finally {
    pollBusy = false
  }
}

function startListening(silent = false) {
  if (!window.verci?.nowPlaying) return false
  if (listenTimer) {
    stopListening()
    toast('Stopped listening to media apps.')
    return true
  }
  pbDemo.textContent = 'Listening…'
  setLiveMode('listening')
  if (!silent) toast('Listening to Spotify, Apple Music and other media apps.')
  pollNowPlaying()
  listenTimer = setInterval(pollNowPlaying, 1000)
  return true
}

function requestAudioSync() {
  if (startListening()) return
  const meta = navigator.mediaSession?.metadata
  if (meta?.title) {
    toast(`This browser exposes “${meta.title}” only for media playing in the page. Pick a file to sync the lyrics.`)
  } else {
    toast('Reading other apps needs the desktop build. In the browser, choose an audio file instead.')
  }
  audioFile.click()
}

/* ---------------- events ---------------- */

document.querySelectorAll('.tab').forEach((tab) => {
  tab.addEventListener('click', (e) => {
    e.stopPropagation()
    openPanel(tab.dataset.panel)
  })
})

document.addEventListener('click', (e) => {
  if (panel.hidden) return
  if (!panel.contains(e.target) && !e.target.closest('.tab')) closePanel()
})

$('prevStyle').addEventListener('click', () => setStyle(state.styleIndex - 1))
$('nextStyle').addEventListener('click', () => setStyle(state.styleIndex + 1))
$('fullscreenBtn').addEventListener('click', openFullscreen)
$('fsBtn2').addEventListener('click', openFullscreen)
$('syncBtn').addEventListener('click', requestAudioSync)
$('audioBtn').addEventListener('click', requestAudioSync)

/* ---------------- updates ---------------- */

const updateBtn = $('updateBtn')
let updateReady = false

function showUpdateState(status) {
  if (!updateBtn) return
  const ready = status?.state === 'ready'
  updateBtn.hidden = !ready
  updateBtn.classList.toggle('update-ready', ready)
  if (!ready) return
  const label = `Restart to install Verci ${status.version || ''}`.trim()
  updateBtn.title = label
  updateBtn.setAttribute('aria-label', label)
  if (!updateReady) toast(`Verci ${status.version} is ready — restart to install.`)
  updateReady = true
}

if (window.verci?.onUpdateState) {
  window.verci.onUpdateState(showUpdateState)
  window.verci.updateState?.().then(showUpdateState).catch(() => {})
  updateBtn?.addEventListener('click', () => window.verci.installUpdate())
}
$('fsClose').addEventListener('click', closeFullscreen)
fsPlay.addEventListener('click', () => setPlaying(!state.playing))
fullscreen.addEventListener('click', (e) => {
  if (e.target === fullscreen) closeFullscreen()
})
audioFile.addEventListener('change', (e) => {
  const file = e.target.files?.[0]
  if (file) loadAudio(file)
  e.target.value = ''
})

document.addEventListener('fullscreenchange', () => {
  if (!document.fullscreenElement && state.fsOpen) closeFullscreen()
})

selectBtn.addEventListener('click', () => {
  state.selected = STYLES[state.styleIndex].id
  updateMeta()
  savePrefs()
})

pinBtn.addEventListener('click', () => {
  const id = STYLES[state.styleIndex].id
  state.pinned = state.pinned.includes(id) ? state.pinned.filter((p) => p !== id) : [...state.pinned, id]
  updateMeta()
  savePrefs()
})

pbPlay.addEventListener('click', () => setPlaying(!state.playing))
$('pbPrev').addEventListener('click', () => setTrack(state.trackIndex - 1))
$('pbNext').addEventListener('click', () => setTrack(state.trackIndex + 1))

pbProgress.addEventListener('pointerdown', (e) => {
  if (document.body.classList.contains('is-live')) return
  const rect = pbProgress.getBoundingClientRect()
  const seek = (clientX) => {
    state.time = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width)) * TRACKS[state.trackIndex].duration
    if (audioEl && state.audioName && isFinite(audioEl.duration)) {
      audioEl.currentTime = (state.time / TRACKS[state.trackIndex].duration) * audioEl.duration
    }
    updateFrame()
  }
  seek(e.clientX)
  const move = (event) => seek(event.clientX)
  const up = () => {
    window.removeEventListener('pointermove', move)
    window.removeEventListener('pointerup', up)
  }
  window.addEventListener('pointermove', move)
  window.addEventListener('pointerup', up)
})

sizeRange.addEventListener('input', () => {
  state.scale = Number(sizeRange.value) / 100
  sizeValue.textContent = `${sizeRange.value}%`
  applyVars()
  savePrefs()
})

document.querySelector('[data-reset="size"]').addEventListener('click', () => {
  state.scale = 1
  sizeRange.value = '100'
  sizeValue.textContent = '100%'
  applyVars()
  savePrefs()
})

document.querySelectorAll('.font-option').forEach((btn) => {
  btn.addEventListener('click', () => {
    state.font = btn.dataset.font
    document.querySelectorAll('.font-option').forEach((b) => b.classList.toggle('is-active', b === btn))
    applyVars()
    savePrefs()
  })
})

matchAlbumInput.addEventListener('change', () => {
  state.matchAlbum = matchAlbumInput.checked
  if (state.matchAlbum) applyPalette(TRACKS[state.trackIndex].palette)
  savePrefs()
})

;[colorLyric, colorHighlight, colorSecondary].forEach((input) => {
  input.addEventListener('input', () => {
    state.matchAlbum = false
    matchAlbumInput.checked = false
    state.palette = { c1: colorLyric.value, c2: colorHighlight.value, c3: colorSecondary.value }
    applyPalette(state.palette)
    savePrefs()
  })
})

document.querySelector('[data-reset="colors"]').addEventListener('click', () => {
  state.matchAlbum = true
  matchAlbumInput.checked = true
  applyPalette(TRACKS[state.trackIndex].palette)
  savePrefs()
})

showUnlockedInput.addEventListener('change', () => {
  state.showUnlocked = showUnlockedInput.checked
  updateVisibility()
  savePrefs()
})

displayBuiltInput.addEventListener('change', () => {
  state.displayBuilt = displayBuiltInput.checked
  updateVisibility()
  savePrefs()
})

displayStudioInput.addEventListener('change', () => {
  state.displayStudio = displayStudioInput.checked
  updateVisibility()
  savePrefs()
})

keepAwakeInput.addEventListener('change', updateWakeLock)

uiLang.addEventListener('change', () => {
  state.lang = uiLang.value
  applyLanguage()
})

document.addEventListener('keydown', (e) => {
  const tag = e.target instanceof HTMLElement ? e.target.tagName : ''
  if (tag === 'INPUT' || tag === 'TEXTAREA') return
  if (e.key === 'Escape') {
    if (state.fsOpen) closeFullscreen()
    else closePanel()
  } else if (e.key.toLowerCase() === 'f') {
    state.fsOpen ? closeFullscreen() : openFullscreen()
  } else if (e.key === 'ArrowRight') setStyle(state.styleIndex + 1)
  else if (e.key === 'ArrowLeft') setStyle(state.styleIndex - 1)
  else if (e.code === 'Space') {
    e.preventDefault()
    setPlaying(!state.playing)
  }
})

document.addEventListener('visibilitychange', () => {
  if (document.hidden) lastFrame = 0
})

/* ---------------- init ---------------- */

loadPrefs()
uiLang.value = state.lang
buildTiles()
buildDots()
sizeRange.value = String(Math.round(state.scale * 100))
sizeValue.textContent = `${Math.round(state.scale * 100)}%`
matchAlbumInput.checked = state.matchAlbum
showUnlockedInput.checked = state.showUnlocked
displayBuiltInput.checked = state.displayBuilt
displayStudioInput.checked = state.displayStudio
document.querySelectorAll('.font-option').forEach((b) => b.classList.toggle('is-active', b.dataset.font === state.font))
applyPalette(state.palette)
document.body.classList.add('is-live')
pbPrev.hidden = true
pbNext.hidden = true
setTrack(0)
applyLanguage()
setPlaying(false)
updateVisibility()
requestAnimationFrame(tick)
if (window.verci) startListening(true)

function buildTiles() {
  tilesEl.innerHTML = STYLES.map((style, i) => {
    const [t1, t2] = TILE_HUES[i % TILE_HUES.length]
    return `<button class="tile" data-style="${style.id}" aria-label="${style.name}" title="${style.name}">
      <span class="tile-art" style="--t1:${t1};--t2:${t2}">${TILE_MINI[style.id] || ''}</span>
      <span class="tile-name">${style.name}</span>
    </button>`
  }).join('')
  tilesEl.querySelectorAll('.tile').forEach((tile) => {
    tile.addEventListener('click', () => {
      const index = STYLES.findIndex((s) => s.id === tile.dataset.style)
      if (index >= 0) setStyle(index)
    })
  })
}

function buildDots() {
  dotsEl.innerHTML = STYLES.map((style, i) => `<button class="dot" role="tab" data-index="${i}" aria-label="${style.name}"></button>`).join('')
  dotsEl.querySelectorAll('.dot').forEach((dot) => {
    dot.addEventListener('click', () => setStyle(Number(dot.dataset.index)))
  })
}
