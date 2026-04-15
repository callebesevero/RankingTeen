export function constructPeopleCardRate(
    people
) {
    const checkboxes = constructCheckboxes();

    return `
    <div class="people-rating-card" data-name="${people}">
        <div class="card-people-name">${people}</div>
        ${checkboxes}
    </div>
    `
};

function constructCheckboxes() {
    return `
    <div class="checkbox">
        <label> 
            <input type="checkbox" class="score-input" data-type="punctuality">
            Pontualidade
        </label>
    </div>
    <div class="checkbox">
        <label> 
            <input type="checkbox" class="score-input" data-type="bible">
            Bíblia
        </label>
    </div>
    <div class="checkbox">
        <label> 
            <input type="checkbox" class="score-input" data-type="comment">
            Comentários
        </label>
    </div>
    <div class="checkbox">
        <label> 
            <input type="checkbox" class="score-input" data-type="pray">
            Oração
        </label>
    </div>
    <div class="checkbox">
        <label> 
            <input type="checkbox" class="score-input" data-type="read">
            Leitura
        </label>
    </div>
    <div class="checkbox">
        <label> 
            <input type="checkbox" class="score-input" data-type="study">
            Estudou a lição
        </label>
    </div>
    <div class="checkbox">
        <label> 
            <input type="checkbox" class="score-input" data-type="visitor">
            Levar visitante
        </label>
    </div>
    <div class="checkbox">
        <label> 
            <input type="checkbox" class="score-input" data-type="talk">
            Conversas paralelas
        </label>
    </div>
    <div class="checkbox">
        <label> 
            <input type="checkbox" class="score-input" data-type="smartphone">
            Mexer no celular
        </label>
    </div>
    `
};

export function constructAddPeopleButton() {
    return `
    <div class="container-button-addPeople">
        <input type="button" id="button-addPeople" value="Adicionar pessoa">
    </div>
    `
};

export function constructConfirmScoreButton() {
    return `
    <div class="container-button-confirmScore">
        <input type="button" id="button-confirmScore" value="Confirmar pontuação">
    </div>
    `
};
