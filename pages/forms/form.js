const containerQuestions = document.getElementById('container-questions');
const buttonPrev = document.getElementById('btn-prev');
const buttonNext = document.getElementById('btn-next');
const sectionSendSucces = document.getElementById('section-send-success');
let currentQuestion = 1;
let nextQuestion = 2;
let prevQuestion = 0;
let totalQuestions = 0;

const updateLabel = (id) => {
    document.getElementById('sliderLabel-' + id).textContent =
        document.getElementById('slider-' + id).value;
};

const setQuestionInHtml = async () => {
    const questions = await getQuestions();
    let content = '';

    totalQuestions = questions.length;

    for (let i = 0; i < questions.length; i++) {
        content += `<div id="question-${
            questions[i].id
        }" class="flex-wrap justify-content-center ${
            i === 0 ? 'd-flex' : 'd-none'
        }">
                <div class="col-12 col-lg-7">
                    <p class="text-center my-5 question-text">
                        ${i + 1} ${questions[i].question}
                    </p>
                </div>
                <div class="col-12 col-lg-7 text-center mt-5">
                    <span id="sliderLabel-${questions[i].id}">4</span>
                    <div>
                        <input id="slider-${
                            questions[i].id
                        }" type="range" min="1" max="4" value="4" step="1" oninput="updateLabel(${
            questions[i].id
        })"
                            class="w-100 slider" />
                    </div>
                </div>
                <div
                    class="col-12 col-lg-7 mt-3 mb-5 px-4 px-sm-0 d-flex flex-wrap justify-content-center text-md-center">
                    <div class="col-6 col-md-2">
                        <span class="badge bg-primary rounded-pill">${
                            questions[i].options.option1.value
                        }</span>
                        <span class="option-text">${
                            questions[i].options.option1.text
                        }</span>
                    </div>
                    <div class="col-6 col-md-2">
                        <span class="badge bg-primary rounded-pill">${
                            questions[i].options.option2.value
                        }</span>
                        <span class="option-text">${
                            questions[i].options.option2.text
                        }</span>
                    </div>
                    <div class="col-6 col-md-3">
                        <span class="badge bg-primary rounded-pill">${
                            questions[i].options.option3.value
                        }</span>
                        <span class="option-text">${
                            questions[i].options.option3.text
                        }</span>
                    </div>
                    <div class="col-6 col-md-3">
                        <span class="badge bg-primary rounded-pill">${
                            questions[i].options.option4.value
                        }</span>
                        <span class="option-text">${
                            questions[i].options.option4.text
                        }</span>
                    </div>
                </div>
            </div>`;
    }

    containerQuestions.insertAdjacentHTML('afterbegin', content);
};

const initialDocument = () => {
    setQuestionInHtml();

    if (prevQuestion === 0) {
        buttonPrev.setAttribute('disabled', 'true');
    }
};

initialDocument();

const changeTextButtons = () => {
    if (currentQuestion === totalQuestions) {
        buttonNext.innerHTML = 'Terminar';
    } else {
        buttonNext.innerHTML = 'Siguiente';
    }
};

buttonNext.onclick = () => {
    if (buttonNext.innerHTML === 'Siguiente') {
        const questionCurrent = document.getElementById(
            'question-' + currentQuestion
        );
        const questionNext = document.getElementById(
            'question-' + nextQuestion
        );

        questionCurrent.classList.remove('d-flex');
        questionCurrent.classList.add('d-none');
        questionNext.classList.remove('d-none');
        questionNext.classList.add('d-flex');

        currentQuestion++;
        nextQuestion++;
        prevQuestion++;

        changeTextButtons();
    } else if (buttonNext.innerHTML === 'Terminar') {
        sectionSendSucces.classList.remove('d-none');
        sectionSendSucces.classList.add('d-flex');
        containerQuestions.classList.remove('d-flex');
        containerQuestions.classList.add('d-none');
    }

    buttonPrev.removeAttribute('disabled');
};

buttonPrev.onclick = () => {
    if (currentQuestion > 1) {
        const questionCurrent = document.getElementById(
            'question-' + currentQuestion
        );
        const questionPrev = document.getElementById(
            'question-' + prevQuestion
        );

        questionCurrent.classList.remove('d-flex');
        questionCurrent.classList.add('d-none');
        questionPrev.classList.remove('d-none');
        questionPrev.classList.add('d-flex');

        currentQuestion--;
        nextQuestion--;
        prevQuestion--;

        changeTextButtons();

        if (prevQuestion === 0) {
            buttonPrev.setAttribute('disabled', 'true');
        }
    }
};
