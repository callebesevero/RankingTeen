export function constructPeopleRateCard(
    people
) {
    const checkboxes = constructCheckboxes();

    return `
    <div class="people-rate-card" data-name="${people}">
        <div class="card-people-name">${people}</div>
        ${checkboxes}
    </div>
    `
};

function constructCheckboxes() {
    return `
    <div class="all-checkbox-container">
        <div class="checkbox-container">
            <label> 
                <input type="checkbox" class="checkbox" data-type="punctuality">
                Pontualidade
            </label>
        </div>
        <div class="checkbox-container">
            <label> 
                <input type="checkbox" class="checkbox" data-type="bible">
                Bíblia
            </label>
        </div>
        <div class="checkbox-container">
            <label> 
                <input type="checkbox" class="checkbox" data-type="comment">
                Comentários
            </label>
        </div>
        <div class="checkbox-container">
            <label> 
                <input type="checkbox" class="checkbox" data-type="pray">
                Oração
            </label>
        </div>
        <div class="checkbox-container">
            <label> 
                <input type="checkbox" class="checkbox" data-type="read">
                Leitura
            </label>
        </div>
        <div class="checkbox-container">
            <label> 
                <input type="checkbox" class="checkbox" data-type="study">
                Estudou a lição
            </label>
        </div>
        <div class="checkbox-container">
            <label> 
                <input type="checkbox" class="checkbox" data-type="visitor">
                Levar visitante
            </label>
        </div>
        <div class="checkbox-container">
            <label> 
                <input type="checkbox" class="checkbox" data-type="talk">
                Conversas paralelas
            </label>
        </div>
        <div class="checkbox-container">
            <label> 
                <input type="checkbox" class="checkbox" data-type="smartphone">
                Mexer no celular
            </label>
        </div>
    </div>
    `
};

export function constructPeopleRatedCard(
    people,
    score
) {
    return `
    <div class="people-rated-card">
        <div class="card-people-name">${people}</div>
        <div class="card-people-score">${score}</div>
    </div>
    `
};

export function constructContainerButtons(
    ...buttons
) {
    return `
    <div class="container-buttons">
        ${buttons.map((button) => {return button}).join("")}
    </div>
    `
}

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

export function constructCopyRankingButton() {
    return`
    <div class="container-button-copyRanking">
        <input type="button" id="button-copyRanking" value="Copiar ranking para enviar no WhatsApp">
    </div>
    `
};
