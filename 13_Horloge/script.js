setInterval(() => {
  date = new Date(); // L'objet natif Date() contient les méthodes comme getHours().
  hr = date.getHours();
  min = date.getMinutes();
  sec = date.getSeconds();
  //temps actuel => degrés
  hr_rotation = 30 * hr + min / 2; //Un cercle fait 12 heures et aussi 360 degrés. Donc 360 / 12 = 30. Il faut multiplier l'heure par 30 pour obtenir les degrés. Puis, on ajoute les minutes pour le mouvement supplémentaire entre deux taquets d'heures.
  min_rotation = 6 * min; // car 360° / 60 minutes = 6, donc 1 minute deviendra 6 degrés
  sec_rotation = 6 * sec;
  // Ci-dessous on peut appeler les ID de notre DOM sans utiliser getElementById car les ID font partie du global namespace.
  hours.style.transform = `rotate(${hr_rotation}deg)`;
  minutes.style.transform = `rotate(${min_rotation}deg)`;
  seconds.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);
