import React from "react";
import styles from "./ArticleCreatorPage.module.scss";
import classNames from "classnames";
import ContentWrapper from "components/Structure/ContentWrapper/ContentWrapper";
import Container from "components/Structure/Container/Container";
import Title from "components/Texts/Title/Title";
import { Pages } from "constants/pages";
import { useLocation, useNavigate } from "react-router-dom";
import { WARNING_PAGE_TYPE } from "pages/WarningPage/constants";
import WarningPage from "pages/WarningPage/WarningPage";
import VideoIntro from "components/Graphics/VideoIntro/VideoIntro";
import { observer } from "mobx-react-lite";
import AvationCreatorForm from "./AviationCreatorForm";
import { Alert, AlertTitle } from "@mui/material";
import Text from "components/Texts/Text/Text";

interface IArtilcleCreatorPageProps {
  className?: string;
}

const ArtilcleCreatorPage: React.FC<IArtilcleCreatorPageProps> = observer(
  ({ className }) => {
    const pageInfo = Pages.getByPath(useLocation().pathname);

    if (!pageInfo)
      return <WarningPage pageType={WARNING_PAGE_TYPE.notFound}></WarningPage>;

    return (
      <div className={classNames(styles.root, className)}>
        <>
          <VideoIntro size="half" path="/videos/building.mp4" />
          <ContentWrapper>
            <Container>
              <Title>{pageInfo.name.russian}</Title>
              <AvationCreatorForm />
            </Container>
          </ContentWrapper>
        </>
      </div>
    );
  }
);

// const ArtilcleCreatorPage: React.FC<IArtilcleCreatorPageProps> = observer(
//   ({ className }) => {
//     const navigate = useNavigate();
//     const pageInfo = Pages.getByPath(useLocation().pathname);
//     const [rerenderInitiator, runRerenderInitiator] =
//       React.useState<boolean>(false);

//     // React.useEffect(() => {
//     //   if (!authorizationStore.isUserAuthorized) {
//     //     navigate("/");
//     //   } else {
//     //     DocumentTitle.set("Создание статьи");
//     //   }
//     // }, [authorizationStore.isUserAuthorized]);

//     const formik = useFormik({
//       initialValues: { ...articleCreatorFormInitialValues },
//       onSubmit: (values, { resetForm }) => {
//         if (Weapons.doesWeaponExist(formik.values.name)) {
//           alert("Вооружение с таким названием уже существует.");
//           return;
//         }

//         const weapon: IAircraft = {
//           name: values.name,
//           isReady: true,
//           branch: WeaponClassification.aviation,
//           type: WeaponClassificationMethods.getByName(values.type)!,
//           nation: NationsMethods.getByName(values.country),
//           adoptedIntoServiceDate: values.adoptedIntoService,
//           intro: [values.intro],
//           sections: ["Введение", "Характеристики", "Читайте также"],
//           galleryInfo: {
//             isIconsRemote: true,
//             remoteOriginalIcon: values.originalPhotoLink,
//             remoteColorizedIcon: values.colorizedPhotoLink,
//           },
//           specifications: {
//             common: {
//               productionPeriod: values.productionPeriod,
//               exploitationPeriod: values.exploitationYears,
//               numberOfIssued: values.numberOfIssued,
//             },
//             crew: {
//               size: values.crewSize,
//               structure: values.crewStructure,
//             },
//             flightCharacteristics: {
//               technicalRange: values.technicalRange,
//               practicalRange: values.practicalRange,
//               maximumSpeed: values.maximumSpeed,
//               climbRate: values.climbRate,
//             },
//             weapons: {
//               weaponsSet: values.weaponsSet,
//               ammunition: values.ammunition,
//               secondSalvoWeight: values.secondSalvoWeight,
//               bombWeapons: values.bombWeapons,
//             },
//           },
//         };

//         prepareWeapon(weapon);

//         commonApplicationStore.showBanner("соединение с сервером");
//         axios
//           .post(Server.path("/weapons"), {
//             createdWeapon: weapon,
//           })
//           .then((response) => {
//             // console.log(response.data);
//             alert(`Вооружение ${values.name} успешно создано.`);
//             Weapons.addNewWeapon(weapon);
//             resetForm({ values: { ...articleCreatorFormInitialValues } });
//           })
//           .catch((error) => {
//             // console.log(error);
//             alert(
//               `Вооружение ${values.name} не создан. Неудалось подключиться к серверу.`
//             );
//           })
//           .finally(() => {
//             commonApplicationStore.hideBanner();
//           });
//       },
//       validate: (values) => validateArticleCreatorForm(values),
//     });

//     if (!pageInfo)
//       return <WarningPage pageType={WARNING_PAGE_TYPE.notFound}></WarningPage>;

//     return (
//       <div className={classNames(styles.root, className)}>
//         <>
//           <VideoIntro size="half" path="/videos/building.mp4" />
//           <ContentWrapper>
//             <Container>
//               <Title>{pageInfo.name.russian}</Title>
//               <form onSubmit={formik.handleSubmit}>
//                 <div className={styles.wrapper}>
//                   <div className={styles.section}>
//                     <Text color="gold" noMargin>
//                       Введение
//                     </Text>
//                     <TextField
//                       label="Несколько предложений о вооружени"
//                       name="intro"
//                       value={formik.values.intro}
//                       onChange={formik.handleChange}
//                       error={formik.touched.intro && !!formik.errors.intro}
//                       helperText={formik.touched.intro && formik.errors.intro}
//                       onBlur={formik.handleBlur}
//                       minRows={4}
//                       required
//                       multiline
//                     />
//                   </div>
//                   <div className={styles.section}>
//                     <Text color="gold" noMargin>
//                       Общее
//                     </Text>
//                     <div className={styles.inputsWrapper}>
//                       <TextField
//                         label="Название"
//                         name="name"
//                         value={formik.values.name}
//                         onChange={formik.handleChange}
//                         error={formik.touched.name && !!formik.errors.name}
//                         helperText={formik.touched.name && formik.errors.name}
//                         onBlur={formik.handleBlur}
//                         required
//                       />
//                       <TextField
//                         label="Принято на вооружение"
//                         name="adoptedIntoService"
//                         value={formik.values.adoptedIntoService || ""}
//                         onChange={formik.handleChange}
//                         error={
//                           formik.touched.adoptedIntoService &&
//                           !!formik.errors.adoptedIntoService
//                         }
//                         helperText={
//                           formik.touched.adoptedIntoService &&
//                           formik.errors.adoptedIntoService
//                         }
//                         onBlur={formik.handleBlur}
//                         type="number"
//                         required
//                         InputProps={{
//                           endAdornment: (
//                             <InputAdornment position="end">год</InputAdornment>
//                           ),
//                         }}
//                       />
//                       <FormControl required>
//                         <InputLabel htmlFor="country">Страна</InputLabel>
//                         <Select
//                           name="country"
//                           value={formik.values.country}
//                           onChange={formik.handleChange}
//                           error={
//                             formik.touched.country && !!formik.errors.country
//                           }
//                           onBlur={formik.handleBlur}
//                           native
//                         >
//                           <option aria-label="None" value="" />
//                           {Object.values(Nations)
//                             .filter((item) => item.name.russian !== "Весь мир")
//                             .map((item) => (
//                               <option key={item.path} value={item.name.russian}>
//                                 {item.name.russian}
//                               </option>
//                             ))}
//                         </Select>
//                         <FormHelperText error={Boolean(formik.errors.country)}>
//                           {formik.touched.country && formik.errors.country}
//                         </FormHelperText>
//                       </FormControl>
//                       <FormControl required>
//                         <InputLabel htmlFor="type">Тип техники</InputLabel>
//                         <Select
//                           name="type"
//                           value={formik.values.type}
//                           onChange={formik.handleChange}
//                           error={formik.touched.type && !!formik.errors.type}
//                           onBlur={formik.handleBlur}
//                           native
//                         >
//                           <option aria-label="None" value="" />
//                           {WeaponClassificationMethods.getTypesArray(
//                             WeaponClassification.aviation
//                           ).map((item) => (
//                             <option key={item} value={item}>
//                               {item}
//                             </option>
//                           ))}
//                         </Select>
//                         <FormHelperText error={Boolean(formik.errors.type)}>
//                           {formik.touched.type && formik.errors.type}
//                         </FormHelperText>
//                       </FormControl>
//                       <TextField
//                         label="Период производства"
//                         name="productionPeriod"
//                         value={formik.values.productionPeriod || ""}
//                         onChange={formik.handleChange}
//                         error={
//                           formik.touched.productionPeriod &&
//                           !!formik.errors.productionPeriod
//                         }
//                         helperText={
//                           formik.touched.productionPeriod &&
//                           formik.errors.productionPeriod
//                         }
//                         onBlur={formik.handleBlur}
//                         type="text"
//                         InputProps={{
//                           endAdornment: (
//                             <InputAdornment position="end">
//                               c – по
//                             </InputAdornment>
//                           ),
//                         }}
//                       />
//                       <TextField
//                         label="Произведено"
//                         name="numberOfIssued"
//                         value={formik.values.numberOfIssued || ""}
//                         onChange={formik.handleChange}
//                         error={
//                           formik.touched.numberOfIssued &&
//                           !!formik.errors.numberOfIssued
//                         }
//                         helperText={
//                           formik.touched.numberOfIssued &&
//                           formik.errors.numberOfIssued
//                         }
//                         onBlur={formik.handleBlur}
//                         type="text"
//                         InputProps={{
//                           endAdornment: (
//                             <InputAdornment position="end">штук</InputAdornment>
//                           ),
//                         }}
//                       />
//                       <TextField
//                         label="Период эксплуатации"
//                         name="exploitationYears"
//                         value={formik.values.exploitationYears || ""}
//                         onChange={formik.handleChange}
//                         error={
//                           formik.touched.exploitationYears &&
//                           !!formik.errors.exploitationYears
//                         }
//                         helperText={
//                           formik.touched.exploitationYears &&
//                           formik.errors.exploitationYears
//                         }
//                         onBlur={formik.handleBlur}
//                         type="text"
//                         InputProps={{
//                           endAdornment: (
//                             <InputAdornment position="end">
//                               c – по
//                             </InputAdornment>
//                           ),
//                         }}
//                       />
//                     </div>
//                   </div>
//                   <div className={styles.section}>
//                     <Text color="gold" noMargin>
//                       Размеры и масса
//                     </Text>
//                     <div className={styles.inputsWrapper}>
//                       <TextField
//                         label="Масса пустого"
//                         name="emptyWeight"
//                         value={formik.values.emptyWeight || ""}
//                         onChange={formik.handleChange}
//                         error={
//                           formik.touched.emptyWeight &&
//                           !!formik.errors.emptyWeight
//                         }
//                         helperText={
//                           formik.touched.emptyWeight &&
//                           formik.errors.emptyWeight
//                         }
//                         onBlur={formik.handleBlur}
//                         type="text"
//                         InputProps={{
//                           endAdornment: (
//                             <InputAdornment position="end">кг</InputAdornment>
//                           ),
//                         }}
//                       />
//                       <TextField
//                         label="Масса снаряжённого"
//                         name="curbWeight"
//                         value={formik.values.curbWeight || ""}
//                         onChange={formik.handleChange}
//                         error={
//                           formik.touched.curbWeight &&
//                           !!formik.errors.curbWeight
//                         }
//                         helperText={
//                           formik.touched.curbWeight && formik.errors.curbWeight
//                         }
//                         onBlur={formik.handleBlur}
//                         type="text"
//                         InputProps={{
//                           endAdornment: (
//                             <InputAdornment position="end">кг</InputAdornment>
//                           ),
//                         }}
//                       />
//                       <TextField
//                         label="Длина"
//                         name="length"
//                         value={formik.values.length || ""}
//                         onChange={formik.handleChange}
//                         error={formik.touched.length && !!formik.errors.length}
//                         helperText={
//                           formik.touched.length && formik.errors.length
//                         }
//                         onBlur={formik.handleBlur}
//                         type="text"
//                         InputProps={{
//                           endAdornment: (
//                             <InputAdornment position="end">м</InputAdornment>
//                           ),
//                         }}
//                       />
//                       <TextField
//                         label="Высота"
//                         name="height"
//                         value={formik.values.height || ""}
//                         onChange={formik.handleChange}
//                         error={formik.touched.height && !!formik.errors.height}
//                         helperText={
//                           formik.touched.height && formik.errors.height
//                         }
//                         onBlur={formik.handleBlur}
//                         type="text"
//                         InputProps={{
//                           endAdornment: (
//                             <InputAdornment position="end">м</InputAdornment>
//                           ),
//                         }}
//                       />
//                       <TextField
//                         label="Размах крыла"
//                         name="wingSpan"
//                         value={formik.values.wingSpan || ""}
//                         onChange={formik.handleChange}
//                         error={
//                           formik.touched.wingSpan && !!formik.errors.wingSpan
//                         }
//                         helperText={
//                           formik.touched.wingSpan && formik.errors.wingSpan
//                         }
//                         onBlur={formik.handleBlur}
//                         type="text"
//                         InputProps={{
//                           endAdornment: (
//                             <InputAdornment position="end">м</InputAdornment>
//                           ),
//                         }}
//                       />
//                       <TextField
//                         label="Площадь крыла"
//                         name="wingArea"
//                         value={formik.values.wingArea || ""}
//                         onChange={formik.handleChange}
//                         error={
//                           formik.touched.wingArea && !!formik.errors.wingArea
//                         }
//                         helperText={
//                           formik.touched.wingArea && formik.errors.wingArea
//                         }
//                         onBlur={formik.handleBlur}
//                         type="text"
//                         InputProps={{
//                           endAdornment: (
//                             <InputAdornment position="end">м²</InputAdornment>
//                           ),
//                         }}
//                       />
//                     </div>
//                   </div>
//                   <div className={styles.section}>
//                     <Text color="gold" noMargin>
//                       Экипаж
//                     </Text>
//                     <div className={styles.inputsWrapper}>
//                       <TextField
//                         label="Количество"
//                         name="crewSize"
//                         value={formik.values.crewSize || ""}
//                         onChange={formik.handleChange}
//                         error={
//                           formik.touched.crewSize && !!formik.errors.crewSize
//                         }
//                         helperText={
//                           formik.touched.crewSize && formik.errors.crewSize
//                         }
//                         onBlur={formik.handleBlur}
//                         type="text"
//                         InputProps={{
//                           endAdornment: (
//                             <InputAdornment position="end">
//                               человек
//                             </InputAdornment>
//                           ),
//                         }}
//                       />
//                       <TextField
//                         label="Состав"
//                         name="crewStructure"
//                         value={formik.values.crewStructure}
//                         onChange={formik.handleChange}
//                         error={
//                           formik.touched.crewStructure &&
//                           !!formik.errors.crewStructure
//                         }
//                         helperText={
//                           formik.touched.crewStructure &&
//                           formik.errors.crewStructure
//                         }
//                         onBlur={formik.handleBlur}
//                         type="text"
//                       />
//                     </div>
//                   </div>
//                   <div className={styles.section}>
//                     <Text color="gold" noMargin>
//                       Летные характеристики
//                     </Text>
//                     <div className={styles.inputsWrapper}>
//                       <TextField
//                         label="Техническая дальность"
//                         name="technicalRange"
//                         value={formik.values.technicalRange || ""}
//                         onChange={formik.handleChange}
//                         error={
//                           formik.touched.technicalRange &&
//                           !!formik.errors.technicalRange
//                         }
//                         helperText={
//                           formik.touched.technicalRange &&
//                           formik.errors.technicalRange
//                         }
//                         onBlur={formik.handleBlur}
//                         type="text"
//                         InputProps={{
//                           endAdornment: (
//                             <InputAdornment position="end">км</InputAdornment>
//                           ),
//                         }}
//                       />
//                       <TextField
//                         label="Практическая дальность"
//                         name="practicalRange"
//                         value={formik.values.practicalRange || ""}
//                         onChange={formik.handleChange}
//                         error={
//                           formik.touched.practicalRange &&
//                           !!formik.errors.practicalRange
//                         }
//                         helperText={
//                           formik.touched.practicalRange &&
//                           formik.errors.practicalRange
//                         }
//                         onBlur={formik.handleBlur}
//                         type="text"
//                         InputProps={{
//                           endAdornment: (
//                             <InputAdornment position="end">км</InputAdornment>
//                           ),
//                         }}
//                       />
//                       <TextField
//                         label="Максимальная скорость"
//                         name="maximumSpeed"
//                         value={formik.values.maximumSpeed || ""}
//                         onChange={formik.handleChange}
//                         error={
//                           formik.touched.maximumSpeed &&
//                           !!formik.errors.maximumSpeed
//                         }
//                         helperText={
//                           formik.touched.maximumSpeed &&
//                           formik.errors.maximumSpeed
//                         }
//                         onBlur={formik.handleBlur}
//                         type="text"
//                         InputProps={{
//                           endAdornment: (
//                             <InputAdornment position="end">км/ч</InputAdornment>
//                           ),
//                         }}
//                       />
//                       <TextField
//                         label="Скороподъемность"
//                         name="climbRate"
//                         value={formik.values.climbRate || ""}
//                         onChange={formik.handleChange}
//                         error={
//                           formik.touched.climbRate && !!formik.errors.climbRate
//                         }
//                         helperText={
//                           formik.touched.climbRate && formik.errors.climbRate
//                         }
//                         onBlur={formik.handleBlur}
//                         type="text"
//                         InputProps={{
//                           endAdornment: (
//                             <InputAdornment position="end">м/c</InputAdornment>
//                           ),
//                         }}
//                       />
//                     </div>
//                   </div>
//                   <div className={styles.section}>
//                     <Text color="gold" noMargin>
//                       Вооружение
//                     </Text>
//                     <div className={styles.inputsWrapper_fullWidthFlex}>
//                       <TextField
//                         label="Комплект вооружения"
//                         name="weaponsSet"
//                         value={formik.values.weaponsSet || ""}
//                         onChange={formik.handleChange}
//                         error={
//                           formik.touched.weaponsSet &&
//                           !!formik.errors.weaponsSet
//                         }
//                         helperText={
//                           formik.touched.weaponsSet && formik.errors.weaponsSet
//                         }
//                         onBlur={formik.handleBlur}
//                         type="text"
//                       />
//                       <TextField
//                         label="Боезапас"
//                         name="ammunition"
//                         value={formik.values.ammunition}
//                         onChange={formik.handleChange}
//                         error={
//                           formik.touched.ammunition &&
//                           !!formik.errors.ammunition
//                         }
//                         helperText={
//                           formik.touched.ammunition && formik.errors.ammunition
//                         }
//                         onBlur={formik.handleBlur}
//                         type="text"
//                       />
//                       <TextField
//                         label="Вес секундного залпа"
//                         name="secondSalvoWeight"
//                         value={formik.values.secondSalvoWeight || ""}
//                         onChange={formik.handleChange}
//                         error={
//                           formik.touched.secondSalvoWeight &&
//                           !!formik.errors.secondSalvoWeight
//                         }
//                         helperText={
//                           formik.touched.secondSalvoWeight &&
//                           formik.errors.secondSalvoWeight
//                         }
//                         onBlur={formik.handleBlur}
//                         type="text"
//                         InputProps={{
//                           endAdornment: (
//                             <InputAdornment position="end">кг/с</InputAdornment>
//                           ),
//                         }}
//                       />
//                       <TextField
//                         label="Бомбовое вооружение"
//                         name="bombWeapons"
//                         value={formik.values.bombWeapons}
//                         onChange={formik.handleChange}
//                         error={
//                           formik.touched.bombWeapons &&
//                           !!formik.errors.bombWeapons
//                         }
//                         helperText={
//                           formik.touched.bombWeapons &&
//                           formik.errors.bombWeapons
//                         }
//                         onBlur={formik.handleBlur}
//                         type="text"
//                       />
//                     </div>
//                   </div>
//                   <div className={styles.section}>
//                     <Text color="gold" noMargin>
//                       Фотографии
//                     </Text>
//                     {formik.values.originalPhotoLink &&
//                       formik.values.colorizedPhotoLink && (
//                         <div className={styles.photosWrapper}>
//                           {formik.values.originalPhotoLink && (
//                             <img
//                               src={formik.values.originalPhotoLink}
//                               className={styles.photo}
//                               onClick={() =>
//                                 imageViewerStore.openPhoto(
//                                   formik.values.originalPhotoLink
//                                 )
//                               }
//                             />
//                           )}
//                           {formik.values.colorizedPhotoLink && (
//                             <img
//                               src={formik.values.colorizedPhotoLink}
//                               className={styles.photo}
//                               onClick={() =>
//                                 imageViewerStore.openPhoto(
//                                   formik.values.colorizedPhotoLink
//                                 )
//                               }
//                             />
//                           )}
//                         </div>
//                       )}
//                     <div className={styles.inputsWrapper_fullWidthFlex}>
//                       <TextField
//                         label="Черно-белая фотография"
//                         name="originalPhotoLink"
//                         value={formik.values.originalPhotoLink}
//                         onChange={formik.handleChange}
//                         error={
//                           formik.touched.originalPhotoLink &&
//                           !!formik.errors.originalPhotoLink
//                         }
//                         helperText={
//                           formik.touched.originalPhotoLink &&
//                           formik.errors.originalPhotoLink
//                         }
//                         onBlur={formik.handleBlur}
//                         type="text"
//                         required
//                         multiline
//                         InputProps={{
//                           endAdornment: (
//                             <InputAdornment position="end">
//                               ссылка
//                             </InputAdornment>
//                           ),
//                         }}
//                       />
//                       <TextField
//                         label="Цветная фотография"
//                         name="colorizedPhotoLink"
//                         value={formik.values.colorizedPhotoLink}
//                         onChange={formik.handleChange}
//                         error={
//                           formik.touched.colorizedPhotoLink &&
//                           !!formik.errors.colorizedPhotoLink
//                         }
//                         helperText={
//                           formik.touched.colorizedPhotoLink &&
//                           formik.errors.colorizedPhotoLink
//                         }
//                         onBlur={formik.handleBlur}
//                         type="text"
//                         required
//                         multiline
//                         InputProps={{
//                           endAdornment: (
//                             <InputAdornment position="end">
//                               ссылка
//                             </InputAdornment>
//                           ),
//                         }}
//                       />
//                     </div>
//                   </div>

//                   <div className={styles.test}>
//                     <CustomButton color="blue" type="submit" uppercase>
//                       Создать
//                     </CustomButton>
//                     <CustomButton
//                       color="blue"
//                       onClick={() => {
//                         fillFormTest(formik);
//                         runRerenderInitiator((val) => !val);
//                       }}
//                       uppercase
//                     >
//                       Тестовое заполнение
//                     </CustomButton>
//                     {/* <CustomButton
//                     color="gold"
//                     onClick={() => {
//                       axios
//                         .get(Server.path("/weapons"))
//                         .then((response) => {
//                           console.log(response.data);
//                         })
//                         .catch((error) => {
//                           console.log(error);
//                         });
//                     }}
//                     uppercase
//                   >
//                     Запросить с сервера
//                   </CustomButton> */}
//                     <CustomButton
//                       color="red"
//                       onClick={() => {
//                         formik.resetForm({
//                           values: { ...articleCreatorFormInitialValues },
//                         });
//                         runRerenderInitiator((val) => !val);
//                       }}
//                       uppercase
//                     >
//                       Очистить
//                     </CustomButton>
//                   </div>
//                 </div>
//               </form>
//             </Container>
//           </ContentWrapper>
//         </>
//       </div>
//     );
//   }
// );

export default ArtilcleCreatorPage;
