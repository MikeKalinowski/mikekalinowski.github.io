import React from 'react';

const RenderLogo = ({ logo }) => {
  switch(logo) {
    case 'js':
      return(
        <g>
          {/* defs are needed inside at least one sbg for the gradient to work properly on hover - defined in TechCard component*/}
          <defs>
            <linearGradient id="paint0_linear" x1="4.07538e-07" y1="-3.86977e-07" x2="40" y2="42" gradientUnits="userSpaceOnUse">
              <stop stopColor="#B7FBFF"/>
              <stop offset="1" stopColor="#112748"/>
            </linearGradient>
          </defs>
          <path className="changeColor" d="M46 0.344971H0V46.345H46V0.344971Z" fill="#333333"/>
          <path d="M30.9005 36.2825C31.8271 37.7954 33.0326 38.9075 35.1646 38.9075C36.9557 38.9075 38.0999 38.0123 38.0999 36.7754C38.0999 35.2932 36.9243 34.7682 34.9529 33.9059L33.8722 33.4422C30.753 32.1133 28.6808 30.4486 28.6808 26.9292C28.6808 23.6873 31.1509 21.2194 35.0113 21.2194C37.7596 21.2194 39.7354 22.1759 41.1592 24.6803L37.7932 26.8416C37.0521 25.5127 36.2526 24.9892 35.0113 24.9892C33.7452 24.9892 32.9428 25.7924 32.9428 26.8416C32.9428 28.1384 33.7459 28.6634 35.6005 29.4665L36.6812 29.9294C40.3539 31.5044 42.4275 33.11 42.4275 36.7199C42.4275 40.6116 39.3703 42.7437 35.2647 42.7437C31.2502 42.7437 28.6567 40.8307 27.3877 38.3233L30.9005 36.2825ZM15.6307 36.6571C16.3097 37.8619 16.9275 38.8804 18.4126 38.8804C19.8328 38.8804 20.7287 38.3248 20.7287 36.1643V21.4662H25.0512V36.2227C25.0512 40.6985 22.427 42.7357 18.5966 42.7357C15.1356 42.7357 13.1314 40.9446 12.1121 38.7873L15.6307 36.6571Z" />
        </g>
      )
    case 'react':
      return(
        <g>
          <path className="changeColor" d="M46 21.5367C46 18.3792 42.1839 15.3869 36.3331 13.5313C37.6832 7.35236 37.0832 2.43642 34.4391 0.862548C33.8296 0.493367 33.117 0.318492 32.3388 0.318492V2.485C32.7701 2.485 33.117 2.57244 33.4077 2.7376C34.6828 3.49539 35.236 6.38083 34.8047 10.0921C34.7016 11.0053 34.5328 11.9671 34.3265 12.9484C32.4888 12.482 30.4823 12.1226 28.3726 11.8894C27.1068 10.0921 25.7941 8.4599 24.4721 7.03175C27.5287 4.08802 30.3979 2.47529 32.3481 2.47529V0.308777C29.7697 0.308777 26.3942 2.21297 22.9812 5.51617C19.5683 2.2324 16.1928 0.347638 13.6143 0.347638V2.51415C15.5552 2.51415 18.4338 4.11717 21.4904 7.04147C20.1777 8.46962 18.8651 10.0921 17.618 11.8894C15.499 12.1226 13.4925 12.482 11.6547 12.9581C11.4391 11.9865 11.2797 11.0442 11.1671 10.1406C10.7265 6.42941 11.2703 3.54397 12.5361 2.77646C12.8174 2.60158 13.183 2.52386 13.6143 2.52386V0.357353C12.8267 0.357353 12.1141 0.532228 11.4953 0.901409C8.86058 2.47529 8.26987 7.3815 9.62943 13.541C3.79739 15.4063 0 18.3889 0 21.5367C0 24.6941 3.81614 27.6864 9.66694 29.5421C8.31675 35.721 8.91684 40.6369 11.5609 42.2108C12.1704 42.58 12.883 42.7549 13.6706 42.7549C16.2491 42.7549 19.6245 40.8507 23.0375 37.5475C26.4505 40.8312 29.8259 42.716 32.4044 42.716C33.192 42.716 33.9046 42.5411 34.5234 42.1719C37.1582 40.5981 37.7489 35.6918 36.3893 29.5324C42.2026 27.6767 46 24.6844 46 21.5367ZM33.7921 15.0566C33.4452 16.3099 33.0139 17.602 32.5263 18.8941C32.1419 18.1169 31.7387 17.3397 31.298 16.5624C30.8667 15.7852 30.4073 15.0274 29.9478 14.2891C31.2793 14.4931 32.5638 14.7457 33.7921 15.0566ZM29.4978 25.4034C28.7664 26.7149 28.0163 27.9585 27.2381 29.1146C25.841 29.2409 24.4252 29.3089 23 29.3089C21.5842 29.3089 20.1684 29.2409 18.7807 29.1243C18.0024 27.9682 17.243 26.7344 16.5116 25.4325C15.799 24.1598 15.1521 22.8677 14.5614 21.5658C15.1427 20.264 15.799 18.9621 16.5022 17.6894C17.2336 16.3779 17.9837 15.1343 18.7619 13.9782C20.159 13.8519 21.5748 13.7839 23 13.7839C24.4158 13.7839 25.8316 13.8519 27.2193 13.9685C27.9976 15.1246 28.757 16.3584 29.4884 17.6603C30.201 18.933 30.8479 20.2251 31.4386 21.527C30.8479 22.8288 30.201 24.1307 29.4978 25.4034ZM32.5263 24.1404C33.0326 25.4422 33.4639 26.7441 33.8202 28.0071C32.5919 28.3179 31.298 28.5803 29.9572 28.7843C30.4166 28.0362 30.8761 27.2687 31.3074 26.4818C31.7387 25.7045 32.1419 24.9176 32.5263 24.1404ZM23.0188 34.5066C22.1468 33.5739 21.2748 32.5344 20.4121 31.3977C21.256 31.4366 22.1186 31.4657 22.9906 31.4657C23.872 31.4657 24.744 31.4463 25.5972 31.3977C24.7534 32.5344 23.8814 33.5739 23.0188 34.5066ZM16.0428 28.7843C14.7114 28.5803 13.4268 28.3277 12.1985 28.0168C12.5455 26.7635 12.9768 25.4714 13.4643 24.1792C13.8488 24.9565 14.2519 25.7337 14.6926 26.5109C15.1333 27.2881 15.5834 28.0459 16.0428 28.7843ZM22.9719 8.56677C23.8439 9.49944 24.7159 10.539 25.5785 11.6757C24.7346 11.6368 23.872 11.6077 23 11.6077C22.1186 11.6077 21.2466 11.6271 20.3934 11.6757C21.2373 10.539 22.1093 9.49944 22.9719 8.56677ZM16.0334 14.2891C15.574 15.0371 15.1146 15.8047 14.6832 16.5916C14.2519 17.3688 13.8488 18.146 13.4643 18.9233C12.958 17.6214 12.5267 16.3196 12.1704 15.0566C13.3987 14.7554 14.6926 14.4931 16.0334 14.2891ZM7.5479 26.4526C4.2287 24.9856 2.08153 23.062 2.08153 21.5367C2.08153 20.0114 4.2287 18.078 7.5479 16.6207C8.35426 16.2613 9.23563 15.9407 10.1451 15.6395C10.6796 17.5437 11.3828 19.5256 12.2548 21.5561C11.3922 23.5769 10.6983 25.5491 10.1733 27.4436C9.24501 27.1424 8.36364 26.8121 7.5479 26.4526ZM12.5923 40.3358C11.3172 39.578 10.764 36.6925 11.1953 32.9813C11.2984 32.068 11.4672 31.1062 11.6735 30.125C13.5112 30.5913 15.5177 30.9508 17.6274 31.184C18.8932 32.9813 20.2059 34.6134 21.5279 36.0416C18.4713 38.9853 15.6021 40.5981 13.6519 40.5981C13.2299 40.5884 12.8736 40.5009 12.5923 40.3358ZM34.8329 32.9327C35.2735 36.6439 34.7297 39.5294 33.4639 40.2969C33.1826 40.4718 32.817 40.5495 32.3856 40.5495C30.4448 40.5495 27.5662 38.9465 24.5096 36.0222C25.8223 34.594 27.1349 32.9716 28.382 31.1742C30.501 30.9411 32.5075 30.5816 34.3453 30.1056C34.5609 31.0868 34.7297 32.0292 34.8329 32.9327ZM38.4427 26.4526C37.6364 26.8121 36.755 27.1327 35.8455 27.4339C35.311 25.5297 34.6078 23.5477 33.7358 21.5172C34.5985 19.4965 35.2923 17.5243 35.8174 15.6298C36.7456 15.931 37.627 16.2613 38.4521 16.6207C41.7713 18.0877 43.9185 20.0114 43.9185 21.5367C43.9091 23.062 41.7619 24.9953 38.4427 26.4526Z" fill="#333333"/>
          <path className="changeColor" d="M22.9905 25.9765C25.357 25.9765 27.2755 23.9887 27.2755 21.5366C27.2755 19.0845 25.357 17.0967 22.9905 17.0967C20.624 17.0967 18.7056 19.0845 18.7056 21.5366C18.7056 23.9887 20.624 25.9765 22.9905 25.9765Z" fill="#333333"/>
        </g>
      )
    case 'gatsby':
      return(
        <g>
          <path className="changeColor" d="M22.1974 0.344971C9.93814 0.344971 0 10.6424 0 23.345C0 36.0476 9.93818 46.345 22.1974 46.345C34.4568 46.345 44.3949 36.0476 44.3949 23.345C44.3949 10.6424 34.4568 0.344971 22.1974 0.344971ZM4.76967 23.5847L21.966 41.4029C12.5232 41.2753 4.89271 33.3689 4.76967 23.5847ZM26.0987 40.9513L5.20542 19.3027C6.97707 11.2742 13.912 5.28407 22.1974 5.28407C27.9891 5.28407 33.1201 8.2117 36.2898 12.7158L33.8764 14.9223C31.3053 11.1017 27.0335 8.60137 22.1974 8.60137C16.0402 8.60137 10.7969 12.6538 8.81501 18.3248L27.0425 37.2113C31.469 35.5504 34.8734 31.6786 36.0136 26.8834H28.4583V23.345H36.4266V23.3449H39.6281V23.345C39.6281 31.93 33.8471 39.1156 26.0987 40.9513Z" fill="#333333"/>
        </g>
      )
    case 'git':
      return(
        <g>
          <path className="changeColor" d="M43.5596 21.9117L24.1745 1.82807C23.0591 0.671323 21.2486 0.671323 20.1318 1.82807L16.1067 5.99912L21.2124 11.2895C22.3994 10.8742 23.7599 11.1526 24.7056 12.1327C25.6562 13.1189 25.923 14.5406 25.5121 15.7746L30.4332 20.8735C31.6237 20.4484 32.9973 20.7231 33.948 21.7099C35.2771 23.0866 35.2771 25.3174 33.948 26.6945C32.6187 28.0721 30.4657 28.0721 29.1357 26.6945C28.1363 25.6582 27.8891 24.1368 28.3953 22.861L23.8059 18.1056L23.8055 30.6192C24.1296 30.7854 24.4353 31.0072 24.7054 31.2858C26.0341 32.6624 26.0341 34.8928 24.7054 36.2717C23.3763 37.6482 21.2223 37.6482 19.8946 36.2717C18.5657 34.8929 18.5657 32.6625 19.8946 31.2858C20.223 30.9461 20.603 30.689 21.0085 30.5167V17.8868C20.6029 17.7152 20.2233 17.46 19.8944 17.1176C18.8878 16.0755 18.6454 14.5447 19.1616 13.264L14.1284 8.04795L0.837554 21.8189C-0.279185 22.9765 -0.279185 24.8525 0.837554 26.0093L20.2216 46.0929C21.3376 47.2497 23.1475 47.2497 24.265 46.0929L43.5594 26.1042C44.6758 24.9469 44.6758 23.0704 43.5594 21.9134" fill="#333333"/>
        </g>
      )
    case 'webpack':
      return(
        <g>
          <path className="changeColor" d="M19.6175 0.96051L39.2351 12.4586V35.4624L19.6175 46.9605L0 35.4624V12.4586L19.6175 0.96051Z" fill="#333333"/>
          <path d="M35.7336 34.6646L20.2691 43.7388V36.6819L29.9076 31.1822L35.7336 34.6646ZM36.7922 33.6751V14.7136L31.1364 18.0963V30.2924L36.7922 33.6751ZM3.4424 34.6646L18.9069 43.7311V36.6742L9.26844 31.1822L3.4424 34.6646V34.6646ZM2.38379 33.6751V14.7136L8.03956 18.0963V30.2924L2.38379 33.6751V33.6751ZM3.04264 13.4863L18.9069 4.1897V11.0164L8.74284 16.8077L8.6614 16.8537L3.04264 13.4863V13.4863ZM36.126 13.4863L20.2691 4.1897V11.0164L30.4258 16.8153L30.5072 16.8614L36.126 13.4863V13.4863Z" fill="#141414"/>
          <path d="M18.9071 35.071L9.40186 29.648V18.9169L18.9071 24.6008V35.071V35.071ZM20.2692 35.071L29.7745 29.6556V18.9169L20.2692 24.6008V35.071V35.071ZM10.0385 17.6743L19.5882 12.2359L29.1304 17.6743L19.5882 23.3812L10.0385 17.6743V17.6743Z" fill="black"/>
        </g>
      )
    case 'graphql':
      return(
        <g>
          <path className="changeColor" d="M18.6535 8.99904C19.0032 9.10365 19.373 9.15969 19.7557 9.15969C20.1394 9.15969 20.5102 9.10334 20.8608 8.99816L32.809 30.4405C32.5416 30.7046 32.3059 31.0124 32.1125 31.361C31.9203 31.7076 31.7821 32.0714 31.6954 32.4417H7.81567C7.72899 32.0716 7.59079 31.7079 7.39837 31.361C7.20421 31.0147 6.96905 30.7086 6.703 30.4456L18.6535 8.99904ZM16.9095 7.91011C16.9464 7.94965 16.984 7.98842 17.0224 8.0264L5.07152 29.4737C5.01975 29.4581 4.96767 29.4436 4.91534 29.4303V18.4891C5.92249 18.2298 6.83001 17.5642 7.38707 16.5602C7.94334 15.5575 8.04647 14.4137 7.76157 13.3828L16.9095 7.91011ZM23.5487 6.23213C23.6551 5.8609 23.7122 5.46752 23.7122 5.0601C23.7122 2.79299 21.9437 0.96051 19.7557 0.96051C17.5677 0.96051 15.7991 2.79299 15.7991 5.0601C15.7991 5.46529 15.8556 5.85659 15.9609 6.22603L6.82973 11.6887C6.5736 11.4085 6.27475 11.1609 5.93596 10.957C4.04271 9.82936 1.61664 10.4989 0.528303 12.4606C-0.560031 14.4223 0.0861673 16.9361 1.97941 18.0637C2.31734 18.265 2.67224 18.409 3.03348 18.4987V29.4251C2.67636 29.5149 2.32539 29.6581 1.99072 29.8575C0.0974688 30.9969 -0.548729 33.4989 0.539604 35.4606C1.62794 37.4223 4.04268 38.0918 5.94726 36.9642C6.28247 36.7624 6.57859 36.518 6.83291 36.2413L15.9592 41.7011C15.855 42.0687 15.7991 42.458 15.7991 42.8609C15.7991 45.128 17.5677 46.9605 19.7557 46.9605C21.9437 46.9605 23.7122 45.1163 23.7122 42.8609C23.7122 42.4092 23.642 41.9748 23.5123 41.5687L32.585 36.1411C32.8592 36.4602 33.1867 36.7396 33.5636 36.9642C35.4569 38.0918 37.8829 37.4223 38.9713 35.4606C40.0709 33.4989 39.4247 30.9969 37.5202 29.8575C37.1857 29.6582 36.8346 29.5151 36.4772 29.4253V18.4987C36.8385 18.4091 37.1935 18.265 37.5315 18.0637C39.4247 16.9243 40.0709 14.4223 38.9826 12.4606C37.8829 10.4989 35.4682 9.82936 33.5749 10.957C33.2344 11.162 32.9341 11.4111 32.6771 11.6931L23.5487 6.23213ZM22.4911 8.02421C22.5273 7.9884 22.5628 7.95189 22.5976 7.91469L31.7477 13.3887C31.4648 14.418 31.5686 15.5594 32.1238 16.5602C32.6808 17.5642 33.5883 18.2297 34.5953 18.489V29.4293C34.544 29.4423 34.4929 29.4564 34.4421 29.4716L22.4911 8.02421ZM31.7723 34.6605L22.6816 40.0989C21.9584 39.2767 20.916 38.7613 19.7557 38.7613C18.6351 38.7613 17.6246 39.242 16.9053 40.0155L7.7696 34.5501C7.78429 34.4976 7.79797 34.4447 7.81063 34.3916H31.6992C31.7207 34.482 31.745 34.5717 31.7723 34.6605Z" fill="#333333"/>
        </g>
      )
    default:
      return ''
  } 
}

export default RenderLogo