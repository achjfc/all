const handler = async (m, {conn, isPrems}) => {
  let enviando;
  if (enviando) return
  enviando = true
  const hasil = Math.floor(Math.random() * 5000);
  const time = global.db.data.users[m.sender].lastwork + 600000;
  if (new Date - global.db.data.users[m.sender].lastwork < 600000) throw `⚔️ *¡انتظر لحظة أيها المغامر الصغير!* ⚔️\n\n*—◉ العودة إلى الرحلة في ${msToTime(time - new Date())} ⏳*`;
  conn.sendMessage(m.chat, {text: `🏞️ *أنت تشرع في رحلة مثيرة aventura:*\n\n🛠️ *${pickRandom(global.work)}*\n\n*¡فاز ${hasil} إكسب لشجاعتك!*`}, {quoted: m});
  global.db.data.users[m.sender].exp += hasil;
  global.db.data.users[m.sender].lastwork = new Date() * 1;
  enviando = false
};
handler.help = ['work'];
handler.tags = ['xp'];
handler.command = /^(work|عمل|chambear)$/i
handler.fail = null;
export default handler;

function msToTime(duration) {
  const milliseconds = parseInt((duration % 1000) / 100);
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;
  return minutes + ' دقيقه ' + seconds + ' ثانيه ';
}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}

global.work = [
  'أنت كيميائي ماهر، تقوم بتقطير جرعات غامضة بحثًا عن الأسرار المفقودة.',
  'ستصبح باحثًا مقدامًا عن الكنوز، وتستكشف الأماكن المنسية بحثًا عن الثروات المخفية.',
  'أنت تدير شركة لتحويل المعادن، وتحول الأشياء العادية إلى كنوز قيمة.',
  'تستكشف الآثار القديمة وتجد بقايا قيمة تمنحك المعرفة القديمة.',
  'أنت تعمل كمرتزق في حرب ملحمية، وتواجه التحديات بمهاراتك وشجاعتك.',
  'أنت محقق خوارق، تكتشف الأسرار الخفية للعالم الروحي.',
  'أنت تقوم بتدريب التنانين على السباقات، وتكوين روابط مع هذه المخلوقات المجنحة المهيبة.',
  'ستصبح أفضل حداد في المدينة، حيث تصنع الأسلحة الأسطورية والتحف القوية.',
  'تكتشف غابة مسحورة مليئة بالمخلوقات السحرية، مما ينشئ علاقة فريدة مع الطبيعة.',
  'أنت مروض وحش شرس، تتحكم في أعنف المخلوقات بإتقانك للحيوانات.',
  'تسافر عبر الزمن وتحل المشاكل التاريخية، مما يؤثر على مصير الحضارات الماضية.',
  'أنت مستشار ملكي تقدم الحكمة والمشورة للحكام والقادة.',
  'أنت تقوم بتطوير تكنولوجيا مستقبلية، وقيادة الابتكار وتغيير مسار العالم.',
  'أنت أستاذ في فن الإقناع، تقنع الآخرين ببلاغتك ومكرك.',
  'أنت تقود ميكا عملاقة في معارك ملحمية، وتدافع عن الأرض ببراعة الآلة الحربية الخاصة بك.',
  'أنت تدير مزرعة تنانين، وتعتني بهذه المخلوقات المهيبة وتربي تنانين فريدة من نوعها.',
  'أنت جاسوس دولي، تتسلل إلى المنظمات السرية وتكشف المؤامرات المظلمة.',
  'أنت تستكشف الفضاء وتقوم باكتشافات مذهلة تمنحك رؤية فريدة للكون.',
  'أنت ساحر مشهور، تؤدي حيلًا رائعة وتلقي تعاويذ سحرية.',
  'أنت عالم مجنون، تخلق اختراعات غريبة وتجارب غير عادية.',
  'أنت تدافع عن المملكة ضد الجيش الغازي، وتقود الجيوش وتظهر شجاعتك في المعركة.',
  'أنت بحار جريء، تستكشف البحار المجهولة وتكتشف الجزر المليئة بالكنوز.',
  'أنت محترف في فن التخفي، والتحرك في الظل وتنفيذ المهام السرية.',
  'أنت طاهٍ مشهور، وتقوم بإعداد أطباق لذيذة تُسعد الأذواق في جميع أنحاء العالم.',
  'أنت تحقق في الجرائم المعقدة كمحقق ماهر، وتحل الألغاز المثيرة للاهتمام.',
  'أنت دبلوماسي ماهر، وتتفاوض على المعاهدات والتحالفات للحفاظ على السلام بين الأمم.',
  'أنت شامان قوي، يوجه الطاقات الروحية للشفاء والحماية.',
  'تقوم بتطوير تطبيقات سحرية للأجهزة المسحورة، وتحسن حياة الناس باختراعاتك.',
  'أنت بطل في البطولات القتالية، مما يدل على مهارتك في القتال اليدوي.',
  'أنت مهندس معماري صاحب رؤية، تصمم مدنًا مستقبلية وهياكل مثيرة للإعجاب.',
  'أنت وسيط روحي يتمتع بقدرات خارقة للطبيعة، ويستكشف العقول ويتنبأ بالمستقبل.',
  'أنت مخرج سينمائي مشهور، وتصنع قصصًا ملحمية تأسر الجماهير.',
  'أنت عالم فلك وتكتشف كوكبًا جديدًا، مما يؤدي إلى توسيع معرفتنا بالكون.',
  'أنت خبير في البقاء على قيد الحياة، وتواجه مخاطر العالم ببراعة وشجاعة.',
  'أنت موسيقي موهوب تعزف حفلات موسيقية ضخمة، وتملأ الهواء بأنغام آسرة.',
  'أنت مستكشف تحت الماء، تغوص في الأعماق لاكتشاف الكنوز المنسية.',
  'أنت مصمم أزياء مشهور، وتبتكر اتجاهات وتلبس الأشخاص بأسلوبك الفريد.',
  'أنت قائد ثوري، تناضل من أجل عالم أفضل وتقود الجماهير إلى الحرية.',
  'أنت طبيب يكتشف علاجًا لمرض مميت، مما ينقذ حياة عدد لا يحصى من الأشخاص.',
  'أنت قرصان كمبيوتر، تتنقل في الفضاء الإلكتروني وتكشف الأسرار الرقمية.',
  'أنت بستاني نباتي يعثر على نبات نادر ويكشف عن خصائصه الفريدة.',
  'أنت مدمر للأساطير، تستكشف الأساطير وتكتشف الحقيقة وراء الحكايات.',
  'أنت عالم آثار يكتشف مدينة قديمة، ويكشف أسرار الحضارات الماضية.',
  'أنت قائد روحي محترم، ترشد الآخرين نحو التنوير والسلام الداخلي.',
  'أنت لاعب محترف، تتنافس في بطولات النخبة وتُظهر مهارتك في الألعاب.',
];