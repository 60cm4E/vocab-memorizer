// ============================================
// VOCAB MASTER - Main Application Logic
// ============================================

(function() {
    'use strict';

    // === State ===
    let state = {
        lesson: null,
        mode: null, // 'red-words', 'build-words', 'red-phrases', 'build-sentences', 'red-sentences', 'build-scramble'
        questions: [],
        currentIndex: 0,
        correct: 0,
        wrong: 0,
        wrongList: [],
        hintUsed: false
    };

    // === Utility ===
    function shuffle(arr) {
        const a = [...arr];
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    function showScreen(id) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        const el = document.getElementById(id);
        el.classList.add('active');
        el.style.animation = 'none';
        el.offsetHeight; // trigger reflow
        el.style.animation = '';
    }

    // === Landing Screen Logic ===
    const lessonCards = document.querySelectorAll('.lesson-card');
    const modeSelect = document.getElementById('mode-select');
    const idiomModeSelect = document.getElementById('idiom-mode-select');

    lessonCards.forEach(card => {
        card.addEventListener('click', () => {
            lessonCards.forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            const lessonVal = card.dataset.lesson;

            if (lessonVal === 'idioms') {
                state.lesson = 'idioms';
                modeSelect.style.display = 'none';
                idiomModeSelect.style.display = 'block';
                idiomModeSelect.style.animation = 'slideUp 0.4s ease-out';
                setTimeout(() => idiomModeSelect.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
            } else {
                state.lesson = parseInt(lessonVal);
                idiomModeSelect.style.display = 'none';
                modeSelect.style.display = 'block';
                modeSelect.style.animation = 'slideUp 0.4s ease-out';
                setTimeout(() => modeSelect.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
            }
        });
    });

    // === Mode Buttons (Lesson) ===
    document.getElementById('btn-red-words').addEventListener('click', () => startRedTeam('words'));
    document.getElementById('btn-build-words').addEventListener('click', () => startBuildTeam());
    document.getElementById('btn-red-phrases').addEventListener('click', () => startRedTeam('phrases'));
    document.getElementById('btn-build-sentences').addEventListener('click', () => startSentenceFill());
    document.getElementById('btn-red-sentences').addEventListener('click', () => startTranslate());
    document.getElementById('btn-build-scramble').addEventListener('click', () => startScramble());

    // === Mode Buttons (Idiom) ===
    document.getElementById('btn-idiom-meaning').addEventListener('click', () => startIdiomQuiz('meaning'));
    document.getElementById('btn-idiom-korean').addEventListener('click', () => startIdiomQuiz('korean'));
    document.getElementById('btn-idiom-build').addEventListener('click', () => startIdiomBuild());

    // === Back Buttons ===
    document.getElementById('btn-quiz-back').addEventListener('click', goHome);
    document.getElementById('btn-build-back').addEventListener('click', goHome);
    document.getElementById('btn-sentence-back').addEventListener('click', goHome);
    document.getElementById('btn-translate-back').addEventListener('click', goHome);
    document.getElementById('btn-scramble-back').addEventListener('click', goHome);
    document.getElementById('btn-home').addEventListener('click', goHome);

    function goHome() {
        showScreen('screen-landing');
    }

    // ============================================
    // RED TEAM - Words / Phrases Quiz
    // ============================================
    function startRedTeam(type) {
        if (!state.lesson) return;
        const data = DATA[state.lesson];
        const items = type === 'words' ? data.words : data.phrases;
        
        state.mode = type === 'words' ? 'red-words' : 'red-phrases';
        state.questions = shuffle(items);
        state.currentIndex = 0;
        state.correct = 0;
        state.wrong = 0;
        state.wrongList = [];

        document.getElementById('quiz-total').textContent = state.questions.length;
        document.getElementById('question-type-label').textContent = type === 'words' ? '단어' : '숙어';
        
        showScreen('screen-quiz');
        renderQuizQuestion();
    }

    function renderQuizQuestion() {
        const q = state.questions[state.currentIndex];
        const isPhrase = state.mode === 'red-phrases';
        
        document.getElementById('quiz-current').textContent = state.currentIndex + 1;
        document.getElementById('score-correct').textContent = state.correct;
        document.getElementById('score-wrong').textContent = state.wrong;
        
        const progress = ((state.currentIndex) / state.questions.length) * 100;
        document.getElementById('quiz-progress-bar').style.width = progress + '%';

        document.getElementById('question-word').textContent = q.en;
        document.getElementById('question-hint').textContent = isPhrase ? '' : (q.pos || '');

        // Generate options
        const allItems = isPhrase ? DATA[state.lesson].phrases : DATA[state.lesson].words;
        let wrongOptions = allItems.filter(item => item.ko !== q.ko);
        wrongOptions = shuffle(wrongOptions).slice(0, 3);
        
        let options = shuffle([
            { text: q.ko, correct: true },
            ...wrongOptions.map(w => ({ text: w.ko, correct: false }))
        ]);

        const grid = document.getElementById('options-grid');
        grid.className = 'options-grid';
        grid.innerHTML = '';

        options.forEach((opt, i) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerHTML = `<span class="option-number">${i + 1}</span>${opt.text}`;
            btn.addEventListener('click', () => handleQuizAnswer(btn, opt.correct, q));
            grid.appendChild(btn);
        });

        document.getElementById('feedback-area').style.display = 'none';

        // Animate card
        const card = document.getElementById('question-card');
        card.style.animation = 'none';
        card.offsetHeight;
        card.style.animation = 'popIn 0.3s ease-out';
    }

    function handleQuizAnswer(btn, isCorrect, question) {
        const allBtns = document.querySelectorAll('#options-grid .option-btn');
        allBtns.forEach(b => b.classList.add('disabled'));

        if (isCorrect) {
            btn.classList.add('correct-answer');
            state.correct++;
        } else {
            btn.classList.add('wrong-answer');
            state.wrong++;
            state.wrongList.push(question);
            // Show correct answer
            allBtns.forEach(b => {
                if (b.textContent.includes(question.ko) && !b.classList.contains('wrong-answer')) {
                    b.classList.add('correct-answer');
                }
            });
        }

        document.getElementById('score-correct').textContent = state.correct;
        document.getElementById('score-wrong').textContent = state.wrong;

        const feedback = document.getElementById('feedback-area');
        const content = document.getElementById('feedback-content');
        feedback.style.display = 'block';
        
        if (isCorrect) {
            content.className = 'feedback-content correct';
            content.innerHTML = `✅ 정답! <strong>${question.en}</strong> = ${question.ko}`;
        } else {
            content.className = 'feedback-content wrong';
            content.innerHTML = `❌ 오답! <strong>${question.en}</strong>의 뜻은 <strong>${question.ko}</strong>입니다.`;
        }
    }

    document.getElementById('btn-next').addEventListener('click', () => {
        state.currentIndex++;
        if (state.currentIndex >= state.questions.length) {
            showResult();
        } else {
            renderQuizQuestion();
        }
    });

    // ============================================
    // BUILD TEAM - Word Spelling
    // ============================================
    function startBuildTeam() {
        if (!state.lesson) return;
        const data = DATA[state.lesson];
        
        state.mode = 'build-words';
        state.questions = shuffle(data.words);
        state.currentIndex = 0;
        state.correct = 0;
        state.wrong = 0;
        state.wrongList = [];

        document.getElementById('build-total').textContent = state.questions.length;
        
        showScreen('screen-build');
        renderBuildQuestion();
    }

    function renderBuildQuestion() {
        const q = state.questions[state.currentIndex];
        state.hintUsed = false;

        document.getElementById('build-current').textContent = state.currentIndex + 1;
        document.getElementById('build-score-correct').textContent = state.correct;
        document.getElementById('build-score-wrong').textContent = state.wrong;
        
        const progress = ((state.currentIndex) / state.questions.length) * 100;
        document.getElementById('build-progress-bar').style.width = progress + '%';

        document.getElementById('build-korean').textContent = q.ko;
        document.getElementById('build-pos').textContent = q.pos;

        // Letter display
        const display = document.getElementById('letter-display');
        display.innerHTML = '';
        for (let i = 0; i < q.en.length; i++) {
            const box = document.createElement('div');
            box.className = 'letter-box';
            if (q.en[i] === ' ') {
                box.style.width = '16px';
                box.style.border = 'none';
                box.style.background = 'none';
            }
            display.appendChild(box);
        }

        const input = document.getElementById('build-input');
        input.value = '';
        input.focus();

        // Live update letter boxes
        input.oninput = () => {
            const val = input.value.toLowerCase();
            const boxes = display.querySelectorAll('.letter-box');
            const answer = q.en.toLowerCase();
            
            for (let i = 0; i < boxes.length; i++) {
                if (answer[i] === ' ') continue;
                if (i < val.length) {
                    boxes[i].textContent = val[i];
                    boxes[i].classList.add('filled');
                    boxes[i].classList.remove('hint');
                } else if (boxes[i].classList.contains('hint')) {
                    // keep hint
                } else {
                    boxes[i].textContent = '';
                    boxes[i].classList.remove('filled');
                }
            }
        };

        document.getElementById('build-feedback-area').style.display = 'none';
    }

    document.getElementById('btn-submit-build').addEventListener('click', checkBuildAnswer);
    document.getElementById('build-input').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') checkBuildAnswer();
    });

    function checkBuildAnswer() {
        const q = state.questions[state.currentIndex];
        const input = document.getElementById('build-input');
        const answer = input.value.trim().toLowerCase();
        const correct = q.en.toLowerCase();

        const display = document.getElementById('letter-display');
        const boxes = display.querySelectorAll('.letter-box');

        const isCorrect = answer === correct;

        if (isCorrect) {
            state.correct++;
            boxes.forEach((box, i) => {
                if (correct[i] !== ' ') {
                    box.textContent = correct[i];
                    box.className = 'letter-box correct';
                }
            });
        } else {
            state.wrong++;
            state.wrongList.push(q);
            // Show correct letters
            for (let i = 0; i < boxes.length; i++) {
                if (correct[i] === ' ') continue;
                boxes[i].textContent = correct[i];
                if (i < answer.length && answer[i] === correct[i]) {
                    boxes[i].className = 'letter-box correct';
                } else {
                    boxes[i].className = 'letter-box wrong';
                }
            }
        }

        document.getElementById('build-score-correct').textContent = state.correct;
        document.getElementById('build-score-wrong').textContent = state.wrong;
        input.disabled = true;

        const feedback = document.getElementById('build-feedback-area');
        const content = document.getElementById('build-feedback-content');
        feedback.style.display = 'block';

        if (isCorrect) {
            content.className = 'feedback-content correct';
            content.innerHTML = `✅ 정답! <strong>${q.en}</strong>`;
        } else {
            content.className = 'feedback-content wrong';
            content.innerHTML = `❌ 오답! 정답은 <strong>${q.en}</strong>입니다. (${q.ko})`;
        }
    }

    document.getElementById('btn-hint-build').addEventListener('click', () => {
        const q = state.questions[state.currentIndex];
        const display = document.getElementById('letter-display');
        const boxes = display.querySelectorAll('.letter-box');
        const answer = q.en.toLowerCase();
        
        // Reveal first letter and a random unrevealed letter
        let revealed = 0;
        for (let i = 0; i < boxes.length; i++) {
            if (answer[i] === ' ') continue;
            if (!boxes[i].classList.contains('hint') && !boxes[i].classList.contains('filled') && revealed < 2) {
                boxes[i].textContent = answer[i];
                boxes[i].classList.add('hint');
                revealed++;
            }
        }
        state.hintUsed = true;
    });

    document.getElementById('btn-build-next').addEventListener('click', () => {
        state.currentIndex++;
        document.getElementById('build-input').disabled = false;
        if (state.currentIndex >= state.questions.length) {
            showResult();
        } else {
            renderBuildQuestion();
        }
    });

    // ============================================
    // BUILD TEAM - Sentence Fill
    // ============================================
    function startSentenceFill() {
        if (!state.lesson) return;
        const data = DATA[state.lesson];
        
        state.mode = 'build-sentences';
        state.questions = shuffle(data.sentences);
        state.currentIndex = 0;
        state.correct = 0;
        state.wrong = 0;
        state.wrongList = [];

        document.getElementById('sentence-total').textContent = state.questions.length;
        
        showScreen('screen-sentence');
        renderSentenceQuestion();
    }

    function renderSentenceQuestion() {
        const q = state.questions[state.currentIndex];

        document.getElementById('sentence-current').textContent = state.currentIndex + 1;
        document.getElementById('sentence-score-correct').textContent = state.correct;
        document.getElementById('sentence-score-wrong').textContent = state.wrong;
        
        const progress = ((state.currentIndex) / state.questions.length) * 100;
        document.getElementById('sentence-progress-bar').style.width = progress + '%';

        document.getElementById('sentence-korean').textContent = q.ko;
        
        // Create sentence with blank
        const blankHtml = q.blankEn.replace('______', '<span class="blank">______</span>');
        document.getElementById('sentence-english').innerHTML = blankHtml;

        const input = document.getElementById('sentence-input');
        input.value = '';
        input.disabled = false;
        input.focus();

        document.getElementById('sentence-feedback-area').style.display = 'none';
    }

    document.getElementById('btn-submit-sentence').addEventListener('click', checkSentenceAnswer);
    document.getElementById('sentence-input').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') checkSentenceAnswer();
    });

    function checkSentenceAnswer() {
        const q = state.questions[state.currentIndex];
        const input = document.getElementById('sentence-input');
        const answer = input.value.trim().toLowerCase();
        const correct = q.blank.toLowerCase();

        const isCorrect = answer === correct;
        const blankSpan = document.querySelector('#sentence-english .blank');

        if (isCorrect) {
            state.correct++;
            blankSpan.textContent = q.blank;
            blankSpan.classList.add('revealed');
            blankSpan.style.color = 'var(--correct)';
        } else {
            state.wrong++;
            state.wrongList.push({ en: q.blank, ko: q.ko });
            blankSpan.textContent = q.blank;
            blankSpan.classList.add('revealed');
            blankSpan.style.color = 'var(--wrong)';
        }

        document.getElementById('sentence-score-correct').textContent = state.correct;
        document.getElementById('sentence-score-wrong').textContent = state.wrong;
        input.disabled = true;

        const feedback = document.getElementById('sentence-feedback-area');
        const content = document.getElementById('sentence-feedback-content');
        feedback.style.display = 'block';

        if (isCorrect) {
            content.className = 'feedback-content correct';
            content.innerHTML = `✅ 정답! 빈칸: <strong>${q.blank}</strong>`;
        } else {
            content.className = 'feedback-content wrong';
            content.innerHTML = `❌ 오답! 정답은 <strong>${q.blank}</strong>입니다.<br>입력: ${input.value || '(없음)'}`;
        }
    }

    document.getElementById('btn-hint-sentence').addEventListener('click', () => {
        const q = state.questions[state.currentIndex];
        const blank = q.blank;
        // Show first 2 letters
        const hint = blank.substring(0, Math.min(2, blank.length)) + '...';
        const blankSpan = document.querySelector('#sentence-english .blank');
        blankSpan.textContent = hint;
        blankSpan.style.color = 'var(--accent-gold)';
    });

    document.getElementById('btn-sentence-next').addEventListener('click', () => {
        state.currentIndex++;
        if (state.currentIndex >= state.questions.length) {
            showResult();
        } else {
            renderSentenceQuestion();
        }
    });

    // ============================================
    // RED TEAM - Sentence Translation
    // ============================================
    function startTranslate() {
        if (!state.lesson) return;
        const data = DATA[state.lesson];
        
        state.mode = 'red-sentences';
        state.questions = shuffle(data.sentences);
        state.currentIndex = 0;
        state.correct = 0;
        state.wrong = 0;
        state.wrongList = [];

        document.getElementById('translate-total').textContent = state.questions.length;
        
        showScreen('screen-translate');
        renderTranslateQuestion();
    }

    function renderTranslateQuestion() {
        const q = state.questions[state.currentIndex];

        document.getElementById('translate-current').textContent = state.currentIndex + 1;
        document.getElementById('translate-score-correct').textContent = state.correct;
        document.getElementById('translate-score-wrong').textContent = state.wrong;
        
        const progress = ((state.currentIndex) / state.questions.length) * 100;
        document.getElementById('translate-progress-bar').style.width = progress + '%';

        document.getElementById('translate-sentence').textContent = q.en;

        // Generate 4 options with correct Korean
        const allSentences = DATA[state.lesson].sentences;
        let wrongOptions = allSentences.filter(s => s.ko !== q.ko);
        wrongOptions = shuffle(wrongOptions).slice(0, 3);

        let options = shuffle([
            { text: q.ko, correct: true },
            ...wrongOptions.map(s => ({ text: s.ko, correct: false }))
        ]);

        const grid = document.getElementById('translate-options');
        grid.className = 'options-grid sentence-options';
        grid.innerHTML = '';

        options.forEach((opt, i) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerHTML = `<span class="option-number">${i + 1}</span>${opt.text}`;
            btn.addEventListener('click', () => handleTranslateAnswer(btn, opt.correct, q));
            grid.appendChild(btn);
        });

        document.getElementById('translate-feedback-area').style.display = 'none';
    }

    function handleTranslateAnswer(btn, isCorrect, question) {
        const allBtns = document.querySelectorAll('#translate-options .option-btn');
        allBtns.forEach(b => b.classList.add('disabled'));

        if (isCorrect) {
            btn.classList.add('correct-answer');
            state.correct++;
        } else {
            btn.classList.add('wrong-answer');
            state.wrong++;
            state.wrongList.push({ en: question.en, ko: question.ko });
            allBtns.forEach(b => {
                if (b.textContent.includes(question.ko) && !b.classList.contains('wrong-answer')) {
                    b.classList.add('correct-answer');
                }
            });
        }

        document.getElementById('translate-score-correct').textContent = state.correct;
        document.getElementById('translate-score-wrong').textContent = state.wrong;

        const feedback = document.getElementById('translate-feedback-area');
        const content = document.getElementById('translate-feedback-content');
        feedback.style.display = 'block';

        if (isCorrect) {
            content.className = 'feedback-content correct';
            content.innerHTML = `✅ 정답!`;
        } else {
            content.className = 'feedback-content wrong';
            content.innerHTML = `❌ 오답!<br>정답: ${question.ko}`;
        }
    }

    document.getElementById('btn-translate-next').addEventListener('click', () => {
        state.currentIndex++;
        if (state.currentIndex >= state.questions.length) {
            showResult();
        } else {
            renderTranslateQuestion();
        }
    });

    // ============================================
    // BUILD TEAM - Sentence Scramble
    // ============================================
    let scrambleState = { assembled: [], pool: [] };

    function startScramble() {
        if (!state.lesson) return;
        const data = DATA[state.lesson];
        
        state.mode = 'build-scramble';
        // Pick shorter sentences for scramble (filter very long ones)
        let sentences = data.sentences.filter(s => s.en.split(' ').length <= 16);
        if (sentences.length < 5) sentences = data.sentences;
        state.questions = shuffle(sentences).slice(0, Math.min(15, sentences.length));
        state.currentIndex = 0;
        state.correct = 0;
        state.wrong = 0;
        state.wrongList = [];

        document.getElementById('scramble-total').textContent = state.questions.length;
        
        showScreen('screen-scramble');
        renderScrambleQuestion();
    }

    function renderScrambleQuestion() {
        const q = state.questions[state.currentIndex];

        document.getElementById('scramble-current').textContent = state.currentIndex + 1;
        document.getElementById('scramble-score-correct').textContent = state.correct;
        document.getElementById('scramble-score-wrong').textContent = state.wrong;

        const progress = ((state.currentIndex) / state.questions.length) * 100;
        document.getElementById('scramble-progress-bar').style.width = progress + '%';

        document.getElementById('scramble-korean').textContent = q.ko;

        // Split sentence into words
        const words = q.en.split(/\s+/);
        scrambleState.pool = shuffle(words.map((w, i) => ({ text: w, id: i })));
        scrambleState.assembled = [];

        renderScrambleChips();
        document.getElementById('scramble-feedback-area').style.display = 'none';
    }

    function renderScrambleChips() {
        const poolEl = document.getElementById('word-pool');
        const assembledEl = document.getElementById('assembled-words');

        poolEl.innerHTML = '';
        assembledEl.innerHTML = '';

        if (scrambleState.assembled.length === 0) {
            assembledEl.innerHTML = '<span class="placeholder-text">단어를 클릭하여 문장을 만드세요</span>';
        }

        scrambleState.assembled.forEach((word, i) => {
            const chip = document.createElement('button');
            chip.className = 'word-chip assembled';
            chip.textContent = word.text;
            chip.addEventListener('click', () => {
                scrambleState.assembled.splice(i, 1);
                scrambleState.pool.push(word);
                renderScrambleChips();
            });
            assembledEl.appendChild(chip);
        });

        scrambleState.pool.forEach((word, i) => {
            const chip = document.createElement('button');
            chip.className = 'word-chip pool';
            chip.textContent = word.text;
            chip.addEventListener('click', () => {
                scrambleState.pool.splice(i, 1);
                scrambleState.assembled.push(word);
                renderScrambleChips();
            });
            poolEl.appendChild(chip);
        });
    }

    document.getElementById('btn-scramble-clear').addEventListener('click', () => {
        scrambleState.pool = [...scrambleState.pool, ...scrambleState.assembled];
        scrambleState.assembled = [];
        scrambleState.pool = shuffle(scrambleState.pool);
        renderScrambleChips();
    });

    document.getElementById('btn-submit-scramble').addEventListener('click', () => {
        const q = state.questions[state.currentIndex];
        const userAnswer = scrambleState.assembled.map(w => w.text).join(' ');
        const isCorrect = userAnswer === q.en;

        if (isCorrect) {
            state.correct++;
        } else {
            state.wrong++;
            state.wrongList.push({ en: q.en, ko: q.ko });
        }

        document.getElementById('scramble-score-correct').textContent = state.correct;
        document.getElementById('scramble-score-wrong').textContent = state.wrong;

        // Disable chips
        document.querySelectorAll('#word-pool .word-chip, #assembled-words .word-chip').forEach(c => {
            c.style.pointerEvents = 'none';
        });

        const feedback = document.getElementById('scramble-feedback-area');
        const content = document.getElementById('scramble-feedback-content');
        feedback.style.display = 'block';

        if (isCorrect) {
            content.className = 'feedback-content correct';
            content.innerHTML = `✅ 정답! 완벽한 문장입니다!`;
        } else {
            content.className = 'feedback-content wrong';
            content.innerHTML = `❌ 오답!<br>정답: <strong>${q.en}</strong><br>입력: ${userAnswer || '(없음)'}`;
        }
    });

    document.getElementById('btn-scramble-next').addEventListener('click', () => {
        state.currentIndex++;
        if (state.currentIndex >= state.questions.length) {
            showResult();
        } else {
            renderScrambleQuestion();
        }
    });

    // ============================================
    // RESULT SCREEN
    // ============================================
    function showResult() {
        showScreen('screen-result');

        const total = state.correct + state.wrong;
        const percent = total > 0 ? Math.round((state.correct / total) * 100) : 0;

        // Emoji based on score
        let emoji = '🎉';
        let title = '완벽해요!';
        if (percent < 50) { emoji = '💪'; title = '더 열심히!'; }
        else if (percent < 70) { emoji = '📚'; title = '조금 더 노력!'; }
        else if (percent < 90) { emoji = '👍'; title = '잘 했어요!'; }
        else if (percent < 100) { emoji = '🔥'; title = '거의 완벽!'; }

        document.getElementById('result-emoji').textContent = emoji;
        document.getElementById('result-title').textContent = title;
        document.getElementById('result-correct').textContent = state.correct;
        document.getElementById('result-wrong').textContent = state.wrong;
        document.getElementById('result-total').textContent = total;

        // Animate percent
        const percentEl = document.getElementById('result-percent');
        let currentPercent = 0;
        const interval = setInterval(() => {
            currentPercent += 2;
            if (currentPercent >= percent) {
                currentPercent = percent;
                clearInterval(interval);
            }
            percentEl.textContent = currentPercent;
        }, 20);

        // Score ring
        const ring = document.getElementById('score-ring-fill');
        const circumference = 2 * Math.PI * 54; // 339.3
        const offset = circumference - (percent / 100) * circumference;
        setTimeout(() => {
            ring.style.strokeDashoffset = offset;
        }, 300);

        // Wrong review
        const reviewSection = document.getElementById('wrong-review');
        const reviewList = document.getElementById('review-list');
        
        if (state.wrongList.length > 0) {
            reviewSection.style.display = 'block';
            reviewList.innerHTML = '';
            
            // Deduplicate
            const seen = new Set();
            state.wrongList.forEach(item => {
                const key = item.en;
                if (seen.has(key)) return;
                seen.add(key);
                
                const div = document.createElement('div');
                div.className = 'review-item';
                div.innerHTML = `
                    <span class="review-word">${item.en}</span>
                    <span class="review-meaning">${item.ko}</span>
                `;
                reviewList.appendChild(div);
            });
        } else {
            reviewSection.style.display = 'none';
        }
    }

    // ============================================
    // IDIOM MODES
    // ============================================

    // --- RED TEAM: Idiom Quiz (meaning or korean) ---
    function startIdiomQuiz(type) {
        const items = DATA.idioms.items;
        state.mode = type === 'meaning' ? 'idiom-meaning' : 'idiom-korean';
        state.lesson = 'idioms';
        state.questions = shuffle(items);
        state.currentIndex = 0;
        state.correct = 0;
        state.wrong = 0;
        state.wrongList = [];

        document.getElementById('quiz-total').textContent = state.questions.length;
        document.getElementById('question-type-label').textContent = type === 'meaning' ? 'IDIOM → MEANING' : 'IDIOM → 우리말';

        showScreen('screen-quiz');
        renderIdiomQuizQuestion(type);
    }

    function renderIdiomQuizQuestion(type) {
        if (!type) type = state.mode === 'idiom-meaning' ? 'meaning' : 'korean';
        const q = state.questions[state.currentIndex];

        document.getElementById('quiz-current').textContent = state.currentIndex + 1;
        document.getElementById('score-correct').textContent = state.correct;
        document.getElementById('score-wrong').textContent = state.wrong;

        const progress = ((state.currentIndex) / state.questions.length) * 100;
        document.getElementById('quiz-progress-bar').style.width = progress + '%';

        const wordEl = document.getElementById('question-word');
        wordEl.textContent = q.idiom;
        wordEl.className = 'question-word idiom-text';
        document.getElementById('question-hint').textContent = '';

        // Pick answer field
        const answerField = type === 'meaning' ? 'meaning' : 'ko';
        const correctAnswer = q[answerField];

        // Generate 3 wrong options
        const allItems = DATA.idioms.items;
        let wrongOptions = allItems.filter(item => item[answerField] !== correctAnswer);
        wrongOptions = shuffle(wrongOptions).slice(0, 3);

        let options = shuffle([
            { text: correctAnswer, correct: true },
            ...wrongOptions.map(w => ({ text: w[answerField], correct: false }))
        ]);

        const grid = document.getElementById('options-grid');
        grid.className = 'options-grid';
        grid.innerHTML = '';

        options.forEach((opt, i) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerHTML = `<span class="option-number">${i + 1}</span>${opt.text}`;
            btn.addEventListener('click', () => handleIdiomQuizAnswer(btn, opt.correct, q, type));
            grid.appendChild(btn);
        });

        document.getElementById('feedback-area').style.display = 'none';

        const card = document.getElementById('question-card');
        card.style.animation = 'none';
        card.offsetHeight;
        card.style.animation = 'popIn 0.3s ease-out';
    }

    function handleIdiomQuizAnswer(btn, isCorrect, question, type) {
        const answerField = type === 'meaning' ? 'meaning' : 'ko';
        const correctAnswer = question[answerField];

        const allBtns = document.querySelectorAll('#options-grid .option-btn');
        allBtns.forEach(b => b.classList.add('disabled'));

        if (isCorrect) {
            btn.classList.add('correct-answer');
            state.correct++;
        } else {
            btn.classList.add('wrong-answer');
            state.wrong++;
            state.wrongList.push({ en: question.idiom, ko: question.ko + ' / ' + question.meaning });
            allBtns.forEach(b => {
                if (b.textContent.includes(correctAnswer) && !b.classList.contains('wrong-answer')) {
                    b.classList.add('correct-answer');
                }
            });
        }

        document.getElementById('score-correct').textContent = state.correct;
        document.getElementById('score-wrong').textContent = state.wrong;

        const feedback = document.getElementById('feedback-area');
        const content = document.getElementById('feedback-content');
        feedback.style.display = 'block';

        if (isCorrect) {
            content.className = 'feedback-content correct';
            content.innerHTML = `✅ 정답! <strong>${question.idiom}</strong><br>= ${question.meaning} (${question.ko})`;
        } else {
            content.className = 'feedback-content wrong';
            content.innerHTML = `❌ 오답! <strong>${question.idiom}</strong><br>= ${question.meaning} (${question.ko})`;
        }
    }

    // Override next button for idiom quiz (reuses same btn-next)
    // The existing btn-next handler checks mode via renderQuizQuestion/renderIdiomQuizQuestion
    // We need to patch the next handler to detect idiom mode
    const originalNextHandler = document.getElementById('btn-next');
    // Remove old, add new combined handler
    originalNextHandler.replaceWith(originalNextHandler.cloneNode(true));
    document.getElementById('btn-next').addEventListener('click', () => {
        state.currentIndex++;
        if (state.currentIndex >= state.questions.length) {
            showResult();
        } else {
            if (state.mode === 'idiom-meaning' || state.mode === 'idiom-korean') {
                renderIdiomQuizQuestion();
            } else {
                renderQuizQuestion();
            }
        }
    });

    // --- BUILD TEAM: Idiom Spelling ---
    function startIdiomBuild() {
        const items = DATA.idioms.items;
        state.mode = 'idiom-build';
        state.lesson = 'idioms';
        state.questions = shuffle(items);
        state.currentIndex = 0;
        state.correct = 0;
        state.wrong = 0;
        state.wrongList = [];

        document.getElementById('build-total').textContent = state.questions.length;
        document.getElementById('build-type-label').textContent = '관용어 조립';

        showScreen('screen-build');
        renderIdiomBuildQuestion();
    }

    function renderIdiomBuildQuestion() {
        const q = state.questions[state.currentIndex];
        state.hintUsed = false;

        document.getElementById('build-current').textContent = state.currentIndex + 1;
        document.getElementById('build-score-correct').textContent = state.correct;
        document.getElementById('build-score-wrong').textContent = state.wrong;

        const progress = ((state.currentIndex) / state.questions.length) * 100;
        document.getElementById('build-progress-bar').style.width = progress + '%';

        document.getElementById('build-korean').textContent = q.ko;
        document.getElementById('build-pos').textContent = q.meaning;

        // Letter display
        const display = document.getElementById('letter-display');
        display.innerHTML = '';
        for (let i = 0; i < q.idiom.length; i++) {
            const box = document.createElement('div');
            box.className = 'letter-box';
            if (q.idiom[i] === ' ') {
                box.style.width = '16px';
                box.style.border = 'none';
                box.style.background = 'none';
            }
            display.appendChild(box);
        }

        const input = document.getElementById('build-input');
        input.value = '';
        input.disabled = false;
        input.focus();

        // Live update letter boxes
        input.oninput = () => {
            const val = input.value.toLowerCase();
            const boxes = display.querySelectorAll('.letter-box');
            const answer = q.idiom.toLowerCase();

            let charIdx = 0;
            for (let i = 0; i < boxes.length; i++) {
                if (answer[i] === ' ') continue;
                if (charIdx < val.length) {
                    boxes[i].textContent = val[charIdx];
                    boxes[i].classList.add('filled');
                    boxes[i].classList.remove('hint');
                } else if (boxes[i].classList.contains('hint')) {
                    // keep
                } else {
                    boxes[i].textContent = '';
                    boxes[i].classList.remove('filled');
                }
                charIdx++;
            }
        };

        document.getElementById('build-feedback-area').style.display = 'none';
    }

    // Patch build submit to handle idiom mode
    const origSubmitBuild = document.getElementById('btn-submit-build');
    origSubmitBuild.replaceWith(origSubmitBuild.cloneNode(true));
    document.getElementById('btn-submit-build').addEventListener('click', () => {
        if (state.mode === 'idiom-build') {
            checkIdiomBuildAnswer();
        } else {
            checkBuildAnswer();
        }
    });

    // Also patch Enter on build-input
    const buildInput = document.getElementById('build-input');
    buildInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            if (state.mode === 'idiom-build') {
                checkIdiomBuildAnswer();
            } else {
                checkBuildAnswer();
            }
        }
    });

    function checkIdiomBuildAnswer() {
        const q = state.questions[state.currentIndex];
        const input = document.getElementById('build-input');
        const answer = input.value.trim().toLowerCase();
        const correct = q.idiom.toLowerCase();

        const display = document.getElementById('letter-display');
        const boxes = display.querySelectorAll('.letter-box');

        const isCorrect = answer === correct;

        if (isCorrect) {
            state.correct++;
            boxes.forEach((box, i) => {
                if (correct[i] !== ' ') {
                    box.textContent = correct[i];
                    box.className = 'letter-box correct';
                }
            });
        } else {
            state.wrong++;
            state.wrongList.push({ en: q.idiom, ko: q.ko + ' / ' + q.meaning });
            for (let i = 0; i < boxes.length; i++) {
                if (correct[i] === ' ') continue;
                boxes[i].textContent = correct[i];
                boxes[i].className = answer[i] === correct[i] ? 'letter-box correct' : 'letter-box wrong';
            }
        }

        document.getElementById('build-score-correct').textContent = state.correct;
        document.getElementById('build-score-wrong').textContent = state.wrong;
        input.disabled = true;

        const feedback = document.getElementById('build-feedback-area');
        const content = document.getElementById('build-feedback-content');
        feedback.style.display = 'block';

        if (isCorrect) {
            content.className = 'feedback-content correct';
            content.innerHTML = `✅ 정답! <strong>${q.idiom}</strong>`;
        } else {
            content.className = 'feedback-content wrong';
            content.innerHTML = `❌ 오답! 정답은 <strong>${q.idiom}</strong>입니다.<br>(${q.ko} / ${q.meaning})`;
        }
    }

    // Patch build-next to handle idiom mode
    const origBuildNext = document.getElementById('btn-build-next');
    origBuildNext.replaceWith(origBuildNext.cloneNode(true));
    document.getElementById('btn-build-next').addEventListener('click', () => {
        state.currentIndex++;
        document.getElementById('build-input').disabled = false;
        if (state.currentIndex >= state.questions.length) {
            showResult();
        } else {
            if (state.mode === 'idiom-build') {
                renderIdiomBuildQuestion();
            } else {
                renderBuildQuestion();
            }
        }
    });

    // Patch hint button for idiom mode
    const origHintBuild = document.getElementById('btn-hint-build');
    origHintBuild.replaceWith(origHintBuild.cloneNode(true));
    document.getElementById('btn-hint-build').addEventListener('click', () => {
        const q = state.questions[state.currentIndex];
        const display = document.getElementById('letter-display');
        const boxes = display.querySelectorAll('.letter-box');
        const answer = (state.mode === 'idiom-build' ? q.idiom : q.en).toLowerCase();

        let revealed = 0;
        for (let i = 0; i < boxes.length; i++) {
            if (answer[i] === ' ') continue;
            if (!boxes[i].classList.contains('hint') && !boxes[i].classList.contains('filled') && revealed < 2) {
                boxes[i].textContent = answer[i];
                boxes[i].classList.add('hint');
                revealed++;
            }
        }
        state.hintUsed = true;
    });

    // Retry button
    document.getElementById('btn-retry').addEventListener('click', () => {
        // Reset score ring
        document.getElementById('score-ring-fill').style.strokeDashoffset = '339.3';
        
        // Re-start same mode
        switch (state.mode) {
            case 'red-words': startRedTeam('words'); break;
            case 'red-phrases': startRedTeam('phrases'); break;
            case 'build-words': startBuildTeam(); break;
            case 'build-sentences': startSentenceFill(); break;
            case 'red-sentences': startTranslate(); break;
            case 'build-scramble': startScramble(); break;
            case 'idiom-meaning': startIdiomQuiz('meaning'); break;
            case 'idiom-korean': startIdiomQuiz('korean'); break;
            case 'idiom-build': startIdiomBuild(); break;
            default: goHome();
        }
    });

    // === Keyboard shortcuts ===
    document.addEventListener('keydown', (e) => {
        // Number keys 1-4 for quiz options
        if (['screen-quiz', 'screen-translate'].some(id => document.getElementById(id).classList.contains('active'))) {
            const screenId = document.getElementById('screen-quiz').classList.contains('active') ? 'options-grid' : 'translate-options';
            const btns = document.querySelectorAll(`#${screenId} .option-btn:not(.disabled)`);
            
            if (e.key >= '1' && e.key <= '4' && btns.length >= parseInt(e.key)) {
                btns[parseInt(e.key) - 1].click();
            }
        }

        // Enter for next (except when focused on build-input or sentence-input)
        if (e.key === 'Enter' && document.activeElement?.id !== 'build-input' && document.activeElement?.id !== 'sentence-input') {
            const nextBtns = ['btn-next', 'btn-build-next', 'btn-sentence-next', 'btn-translate-next', 'btn-scramble-next'];
            for (const id of nextBtns) {
                const btn = document.getElementById(id);
                if (btn && btn.closest('.feedback-area')?.style.display !== 'none' && btn.closest('.screen')?.classList.contains('active')) {
                    btn.click();
                    break;
                }
            }
        }
    });

})();
