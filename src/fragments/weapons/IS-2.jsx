import React from "react";
import TextBlock from "../../components/TextBlock/TextBlock";
import Subtitle from "../../components/Subtitle/Subtitle";
import Paragraph from "../../components/Paragraph/Paragraph";
import Text from "../../components/Text/Text";
import styles from "./Test.module.scss";
import YTFrame from "../../components/YTFrame/YTFrame";

export default function IS_2() {
  return (
    <TextBlock>
      <TextBlock>
        <Subtitle id="История создания">История создания</Subtitle>
        <Paragraph>
          Ещё в начале 1942 года конструкторы Челябинского завода попытались
          реализовать идею танка, по огневой мощи и бронезащите соответствующего
          тяжёлым, а по размерам и подвижности – средним. Добиться этого
          пытались за счёт сокращения бесполезных внутренних объёмов и
          уплотнения компоновки. Вооружить опытный КВ-13 собирались пушкой
          калибра 76мм. Был изготовлен и образец с гаубицей калибра 122мм.
        </Paragraph>
        <Paragraph>
          После появления на поле боя немецких танков «Тигр» темп разработки
          форсировали и зимой 1943 оба варианта КВ-13, переименованного в ИС
          (Иосиф Сталин) затребовали на госиспытания. ИС был признан
          перспективным, но стать первым основным боевым танком ему было не
          суждено. Испытания трофейных «Тигров» выявили, что эффективнее всего с
          ним может бороться пушка калибра 85мм.
        </Paragraph>
        <Paragraph>
          Чтобы разместить такое орудие в танке, не ухудшив при этом условий
          работы экипажа, длину корпуса и погон башни пришлось увеличить. ИС
          стал большее, тяжелее, и медленнее. Осенью 1943 года машину
          постановили принять на вооружение, но ещё раньше директор завода Жозеф
          Котин подал идею об установке на ИС пушки А-19 калибра 122мм, указав
          на результативность её использования против «Тигров».
        </Paragraph>
        <Paragraph>
          Танк с усиленным вооружением, названный ИС-2, два месяца выпускался в
          параллель с ИС-1 (с 85мм пушкой). В феврале 1944 года сборку
          изначального варианта прекратили, и на конвейере остался только ИС-2.
        </Paragraph>
      </TextBlock>
      <TextBlock>
        <Subtitle id="Конструкция">Конструкция</Subtitle>
        <Paragraph>
          Экипаж танка ИС-2 размещался так: механик-водитель сидел в носовой
          части, между двумя топливными баками. В его распоряжении находились
          смотровой люк-пробка и два призменных перископа в крыше. Позже люк
          заменили стеклоблоком типа «триплекс».
        </Paragraph>
        <Paragraph>
          В днище корпуса за сиденьем мехвода находился эвакуационный люк. В
          башне находились места наводчика и командира (по левому борту) и
          заряжающего (по правому борту). Командир наблюдал за обстановкой при
          помощи шести смотровых щелей в командирской башенке, а заряжающий
          использовал для наблюдения перископ МК-IV.
        </Paragraph>
        <Paragraph>
          Броневой корпус ИС-2 сваривался из литой и катаной брони. На ранних
          машинах верхняя лобовая деталь была «ломаной» – нижняя часть имела
          толщину 60мм при угле наклона в 72⁰, а толщина верхней, при наклоне в
          30⁰, составляла 120мм. Первые же бои в начале 1944 года
          продемонстрировали уязвимость такой детали, и уже с весны этого же
          года лобовую деталь заменили на спрямлённую, толщиной 120мм с углом
          наклона в 60⁰.Бортовая броня имела толщину в 90мм, кормовые листы –
          60мм.
        </Paragraph>
        <Paragraph>
          Броня литой башни имела толщину 100мм «по кругу». Башня ИС-2 имела
          электропривод вращения, в ней устанавливались радиостанция 10Р и
          переговорное устройство для членов экипажа. Пороховые газы,
          образующиеся после выстрела, отсасывались установленным в крыше башни
          вентилятором.
        </Paragraph>
        <Paragraph>
          Танк оснащался 12-цилиндровым дизелем В-2, в данном исполнении
          получивший индекс В-2ИС. Двигатель был безнаддувный, развивал мощность
          в 520 л.с. Топливо поступало из баков в боевом отделении,
          дополнительные баки, которые подвешивались на корпус ИС-2, к топливной
          системе не подключались (то есть солярку из них надо было
          самостоятельно переливать в основные).
        </Paragraph>
        <Paragraph>
          Механическая коробка передач имела восемь скоростей (за счет
          демультипликатора), двухступенчатые бортовые передачи соединялись с
          планетарным механизмом поворота. Подвеска у танка торсионная.
        </Paragraph>
      </TextBlock>
      <TextBlock>
        <Subtitle id="Вооружение">Вооружение</Subtitle>
        <Paragraph>
          Главное оружие ИС-2 – пушка Д-25Т калибра 122мм. Прототипом послужило
          буксируемое орудие А-19 – пушки ранних танков даже имели аналогичный
          поршневой затвор, позже для увеличения скорострельности его заменили
          клиновым полуавтоматическим узлом. Пушка прототипа имела Т-образный
          дульный тормоз, в серию пошли машины с дульным тормозом, скопированным
          с немецкого образца. Позже и его заменили на более эффективный
          двухкамерный тормоз. Боекомплект невелик – всего 28 выстрелов
          раздельного гильзового заряжания.
        </Paragraph>
        <Paragraph>
          В ходе войны использовались всего два типа боеприпасов – бронебойный
          каморный БР-471 и осколочно-фугасный ОФ-471. Оба имели массу 25 кг и
          начальную скорость 800 м/с, разрывной заряд бронебойного снаряда
          содержал 125 г гексала, а осколочного – 3,6 кг тротила.
        </Paragraph>
        <Paragraph>
          Несмотря на отсутствие в экипаже стрелка-радиста, имелся курсовой
          пулемёт ДТ, жёстко установленный в правой «скуле» корпуса. Стрелял из
          него с помощью электроспуска механик-водитель. Второй ДТ был спарен с
          пушкой, а третий – установлен в кормовом листе башни. Верх башни, а
          точнее, командирская башенка, имела турельную установку с пулемётом
          ДШК – один из первых случаев установки на советскую бронетехнику
          штатного зенитного пулемёта. Кроме этого, ранние образцы имели в
          бортах башни амбразуры для стрельбы из личного оружия.
        </Paragraph>
      </TextBlock>
      <TextBlock>
        <Subtitle id="Применение в бою">Применение в бою</Subtitle>
        <Paragraph>
          В бой «ИСы»с 85мм пушкой пошли в феврале 1944 года. Первое применение
          оказалось неудачным – все танки, штурмовавшие деревню Лисянка, были
          подбиты. По результатам дальнейших боёв, включавших, в том числе,
          столкновения с «Тиграми», окончательно выяснилось, что орудие Д-5 для
          «ИСа» не подходит. А вот ИС-2 с крупнокалиберной пушкой Д-25Т оказался
          очень «кстати». Причём в роли именно «противотанкового» средства он
          применялся не так часто. Зато оказался незаменим при прорыве
          оборонительных линий.
        </Paragraph>
        <Paragraph>
          А главным противником советских «тяжеловесов» стали вовсе не «Тигры».
          Большинство (до 70% процентов в городских боях) потерь танки ИС-2
          несли от «Панцерфаустов» – одноразовых гранатомётов, выпускавшихся в
          огромных количествах.
        </Paragraph>
        <Paragraph>
          По свидетельствам ветеранов, кумулятивная струя и осколки брони
          выводили из строя экипаж, даже если сам танк оставался практически
          неповреждённым. Для защиты от «фаустов» на бронетехнику (и ИС-2 в том
          числе) устанавливали импровизированные противокумулятивные экраны.
        </Paragraph>
        <Paragraph>
          К концу 1944 года из тяжёлых танков начали формировать отдельные
          бригады. Две такие бригады были задействованы в штурме Берлина. В ходе
          ВОВ танками ИС-2 вооружили сформированные в СССР польские и
          чехословацкие армии. После войны ИС-2 предполагалось заменить на новые
          машины, но из-за их несовершенства отработанный в производстве и
          освоенный в эксплуатации образец танка остался на службе. В 50-е годы
          «ИСы» были модернизированы, и оставались в войсках даже после начала
          производства танка Т-10.
        </Paragraph>
        <Paragraph>
          Официально танк сняли с вооружения только в 90-х годах. Некоторое
          количество ИС-2 было передано на Кубу, Северному Вьетнаму и КНДР.
        </Paragraph>
      </TextBlock>

      {/* <Subtitle id="Видеоматериалы">Видеоматериалы</Subtitle>
      <YTFrame
        links={[
          "https://www.youtube.com/embed/_nypiSnpvow",
          "https://www.youtube.com/embed/_ZFXUBEb24g",
          "https://www.youtube.com/embed/Yfr26UvEtzc",
          "https://www.youtube.com/embed/sodVseKNDNI",
          "https://www.youtube.com/embed/5Zqu4XgXjac",
        ]}
      /> */}
    </TextBlock>
  );
}

{
  /* <Paragraph></Paragraph>
        <Paragraph></Paragraph>
        <Paragraph></Paragraph>
        <Paragraph></Paragraph>
        <Paragraph></Paragraph>
        <Paragraph></Paragraph>
        <Paragraph></Paragraph> */
}
