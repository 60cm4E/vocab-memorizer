// ============================================
// DATA: Lesson 3 & 4 - 동아(윤정미) 중3
// ============================================

const DATA = {
    // ==========================================
    // LESSON 3: English Words of Foreign Origin
    // ==========================================
    3: {
        title: "English Words of Foreign Origin",
        words: [
            { en: "mean", ko: "의미하다", pos: "v.", extra: "(mean – meant – meant)" },
            { en: "medicine", ko: "약", pos: "n." },
            { en: "pleasure", ko: "기쁨, 즐거움", pos: "n." },
            { en: "anyway", ko: "그런데, 그건 그렇고", pos: "adv." },
            { en: "cross", ko: "교차하다, 서로 겹치게 놓다", pos: "v." },
            { en: "expression", ko: "표현", pos: "n." },
            { en: "foreign", ko: "외국의", pos: "a." },
            { en: "origin", ko: "기원, 근원", pos: "n." },
            { en: "borrow", ko: "빌리다", pos: "v." },
            { en: "culture", ko: "문화", pos: "n." },
            { en: "language", ko: "언어", pos: "n." },
            { en: "example", ko: "예, 사례", pos: "n." },
            { en: "shampoo", ko: "샴푸", pos: "n." },
            { en: "Hindi", ko: "힌디어", pos: "n." },
            { en: "press", ko: "누르다", pos: "v." },
            { en: "massage", ko: "마사지, 안마", pos: "n." },
            { en: "British", ko: "영국의, 영국인의", pos: "a." },
            { en: "trader", ko: "무역상, 상인", pos: "n." },
            { en: "India", ko: "인도", pos: "n." },
            { en: "introduce", ko: "소개하다", pos: "v." },
            { en: "Britain", ko: "영국", pos: "n." },
            { en: "century", ko: "세기, 100년", pos: "n." },
            { en: "meaning", ko: "의미", pos: "n." },
            { en: "enter", ko: "들어오다", pos: "v." },
            { en: "around", ko: "~경에, ~무렵에", pos: "prep." },
            { en: "present", ko: "현재의, 현재, 선물", pos: "a./n." },
            { en: "shortly", ko: "곧, 얼마 안 되어", pos: "adv." },
            { en: "soap", ko: "비누", pos: "n." },
            { en: "robot", ko: "로봇", pos: "n." },
            { en: "play", ko: "연극, 희곡", pos: "n." },
            { en: "human", ko: "인간, 사람", pos: "n." },
            { en: "design", ko: "설계하다, 디자인하다", pos: "v." },
            { en: "produce", ko: "생산하다", pos: "v." },
            { en: "factory", ko: "공장", pos: "n." },
            { en: "originally", ko: "원래, 본래", pos: "adv." },
            { en: "machine", ko: "기계", pos: "n." },
            { en: "Latin", ko: "라틴어의, 라틴어", pos: "a./n." },
            { en: "however", ko: "그러나", pos: "conj." },
            { en: "suggest", ko: "제안하다", pos: "v." },
            { en: "slave", ko: "노예", pos: "n." },
            { en: "Czech", ko: "체코의, 체코인의, 체코어", pos: "a./n." },
            { en: "decide", ko: "결정하다, 결심하다", pos: "v." },
            { en: "science fiction", ko: "공상과학 소설", pos: "n." },
            { en: "hurricane", ko: "허리케인", pos: "n." },
            { en: "Spanish", ko: "스페인의, 스페인어", pos: "a./n." },
            { en: "originate", ko: "비롯되다, 유래하다", pos: "v." },
            { en: "Mayan", ko: "마야인의", pos: "a." },
            { en: "creation", ko: "창조", pos: "n." },
            { en: "myth", ko: "신화", pos: "n." },
            { en: "anger", ko: "화나게 하다, 화, 분노", pos: "v./n." },
            { en: "cause", ko: "일으키다, ~의 원인이 되다", pos: "v." },
            { en: "flood", ko: "홍수", pos: "n." },
            { en: "contact", ko: "접촉, 연락", pos: "n." },
            { en: "civilization", ko: "문명", pos: "n." },
            { en: "explorer", ko: "탐험가", pos: "n." },
            { en: "experience", ko: "경험하다, 경험", pos: "v./n." },
            { en: "area", ko: "지역", pos: "n." },
            { en: "early", ko: "초기의, 일찍, 빨리", pos: "a./adv." },
            { en: "use", ko: "사용, 이용, 사용하다", pos: "n./v." },
            { en: "clear", ko: "명확한, 분명한", pos: "a." },
            { en: "believe", ko: "믿다", pos: "v." },
            { en: "invent", ko: "발명하다", pos: "v." },
            { en: "sometime", ko: "어떤 때, 언젠가", pos: "adv." },
            { en: "place", ko: "놓다, 두다", pos: "v." },
            { en: "slice", ko: "조각", pos: "n." },
            { en: "such", ko: "그런, 그와 같은", pos: "a." }
        ],
        phrases: [
            { en: "pay for", ko: "~값을 지불하다" },
            { en: "get on", ko: "~에 타다" },
            { en: "keep in touch", ko: "연락하다, 연락하고 지내다" },
            { en: "introduce A to B", ko: "A를 B에게 소개하다" },
            { en: "look like", ko: "~처럼 보이다" },
            { en: "on television", ko: "텔레비전에(방송되는)" },
            { en: "originate from", ko: "~에서 유래하다, 비롯하다" },
            { en: "pass through", ko: "~을 통과하다, 지나가다" },
            { en: "pick up", ko: "(정보를) 듣게 되다, 익히다" },
            { en: "come from", ko: "~에서 유래하다" },
            { en: "between A and B", ko: "A와 B 사이에" }
        ],
        sentences: [
            {
                en: "English has often borrowed words from other cultures or languages.",
                ko: "영어는 다른 문화나 언어에서 단어를 종종 빌려 왔다.",
                blank: "borrowed",
                blankEn: "English has often ______ words from other cultures or languages."
            },
            {
                en: "Here are some examples with interesting stories.",
                ko: "여기 재미있는 이야기를 가진 몇 개의 예가 있다.",
                blank: "examples",
                blankEn: "Here are some ______ with interesting stories."
            },
            {
                en: "The word shampoo comes from the Hindi word chāmpo, which means \"to press.\"",
                ko: "shampoo라는 단어는 힌디어 단어인 chāmpo에서 왔는데, 그것은 '누르다'라는 의미이다.",
                blank: "means",
                blankEn: "The word shampoo comes from the Hindi word chāmpo, which ______ \"to press.\""
            },
            {
                en: "In India, the word was used for a head massage.",
                ko: "인도에서 그 단어는 머리 마사지를 가리키는 데 쓰였다.",
                blank: "massage",
                blankEn: "In India, the word was used for a head ______."
            },
            {
                en: "British traders in India experienced a bath with a head massage and introduced it to Britain in the 18th century.",
                ko: "인도에 있던 영국 무역상들이 머리 마사지를 곁들인 목욕을 경험하고, 18세기에 그것을 영국에 소개했다.",
                blank: "introduced",
                blankEn: "British traders in India experienced a bath with a head massage and ______ it to Britain in the 18th century."
            },
            {
                en: "The meaning of the word shampoo changed a few times after it first entered English around 1762.",
                ko: "shampoo라는 단어의 의미는 그 단어가 1762년쯤 영어에 처음 들어온 이후 몇 번 바뀌었다.",
                blank: "entered",
                blankEn: "The meaning of the word shampoo changed a few times after it first ______ English around 1762."
            },
            {
                en: "In the 19th century, shampoo got its present meaning of \"washing the hair.\"",
                ko: "19세기에 shampoo는 '머리 감기'라는 현재의 의미를 갖게 되었다.",
                blank: "present",
                blankEn: "In the 19th century, shampoo got its ______ meaning of \"washing the hair.\""
            },
            {
                en: "Shortly after that, the word began to be also used for a special soap for the hair.",
                ko: "그 후 얼마 지나지 않아, 그 단어는 머리에 사용하는 특별한 비누를 가리키는 데에도 쓰이기 시작했다.",
                blank: "Shortly",
                blankEn: "______ after that, the word began to be also used for a special soap for the hair."
            },
            {
                en: "The word robot comes from the play R.U.R., which was written in 1920 by a Czech writer Karel Čapek.",
                ko: "robot이라는 단어는 희곡 'R.U.R.'에서 왔는데, 그 희곡은 1920년에 체코의 작가 Karel Čapek이 썼다.",
                blank: "play",
                blankEn: "The word robot comes from the ______ R.U.R., which was written in 1920 by a Czech writer Karel Čapek."
            },
            {
                en: "In the play, robots are machines that look like humans.",
                ko: "그 희곡에서 로봇은 인간처럼 생긴 기계이다.",
                blank: "machines",
                blankEn: "In the play, robots are ______ that look like humans."
            },
            {
                en: "They are designed to work for humans and are produced in a factory.",
                ko: "그것은 인간을 위해 일하도록 설계되고, 공장에서 생산된다.",
                blank: "designed",
                blankEn: "They are ______ to work for humans and are produced in a factory."
            },
            {
                en: "He originally called the machines in his play labori from the Latin word for \"work.\"",
                ko: "그는 원래 자신의 희곡에 등장하는 그 기계들을 '일'을 의미하는 라틴어 단어에서 온 labori라고 불렀다.",
                blank: "originally",
                blankEn: "He ______ called the machines in his play labori from the Latin word for \"work.\""
            },
            {
                en: "However, his brother suggested roboti, which means \"slave workers\" in Czech.",
                ko: "하지만 그의 형이 roboti를 제안했는데, 그것은 체코어로 '노예 근로자들'을 의미한다.",
                blank: "suggested",
                blankEn: "However, his brother ______ roboti, which means \"slave workers\" in Czech."
            },
            {
                en: "Karel Čapek liked the idea and decided to use the word roboti.",
                ko: "Karel Čapek은 그 아이디어가 마음에 들어 roboti라는 단어를 사용하기로 결정했다.",
                blank: "decided",
                blankEn: "Karel Čapek liked the idea and ______ to use the word roboti."
            },
            {
                en: "In 1938, the play was made into a science fiction show on television in Britain.",
                ko: "1938년에 그 희곡은 영국 TV에서 공상 과학물로 만들어졌다.",
                blank: "science fiction",
                blankEn: "In 1938, the play was made into a ______ show on television in Britain."
            },
            {
                en: "The word hurricane comes from the Spanish word huracán, which originates from the name of a Mayan god.",
                ko: "hurricane이라는 단어는 스페인어 단어인 huracán에서 왔는데, 그것은 마야 신의 이름에서 유래한다.",
                blank: "originates",
                blankEn: "The word hurricane comes from the Spanish word huracán, which ______ from the name of a Mayan god."
            },
            {
                en: "In the Mayan creation myth, Huracán is the weather god of wind, storm, and fire.",
                ko: "마야의 창조 신화에서 Huracán은 바람, 폭풍우, 그리고 불을 다스리는 날씨의 신이다.",
                blank: "creation",
                blankEn: "In the Mayan ______ myth, Huracán is the weather god of wind, storm, and fire."
            },
            {
                en: "However, the first humans angered the gods, so Huracán caused a great flood.",
                ko: "하지만 최초의 인간들이 그 신들을 화나게 했고, 그래서 Huracán은 거대한 홍수를 일으켰다.",
                blank: "angered",
                blankEn: "However, the first humans ______ the gods, so Huracán caused a great flood."
            },
            {
                en: "The first Spanish contact with the Mayan civilization was in 1517.",
                ko: "스페인이 마야 문명과 처음 했던 접촉은 1517년이었다.",
                blank: "civilization",
                blankEn: "The first Spanish contact with the Mayan ______ was in 1517."
            },
            {
                en: "Spanish explorers who were passing through the Caribbean experienced a hurricane and picked up the word for it from the people in the area.",
                ko: "카리브제도를 통과해 지나가던 스페인 탐험가들이 허리케인을 겪었고, 그 지역 사람들로부터 그것을 가리키는 단어를 익히게 되었다.",
                blank: "explorers",
                blankEn: "Spanish ______ who were passing through the Caribbean experienced a hurricane and picked up the word for it from the people in the area."
            },
            {
                en: "In English, one of the early uses of hurricane was in a play by Shakespeare in 1608.",
                ko: "영어에서는 hurricane이 초기에 사용된 예 중 하나가 1608년에 셰익스피어가 쓴 희곡에서였다.",
                blank: "early",
                blankEn: "In English, one of the ______ uses of hurricane was in a play by Shakespeare in 1608."
            },
            {
                en: "The word hamburger originally comes from Hamburg, Germany's second-largest city.",
                ko: "hamburger라는 단어는 원래 독일에서 두 번째로 큰 도시인 함부르크에서 왔다.",
                blank: "originally",
                blankEn: "The word hamburger ______ comes from Hamburg, Germany's second-largest city."
            },
            {
                en: "The origin of the first hamburger is not clear.",
                ko: "최초의 햄버거의 기원은 분명하지 않다.",
                blank: "origin",
                blankEn: "The ______ of the first hamburger is not clear."
            },
            {
                en: "However, it is believed that the hamburger was invented in a small town in Texas, USA, sometime between 1885 and 1904.",
                ko: "하지만 햄버거는 1885년에서 1904년 사이의 언젠가 미국의 텍사스에 있는 작은 마을에서 발명되었다고 여겨진다.",
                blank: "invented",
                blankEn: "However, it is believed that the hamburger was ______ in a small town in Texas, USA, sometime between 1885 and 1904."
            },
            {
                en: "A cook placed a Hamburg-style steak between two slices of bread, and people started to call such food a hamburger.",
                ko: "한 요리사가 빵 두 조각 사이에 함부르크 스타일의 스테이크를 넣었고, 사람들은 그런 음식을 햄버거라고 부르기 시작했다.",
                blank: "placed",
                blankEn: "A cook ______ a Hamburg-style steak between two slices of bread, and people started to call such food a hamburger."
            }
        ]
    },

    // ==========================================
    // LESSON 4: Ask Dr. Money
    // ==========================================
    4: {
        title: "Ask Dr. Money",
        words: [
            { en: "refund", ko: "환불하다, 환불", pos: "v./n." },
            { en: "receipt", ko: "영수증", pos: "n." },
            { en: "receive", ko: "받다", pos: "v." },
            { en: "price", ko: "가격, 값", pos: "n." },
            { en: "exchange", ko: "교환하다, 교환", pos: "v./n." },
            { en: "spending", ko: "지출", pos: "n." },
            { en: "habit", ko: "습관", pos: "n." },
            { en: "smart", ko: "현명한", pos: "a." },
            { en: "answer", ko: "답하다", pos: "v." },
            { en: "result", ko: "결과", pos: "n." },
            { en: "survey", ko: "(설문) 조사", pos: "n." },
            { en: "while", ko: "~하는 동안에, ~인데 반하여", pos: "conj." },
            { en: "worry", ko: "걱정거리, 걱정하다", pos: "n./v." },
            { en: "enough", ko: "충분한", pos: "a." },
            { en: "allowance", ko: "용돈", pos: "n." },
            { en: "lastly", ko: "마지막으로", pos: "adv." },
            { en: "spend", ko: "(돈을) 쓰다", pos: "v.", extra: "(spend – spent – spent)" },
            { en: "majority", ko: "대다수", pos: "n." },
            { en: "manage", ko: "관리하다", pos: "v." },
            { en: "effort", ko: "노력", pos: "n." },
            { en: "spender", ko: "(돈을) 쓰는 사람", pos: "n." },
            { en: "balance", ko: "균형, 잔액", pos: "n." },
            { en: "weekly", ko: "매주의, 주 1회의", pos: "a." },
            { en: "solve", ko: "해결하다, 풀다", pos: "v." },
            { en: "tip", ko: "조언", pos: "n." },
            { en: "divide", ko: "나누다", pos: "v." },
            { en: "carry", ko: "가지고 다니다, 나르다", pos: "v." },
            { en: "only", ko: "겨우, ~만", pos: "a." },
            { en: "each", ko: "각각의", pos: "a." },
            { en: "save", ko: "(돈을) 저축하다, 모으다", pos: "v." },
            { en: "last", ko: "지난", pos: "a." },
            { en: "few", ko: "몇몇의", pos: "a." },
            { en: "tight", ko: "빠듯한", pos: "a." },
            { en: "budget", ko: "예산", pos: "n." },
            { en: "donate", ko: "기부하다, 기증하다", pos: "v." },
            { en: "remaining", ko: "남아있는, 남은", pos: "a." },
            { en: "charity", ko: "자선단체", pos: "n." },
            { en: "follow", ko: "따르다", pos: "v." },
            { en: "even", ko: "~조차, 심지어", pos: "adv." },
            { en: "although", ko: "비록 ~일지라도", pos: "conj." },
            { en: "item", ko: "물품, 품목", pos: "n." }
        ],
        phrases: [
            { en: "get a refund", ko: "환불받다" },
            { en: "get back", ko: "돌려받다, 돌아오다" },
            { en: "take care of", ko: "~을 처리하다, ~을 돌보다" },
            { en: "look good on", ko: "~와 잘 어울리다" },
            { en: "have difficulty -ing", ko: "~하는데 어려움을 겪다" },
            { en: "spend (돈) on", ko: "~에 돈을 쓰다" },
            { en: "take effort", ko: "노력을 필요로 하다" },
            { en: "be gone", ko: "사라지다, 없어지다" },
            { en: "use up", ko: "다 써 버리다" },
            { en: "most of", ko: "~의 대부분" },
            { en: "at the beginning of", ko: "~의 초반에" },
            { en: "carry around", ko: "가지고 다니다" },
            { en: "divide A into B", ko: "A를 B로 나누다" },
            { en: "each day", ko: "매일" },
            { en: "by -ing", ko: "~함으로써" },
            { en: "on sale", ko: "할인 중인" },
            { en: "make a list", ko: "목록을 만들다" },
            { en: "even if", ko: "~에도 불구하고" },
            { en: "on the spot", ko: "즉석에서, 즉각" }
        ],
        sentences: [
            {
                en: "How smart are you with your money?",
                ko: "당신은 돈에 관해 얼마나 현명한가?",
                blank: "smart",
                blankEn: "How ______ are you with your money?"
            },
            {
                en: "These are the results of a survey of 100 students at Green Middle School.",
                ko: "이것은 Green 중학교 학생 100명의 설문 조사 결과이다.",
                blank: "survey",
                blankEn: "These are the results of a ______ of 100 students at Green Middle School."
            },
            {
                en: "As Graph 1 shows, 70% answered \"No\" while 30% answered \"Yes.\"",
                ko: "그래프 1이 보여 주듯이, 30%가 '예'라고 대답한 데 비해, 70%가 '아니요'라고 답했다.",
                blank: "while",
                blankEn: "As Graph 1 shows, 70% answered \"No\" ______ 30% answered \"Yes.\""
            },
            {
                en: "60% think they don't have enough allowance while 28% think they have difficulty saving money.",
                ko: "28%가 돈을 모으는 데 어려움이 있다고 생각하는 것에 비해, 60%는 용돈이 충분하지 않다고 생각한다.",
                blank: "allowance",
                blankEn: "60% think they don't have enough ______ while 28% think they have difficulty saving money."
            },
            {
                en: "Lastly, 12% said they spent money on things they didn't need.",
                ko: "마지막으로, 12%는 필요하지 않은 것에 돈을 소비한다고 말했다.",
                blank: "Lastly",
                blankEn: "______, 12% said they spent money on things they didn't need."
            },
            {
                en: "Our survey shows that the majority of students think they are not smart with their money.",
                ko: "우리의 설문 조사는 대다수의 학생들이 자신들이 돈과 관련하여 현명하지 못하다고 생각한다는 것을 보여 준다.",
                blank: "majority",
                blankEn: "Our survey shows that the ______ of students think they are not smart with their money."
            },
            {
                en: "Managing money is not easy, and becoming a smart spender takes effort.",
                ko: "돈을 관리하는 것은 쉽지 않고, 현명한 소비자가 되는 것에는 노력이 필요하다.",
                blank: "effort",
                blankEn: "Managing money is not easy, and becoming a smart spender takes ______."
            },
            {
                en: "I get a weekly allowance, but I never have enough.",
                ko: "저는 매주 용돈을 받지만, 늘 충분하지 않아요.",
                blank: "weekly",
                blankEn: "I get a ______ allowance, but I never have enough."
            },
            {
                en: "By Thursday, all of my money is gone.",
                ko: "목요일쯤이면 용돈이 모두 사라지고 없어요.",
                blank: "gone",
                blankEn: "By Thursday, all of my money is ______."
            },
            {
                en: "I don't know how to solve this problem.",
                ko: "저는 이 문제를 어떻게 해결해야 할지 모르겠어요.",
                blank: "solve",
                blankEn: "I don't know how to ______ this problem."
            },
            {
                en: "You used up most of your money at the beginning of the week.",
                ko: "주초에 용돈의 대부분을 다 써 버렸군요.",
                blank: "used up",
                blankEn: "You ______ most of your money at the beginning of the week."
            },
            {
                en: "Don't carry around all of your weekly allowance.",
                ko: "일주일 용돈 전부를 가지고 다니지 마세요.",
                blank: "carry around",
                blankEn: "Don't ______ all of your weekly allowance."
            },
            {
                en: "Divide the money into days.",
                ko: "용돈을 요일별로 나누세요.",
                blank: "Divide",
                blankEn: "______ the money into days."
            },
            {
                en: "Then carry only the money you need for each day.",
                ko: "그리고 날마다 필요한 돈만 들고 다니세요.",
                blank: "each",
                blankEn: "Then carry only the money you need for ______ day."
            },
            {
                en: "I have difficulty saving money.",
                ko: "저는 돈을 모으는 데 어려움이 있어요.",
                blank: "difficulty",
                blankEn: "I have ______ saving money."
            },
            {
                en: "I've been saving to go to my favorite singer's concert for the last two months.",
                ko: "저는 좋아하는 가수의 콘서트에 가려고 지난 두 달 동안 저축해 오고 있어요.",
                blank: "saving",
                blankEn: "I've been ______ to go to my favorite singer's concert for the last two months."
            },
            {
                en: "However, I still don't have enough money.",
                ko: "하지만 여전히 돈이 충분하지 않아요.",
                blank: "enough",
                blankEn: "However, I still don't have ______ money."
            },
            {
                en: "In the last few weeks, you spent 80% of your allowance and only saved 20%.",
                ko: "지난 몇 주간 용돈의 80%를 쓰고 20%만을 저축했군요.",
                blank: "allowance",
                blankEn: "In the last few weeks, you spent 80% of your ______ and only saved 20%."
            },
            {
                en: "I think you've been spending too much.",
                ko: "나는 당신이 돈을 너무 많이 써 오고 있다고 생각해요.",
                blank: "spending",
                blankEn: "I think you've been ______ too much."
            },
            {
                en: "To save money, you need to have a tighter budget.",
                ko: "돈을 모으기 위해서는 더 빠듯한 예산을 세울 필요가 있어요.",
                blank: "budget",
                blankEn: "To save money, you need to have a tighter ______."
            },
            {
                en: "Save 50%, spend 40%, and donate the remaining 10% to charity.",
                ko: "50%를 저축하고, 40%를 쓰고, 남은 10%를 자선 단체에 기부하세요.",
                blank: "donate",
                blankEn: "Save 50%, spend 40%, and ______ the remaining 10% to charity."
            },
            {
                en: "By following the rule, you can manage your money better.",
                ko: "이 규칙을 따름으로써 돈을 더 잘 관리할 수 있어요.",
                blank: "manage",
                blankEn: "By following the rule, you can ______ your money better."
            },
            {
                en: "Then you can save money faster to buy the ticket.",
                ko: "그러면 그 티켓을 사기 위해서 돈을 더 빨리 모을 수 있답니다.",
                blank: "save",
                blankEn: "Then you can ______ money faster to buy the ticket."
            },
            {
                en: "I like to buy things on sale.",
                ko: "저는 할인 판매하는 물건을 사는 것을 좋아해요.",
                blank: "on sale",
                blankEn: "I like to buy things ______."
            },
            {
                en: "If something's on sale, I buy it although I don't need it.",
                ko: "어떤 물건이 할인 판매를 하면 그것이 필요하지 않아도 사요.",
                blank: "although",
                blankEn: "If something's on sale, I buy it ______ I don't need it."
            },
            {
                en: "Last week, I bought two T-shirts on sale, but I already have many.",
                ko: "지난주에는 할인 판매하는 티셔츠 두 장을 샀지만 저는 이미 티셔츠가 많아요.",
                blank: "already",
                blankEn: "Last week, I bought two T-shirts on sale, but I ______ have many."
            },
            {
                en: "In your case, the problem is that you buy things you don't even need.",
                ko: "당신의 경우, 문제는 필요하지도 않은 물건을 산다는 것이에요.",
                blank: "even",
                blankEn: "In your case, the problem is that you buy things you don't ______ need."
            },
            {
                en: "Before you buy something, ask yourself, \"Do I really need this?\"",
                ko: "무언가를 사기 전에 '이것이 정말 필요한가?'라고 스스로에게 물어보세요.",
                blank: "yourself",
                blankEn: "Before you buy something, ask ______, \"Do I really need this?\""
            },
            {
                en: "Also, before you go shopping, make a shopping list.",
                ko: "또한 쇼핑하러 가기 전에 쇼핑 목록을 만드세요.",
                blank: "shopping list",
                blankEn: "Also, before you go shopping, make a ______."
            },
            {
                en: "Don't buy items that aren't on the list even if they're on sale.",
                ko: "물건들이 할인 판매 중이라고 해도 목록에 없는 물건들은 사지 마세요.",
                blank: "even if",
                blankEn: "Don't buy items that aren't on the list ______ they're on sale."
            },
            {
                en: "Then you won't buy things on the spot.",
                ko: "그러면 즉석에서 물건을 사지 않을 거예요.",
                blank: "on the spot",
                blankEn: "Then you won't buy things ______."
            }
        ]
    },

    // ==========================================
    // IDIOMS (속담/관용어)
    // ==========================================
    idioms: {
        title: "Idioms & Expressions",
        items: [
            { num: 1, idiom: "rain cats and dogs", meaning: "rain heavily", ko: "비가 억수같이 내린다" },
            { num: 2, idiom: "make a long face", meaning: "feel sad", ko: "우울하다" },
            { num: 3, idiom: "hit the books", meaning: "study hard", ko: "열공하다" },
            { num: 4, idiom: "feel under the weather", meaning: "not feel well", ko: "몸이 아프다" },
            { num: 5, idiom: "pig out", meaning: "eat a lot", ko: "과식하다" },
            { num: 6, idiom: "see eye to eye", meaning: "agree", ko: "동의하다" },
            { num: 7, idiom: "have butterflies in my stomach", meaning: "feel nervous", ko: "긴장하다" },
            { num: 8, idiom: "keep in touch", meaning: "call or text with someone", ko: "계속 연락하다" },
            { num: 9, idiom: "cost an arm and a leg", meaning: "very expensive", ko: "매우 비싼" },
            { num: 10, idiom: "pull one's leg", meaning: "joke", ko: "장난" },
            { num: 11, idiom: "Break a leg.", meaning: "Good luck.", ko: "행운을 빌어" },
            { num: 12, idiom: "a piece of cake", meaning: "very easy", ko: "식은 죽 먹기" },
            { num: 13, idiom: "a pie in the sky", meaning: "hope that will never happen", ko: "그림의 떡" },
            { num: 14, idiom: "(not) my cup of tea", meaning: "I (don't) like it.", ko: "내 취향이야" },
            { num: 15, idiom: "I'll keep my fingers crossed for you.", meaning: "Good luck.", ko: "행운을 빌어." },
            { num: 16, idiom: "I'm all ears.", meaning: "I'm listening carefully.", ko: "듣고 있어 (주의깊게 듣다)" },
            { num: 17, idiom: "It's on me.", meaning: "I'll pay for it.", ko: "내가 쏠게" },
            { num: 18, idiom: "in hot water", meaning: "in trouble", ko: "곤란한" },
            { num: 19, idiom: "on cloud nine", meaning: "very happy", ko: "매우 행복한" },
            { num: 20, idiom: "When pigs fly.", meaning: "It'll never happen.", ko: "꿈도 꾸지 마" }
        ]
    }
};
