// Permet d'avoir la somme totale dès le lancement du script
updateTotal()

/* Permet de parcourir les boutons '-' et d'y ajouter un écouteur pour
 qu'à chaque clic, on décrémente la quantité */
var ms = document.querySelectorAll('.minus')
    for (var i = 0; i < ms.length; i++){
        var m = ms[i]
        var minus = function () {
            this.parentNode.querySelector('input[type=number]').stepDown()
            updateTotal()
        }
        m.addEventListener('click', minus)
    }

/* Permet de parcourir les boutons '+' et d'y ajouter un écouteur pour
 qu'à chaque clic, on incrémente la quantité */
var ps = document.querySelectorAll('.plus')
    for (var i = 0; i < ps.length; i++){
        var p = ps[i]
        var plus = function () {
            this.parentNode.querySelector('input[type=number]').stepUp()
            updateTotal()
        }
        p.addEventListener('click', plus)
    }

/* Calcule la somme totale par rapport aux prix et quantité des articles*/
function updateTotal (){
    var sum = 0
    var qty = document.querySelectorAll('input[type=number]')
    var price = document.querySelectorAll('.price')
    for (var i = 0; i < 2; i++) {
        sum +=  qty[i].value * price[i].innerText
    }
    document.getElementById('sum').innerText = sum
}

/* Remet la quantité de l'élément à zéro */
var ds = document.querySelectorAll('.delete')
    for (var i = 0; i < ds.length; i++){
        var d = ds[i]
        var delet = function () {
            this.parentNode.querySelector('input[type=number]').value = 0
            updateTotal()
        }
        d.addEventListener('click', delet)
    }

/* Quand on clique sur le coeur, il devient rouge */
var ls = document.querySelectorAll('.like')
    for (var i = 0; i < ls.length; i++){
        var l = ls[i]
        var like = function () {
            this.classList.add('liked')
        }
        l.addEventListener('click', like)
    }