document.addEventListener('DOMContentLoaded', () => {
    let Works = document.getElementById('Works')

    class projet {
        constructor(name, desc, lang, screen = [], lien = null, video = null) {
            this.name = name
            this.desc = desc
            this.lang = lang
            this.screen = screen
            this.link = lien
            this.video = video

            this.build()
        }
        build() {
            this.div = document.createElement('div')
            this.div.classList.add('projetDiv')
            Works.appendChild(this.div)

            if (this.screen.length > 0) this.carrousselBuild()

            this.h = document.createElement('h2')
            this.div.appendChild(this.h)
            this.h.innerHTML = this.name

            this.descP = document.createElement('p')
            this.descP.classList.add('projetDescription')
            this.div.appendChild(this.descP)
            this.descP.innerHTML = this.desc

            this.langDiv = document.createElement('div')
            this.langDiv.classList.add('langDiv')
            this.div.appendChild(this.langDiv)
            this.lang.forEach(e => {
                let p = document.createElement('p')
                this.langDiv.appendChild(p)
                p.innerHTML = e
            });

            if (this.link != null && this.link != '') {
                this.a = document.createElement('a')
                this.div.appendChild(this.a)
                this.a.innerHTML = 'Link'
                this.a.href = this.link
                this.a.target = '_blank'
            }
        }

        carrousselBuild() {
            this.carroussel = document.createElement('div')
            this.carroussel.classList.add('carroussel')
            this.div.appendChild(this.carroussel)

            this.leftNav = document.createElement('div')
            this.leftNav.classList.add('leftNav')
            this.carroussel.appendChild(this.leftNav)
            let img1 = document.createElement('img')
            this.leftNav.appendChild(img1)
            img1.src = 'img/arrowLeft.png'

            this.RightNav = document.createElement('div')
            this.RightNav.classList.add('RightNav')
            this.carroussel.appendChild(this.RightNav)
            let img2 = document.createElement('img')
            this.RightNav.appendChild(img2)
            img2.src = 'img/arrowRight.png'

            this.active = 0
            this.carrouselContent = []

            this.RightNav.addEventListener('click', () => {
                document.getElementById(this.carrouselContent[this.active].split('.')[0]).classList.add('hidden')
                this.active++
                if (this.active >= this.carrouselContent.length) { this.active = 0 }
                document.getElementById(this.carrouselContent[this.active].split('.')[0]).classList.remove('hidden')
            })
            this.leftNav.addEventListener('click', () => {
                document.getElementById(this.carrouselContent[this.active].split('.')[0]).classList.add('hidden')
                this.active--
                if (this.active == -1) { this.active = this.carrouselContent.length - 1 }
                document.getElementById(this.carrouselContent[this.active].split('.')[0]).classList.remove('hidden')
            })


            this.screen.forEach(e => {
                let img = document.createElement('img')
                img.classList.add('hidden')
                img.id = e.split('.')[0]
                this.carroussel.appendChild(img)
                this.carrouselContent.push(e.split('.')[0])
                img.src = 'img/' + e
                img.alt = 'photo du projet ' + this.name
            })
            document.getElementById(this.carrouselContent[this.active].split('.')[0]).classList.remove('hidden')

            if (this.video != null) {
                let video = document.createElement('video')
                video.classList.add('hidden')
                video.id = this.video.split('.')[0]
                this.carroussel.appendChild(video)
                video.src = 'videos/' + this.video
                this.carrouselContent.push(this.video.split('.')[0])
                video.autoplay = true
                video.controls = true
            }
        }
    }


    let projects = [
        new projet(
            'Minesweeper',
            "Ceci est mon premier site Web, je l'ai fait pour apprendre toutes les bases. <br>Il s'agit d'un démineur réalisé notamment à l'aide de websockets pour les joueurs les plus rapides. Il y a tout un systeme de suivis des statistiques et des classements des meilleurs joueurs et des meilleurs temps. J'ai eu l'occasion de refaire ce site en utilisant le stack MERN et j'ai aussi développé une version client uniquement",
            ['PHP', 'Javascript', 'MySQL', 'Ratchet', 'CSS'],
            ['minesweeper1.png', 'minesweeper2.png', 'minesweeper3.png'],
            'https://minesweeper.fr',
            'minesweeper.mp4'
        ),
        new projet(
            'Portfolio',
            "Je voulais utiliser ce portfolio comme excuse pour montrer quelque chose d'intéressant. <br>J'ai donc créé ce portfolio en utilisant la perspective de CSS vanilla et du JS vanilla pour parcourir les projets. Vous pouvez voir tous mes projets en cliquant sur les cubes. N'hésitez pas à voir les vidéos en plein écran !",
            ['CSS'],
            ['portfolio3D1.png', 'portfolio3D2.png'],
            'https://alfolio.netlify.app/'
        ),new projet(
            'ShipSeller',
            "Ayant toujours été très curieux par l'aspect 3D de certains sites, j'ai pris beaucoup de plaisir a travailler sur celui là. C'est le premier site en three.js que j'ai pu faire. Ca m'a appris beaucoup sur la 3D et sur les bibliothèques JS. Ce projet a été le premier à me donner réelle satisfaction dans autre chose que du back-end et m'a motivé à m'améliorer en front-end",
            ['JS', 'Three.js'],
            ['shipSeller1.png','shipSeller2.png','shipSeller3.png'],
            '',
            'shipSeller.mp4'
        ),
        new projet(
            'fenetreS',
            "Ce projet est un petit projet réalisé juste pour voir si ce concept était possible. <br>Le concept ici était de connecter des scripts de plusieurs navigateurs et fenêtres pour les faire agir ensemble<br>C'était amusant à faire et l'effet est vraiment cool. <br>Cela pourrait être utile plus tard !",
            ['JS', 'CSS'],
            ['FenetreS1.png', 'FenetreS2.png', 'FenetreS3.png'],
            '',
            'fenetreS.mp4'
        ),
        new projet(
            'Paragraph',
            "Ce projet était amusant, je l'ai réalisé au cours de mon deuxième mois d'apprentissage du dev web. <br>C'est un jeu de tir RogueLike. <br>Je voulais voir ce qui était possible avec le peu de connaissances que j'avais à l'époque. Cela m'a beaucoup aidé à améliorer mes compétences en animation et j'ai beaucoup appris sur la logique algorithmique. <br>Il y a plusieurs salles, plusieurs armes, plusieurs ennemis et plusieurs niveaux de récompenses offrant des jeux uniques",
            ['JS', 'CSS'],
            ['paragraph1.png', 'paragraph2.png', 'paragraph3.png', 'paragraph4.png'],
            '',
            'Paragraph.mp4'
        ),
        new projet(
            'Pokemon',
            "Ce projet est une petite tentative d'améliorer le projet précédent Paragraph. <br>C'est un Pokémon, j'ai fais ce projet pour réussir à coder des hitbox et utiliser MYSQL de manière ludique. <br>Dans ce micro-jeu, vous pouvez avoir différents Pokémon et commencer des scènes de combat. Vous avez également accès à plusieurs cartes.",
            ['CSS', 'JS'],
            ['pokemon1.png', 'pokemon2.png', 'pokemon3.png'],
            '',
            'Pokemon.mp4'
        ),
        new projet(
            'textMaker',
            "Ce projet est ma première prestation ! <br>Il à été conçu pour une graphiste qui avait besoin d'une application Web où elle pourrait facilement utiliser une police et donner un lien à ses clients afin qu'ils puissent l'utiliser pour leurs projets graphiques. J'ai massivement utilisé la librairie PHP GD",
            ['PHP', 'JS', 'CSS', 'GDimage'],
            ['textMaker1.png', 'textMaker2.png', 'textMaker3.png'],
            '',
            'textMaker.mp4'
        ),
        new projet(
            '3Dcity',
            "C'était mon premier projet utilisant la 3D en CSS vanilla. je ne peux pas appeler celui-ci beau mais il m'a beaucoup appris",
            ['CSS'],
            ['3Dcity1.png', '3Dcity2.png'],
            '',
            '3Dcity.mp4'
        )
    ]



    let darkMode = false
    document.getElementById('switch').addEventListener('change', ()=>{
        darkMode = !darkMode

        if(darkMode){
            document.documentElement.style.setProperty('--background', '#727272');
            document.documentElement.style.setProperty('--white', '#454545');
            document.documentElement.style.setProperty('--font', 'white');

            document.documentElement.style.setProperty('--blue1','#6b9dfe')
            document.documentElement.style.setProperty('--blue','#c5d8ff')

            document.documentElement.style.setProperty('--orange1','#ffbc6e')
            document.documentElement.style.setProperty('--orange','#fdf2e4')

            document.documentElement.style.setProperty('--purple1','#b595ff')
            document.documentElement.style.setProperty('--purple','#e7e1fb')

            document.documentElement.style.setProperty('--green1','#37c3a0')
            document.documentElement.style.setProperty('--green','#e7faea')
        }else{
            document.documentElement.style.setProperty('--background', '#f7f9f8');
            document.documentElement.style.setProperty('--white', '#ffffff');
            document.documentElement.style.setProperty('--font', 'black');

            document.documentElement.style.setProperty('--blue','#6b9dfe')
            document.documentElement.style.setProperty('--blue1','#c5d8ff')

            document.documentElement.style.setProperty('--orange','#ffbc6e')
            document.documentElement.style.setProperty('--orange1','#fdf2e4')

            document.documentElement.style.setProperty('--purple','#b595ff')
            document.documentElement.style.setProperty('--purple1','#e7e1fb')

            document.documentElement.style.setProperty('--green','#37c3a0')
            document.documentElement.style.setProperty('--green1','#e7faea')
        }
    })


    setInterval(()=>{
        document.getElementById('sujetMail').value = document.getElementById('sujet').value + ' | ' + document.getElementById('email').value
    }, 500)






    
})

