import * as Yup from "yup"

export const babySitterSchema = Yup.object().shape({
  description: Yup.string().required("Açıklama alanı zorunludur."),
  name: Yup.string().required("İsim ve soyisim alanı zorunludur."),
  email: Yup.string()
    .email("Geçerli bir e-posta adresi giriniz.")
    .required("E-posta alanı zorunludur."),
  phone: Yup.string().required("Telefon numarası alanı zorunludur."),
  password: Yup.string()
    .min(8, "Şifre en az 8 karakterden oluşmalıdır.")
    .matches(/[@!]/, "Şifrede en az bir sembol bulunmalıdır.")
    .required("Şifre alanı zorunludur."),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Şifreler uyuşmuyor.")
    .required("Şifre tekrarı zorunludur."),
  birthDate: Yup.date().required("Doğum tarihi alanı zorunludur."),
  gender: Yup.string().required("Cinsiyet alanı zorunludur."),
  maritalStatus: Yup.string().required("Medeni durum alanı zorunludur."),
  educationLevel: Yup.string().required("Eğitim durumu alanı zorunludur."),
  languages: Yup.array().min(1, "En az bir dil seçiniz."),
  city: Yup.string().required("Şehir alanı zorunludur."),
  district: Yup.string().required("İlçe alanı zorunludur."),
  address: Yup.string().required("Ev adresi alanı zorunludur."),
  gizlilik: Yup.boolean().oneOf(
    [true],
    "Gizlilik politikasını kabul etmelisiniz."
  ),
  haklar: Yup.boolean().oneOf([true], "Bakıcılık haklarını kabul etmelisiniz."),
})

// babySitterSchema
//   .validate(bakiciInfo, { abortEarly: false })
//   .then(() => {
//     // Başarılı doğrulama işlemleri
//   })
//   .catch((errors) => {
//     // Doğrulama hatalarıyla başa çıkma
//   })
