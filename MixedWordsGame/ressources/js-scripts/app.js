// listes de mots
const alimentsString = "une pomme;une banane;du raisin;une orange;un kiwi;une fraise;du fromage;un yaourt;du pain;du beurre;du jambon;une saucisse;du poulet;un steak;du poisson;du riz;des pâtes;une pizza;un burger;des frites;du chocolat;des biscuits;une glace;du café;du thé;du lait;du jus d'orange;du soda;de l'eau minérale;du vin rouge;du vin blanc;une bière;du quinoa;du tofu;un avocat;un brocoli;une carotte;un concombre;une tomate;un oignon;de l'ail;des épinards;des pois chiches;du houmous;du guacamole;du fromage de chèvre;du camembert;du brie;du cheddar;du parmesan;du sucre;du sel;du poivre;de l'huile d'olive;du vinaigre balsamique;de la moutarde;du miel;de la confiture;des œufs;du bacon;des crevettes;du saumon;du thon;du maïs;des haricots verts;des petits pois;une patate douce;une pomme de terre;une courgette;une aubergine;un poivron;du chou;un chou-fleur;du quinoa;du sarrasin;des lentilles;du pain complet;un bagel;un croissant;un muffin;un pancake;du sirop d'érable;des noix;des amandes;des cacahuètes;du beurre de cacahuète;du pesto;de la mayonnaise;du ketchup;de la sauce soja;de la sauce barbecue";
const animauxString = "un lion;un éléphant;un tigre;un zèbre;une girafe;un rhinocéros;un hippopotame;un crocodile;un léopard;un guépard;un gorille;un chimpanzé;un orang-outan;un koala;un kangourou;un wombat;un panda;un renard;un loup;un coyote;un lynx;un chat;un chien;un cheval;une vache;un mouton;une chèvre;un cochon;un lapin;un lièvre;un hamster;un cochon d'Inde;un rat;une souris;un hérisson;un écureuil;un castor;un tatou;un paresseux;un ours polaire;un ours brun;un ours noir;un panda roux;un lémurien;un singe capucin;un tamarin;un ouistiti;un dromadaire;un chameau;un lama;un alpaga;un dauphin;une baleine;un requin;un thon;un saumon;un pingouin;un manchot;un pélican;un flamant rose;un cygne;un canard;une oie;un paon;un perroquet;un toucan;un aigle;un faucon;un hibou;un corbeau;un moineau;un colibri;un serpent;un lézard;un crocodile;un varan;une tortue;un caméléon;une grenouille;un crapaud;un gecko;un poisson rouge;un poisson-clown;un piranha;un mérou;un crabe;une crevette;un homard;un escargot;une limace;une pieuvre;un calmar;un poulpe;un calmar géant;un narval;un morse;un phoque;un lion de mer;un pingouin empereur;une autruche;un émeu";
const lieuxString = "dans la salle de bain;dans la cuisine;dans le salon;dans la chambre à coucher;dans le jardin;dans le garage;dans le grenier;dans le sous-sol;dans le bureau;dans la bibliothèque;dans le parc;dans la forêt;à la plage;à la montagne;dans le désert;dans la jungle;dans la toundra;au pôle Nord;au pôle Sud;dans le désert de Gobi;dans la vallée de la mort;au Grand Canyon;au Mont Everest;au Mont Kilimandjaro;au Mont Fuji;dans la forêt noire;au lac Baïkal;dans le Nil;dans la Seine;dans la Tamise;dans la mer Méditerranée;dans l'océan Atlantique;dans l'océan Pacifique;dans le Golfe du Mexique;en boîte de nuit;à l'hôtel;au sommet de la Tour Eiffel;au café;au restaurant;au cinéma;au théâtre;au musée;à la bibliothèque publique;au stade;au gymnase;au spa;au centre commercial;à la patinoire;au parc d'attractions;au zoo;à l'aquarium;au planétarium;au casino;à la salle de concert;au cirque;au festival;au marché;à la foire;au carnaval;au club de jazz;en discothèque;au bar à cocktails;à la brasserie;au pub;à la salle de jeux;au centre de conférence;à la salle de yoga;au dojo;sur un terrain de golf;sur un court de tennis;sur un terrain de football;sur le champ de courses;sur la piste de karting;sur la salle de billard;au bowling;au champ de tir;dans la salle de danse;au studio de yoga;au centre de fitness;au sauna;au hammam;au salon de massage;au centre de bronzage;au salon de coiffure;au spa;à la piscine;dans le jacuzzi;au centre de plongée;au centre équestre;sur la piste de ski;à la station de ski;dans un téléphérique;au parc aquatique;au centre de remise en forme;dans un jardin botanique;dans un jardin zoologique;dans un parc national;dans une réserve naturelle;dans un parc de sculptures;dans un musée en plein air;dans une rue piétonne;dans le quartier historique;dans la zone industrielle;au port;à la gare;dans une station de métro;dans le bus;dans le tramway;sur le ferry;dans le train à grande vitesse;sur un bateau-mouche;sur un yacht;sur un catamaran;sur un voilier;dans un sous-marin;dans un hélicoptère;dans un avion;dans un jet privé;dans un ballon dirigeable;dans une montgolfière;au sommet de la Statue de la Liberté;à la maison de retraite";
const objetsString = "une télécommande;une brosse à dents;un parapluie;une casserole;un trombone;une éponge;des lunettes de soleil;un tire-bouchon;une chaussette;un cactus;un téléphone portable;une agrafeuse;une bouteille d'eau;un ruban adhésif;un coussin;un cintre;une fourchette;une bouteille de ketchup;une clé USB;un chapeau de cowboy;un ballon de baudruche;une calculatrice;un sac de chips;un marteau;une pince à linge;un skateboard;une bougie;une brosse à cheveux;une boîte de conserve;un gant de cuisine;une écharpe;une télévision;un bocal;un crayon;un ventilateur;une horloge;un tapis de yoga;une boussole;un paquet de spaghettis;une lampe de poche;un sac à dos;une perceuse;du parfum;un gaufrier;un casque de vélo;un thermomètre;un canapé;un cadenas;un rameur;un bâton de marche;un mixeur;une boîte à outils;des lunettes de plongée;un panier à linge;un micro-ondes;une peluche;une râpe à fromage;une bouteille de vin;une tondeuse à gazon;une clé anglaise;une pile de livres;un aspirateur;une serviette de plage;une boîte à musique;un chausse-pied;un grille-pain;une poupée;une échelle;un pinceau;un bocal à épices;une manette de jeu;du shampoing;un set de couture;une raquette de tennis;une corbeille à papier;un coussin chauffant;des ciseaux;un tapis de bain;une loupe;une boîte de chocolats;des allumettes;un mug;un téléphone fixe;un filet à provisions;une béquille;un balai;un verre;un bocal de cornichons;une casquette;un sac de couchage;une poêle à frire;un oreiller;une scie;une boule de bowling;une boîte à bijoux;une carte de crédit;une chausse-trappe;un pèse-personne";
const gensString = "Maman;Papa;Mamie;Papy;le boulanger;le banquier;le médecin;l'infirmier;l'instituteur;le professeur;le policier;le pompier;le facteur;le plombier;l'électricien;le maçon;le jardinier;le coiffeur;le mécanicien;le garagiste;le serveur;le chef cuisinier;le barman;le vendeur;le caissier;le bibliothécaire;le psychiatre;le dentiste;Cristiano Ronaldo;Beyoncé;Leonardo DiCaprio;Jennifer Lawrence;Scarlett Johansson;J.K. Rowling;Emmanuel Macron;Marine Le Pen;Jean-Luc Mélenchon;Éric Zemmour;Valérie Pécresse;Anne Hidalgo;François Bayrou;Gabriel Attal;Bruno Le Maire;Gérald Darmanin;Amélie Oudéa-Castéra;Stéphane Séjourné;Vladimir Poutine;Elon Musk;un homme;une femme;un enfant;une personne âgée";
const verbeFuturString = "courra;sautera;nagera;marchera;grimpera;glissera;roulera;pédalera;ramera;tirera;passera;dribblera;servira;taclera;réceptionnera;bloquera;esquivera;plongera;parlera;écrira;chantera;dansera;travaillera;étudiera;jouera;regardera;écoutera;attendra;demandera;répondra;arrivera;mangera;boira;dormira;rira;finira;obéira;choisira;réussira;réfléchira;fera;verra;prendra;donnera;pourra;voudra;mettra;dira";
const verbePreString = "court;saute;nage;marche;grimpe;glisse;roule;pédale;rame;tire;passe;dribble;sert;tacle;réceptionne;bloque;esquive;plonge;parle;écrit;chante;danse;travaille;étudie;joue;regarde;écoute;attend;demande;répond;arrive;mange;boit;dort;rit;finit;obéit;choisit;réussit;réfléchit;fait;voit;prend;donne;peut;veut;met;dit";
const verbeInfString = "courir;sauter;nager;marcher;grimper;glisser;rouler;pédaler;ramer;tirer;passer;dribbler;servir;tacler;réceptionner;bloquer;esquiver;plonger;parler;écrire;chanter;danser;travailler;étudier;jouer;regarder;écouter;attendre;demander;répondre;arriver;manger;boire;dormir;rire;finir;obéir;choisir;réussir;réfléchir;faire;voir;prendre;donner;pouvoir;vouloir;mettre;dire";
const verbePasString = "a couru;a sauté;a nagé;a marché;a dansé;a grimpé;a glissé;a roulé;a pédalé;a ramé;a tiré;a passé;a dribblé;a servi;a taclé;a réceptionné;a bloqué;a esquivé;a plongé;a parlé;a écrit;a chanté;a travaillé;a étudié;a joué;a regardé;a écouté;a attendu;a demandé;a mangé;a bu;a dormi;a ri;a fini;a obéi;a choisi;a réussi;a réfléchi sur;a fait;a vu;a pris;a donné;a pu;a voulu;a mis;a dit;a cassé;a réparé;a téléphoné";

// objet words parce que c'est pratique
const words = {
    aliments: alimentsString.split(";"),
    animaux: animauxString.split(";"),
    lieux: lieuxString.split(";"),
    objets: objetsString.split(";"),
    gens: gensString.split(";"),
    verbeFutur: verbeFuturString.split(";"),
    verbeInf: verbeInfString.split(";"),
    verbePas: verbePasString.split(";"),
    verbePre : verbePreString.split(";")
};

// Notice

const boutonOuvrirNotice = document.getElementById('show-notice');
const boutonFermerNotice = document.getElementById('close-notice');
const notice = document.getElementById('notice');

boutonOuvrirNotice.addEventListener('click', () => {
    notice.style.display = 'block';
    notice.style.zIndex = '5';
});

boutonFermerNotice.addEventListener('click', () => {
    notice.style.display = 'none';
    notice.style.zIndex = '0';
});



// Constantes des valeurs à écrire et/ou reconnaître dans la chaîne collectée par le formulaire
const saisieAliments = "[aliments]";
const saisieAnimaux = "[animaux]";
const saisieLieux = "[lieux]";
const saisieObjets = "[objets]";
const saisieGens = "[gens]";
const saisieVerbeInf = "[verbe-infinitif]";
const saisieVerbePre = "[verbe-présent]";
const saisieVerbePas = "[verbe-passé]";
const saisieVerbeFutur = "[verbe-futur]";
const expressions = [
    saisieAliments, 
    saisieAnimaux, 
    saisieGens, 
    saisieLieux, 
    saisieObjets, 
    saisieVerbeFutur, 
    saisieVerbeInf,
    saisieVerbePas,
    saisieVerbePre
];

// Boutons mots
const boutonAliments = document.getElementById('aliments');
const boutonAnimaux = document.getElementById('animaux');
const boutonLieux = document.getElementById('lieux');
const boutonObjets = document.getElementById('objets');
const boutonGens = document.getElementById('gens');
const boutonVerbeInf = document.getElementById('verbe-infinitif');
const boutonVerbePre = document.getElementById('verbe-present');
const boutonVerbePas = document.getElementById('verbe-passe');
const boutonVerbeFutur = document.getElementById('verbe-futur');


// Fonction pour gérer les clics sur les boutons mots
function ajouterMot(event) {
    const sillySentenceBox = document.getElementById('silly-sentence');
    const oldValue = sillySentenceBox.value; // Utilise .value pour les textarea
    let newValue = oldValue;

    switch (event.target.id) { // Utilise event.target.id directement
        case 'aliments':
            newValue += saisieAliments;
            break;
        case 'animaux':
            newValue += saisieAnimaux;
            break;
        case 'lieux':
            newValue += saisieLieux;
            break;
        case 'objets':
            newValue += saisieObjets;
            break;
        case 'gens':
            newValue += saisieGens;
            break;
        case 'verbe-infinitif':
            newValue += saisieVerbeInf;
            break;
        case 'verbe-present':
            newValue += saisieVerbePre;
            break;
        case 'verbe-passe':
            newValue += saisieVerbePas;
            break;
        case 'verbe-futur':
            newValue += saisieVerbeFutur;
            break;
    }
    // Met à jour la valeur de la textarea
    sillySentenceBox.value = newValue; // Utilise .value pour définir le contenu
}

// Ajoute des écouteurs d'événements pour chaque bouton
boutonAliments.addEventListener('click', ajouterMot);
boutonAnimaux.addEventListener('click', ajouterMot);
boutonLieux.addEventListener('click', ajouterMot);
boutonObjets.addEventListener('click', ajouterMot);
boutonGens.addEventListener('click', ajouterMot);
boutonVerbeInf.addEventListener('click', ajouterMot);
boutonVerbePre.addEventListener('click', ajouterMot);
boutonVerbePas.addEventListener('click', ajouterMot);
boutonVerbeFutur.addEventListener('click', ajouterMot);


// Bouton générer
const boutonGenerer = document.getElementById('submit');


// Élément à remplir au clic sur le bouton générer
const resultSpan = document.getElementById('result-sentence');

// Sélectionner un mot au hasard dans une liste
function selectMot(liste) {
    const index = Math.floor(Math.random() * liste.length);
    return liste[index];
};


// Parcourir l'array et remplacer les valeurs entre crochets par un mot aléatoire

function replaceByRealWord(expression) {
    if (expressions.includes(expression)) {
        switch (expression) {
            case saisieAliments:
                return selectMot(words.aliments);
            case saisieAnimaux:
                return selectMot(words.animaux);
            case saisieGens:
                return selectMot(words.gens);
            case saisieLieux:
                return selectMot(words.lieux);
            case saisieObjets:
                return selectMot(words.objets);
            case saisieVerbeFutur:
                return selectMot(words.verbeFutur);
            case saisieVerbeInf:
                return selectMot(words.verbeInf);
            case saisieVerbePas:
                return selectMot(words.verbePas);
            case saisieVerbePre:
                return selectMot(words.verbePre);
        }
    } else {
        return expression;
    }
}


boutonGenerer.addEventListener('click', () => {
    // Récupérer la silly sentence et la transformer en array
    let sillySentence = document.getElementById('silly-sentence').value.split(" ");
    let resultSentence = []
    for (let word of sillySentence) {
        resultSentence.push(replaceByRealWord(word));
    }

    resultSentence = resultSentence.join(' ');
    resultSpan.innerText = resultSentence;
});
