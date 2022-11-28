import { createSlug } from '~/helpers/common'

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
    showMainMenuContentType() {
      document.body.classList.add('show-menu-tab-content-type');
      document.getElementById('filter-overlay').style = 'display: block';
    },
    showMainMenuRankingType() {
      document.body.classList.add('show-menu-tab-ranking-type');
      document.getElementById('filter-overlay').style = 'display: block';
    },
    closeFilterOverlay()
    {
      document.getElementById('filter-overlay').style = 'display: none';

      document.body.classList.remove('show-menu-tab-content-type');
      document.body.classList.remove('show-menu-tab-ranking-type');
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
    fancyTimeFormat(duration)
    {
      const h = Math.floor(duration / 3600).toString().padStart(2,'0');
      const m = Math.floor(duration % 3600 / 60).toString().padStart(2,'0');
      const s = Math.floor(duration % 60).toString().padStart(2,'0');

      if (h === '00'){
        return m + ':' + s;
      }
      return h + ':' + m + ':' + s;
    }
  }
}
