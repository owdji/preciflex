/* Footer.js */

import React from 'react'
import { NavLink } from 'react-router-dom'
import ContactSection from './ContactSection'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className='footerLinks'>
        <div className='footerNavigation'>
        <nav className='footerNavigation'>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active-link-footer' : 'navigationLinkFooter')}
          >
            Home
          </NavLink>
          <NavLink
            to="/medtech"
            className={({ isActive }) => (isActive ? 'active-link-footer' : 'navigationLinkFooter')}
          >
            Medtech
          </NavLink>
          <NavLink
            to="/luxury"
            className={({ isActive }) => (isActive ? 'active-link-footer' : 'navigationLinkFooter')}
          >
            Luxury
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? 'active-link-footer' : 'navigationLinkFooter')}
          >
            Services
          </NavLink>
          <NavLink
            to="/competences"
            className={({ isActive }) => (isActive ? 'active-link-footer' : 'navigationLinkFooter')}
          >
            Competences
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'active-link-footer' : 'navigationLinkFooter')}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? 'active-link-footer' : 'navigationLinkFooter')}
          >
            Contact
          </NavLink>
        </nav>
          </div>
          <div className='socialMedia'>
              <a href='www.linkedin.com'><p>LINKEDIN</p></a>
          </div>
      </div>
      <div className='bottomFooter'>
        <ContactSection circleColor={'circleBlack'} textColor={'textWhite'} numberOfRows={3}/>
        <svg className="footerLogo" width="273" height="101" viewBox="0 0 273 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="272" height="101" transform="translate(0.452148)" fill="black"/>
          <path d="M108.088 41.4436C108.252 41.586 108.415 41.7307 108.576 41.8776C108.653 41.9481 108.73 42.0186 108.81 42.0912C110.621 43.8228 111.702 46.4474 111.767 48.9406C111.802 51.0708 111.802 51.0708 111.663 51.9088C105.933 51.9088 100.204 51.9088 94.3008 51.9088C94.9089 54.2197 95.506 55.7817 97.5686 56.9907C99.2723 57.8982 101.385 58.2023 103.271 57.7383C104.903 57.2242 106.151 56.3169 107.226 54.9953C107.257 54.9317 107.289 54.868 107.322 54.8024C107.649 54.9259 107.944 55.067 108.243 55.247C108.324 55.296 108.406 55.345 108.49 55.3955C108.574 55.4465 108.658 55.4974 108.745 55.55C108.827 55.5994 108.91 55.6489 108.995 55.6999C109.541 56.0291 110.074 56.3733 110.602 56.7315C109.945 58.4719 107.893 59.9184 106.261 60.6861C105.232 61.1325 104.186 61.4689 103.078 61.6507C103.007 61.6632 102.936 61.6758 102.863 61.6887C100.076 62.0924 97.0177 61.3419 94.7469 59.6794C92.2644 57.7176 90.5751 55.174 90.1435 52.0044C89.7906 48.9502 90.5638 45.9288 92.4627 43.5012C94.2976 41.2387 96.9183 39.6416 99.8389 39.2953C102.793 39.0356 105.726 39.5637 108.088 41.4436ZM96.037 44.9641C95.1114 46.0727 94.7047 47.0984 94.3973 48.5329C98.6943 48.5329 102.991 48.5329 107.419 48.5329C107.159 46.7186 106.708 45.1771 105.255 43.9781C102.411 42.0141 98.4258 42.4554 96.037 44.9641Z" fill="white"/>
          <path d="M192.296 41.6844C194.288 43.4166 195.39 45.8255 195.672 48.4362C195.692 48.9007 195.696 49.3635 195.692 49.8283C195.69 50.0365 195.69 50.2447 195.69 50.4529C195.686 51.4655 195.686 51.4655 195.575 51.9085C189.846 51.9085 184.117 51.9085 178.214 51.9085C178.753 54.0674 179.444 55.7806 181.399 56.963C183.141 57.8982 185.253 58.2051 187.184 57.738C188.898 57.1994 190.215 56.1896 191.331 54.8022C192.061 55.1763 192.764 55.5955 193.465 56.0199C193.557 56.0741 193.649 56.1284 193.743 56.1842C193.829 56.2367 193.914 56.2891 194.003 56.3432C194.08 56.39 194.158 56.4368 194.238 56.4851C194.418 56.6348 194.418 56.6348 194.504 56.8281C194.519 57.1127 194.363 57.2537 194.185 57.4611C194.137 57.5147 194.088 57.5682 194.038 57.6234C193.989 57.6794 193.939 57.7353 193.889 57.7929C193.745 57.9547 193.599 58.1147 193.453 58.2745C193.358 58.3816 193.358 58.3816 193.262 58.4908C191.396 60.4842 188.507 61.67 185.808 61.7664C182.927 61.8164 180.252 60.9987 178.021 59.1426C177.887 59.0329 177.887 59.0329 177.751 58.921C176.167 57.5532 175.058 55.7371 174.452 53.7412C174.432 53.6748 174.411 53.6084 174.39 53.5401C173.551 50.646 174.039 47.5073 175.449 44.8845C176.921 42.2706 179.389 40.4406 182.249 39.6205C185.717 38.6556 189.523 39.3774 192.296 41.6844ZM180.046 44.9639C179.986 45.0209 179.925 45.078 179.863 45.1368C179.474 45.5357 179.215 45.9863 178.961 46.477C178.929 46.537 178.898 46.5971 178.865 46.659C178.556 47.286 178.477 47.8075 178.31 48.5327C182.607 48.5327 186.904 48.5327 191.331 48.5327C191.151 46.7308 190.611 45.2002 189.209 43.9993C188.236 43.2711 187.047 42.8237 185.834 42.7454C185.722 42.738 185.722 42.738 185.609 42.7303C183.467 42.6533 181.564 43.4765 180.046 44.9639Z" fill="white"/>
          <path d="M71.9238 39.6592C84.7919 39.6592 84.7919 39.6592 86.6873 41.4436C88.2013 43.0362 88.6654 44.8344 88.6367 46.9976C88.5822 48.6894 87.9195 50.2614 86.6813 51.4266C86.1703 51.8845 85.3776 52.584 84.6557 52.584C85.0265 53.3465 85.4231 54.0853 85.8554 54.8145C85.9749 55.0177 86.0943 55.2209 86.2137 55.4241C86.3054 55.5801 86.3054 55.5801 86.399 55.7392C86.7655 56.3648 87.1263 56.9937 87.4876 57.6223C87.7964 58.159 88.1076 58.6941 88.4231 59.2269C88.5173 59.3864 88.5173 59.3864 88.6134 59.5492C88.7335 59.7525 88.8542 59.9555 88.9754 60.1581C89.0289 60.2487 89.0824 60.3392 89.1375 60.4326C89.2085 60.5518 89.2085 60.5518 89.281 60.6735C89.382 60.879 89.382 60.879 89.382 61.1684C87.8223 61.1684 86.2627 61.1684 84.6557 61.1684C84.4608 60.8183 84.2658 60.4681 84.065 60.1074C83.5417 59.1706 83.0072 58.2413 82.4637 57.3161C81.9836 56.4966 81.5185 55.6691 81.0585 54.8382C81.0061 54.7439 80.9537 54.6495 80.8997 54.5523C80.8315 54.4289 80.8315 54.4289 80.762 54.303C80.7101 54.2132 80.6582 54.1234 80.6047 54.0308C80.574 53.9646 80.5434 53.8983 80.5118 53.8301C80.3045 53.418 80.3045 53.418 79.9232 53.1885C79.6757 53.1604 79.4382 53.1573 79.1891 53.1627C79.11 53.1616 79.0308 53.1605 78.9493 53.1593C78.6551 53.1563 78.3609 53.1599 78.0667 53.1627C77.4083 53.1627 76.7498 53.1627 76.0713 53.1627C76.0713 55.8364 76.0713 58.5101 76.0713 61.2649C74.7027 61.2649 73.334 61.2649 71.9238 61.2649C71.9238 54.135 71.9238 47.0051 71.9238 39.6592ZM76.0713 43.0351C76.0713 45.1677 76.0713 47.3003 76.0713 49.4975C77.0063 49.5034 77.9413 49.5094 78.9047 49.5156C79.198 49.5182 79.4914 49.5208 79.7936 49.5235C80.0286 49.5244 80.2635 49.5251 80.4984 49.5257C80.6785 49.528 80.6785 49.528 80.8621 49.5302C81.9798 49.5306 82.9473 49.3317 83.7824 48.5503C84.4422 47.8463 84.6896 47.034 84.6768 46.0768C84.59 45.0705 84.2045 44.3206 83.4346 43.6726C82.4521 42.9968 81.2836 43.0205 80.1405 43.0256C80.037 43.0257 79.9335 43.0258 79.8268 43.0259C79.4431 43.0264 79.0593 43.0278 78.6756 43.029C77.8162 43.031 76.9568 43.033 76.0713 43.0351Z" fill="white"/>
          <path d="M53.4043 39.6592C66.238 39.6592 66.238 39.6592 68.1738 41.4496C69.6104 42.9777 70.1588 44.854 70.1149 46.9132C70.0523 48.4827 69.5407 49.8282 68.5476 51.0407C68.4973 51.1032 68.4471 51.1656 68.3953 51.2299C67.2102 52.5527 65.2368 53.0613 63.532 53.1627C62.5035 53.193 61.4741 53.1808 60.4454 53.1748C59.4905 53.1708 58.5356 53.1668 57.5518 53.1627C57.5518 55.8364 57.5518 58.5101 57.5518 61.2649C56.1831 61.2649 54.8145 61.2649 53.4043 61.2649C53.4043 54.135 53.4043 47.0051 53.4043 39.6592ZM57.5518 43.0351C57.5518 45.1677 57.5518 47.3003 57.5518 49.4975C58.4868 49.5034 59.4218 49.5094 60.3851 49.5156C60.6785 49.5182 60.9719 49.5208 61.2741 49.5235C61.509 49.5244 61.744 49.5251 61.9789 49.5257C62.1589 49.528 62.1589 49.528 62.3426 49.5302C63.4603 49.5306 64.4277 49.3317 65.2629 48.5503C65.9327 47.8356 66.1362 47.0934 66.1362 46.1216C66.0606 45.2546 65.8458 44.5316 65.2018 43.9273C64.148 43.0737 62.9015 43.0044 61.5927 43.0162C61.4379 43.0165 61.4379 43.0165 61.2799 43.0168C60.8993 43.0178 60.5186 43.0205 60.138 43.023C59.2845 43.027 58.4311 43.031 57.5518 43.0351Z" fill="white"/>
          <path d="M141.662 39.5615C146.946 39.5615 152.23 39.5615 157.673 39.5615C157.673 40.7392 157.673 41.9169 157.673 43.1303C153.727 43.1303 149.78 43.1303 145.713 43.1303C145.713 44.9128 145.713 46.6953 145.713 48.5317C149.119 48.5317 152.525 48.5317 156.034 48.5317C156.034 49.6458 156.034 50.7598 156.034 51.9076C152.628 51.9076 149.222 51.9076 145.713 51.9076C145.713 54.9633 145.713 58.0189 145.713 61.1672C144.376 61.1672 143.039 61.1672 141.662 61.1672C141.662 54.0373 141.662 46.9075 141.662 39.5615Z" fill="white"/>
          <path d="M131.049 41.0105C131.242 41.2034 131.242 41.2034 131.265 41.406C131.265 41.4895 131.264 41.5731 131.264 41.6591C131.264 41.8011 131.264 41.8011 131.264 41.9458C131.263 42.0482 131.262 42.1506 131.261 42.2561C131.26 42.3607 131.26 42.4654 131.26 42.5732C131.259 42.9083 131.256 43.2434 131.254 43.5786C131.253 43.8054 131.252 44.0322 131.251 44.259C131.249 44.8159 131.246 45.3728 131.242 45.9296C131.178 45.9296 131.114 45.9296 131.049 45.9296C130.931 45.789 130.82 45.6433 130.711 45.4956C129.508 43.9648 127.653 43.0895 125.744 42.8431C123.684 42.7323 121.759 43.1542 120.183 44.5537C120.071 44.6618 120.071 44.6618 119.957 44.7722C119.888 44.8383 119.819 44.9045 119.748 44.9726C118.81 45.9501 118.287 47.1493 117.931 48.4374C117.907 48.5219 117.884 48.6063 117.859 48.6933C117.407 50.669 117.752 52.9798 118.785 54.7182C119.872 56.4021 121.364 57.6044 123.364 58.0357C125.465 58.4197 127.582 57.9823 129.347 56.769C129.9 56.3564 130.378 55.877 130.856 55.3821C130.984 55.2534 131.113 55.1248 131.242 54.9963C131.274 55.6689 131.296 56.3412 131.311 57.0144C131.317 57.2431 131.325 57.4718 131.336 57.7003C131.422 59.542 131.422 59.542 131.127 59.995C130.801 60.3092 130.411 60.4502 129.988 60.5906C129.847 60.659 129.707 60.7285 129.568 60.8001C129.445 60.8524 129.322 60.9031 129.198 60.9523C129.131 60.9796 129.063 61.0069 128.994 61.0351C126.262 62.0934 123.131 62.008 120.439 60.88C119.42 60.4216 118.501 59.8588 117.642 59.1438C117.508 59.0342 117.508 59.0342 117.372 58.9223C115.788 57.5545 114.679 55.7383 114.073 53.7424C114.053 53.676 114.032 53.6097 114.012 53.5413C113.172 50.6467 113.661 47.5094 115.07 44.886C116.47 42.3985 118.873 40.508 121.607 39.6962C124.914 38.7781 128.108 39.3015 131.049 41.0105Z" fill="white"/>
          <path d="M160.178 39.5615C161.546 39.5615 162.915 39.5615 164.325 39.5615C164.325 45.5137 164.325 51.4659 164.325 57.5984C167.445 57.5984 170.564 57.5984 173.778 57.5984C173.778 58.7761 173.778 59.9538 173.778 61.1672C169.29 61.1672 164.802 61.1672 160.178 61.1672C160.178 54.0373 160.178 46.9075 160.178 39.5615Z" fill="white"/>
          <path d="M197.893 39.5615C198.72 39.5615 199.548 39.5615 200.4 39.5615C201.011 40.2934 201.011 40.2934 201.147 40.6719C201.396 41.3037 201.734 41.8782 202.07 42.4672C202.196 42.6929 202.321 42.9191 202.446 43.1454C202.775 43.741 203.109 44.3344 203.445 44.9268C203.936 45.793 204.423 46.661 204.909 47.5302C205.196 48.0446 205.485 48.5582 205.777 49.0705C205.834 49.1724 205.892 49.2743 205.952 49.3793C206.062 49.5737 206.173 49.768 206.284 49.9622C206.334 50.0489 206.383 50.1356 206.434 50.225C206.499 50.3391 206.499 50.3391 206.565 50.4555C206.67 50.6537 206.67 50.6537 206.766 50.9431C206.672 51.0927 206.672 51.0927 206.513 51.2626C206.451 51.3302 206.389 51.3979 206.325 51.4676C206.248 51.5491 206.171 51.6307 206.091 51.7147C205.886 51.9334 205.681 52.1525 205.476 52.3718C205.422 52.4303 205.367 52.4889 205.311 52.5492C204.84 53.0567 204.398 53.5826 203.969 54.1261C203.892 54.2196 203.815 54.3131 203.736 54.4094C202.073 56.4534 201.46 58.5976 201.076 61.1672C200.025 61.1672 198.975 61.1672 197.893 61.1672C197.893 54.0373 197.893 46.9075 197.893 39.5615Z" fill="white"/>
          <path d="M216.317 39.5615C217.368 39.5615 218.418 39.5615 219.5 39.5615C219.5 46.6914 219.5 53.8213 219.5 61.1672C218.673 61.1672 217.845 61.1672 216.993 61.1672C216.796 60.8151 216.599 60.463 216.396 60.1002C215.886 59.1902 215.375 58.2815 214.861 57.3741C214.474 56.6905 214.09 56.0053 213.707 55.3197C213.29 54.5743 212.871 53.8305 212.447 53.0892C212.401 53.0082 212.355 52.9273 212.308 52.8439C212.058 52.4072 211.805 51.9732 211.548 51.5414C211.494 51.4494 211.439 51.3573 211.383 51.2625C211.279 51.0858 211.174 50.9097 211.067 50.7344C211.021 50.6551 210.974 50.5757 210.926 50.494C210.864 50.3898 210.864 50.3898 210.8 50.2835C210.701 50.0161 210.737 49.8621 210.82 49.5927C210.953 49.4251 210.953 49.4251 211.121 49.2732C211.431 48.9804 211.713 48.6752 211.991 48.3516C212.112 48.2125 212.236 48.0754 212.361 47.9402C213.72 46.4771 214.962 44.8301 215.642 42.9374C215.694 42.8009 215.694 42.8009 215.747 42.6616C216.095 41.6543 216.188 40.6161 216.317 39.5615Z" fill="white"/>
          <path d="M134.428 39.6592C135.796 39.6592 137.165 39.6592 138.575 39.6592C138.575 46.7891 138.575 53.9189 138.575 61.2649C137.207 61.2649 135.838 61.2649 134.428 61.2649C134.428 54.135 134.428 47.0051 134.428 39.6592Z" fill="white"/>
          <path d="M204.936 39.5615C207.132 39.5615 209.328 39.5615 211.591 39.5615C212.197 41.6825 211.747 43.8703 210.718 45.7729C210.369 46.387 209.982 46.9791 209.469 47.4707C209.405 47.4707 209.342 47.4707 209.276 47.4707C209.242 47.4093 209.207 47.3479 209.172 47.2846C208.499 46.0817 207.825 44.8799 207.146 43.6806C206.685 42.8663 206.228 42.0501 205.772 41.2335C205.692 41.0907 205.692 41.0907 205.61 40.945C205.561 40.8559 205.511 40.7667 205.46 40.6749C205.339 40.4601 205.215 40.2473 205.09 40.0348C204.936 39.7544 204.936 39.7544 204.936 39.5615Z" fill="white"/>
          <path d="M207.922 53.2588C208.296 53.3835 208.323 53.5076 208.509 53.8496C208.566 53.9544 208.623 54.0592 208.683 54.1671C208.745 54.2823 208.806 54.3975 208.868 54.5127C208.933 54.6311 208.998 54.7494 209.062 54.8677C209.196 55.1116 209.329 55.3558 209.462 55.6002C209.754 56.1363 210.053 56.6689 210.351 57.2013C210.406 57.2995 210.461 57.3976 210.518 57.4987C210.985 58.3318 211.457 59.1621 211.932 59.991C211.973 60.0622 212.013 60.1333 212.055 60.2067C212.148 60.3649 212.245 60.5204 212.343 60.6752C212.455 60.8786 212.455 60.8786 212.455 61.168C210.259 61.168 208.063 61.168 205.8 61.168C205.386 59.1003 205.562 57.154 206.572 55.2843C206.626 55.1841 206.68 55.0839 206.735 54.9806C207.082 54.3639 207.47 53.8027 207.922 53.2588Z" fill="white"/>
        </svg>


      </div>


    </div>
  )
}

export default Footer