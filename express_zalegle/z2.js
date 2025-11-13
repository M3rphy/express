const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.status(200).send(`
        <a href="/nalesnik">nalesnik</a>
        <a href="/murzynek">murzynek</a>
        <a href="/sernik">sernik</a>
        `);
});

app.get('/nalesnik', (req,res) =>{
    res.status(200).send(`W misce połączyć mleko sojowe i wodę. Dodać sodę i sól. Powoli dodawać mąkę, ubijając energicznie trzepaczką. Masa powinna być gęstsza niż na naleśniki robione z jajkami. Odstawić na 15 minut.

Na rozgrzanej patelni przed smażeniem naleśników roztopić olej kokosowy. Kłaść niewielkie porcje ciasta na patelnię, równomiernie rozprowadzając po powierzchni. Gdy brzegi zaczną się rumienić, przewrócić na drugą stronę. Powinno wyjść 8 średniej wielkości naleśników.

W drugiej patelni na średnim ogniu rozgrzać połowę syropu z agawy, aż się lekko skarmelizuje. Dodać pozostały syrop, sok z pomarańczy i skórkę, po czym zagotować. Dodać olej kokosowy. Polewa nie powinna być zbyt gęsta. Większość polewy przelać do miski. Do patelni włożyć naleśnik i złożyć go dwukrotnie, by dokładnie pokrył się polewą. Powtórzyć czynność, rozprowadzając polewę na pozostałych naleśnikach. W podwójnym garnku rozpuścić czekoladę z karobu i dodać kilka kropli oleju kokosowego, by polewa zyskała połysk. Skropić nią naleśniki tuż przed podaniem.

Uwaga: Jeżeli nie ma dostępu do nieekologicznych pomarańczy, można z nich zmyć pestycydy rozpuszczalne w wodzie, umieszczając pomarańcze ze skórką w misce z ciepłą wodą z 2 łyżeczkami soli i 2 łyżeczkami sody na 10 minut. Osuszyć owoce, po czym zetrzeć skórkę i wycisnąć sok.`);
})
app.get('/murzynek', (req,res)=>{
    res.status(200).send('W małym rondelku umieść kostkę masła - 200 gramów, 3/4 szklanki cukru oraz pół szklanki wody (można dać też mleko) i 5 łyżek kakao. Całość podgrzewaj na małej mocy palnika. Krem czekoladowy mieszaj co kilka minut, aż zrobi się całkiem płynny i gładki. U mnie nie trwa to zazwyczaj więcej niż 5 minut. Kremu czekoladowego nie trzeba doprowadzać do wrzenia. Rondelek odstaw do przestudzenia. Możesz też przelać całość do innego naczynia, by przyspieszyć studzenie. Aby zrobić podstawową polewę do murzynka zawsze odlewam od gorącego kremu czekoladowego 1/4 szklanki płynu. Następnie dodaję 1/4 tabliczki gorzkiej czekolady i mieszam całość, aż powstanie gęsty krem. Taką polewę odstawiam na bok, by czekała do momentu przykrywania nią upieczonego murzynka. Polewa zgęstnieje, jednak w niczym to nie przeszkadza. Taką polewę wykładam bowiem na jeszcze lekko ciepłe ciasto czekoladowe. Pod wpływem ciepła murzynka polewa zaczyna sama rozpływać się po cieście. Umyj jajka i oddziel żółtka od białek. Żółtka odłóż na bok a białka zmiksuj na sztywno ze szczyptą soli. Białka miksuj zaczynając od małych obrotów i stopniowo je zwiększaj. Pamiętaj też o tym, by użyć czystej i suchej szklanej lub metalowej miski i czystych mieszadeł. Białek nie miksuj dłużej niż 2-3 minuty, by nie przebić pęcherzyków powietrza. Dodaj wszystkie żółtka i miksuj dalej masę, ale już tylko 10 sekund. Następnie cienką strużką wlewaj całkiem przestudzony krem czekoladowy (ten rzadszy bez czekolady, którego jest znacznie więcej). Na koniec wsyp mąkę przesianą z proszkiem do pieczenia i sodą. Całość miksuj jak najkrócej, tylko do całkowitego połączenia się składników w ciasto. itd' );
})
app.get('/sernik', (req,res)=>{
    res.status(200).send(`Przygotowanie
Spód
Ciastka zmielić drobno, a masło roztopić.

Roztopione masło wymieszać ze zmielonymi ciastkami. Masą wyłożyć spód form do pieczenia.

Dokładnie docisnąć do spodu formy i boków.

Baza
Ogrzać butelkę Debic Sernik przez przynajmniej 20 sekund pod bieżącą ciepłą wodą. To sprawi, że zawartość odejdzie od ścianek.

Zawartość butelki umieścić w dzieży miksera. Ubijać na lekką masę przez 5 minut na najszybszej prędkości obrotów miksera.

Dodać ziarenka wanilii i skórkę z cytryny. Dokładnie wymieszać.

Masę przełożyć do rękawa cukierniczego i wyszprycować 1 warstwę do każdej z form wyłożonych masą ciasteczkową.

Piec w temperaturze 200°C przez 10 minut z nawiewem piekarnika ustawionym na najniższym poziomie.

Ostrożnie wyjąć z piekarnika – masa będzie płynna. Ostudzić i umieścić w lodówce do schłodzenia.`);
})

app.listen(3002, () => {
  console.log(`http://localhost:3002`);
});