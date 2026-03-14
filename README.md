# Generateur FR - Lettres Miracle S

Generateur de Lettres Miracle S pour **Pokemon Donjon Mystere : Explorateurs du Ciel**.

Le site permet de generer des codes pour plusieurs types de missions Sky, avec des aides visuelles pour les **Memos tresor**, une interface FR/EN, et divers raccourcis pour les cas speciaux.

## Fonctionnalites

- generation de Lettres Miracle S Sky
- prise en charge des missions normales, Memos tresor et Lettres de defi
- interface en francais et en anglais
- apercus visuels pour les Pokemon, objets et salles Memo tresor
- limite d'etage adaptee au donjon choisi
- site 100% statique, sans backend

## Utilisation locale

Le projet peut etre ouvert directement dans un navigateur moderne via `index.html`.

Si tu preferes lancer un petit serveur local :

```powershell
cd D:\desktop\dev\pmd_edc_generateur
python -m http.server 8000
```

Puis ouvre :

```text
http://localhost:8000
```

## Structure rapide

- `index.html` : page principale
- `app.js` : logique UI
- `style.css` : styles
- `lmgenerate.js` : generation des codes
- `memo_gallery.js` : donnees et cartographie des salles Memo tresor
- `lang/` : systeme de langues
- `assets/` : sprites et images

## Mise en ligne sur GitHub Pages

Oui, c'est possible, et ce projet est bien adapte a GitHub Pages parce qu'il est statique.

Pour ce depot, l'URL GitHub Pages par defaut sera :

```text
https://redcoal27.github.io/pmd_edc_generateur/
```

### Methode la plus simple

1. Va sur ton depot GitHub : `RedCoal27/pmd_edc_generateur`
2. Ouvre `Settings`
3. Va dans `Pages`
4. Dans `Build and deployment`, choisis :
   - `Source`: `Deploy from a branch`
   - `Branch`: `main`
   - `Folder`: `/ (root)`
5. Sauvegarde
6. Attends 1 a 3 minutes
7. Recharge la page `Pages` jusqu'a voir l'URL publiee

Ensuite, a chaque `push` sur `main`, GitHub republiera automatiquement le site.

### Domaine personnalise

Si tu veux utiliser ton propre domaine ou sous-domaine, par exemple :

```text
sky.oneiricforge.com
```

tu peux le configurer dans `Settings > Pages > Custom domain`.

Pour un **sous-domaine** comme `sky.oneiricforge.com`, il faut en general ajouter un enregistrement DNS :

```text
CNAME sky -> redcoal27.github.io
```

Puis, dans GitHub Pages :

1. entre `sky.oneiricforge.com` dans `Custom domain`
2. laisse GitHub verifier la config DNS
3. active `Enforce HTTPS` quand l'option devient disponible

## Notes utiles pour GitHub Pages

- Le site utilise des chemins relatifs, donc il fonctionne bien en projet GitHub Pages.
- Le fichier `.nojekyll` est present pour forcer un deploiement statique simple.
- Si la page ne se met pas a jour tout de suite, fais un hard refresh du navigateur.

## Credits et sources

Le site a ete concu par **RedCoal** avec l'aide de GPT.

Des erreurs peuvent encore etre presentes dans :

- les textes
- les labels
- certaines interpretations de salles
- certaines associations visuelles

Sources principales :

- [SombrAbsol.github.io](https://sombrabsol.github.io/)
- [SombrAbsol.github.io - lmiracles](https://sombrabsol.github.io/EdC/lmiracles.html)
- [Bulbapedia - Wonder Mail](https://bulbapedia.bulbagarden.net/wiki/Wonder_Mail)
- [Bulbapedia - Job (Mystery Dungeon)](https://bulbapedia.bulbagarden.net/wiki/Job_%28Mystery_Dungeon%29)
- [Bulbapedia - Explorers of the Sky](https://bulbapedia.bulbagarden.net/wiki/Pokemon_Mystery_Dungeon%3A_Explorers_of_the_Sky)
- [Bulbapedia - North American and Australian Wonder Mail S distributions](https://bulbapedia.bulbagarden.net/wiki/List_of_North_American_and_Australian_Wonder_Mail_S_distributions_in_Pok%C3%A9mon_Mystery_Dungeon%3A_Explorers_of_Sky)
- [Bulbapedia - Wonder Mail distributions in Time and Darkness](https://bulbapedia.bulbagarden.net/wiki/List_of_Wonder_Mail_distributions_in_Pok%C3%A9mon_Mystery_Dungeon%3A_Explorers_of_Time_and_Explorers_of_Darkness)
- [The Warp Point](https://the-warp-point.blogspot.com/2009/12/pokemon-mystery-dungeon-explorers-of.html)
- [Wiki Grovyle JP - o-takara memo](https://wiki.grovyle.net/pokedun3/?%E3%81%8A%E3%81%9F%E3%81%8B%E3%82%89%E3%83%A1%E3%83%A2#content_1_2)
- [Wiki Grovyle JP - fushigi na mail S / o-takara memo](https://wiki.grovyle.net/pokedun3/?%E3%81%B5%E3%81%97%E3%81%8E%E3%81%AA%E3%83%A1%E3%83%BC%E3%83%ABS/%E3%81%8A%E3%81%9F%E3%81%8B%E3%82%89%E3%83%A1%E3%83%A2#content_1_1)
- [Baumifstory](https://baumifstory.blog.fc2.com/blog-entry-453.html)

## Liens utiles GitHub Pages

- [Creating a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- [Configuring a publishing source for your GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Managing a custom domain for your GitHub Pages site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [About custom domains and GitHub Pages](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages)
