function insertionSort(lista) {
    let n = lista.length;
        for (let i = 1; i < n; i++) {
            let current = lista[i];
            let j = i-1; 
            while ((j > -1) && (current < lista[j])) {
                lista[j+1] = lista[j];
                j--;
            }
            lista[j+1] = current;
        }
    return lista;
}

let listaOrdenacao = [99,97,93,95,77,75,73,79,89,87,83,81,85,66,69,63,65,1,3,5,7,9,39,37,35,31,29,27,25,999]

insertionSort(listaOrdenacao)

console.log (listaOrdenacao)