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
    }
  }
}
