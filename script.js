function changeSection(sectionId) {
    // Remove a classe 'active' de todas as seções
    var sections = document.getElementsByClassName('menu-section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].classList.remove('active');
    }

    // Adiciona a classe 'active' à seção selecionada
    var selectedSection = document.getElementById(sectionId);
    selectedSection.classList.add('active');
}
