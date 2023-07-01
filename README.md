# SPORTNER <a href="http://sportner.vercel.app/">Visiter le site !</a>

<h1>Description du projet</h1>

<ol>
  <h2><li>Présentation</li></h2>
    <p>Sportner, c'est la réponse apportée par deux jeunes développeurs pour tous les amoreux de sport qui souhaitent trouver des partenaires afin d'apprécier plus encore leurs séances. Sur notre plateforme, postez une annonce si vous cherchez des partenaires ou des adversaires, quand vous le voulez et où que vous soyez. Sur ordinateur, tablette ou téléphone, deux options s'offrent à vous :</p>
    <ul>
    <li>Vous recherchez une sééance de sport pour ne pas pratiquer votre activité seul(e). Faites une recherche dans les annonces disponibles pour trouver facilement des sportifs qui recherchent des participants pour leurs évènements.</li>
    <li>Vous ne trouvez pas l'annonce qui vous plaît ? Alors crééez vous-même votre séance, nous sommes certains que les sportifs qui vous entourent seront ravis de vous accompagner dans votre pratique !</li>
    </ul>
  
  <h2><li>Parcours utilisateur</li></h2>
    <p>Voici les différentes fonctionnalités qui se présenteront aux utilisateurs de Trox:</p>
    <ul>
      <li>Création et connexion à un compte</li>
      <li>Modification du profil, suppression de ce dernier</li>
      <li>Accès en tant que visiteur connecté ou non à une page d'accueil présentant le site, une page sports montrant les différentes disciplines référencées sur notre site et une page contact permettant de nous faire parvenir vos remarques ou demandes. je peux également regarder les annonces déjà disponibles.</li>
      <li>En tant qu'utilisateur connecté je peux créer une séance, la supprimer, je peux modifier et supprimer mon profil ou encore m'inscrire et me désinscrire d'un évènement.</p>
    </ul>

  <h2><li>L'administrateur</li></h2>
    <p>Un administrateur (les créateurs et modérateurs du site) ont accès via des identifiants spécifiques à une session leur permettant de gérer le contenu des annonces existantes, ainsi que modifier n'importe quel profil. Enfin, il a la possibilité de supprimer le compte d'un utilisateur ne respectant pas les valeurs véhiculées par Sportner.</p>
  
  <h2><li>Schéma du parcours utilisateur</li><h2>
    <img src="" alt="User_story"/>
  
  <h2><li>Point technique</li></h2>
    <p>Sportner est un site entièrement responsive pour que l'utilisateur y ait accès partout. En effet, il est importantn pour nous que n'importe quel utilisateur connecté à internet puisse proposer ou rejoindre une activité. Nous avons donc pensé notre plateforme d'échange afin que, dès qu'un besoin apparaît, le sportif puisse trouver LA séance qui correspond à ses envies/besoins. L'objectif étant bien entendu de rassembler un maximum de sportifs. Plus on a d'utilisateurs, plus on a d'annonces. Et plus il y a d'annonces, plus il y a d'utilisateurs !</p>

  <ul>
    <li>Afin de gérer notre base de données, nous utilisons le système PostgreSQL. Nous avons trois models principaux : les users (utilisateurs du site, pouvant à la fois être créateurs et participants), les events (ce qui va concerner les séances) et les participants (une table qui traitera des inscriptions aux séances, créant donc un lien entre les deux entités citées précédemment). Enfin, un  dernier model Sports permet de créer des catégories pour nos annonces.</li>
    <li>Front-end : Nous avons développé notre Frontend grâce à React.js, lié à des styles en css et quelques élements de Tailwind.js (un carrousel et un footer). Nous avons créé des pages appelant des composants, composants entièrement stylisés via des stylesheets CSS. L'aspect responsive qui nous tenait également à coeur a également été géré en CSS. Nous souhaitions un système de grids à l'aspect moderne lié à une police d'écriture nous évoquant le sport. Tout ces éléments ont été rigoureusement choisis pour que l'utilisateur se sente bien sur notre site et ait donc envie d'y revvenir, voire même de convaincre des amis de la visiter !</li>
    <li>Back-end :Nous avons travaillé suivant le modèle MVC(Model, View, Controller). Les technologies chosies pour ce projet sont en grande majorité celles étudiées lors de notre cursus à The Hacking Project, c'est à dire l'utilisation de Ruby On Rails en API et son système de "gems". La gem Devise JWT nous a permis de générer tout un système de création-gestion de l'utilisateur. Nous avons implémenté un "mailer" qui envoie des confirmations aux utilisateurs lors des inscriptions et demande de réinitailisation de mot de passe. Un"Super user" nous permet de gérer le contenu de notre site si les utilisateurs venaient à sortir du cadre exigé par Sportner. </li>
  </ul>

  <h2><li>Version minimaliste fonctionnelle</li></h2>
    <p>Il sera possible de :</p>
      <ul>
        <li>Créer un compte, le modifier, le supprimer</li>
        <li>Déposer une annonce, la supprimer</li>
        <li>S'inscrire à une activité,  se désinscrire</li>
      </ul>
  
  <h2><li>Version finale</li></h2>
    <p>Sur Sportner, nous pouvons :</p>
      <ul>
        <li>Faire tout ce qui était possible dans la première version</li>
        <li>Constater qu'une attention particulière aura été apportée au style général de la page, avec l'application d'un thème</li>
        <li>Naviguer vers des pages de contact et de présentation du site via une barre de navigation et un footer </li>
        <li>Rechercher des séances par localisation et par nom grâce à une barre de recherche</li>
      </ul>

  <h2><li>Notre équipe</li></h2>
    <p>Notre équipe est composée de 2 membres, travaillant à la fois sur le Front-end et le Back-end en étroite collaboration :</p>
      <ul>
        <li>Maxime Gillot</li>
        <li>Julien Dast</li>
      </ul>
      <p>Nous avons origanisé ce projet en amont via les outils suivants :</p>
      <ul>
        <li>Trello : Grâce à un sysytème de cartes nous avons créé notre User story, les élements nécessaires à notre frontend et à notre backend, puis les étapes à suivre afin d'obtenir un syte fonctionnel et esthétique dans les délais impartis.</li>
        <li>Miro : Son système de schématisation nous a permis de metter en image notre User Story, mais aussi d'organiser notre MVC et les relations entre tables en BDD.</li>
      </ul>
    <p>Nous ne sommes pour l'instant pas à la recherche de nouveaux membres, mais si le site venait à prendre plus d'ampleur nous aurions certainement besoin de modérateurs pour gérer le contenu mis en ligne par les utilisateurs. D'autres fonctions peuvent être implémentées par la suite, n'hésitez-pas à nous suggérer vos idées via le lien dans le footer de notre site. Bienvenue dans la communauté Sportner !</p>

  <h2><li>Liens de mise en production</li></h2>
    <ul>
      <li>Pour le front-end : https://sportner.vercel.app/</li>
      <li>Pour le back-end : https://sportner-backend-a5fda8060658.herokuapp.com/</li>
    </ul>
</ol>
  
