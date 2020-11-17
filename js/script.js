// Ricreare lo slider di immagini ma questa volta con Vue. Partiamo dallo zip che vi passo, facciamo funzionare i bottoni next e prev e mettiamo in pagina i pallini

//
var app = new Vue({
    el: "#app",
    data: {
        pictureIndex : 0,
        picture: [//creo un array di oggetti immagini
            "img/image1.jpg",
            "img/image2.jpg",
            "img/image3.jpg",
            "img/image4.jpg"
        ]
    },
    methods: {
        //funzione immagine successiva
        nextPicture: function() {
            this.pictureIndex = this.pictureIndex + 1;
            if (this.pictureIndex > (this.picture.length -1)) {
                this.pictureIndex = 0;
            }
        },
        //funzione immagine precedente
        prevPicture: function() {
            this.pictureIndex = this.pictureIndex + 1;
            if (this.pictureIndex > (this.picture.length -1)) {
                this.pictureIndex = 0;
            }
        }
    }
})
