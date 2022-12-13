import { mapActions } from 'vuex'
import Plyr from "plyr";
import { createSlug } from '~/helpers/common'
import { authTypes } from '~/configs/common'

export const comicMixin = {
  methods: {
    commaSeparateNumber(val) {
      // remove sign if negative
      let sign = 1;
      if (val < 0) {
        sign = -1;
        val = -val;
      }

      // trim the number decimal point if it exists
      let num = val.toString().includes('.') ? val.toString().split('.')[0] : val.toString();

      while (/(\d+)(\d{3})/.test(num.toString())) {
        // insert comma to 4th last position to the match number
        num = num.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
      }

      // add number after decimal point
      if (val.toString().includes('.')) {
        num = num + '.' + val.toString().split('.')[1];
      }

      // return result with - sign if negative
      return sign < 0 ? '-' + num : num;
    },
    toggleCheckbox(id)
    {
      const checkActiveDelete = document.getElementById('icon-delete');
      const element = document.querySelector('[data-id="' + id +'"]');
      element.classList.toggle('input-checkbox-active');
      if (checkActiveDelete.classList.contains('icon-delete-content-library')) {
        checkActiveDelete.classList.add('icon-delete-content-library-active');
      }
    },
    onShareComic (item) {
      const slug = createSlug(`${item.name}-${item.id}`)
      const link = `${process.env.BASE_URL}/comic/${slug}`
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${link}`, '_blank')
    },
    viewMoreNoJQuery (container, type) {
      const parent = document.querySelector(container);
      const maxCharsDetail = 200;
      const ellipsisDetail = '...';

      if (parent) {
        const htmlFullText = document.querySelector(container + ' .collapse-full-content').textContent;
        if (htmlFullText)
        {
          if (htmlFullText.length < maxCharsDetail) {
            type = 1;
          }
          let shortHtmlText = htmlFullText;
          if (type !== 1) {
            parent.classList.add('short');
            shortHtmlText = htmlFullText.substring(0, maxCharsDetail - 3) + ellipsisDetail;
            document.querySelector(container + ' .collapse-short-content').textContent = shortHtmlText;
          } else {
            parent.classList.remove('short');
            document.querySelector(container + ' .collapse-short-content').textContent = '';
          }
        }
      }
    },
    fancyTimeFormat(duration) {
      const h = Math.floor(duration / 3600).toString().padStart(2,'0');
      const m = Math.floor(duration % 3600 / 60).toString().padStart(2,'0');
      const s = Math.floor(duration % 60).toString().padStart(2,'0');

      if (h === '00'){
        return m + ':' + s;
      }
      return h + ':' + m + ':' + s;
    },
    setupPlyr() {
      const controls = `
        <button type="button" class="update-listen-time plyr__control plyr__control--overlaid" data-plyr="play">
          <div class="icon--pressed btn-pressed" role="presentation">
            <img src="/images/btn-pause.png" alt="">
          </div>
          <div class="icon--not-pressed btn-not-pressed" role="presentation">
            <img src="/images/btn-play.png" alt="">
          </div>
        </button>
        <div class="plyr__controls mx-3 hidden">
          <div class="plyr__time plyr__time--current text-FFB340" aria-label="Current time">00:00</div>
          <div class="plyr__progress mx-2">
            <input data-plyr="seek" type="range" min="0" max="100" step="0.01" value="0" aria-label="Seek">
            <progress class="plyr__progress__buffer px-2" max="100" value="0">% buffered</progress>
            <span role="tooltip" class="plyr__tooltip">00:00</span>
          </div>
          <div class="plyr__time plyr__time--duration text-FFB340" aria-label="Duration">00:00</div>
        </div>
        <div class="background-overlay"></div>
        <div class="background-overlay-header"></div>
    `;
      // const instances =
      Plyr.setup('.player', {controls});

      document.querySelector('.plyr--is-touch').addEventListener('click', () => {
        if (document.querySelector('.plyr__control--overlaid').classList.contains('plyr__control--pressed')) {
          document.querySelector('.plyr__control--overlaid').setAttribute('style', 'opacity: unset; visibility: unset;');
          // document.querySelector('.video-info').setAttribute('style', 'top: 80vh !important;');
          setTimeout(() => {
            document.querySelector('.plyr__control--overlaid').removeAttribute('style');
            // document.querySelector('.video-info').setAttribute('style', 'display: none !important;');
          }, 3000);
        }
        else {
          // document.querySelector('.video-info').setAttribute('style', 'display: none !important;');
        }
      });
    },
    ...mapActions('dialog', {
      changePropertiesDialog: 'changePropertiesDialog'
    }),
    showDialogAuthLogin (type = authTypes.LOGIN) {
      this.changePropertiesDialog({
        isShowDialogAuth: true,
        authType: authTypes.LOGIN
      })
    },
  }
}
