import React from "react";
import TextBlock from "../../components/TextBlock/TextBlock";
import Subtitle from "../../components/Subtitle/Subtitle";
import Paragraph from "../../components/Paragraph/Paragraph";
import Text from "../../components/Text/Text";
import styles from "./Test.module.scss";
import YTFrame from "../../components/YTFrame/YTFrame";
import Image from "../../components/Image/Image";
import HightlitingText from "../../components/HightlitingText/HightlitingText";

const images = {
  kotin: "/images/weapons/armored-vehicles/soviet-union/ИС-2/article/котин.jpg",
  test: "/images/weapons/armored-vehicles/soviet-union/ИС-2/article/tests.jpg",
  tiger: "/images/weapons/armored-vehicles/soviet-union/ИС-2/article/tiger.jpg",
  scheme:
    "/images/weapons/armored-vehicles/soviet-union/ИС-2/article/scheme_of_armour.jpg",
  road: "/images/weapons/armored-vehicles/soviet-union/ИС-2/article/road.jpg",
  praha: "/images/weapons/armored-vehicles/soviet-union/ИС-2/article/praha.jpg",
  road: "/images/weapons/armored-vehicles/soviet-union/ИС-2/article/road.jpg",
  // road: "/images/weapons/armored/soviet-union/ИС-2/article/road.jpg",
};

export default function IS_2() {
  return (
    <TextBlock>
      <TextBlock>
        <Subtitle id="История создания">История создания</Subtitle>
        <Paragraph>
          Влияние на создание нового тяжёлого танка, оказало появление у врага
          нового тяжёлого танка. Сначала его называли «Слон» (эмблема 502-го
          тяжёлого танкового батальона), из-за рисунка зверя на броне, но вскоре
          узнали настоящие имя — «Тигр». Новый немецкий танк, захваченный под
          Ленинградом внимательно изучали на подмосковном полигоне. Результаты
          испытаний обескураживали, даже с 200 метров пушка Ф-34 не пробивала
          лобовую броню «Тигра». С этим «зверем» справлялись только тяжёлые
          СУ-152. Чтобы Т-34 смог поразить бортовую броню «Тигра», ему нужно
          было приблизиться на расстояние 200 метров, в то время как «Тигр»
          уничтожал Т-34 с дистанции 2 км.
        </Paragraph>
        <Image
          URL={images.tiger}
          title="Маршалы Советского Союза Г. К. Жуков и К. Е. Ворошилов в парке им. Горького, осматривают трофейный танк «Тигр»"
        />
        <Paragraph>
          Челябинскому Кировскому заводу и Опытному танко-моторному заводу № 100
          Наркомата танковой промышленности в постановлении Государственным
          комитетом обороны № 2943 от 24 февраля 1943 года дано следующие
          задание: на базе опытного танка КВ-13 изготовить и предъявить на
          испытания два опытных образца танка будущего Иса. Весной-летом 1943
          года в Челябинске на Кировском заводе уже был изготовлен первый
          опытный образец нового танка – ИС-1. Он имел вооружение из 85-мм пушки
          Д-5Т и трёх пулемётов ДТ. После некоторых поправок тяжёлый танк ИС-85,
          а впоследствии переименован в ИС-1, был принят на вооружение РККА, а
          уже в октябре 1943 года, он пошёл в серийный выпуск. Однако, работы по
          усовершенствованию машины всё-таки продолжались. Военным требовалось
          куда более мощное орудие чем 85-мм пушка.
        </Paragraph>
        <Image
          URL={images.kotin}
          title="Жозеф Яковлевич Котин — главный конструктор танка ИС"
        />
        <Paragraph>
          И тогда уже, в начале августа 1943 года, директор и главный
          конструктор завода № 100 Жозеф Яковлевич Котин изучал итоги самого
          крупного танкового сражения за период Второй мировой войны — Курской
          битвы, он обратил внимание, что наиболее результативно боролась с
          немецкими «Кошками» 122-мм пушка А-19. Предполагалось пушку
          использовать в качестве истребления тяжёлых танков врага, так и было
          сделано. Ствол такой пушки удалось смонтировать на люльке и лафете
          122-мм гаубицы М-30 и орудие Д-2 успешно прошло все полевые испытания.
          Поэтому удалось «воплотить в жизнь» установку ствола А-19 в тяжёлый
          танк с применением круглой люльки, противооткатных устройств, а также
          подъемного механизма от опытной танковой 122-мм гаубицы У-11. Для
          реализации этого требовалось введение в конструкцию орудия мощного
          дульного тормоза.
        </Paragraph>
        <Paragraph>
          До конца октября 1943 года под руководством Николая Фёдоровича
          Шашмурина была осуществлена проработка танка ИС с мощной 122-мм
          танковой пушкой Д-25Т (индекс «Т» означает — «Танковый вариант») с
          начальной скоростью полёта снаряда более 781 м/с. Это позволяло
          поражать все типы немецких танков того времени на любых дистанциях
          боя. Танк ИС со 122-мм пушкой Постановлением Государственного комитета
          обороны № 4479 от 31 октября 1943 года был принят на вооружение РККА.
          После чего его перебросили на один из полигонов в Кубинке, на котором
          из 122-мм пушки с дистанции 1500 м в присутствии маршала Климента
          Ворошилова ИС-2 сделал выстрел по трофейной «Пантере». Снаряд,
          превратил корпус «кошки» в рванину.
        </Paragraph>
        <Image
          URL={images.test}
          title="Последствия пробития брони «Пантеры» выстрелом из 122-мм орудия Д-25Т"
        />
        <Paragraph>
          Новый советский тяжёлый танк обладал всеми качествами, выдвинутыми
          военными, и мог уверенно бороться с любым потенциальным танком
          противника. Вскоре после принятия ИС-2 на вооружения, выпуск танка
          ИС-1 был прекращён, а уже из декабря Челябинский Кировский завод
          сосредоточился исключительно на производстве танков ИС-2. Из цехов
          ЧКЗ, во все возрастающих количествах, выходили ИС-2, оснащённые уже
          новым 122-орудием Д-25Т. В марте 1944 года дульный тормоз немецкого
          типа заменили более эффективным — конструкции ЦАКБ. При массе в 46
          тонн незначительно отличавшейся от танка КВ-1С, новая боевая машина
          имела более толстую броню.
        </Paragraph>
        {/* <HightlitingText>
          Из выдержки «Отчёта Управления самоходной артиллерии Красной Армии о
          работе в период Великой Отечественной войны»: установка 122-мм пушек
          на танки ИС вернула нашим танкам утраченное на время превосходство над
          противником в артиллерийском вооружении тяжёлых танков. По мощности
          своего выстрела 122-мм пушка Д-25 оставила далеко позади 88-мм пушки
          немецких танков. Боевые действия танков ИС показали, что 122-мм пушки
          являются наиболее действенным средством борьбы против тяжёлых и
          средних танков противника, обеспечив пробитие их брони с дистанции
          2500 м
        </HightlitingText> */}
        <Paragraph>
          Результаты боёв показали слабые места ИС-2. И уже в мае 1944 года ЧТЗ
          переключился уже на выпуск корпусов с новой, более «спрямленным»
          сварным носом, а Металлургический броневой завод № 200 начал уже
          выпускать такие-же корпуса, однако уже с литой лобовой деталью. А уже
          со второй половины 1944 года некоторая часть танков ИС-2 образца 1944
          года стали оснащаться сварной лобовой частью. Кроме того, в процессе
          производства существенно была изменена конструкция башни. Башни
          прежних версий танков, выпуска 1943 года, имели узкую амбразуру, такою
          же, как и Д-5Т и пользоваться телескопическим прицелом было неудобно.
          С мая 1944 года начался выпуск новой башни с расширенной амбразурой и
          это позволило сместить прицел влево. В ней также увеличили бронезащиту
          маски орудия и толщину нижней части бортов. Командирскую башенку
          сместили влево. Кроме того, на закрепленном подвижном погоне
          командирской башенки, начали монтировать 12,7-мм крупнокалиберный
          пулемёт ДШК, которого танкисты использовали не столько против
          воздушных целей, сколько в уличных боях против «фаустников»,
          устраивавшие засады на верхних этажах немецких зданий. Нижняя лобовая
          деталь пробивалась 75-мм снарядом с дистанции 785 м, поэтому было
          принято решение усилитель место дополнительным траком. В таком виде
          ИС-2 принял участие в заключительных сражениях Великой Отечественной
          войны.
        </Paragraph>
        <Paragraph>
          Спрямленная литая верхняя часть у танков ИС-2 образца 1944 года первых
          выпусков имела толщину 120 мм под углом наклона 60°. Танки ИС-2,
          выпускавшиеся со второй половины 1944 года, имели сварную конструкцию
          лобовой части бронекорпуса, выполненную из 90-мм катаных бронелистов
          средней твердости, при этом верхний и нижний листы имели углы наклона
          60° и 30° (соответственно). В верхнем лобовом листе монтировался
          смотровой люк-пробка механика-водителя (впоследствии замененный
          смотровой щелью со стеклоблоком).
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
        <Image URL={images.scheme} title="Схема бронирования" />
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
        <Image
          URL={images.road}
          title="Колонна советских танков ИС-2 на берлинском шоссе"
        />
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
        <Image URL={images.praha} title="ИС-2 едет по улицам Праги" />
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
    </TextBlock>
  );
}
