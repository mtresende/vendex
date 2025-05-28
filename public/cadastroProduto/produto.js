document.addEventListener('DOMContentLoaded', function () {
    const tipoProdutoRadio = document.getElementById('tipoProduto');
    const tipoServicoRadio = document.getElementById('tipoServico');

    const idProdutoField = document.getElementById('field-idproduto');
    const nomeProdutoField = document.getElementById('field-nomeproduto');
    const validadeField = document.getElementById('field-validade');
    const codigoField = document.getElementById('field-codigo');
    const quantidadeField = document.getElementById('field-quantidade');
    const categoriaField = document.getElementById('field-categoria');

    const nomeProdutoLabel = document.querySelector('label[for="nomeproduto"]');

    function toggleFields() {
        if (tipoProdutoRadio.checked) {
            // Produto selecionado
            if (nomeProdutoLabel) nomeProdutoLabel.textContent = 'Nome do produto';
            if (validadeField) validadeField.style.display = 'block';
            if (codigoField) codigoField.style.display = 'block';
            if (quantidadeField) quantidadeField.style.display = 'block';
            if (categoriaField) categoriaField.style.display = 'none';

            // Tornar campos de produto obrigatórios e de serviço não obrigatórios
            if (document.getElementById('validade')) document.getElementById('validade').required = true;
            if (document.getElementById('codigo')) document.getElementById('codigo').required = true;
            if (document.getElementById('quantidade')) document.getElementById('quantidade').required = true;
            if (document.getElementById('categoria')) document.getElementById('categoria').required = false;

        } else if (tipoServicoRadio.checked) {
            // Serviço selecionado
            if (nomeProdutoLabel) nomeProdutoLabel.textContent = 'Nome do serviço';
            if (validadeField) validadeField.style.display = 'none';
            if (codigoField) codigoField.style.display = 'none';
            if (quantidadeField) quantidadeField.style.display = 'none';
            if (categoriaField) categoriaField.style.display = 'block';

            // Tornar campos de serviço obrigatórios e de produto não obrigatórios
            if (document.getElementById('validade')) document.getElementById('validade').required = false;
            if (document.getElementById('codigo')) document.getElementById('codigo').required = false;
            if (document.getElementById('quantidade')) document.getElementById('quantidade').required = false;
            if (document.getElementById('categoria')) document.getElementById('categoria').required = true; 
        }
    }

    // Adiciona ouvintes de evento
    if (tipoProdutoRadio) tipoProdutoRadio.addEventListener('change', toggleFields);
    if (tipoServicoRadio) tipoServicoRadio.addEventListener('change', toggleFields);

    // Chama a função inicialmente para configurar os campos com base na seleção padrão
    toggleFields();
});