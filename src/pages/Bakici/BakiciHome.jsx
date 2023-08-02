import React from 'react'
import Konum from "../../assets/Konum";
import Profile from "../../assets/Profile";
import Calendar from "../../assets/Calendar";
import Warning from "../../assets/Warning";
import Clock from "../../assets/Clock";
import Hearth from "../../assets/Hearth";
import HomeMap from "../../assets/Home";

const BakiciHome = () => {
  return (
    <div className="bakici_content">
        <p className="bakici_hello">Merhaba, Tugba</p>

        {/* TODO: Sonradan component haline getirilecek backend bağlandığında şimdilik böyle kalacak */}
        <div className="bakici_current_work">
          <div className="bakici_current_work_header">
            <h3>Devam etmekte olan gorevin</h3>
            <span>
              <Konum />
              Ankara, Demetevler
            </span>
          </div>

          <div className="bakici_current_work_sub_info">
            <span>
              <Profile />
              Ebeveyn, John Bagcilar
            </span>
            <span>
              <Calendar />
              28.06.2023 - 1.07.2023
            </span>
            <span>
              <Clock />
              Sadece hafta ici gunduz
            </span>
          </div>

          <p className="current_work_cancel">IPTAL ET</p>
        </div>

        <div className="bakici_kullanmaya_basla">
          <h3 className="title">Care Zone kullanmaya baslayin</h3>
          <p>
            Platform genelinde güven ve güvenliği sağlamak için lütfen
            profilinizi tamamlamak üzere aşağıdaki bilgileri girmis oldugunuzdan
            emin olunuz.
          </p>

          <div className="tasks">
            <span>
              <svg
                width="121"
                height="116"
                viewBox="0 0 121 116"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="52" cy="64" r="52" fill="#E88385" />
                <path
                  d="M36.9296 71.5719C41.7809 77.3491 47.6209 81.8978 54.2863 85.1165C56.8241 86.3145 60.2179 87.736 63.9991 87.9797C64.2335 87.9898 64.4577 88 64.6922 88C67.2299 88 69.2683 87.1268 70.9296 85.3297C70.9397 85.3195 70.9601 85.2992 70.9703 85.2789C71.5614 84.5682 72.2341 83.9285 72.9373 83.2482C73.4164 82.7913 73.9056 82.3141 74.3744 81.8268C76.5453 79.5727 76.5453 76.7095 74.354 74.5265L68.2287 68.4244C67.1892 67.3481 65.9458 66.7795 64.6412 66.7795C63.3366 66.7795 62.0831 67.3481 61.0129 68.4142L57.3642 72.0491C57.0279 71.8562 56.6814 71.6836 56.3552 71.5211C55.9476 71.3181 55.5705 71.1252 55.2341 70.9119C51.9116 68.8102 48.8948 66.0688 46.0105 62.5456C44.5531 60.7078 43.5747 59.1645 42.8918 57.5908C43.8499 56.7277 44.7468 55.8241 45.6131 54.9407C45.9188 54.626 46.2348 54.3112 46.5507 53.9965C47.6514 52.8999 48.2426 51.6307 48.2426 50.3413C48.2426 49.0518 47.6616 47.7826 46.5507 46.6861L43.5135 43.6604C43.1568 43.305 42.8205 42.9598 42.474 42.6044C41.8013 41.914 41.0981 41.2033 40.405 40.5636C39.3553 39.5381 38.1221 39 36.8175 39C35.5232 39 34.2798 39.5381 33.1892 40.5738L29.3775 44.3711C27.9914 45.752 27.2066 47.4273 27.0436 49.3666C26.8499 51.7932 27.2984 54.3722 28.4602 57.4892C30.2438 62.3121 32.9344 66.7897 36.9296 71.5719ZM29.5304 49.5798C29.6527 48.2294 30.1724 47.1024 31.1509 46.1276L34.9422 42.3506C35.5333 41.782 36.1856 41.4876 36.8175 41.4876C37.4392 41.4876 38.0711 41.782 38.652 42.3709C39.3349 43.0004 39.977 43.6604 40.67 44.361C41.0166 44.7163 41.3733 45.0717 41.73 45.4372L44.7671 48.4629C45.399 49.0924 45.7252 49.7321 45.7252 50.3616C45.7252 50.9911 45.399 51.6308 44.7671 52.2603C44.4512 52.575 44.1352 52.8999 43.8193 53.2147C42.8715 54.1691 41.9848 55.0727 41.0064 55.9358C40.986 55.9561 40.9758 55.9662 40.9554 55.9865C40.1095 56.8293 40.242 57.6314 40.4458 58.2406C40.456 58.271 40.4662 58.2913 40.4764 58.3218C41.2612 60.2002 42.3517 61.9872 44.0537 64.1194C47.1113 67.8761 50.3319 70.7901 53.8786 73.034C54.3169 73.3183 54.7857 73.5416 55.224 73.765C55.6316 73.9681 56.0087 74.161 56.3451 74.3742C56.3858 74.3945 56.4164 74.4148 56.4572 74.4351C56.7935 74.6077 57.1196 74.689 57.4458 74.689C58.2611 74.689 58.7911 74.1712 58.9644 73.9986L62.7761 70.2012C63.3672 69.6123 64.0093 69.2976 64.6412 69.2976C65.4158 69.2976 66.0477 69.7748 66.4452 70.2012L72.5908 76.3135C73.8138 77.5319 73.8037 78.8518 72.5602 80.1413C72.1322 80.5982 71.6838 81.0348 71.2047 81.4917C70.4913 82.1821 69.7473 82.8929 69.0746 83.695C67.9026 84.954 66.5063 85.5429 64.7024 85.5429C64.5291 85.5429 64.3456 85.5327 64.1724 85.5226C60.8295 85.3094 57.721 84.0097 55.387 82.903C49.0477 79.8469 43.483 75.5114 38.8661 70.0083C35.0645 65.4494 32.5064 61.2053 30.8145 56.6567C29.7648 53.8645 29.3673 51.6206 29.5304 49.5798Z"
                  fill="white"
                />
                <g filter="url(#filter0_d_1051_1037)">
                  <path
                    d="M111.677 12.6091C112.599 10.6852 112.468 8.35441 110.887 6.77301L110.228 6.11466C108.647 4.53326 106.253 4.28166 104.392 5.32396C103.082 6.05755 100.31 4.53221 100.105 3.5442C99.674 1.46929 97.6716 0 95.4498 0L94.3186 0.0574655C91.717 0.189645 89.6756 2.33752 89.6756 4.94239C89.7644 6.07216 87.8284 6.90818 86.7038 6.17319C84.7737 4.24312 81.6445 4.24312 79.7144 6.17319L79.1731 6.71449C77.518 8.36964 77.3258 10.8804 78.466 12.8131C79.2482 14.139 78.4854 16.4857 77.2004 16.8017C74.8622 17.3766 73 19.0965 73 21.6308V22.4489C73 24.6934 74.6349 26.368 76.6686 27.0894C78.7788 27.8379 78.6123 30.9333 78.396 31.3042C77.2924 33.1964 77.5514 35.6649 79.1732 37.2867L79.7145 37.828C81.3281 39.4416 83.738 39.6296 85.6685 38.6216C87.0511 37.8996 89.6325 39.249 89.8466 40.3522C90.2616 42.4901 92.336 44.0012 94.618 44.0012H95.3222C97.5594 44.0012 99.4537 42.5329 100.094 40.5074C100.513 39.1828 102.54 37.841 104.556 38.6892C106.474 39.4962 108.837 39.2779 110.336 37.779L110.828 37.2867C112.758 35.3566 112.758 32.2273 110.828 30.2973C109.961 29.5102 111.076 27.3394 112.059 27.3256C114.789 27.3256 117.001 25.1128 117.001 22.3832V21.5371C117.001 19.2642 115.492 17.237 113.369 16.7703C111.941 16.4564 111.215 13.5744 111.677 12.6091Z"
                    fill="#45C9A5"
                  />
                </g>
                <path
                  d="M91.1492 28.7178L85.414 22.9826C84.7266 22.2952 84.7266 21.1808 85.414 20.4935C86.1014 19.8062 87.2157 19.8062 87.903 20.4935L92.3937 24.9842L102.095 15.2834C102.782 14.596 103.896 14.596 104.584 15.2834C105.271 15.9707 105.271 17.0851 104.584 17.7724L93.6383 28.7178C92.9161 29.3341 91.6254 29.2461 91.1492 28.7178Z"
                  fill="white"
                />
                <defs>
                  <filter
                    id="filter0_d_1051_1037"
                    x="69"
                    y="0"
                    width="52"
                    height="52.0012"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1051_1037"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1051_1037"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              Telefon numaranizi dogrulayin
            </span>

            <span>
              <svg
                width="124"
                height="119"
                viewBox="0 0 124 119"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="52" cy="67" r="52" fill="#E88385" />
                <path
                  d="M80.7972 44H23.1999C21.4353 44 20 45.4353 20 47.1999V87.7314C20 89.4959 21.4353 90.9312 23.1999 90.9312H80.7972C82.5617 90.9312 83.997 89.4959 83.997 87.7314V71.9133C83.997 71.9131 83.997 71.913 83.997 71.9127V47.1999C83.997 45.4353 82.5617 44 80.7972 44ZM23.1999 88.7979C22.6119 88.7979 22.1333 88.3193 22.1333 87.7314V74.4991L32.0542 64.5777C32.4552 64.1714 33.1385 64.1662 33.55 64.5829L44.0924 75.1156L30.4059 88.7979H23.1999ZM81.8638 87.7312C81.8638 88.3192 81.3852 88.7978 80.7972 88.7978H33.4229L65.1193 57.1113C65.5203 56.705 66.2041 56.6998 66.6146 57.1165L81.8639 72.3556L81.8638 87.7312ZM81.8638 69.3392L68.1274 55.6125C66.9181 54.3885 64.8062 54.3938 63.6062 55.6072L45.6008 73.6075L35.0624 63.0789C33.8531 61.8549 31.7412 61.8597 30.5413 63.0742L22.1333 71.4826V47.1999C22.1333 46.6119 22.6119 46.1333 23.1999 46.1333H80.7972C81.3852 46.1333 81.8638 46.6119 81.8638 47.1999V69.3392Z"
                  fill="white"
                />
                <path
                  d="M46.6653 51.4663C43.1364 51.4663 40.2656 54.3371 40.2656 57.866C40.2656 61.395 43.1364 64.2657 46.6653 64.2657C50.1943 64.2657 53.065 61.395 53.065 57.866C53.065 54.3371 50.1944 51.4663 46.6653 51.4663ZM46.6653 62.1324C44.3128 62.1324 42.3989 60.2184 42.3989 57.866C42.3989 55.5136 44.3128 53.5996 46.6653 53.5996C49.0178 53.5996 50.9318 55.5136 50.9318 57.866C50.9318 60.2184 49.0178 62.1324 46.6653 62.1324Z"
                  fill="white"
                />
                <g filter="url(#filter0_d_1051_1038)">
                  <path
                    d="M114.677 12.6089C115.599 10.685 115.468 8.35423 113.887 6.77283L113.228 6.11448C111.647 4.53308 109.253 4.28148 107.392 5.32378C106.082 6.05737 103.31 4.53202 103.105 3.54402C102.674 1.4691 100.672 -0.000183105 98.4498 -0.000183105L97.3186 0.0572824C94.717 0.189462 92.6756 2.33733 92.6756 4.9422C92.7644 6.07198 90.8284 6.908 89.7038 6.173C87.7737 4.24294 84.6445 4.24294 82.7144 6.173L82.1731 6.71431C80.518 8.36945 80.3258 10.8802 81.466 12.813C82.2482 14.1388 81.4854 16.4856 80.2004 16.8015C77.8622 17.3764 76 19.0963 76 21.6306V22.4488C76 24.6932 77.6349 26.3678 79.6686 27.0892C81.7788 27.8378 81.6123 30.9331 81.396 31.304C80.2924 33.1962 80.5514 35.6647 82.1732 37.2865L82.7145 37.8278C84.3281 39.4414 86.738 39.6295 88.6685 38.6214C90.0511 37.8994 92.6325 39.2488 92.8466 40.352C93.2616 42.4899 95.336 44.001 97.618 44.001H98.3222C100.559 44.001 102.454 42.5327 103.094 40.5072C103.513 39.1826 105.54 37.8408 107.556 38.6891C109.474 39.496 111.837 39.2777 113.336 37.7788L113.828 37.2865C115.758 35.3564 115.758 32.2271 113.828 30.2972C112.961 29.51 114.076 27.3392 115.059 27.3254C117.789 27.3254 120.001 25.1126 120.001 22.383V21.5369C120.001 19.2641 118.492 17.2368 116.369 16.7702C114.941 16.4562 114.215 13.5742 114.677 12.6089Z"
                    fill="#45C9A5"
                  />
                </g>
                <path
                  d="M94.1492 28.7176L88.414 22.9824C87.7266 22.295 87.7266 21.1807 88.414 20.4934C89.1014 19.806 90.2157 19.806 90.903 20.4934L95.3937 24.984L105.095 15.2832C105.782 14.5958 106.896 14.5958 107.584 15.2832C108.271 15.9706 108.271 17.0849 107.584 17.7722L96.6383 28.7176C95.9161 29.3339 94.6254 29.2459 94.1492 28.7176Z"
                  fill="white"
                />
                <defs>
                  <filter
                    id="filter0_d_1051_1038"
                    x="72"
                    y="-0.000183105"
                    width="52"
                    height="52.0012"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1051_1038"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1051_1038"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              Profil resminizi yukleyin
            </span>

            <span>
              <svg
                width="104"
                height="104"
                viewBox="0 0 104 104"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="52" cy="52" r="52" fill="#E88385" />
                <path
                  d="M61.3774 76.2232H25.8401C25.4201 76.2232 25 75.8871 25 75.383C25 74.879 25.3361 74.5429 25.8401 74.5429H61.3774C61.7975 74.5429 62.2175 74.879 62.2175 75.383C62.2175 75.8871 61.7975 76.2232 61.3774 76.2232Z"
                  fill="white"
                />
                <path
                  d="M61.3777 76.2232H30.9651C30.5451 76.2232 30.125 75.8871 30.125 75.3831V53.9599C30.125 53.5398 30.4611 53.1198 30.9651 53.1198C31.4692 53.1198 31.8053 53.4558 31.8053 53.9599V74.5429H61.3777C61.7977 74.5429 62.2178 74.879 62.2178 75.3831C62.2178 75.8871 61.7977 76.2232 61.3777 76.2232Z"
                  fill="white"
                />
                <path
                  d="M28.7806 55.6401C27.7724 55.6401 26.8483 55.3041 26.0922 54.548C25.4201 53.8759 25 52.8677 25 51.8596C25 50.9354 25.4201 50.0113 26.0082 49.2552L45.247 30.0163C47.9354 27.3279 52.2201 27.3279 54.9085 30.0163L63.1417 38.2495C63.4777 38.5856 63.4777 39.0897 63.1417 39.4257C62.8056 39.7618 62.3016 39.7618 61.9655 39.4257L53.7323 31.1925C51.716 29.1762 48.4395 29.1762 46.4232 31.1925L27.2683 50.3473C26.9323 50.7674 26.6803 51.3555 26.6803 51.8596C26.6803 52.2796 26.7643 52.8677 27.2683 53.3718C28.1085 54.2119 29.5367 54.2119 30.3768 53.3718L49.5317 34.2169C49.8677 33.8809 50.3718 33.8809 50.7078 34.2169L57.6809 41.19C58.0169 41.526 58.0169 42.0301 57.6809 42.3661C57.3448 42.7022 56.8407 42.7022 56.5047 42.3661L50.1197 35.9812L31.553 54.548C30.7969 55.3041 29.7887 55.6401 28.7806 55.6401Z"
                  fill="white"
                />
                <path
                  d="M52.6371 76.2232H40.7073C40.2873 76.2232 39.8672 75.8871 39.8672 75.383V60.0928C39.8672 58.7486 40.9594 57.5724 42.3876 57.5724H51.0409C52.3851 57.5724 53.4772 58.7486 53.4772 60.0928V75.383C53.4772 75.8031 53.0572 76.2232 52.6371 76.2232ZM41.5474 74.5429H51.797V60.0928C51.797 59.5887 51.3769 59.2526 51.0409 59.2526H42.3876C41.8835 59.2526 41.5474 59.6727 41.5474 60.0928V74.5429Z"
                  fill="white"
                />
                <path
                  d="M66.5861 76.1392C65.494 76.1392 64.4858 75.5511 63.8977 74.6269C60.9573 69.7542 54.3203 57.9925 54.3203 52.9517C54.3203 46.2307 59.7811 40.7699 66.5021 40.7699C73.2231 40.7699 78.768 46.2307 78.768 52.9517C78.768 56.4802 75.5755 63.7053 69.3586 74.6269C68.6865 75.5511 67.6783 76.1392 66.5861 76.1392ZM66.5021 42.4501C60.7053 42.4501 56.0006 47.1548 56.0006 52.9517C56.0006 57.6564 63.1416 70.0903 65.326 73.7868C65.578 74.2069 66.0821 74.5429 66.6702 74.5429C67.2582 74.5429 67.6783 74.2909 68.0144 73.7868C75.4915 60.5969 77.0877 55.136 77.0877 52.9517C77.0877 47.1548 72.383 42.4501 66.5021 42.4501Z"
                  fill="white"
                />
                <path
                  d="M66.5866 60.7649C62.302 60.7649 58.7734 57.2364 58.7734 52.9517C58.7734 48.6671 62.302 45.1385 66.5866 45.1385C70.8712 45.1385 74.3998 48.6671 74.3998 52.9517C74.3998 57.2364 70.8712 60.7649 66.5866 60.7649ZM66.5866 46.8188C63.2261 46.8188 60.4537 49.5912 60.4537 52.9517C60.4537 56.3122 63.2261 59.0846 66.5866 59.0846C69.9471 59.0846 72.7195 56.3122 72.7195 52.9517C72.7195 49.5912 69.9471 46.8188 66.5866 46.8188Z"
                  fill="white"
                />
                <path
                  d="M43.2308 68.41C42.8107 68.41 42.3906 68.0739 42.3906 67.5699V66.4777C42.3906 66.0576 42.7267 65.6376 43.2308 65.6376C43.7348 65.6376 44.0709 65.9736 44.0709 66.4777V67.5699C44.0709 67.9899 43.6508 68.41 43.2308 68.41Z"
                  fill="white"
                />
              </svg>
              Adresinizi kaydediniz
            </span>
          </div>

          <div className="genel_sayfa">
            <div className="side">
              <div className="section1">
                <h2>PROFİL DURUMU</h2>
                <span>Aktif</span>
              </div>

              <div className="side1_section2">
                <h2>TAKVIM</h2>
                <span>Takviminizi en son 2 hafta önce güncellediniz</span>
                <p>Takvimi Guncelle</p>
              </div>
            </div>

            <div className="divider" />

            <div className="side">
              <div className="section1 side2_section1">
                <h2>FAVORI LISTE KAYDINIZ</h2>
                <span>
                  <Hearth />7 kisi tarafindan favori listesine eklendiniz
                </span>
              </div>

              <div className="side2_section2">
                <h2>
                  UYARILAR
                  <Warning />
                </h2>

                {/* TODO: !! şimdilik böyle kalsın sonradan component olacak !! */}
                <div className="warnings">
                  <div className="warning">
                    <Calendar />
                    <div className="divider" />
                    <span>Takviminizi guncelleyiniz</span>
                  </div>

                  <div className="warning">
                    <HomeMap />
                    <div className="divider" />
                    <span>Adresinizi kaydediniz</span>
                  </div>

                  <h3>Baska uyariniz bulunmamaktadir</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default BakiciHome