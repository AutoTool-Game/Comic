<template>
  <div>
    <div class="content-main-search pt-3">
      <div id="suggestDefault">
        <div class="mb-4 p-3 pt-0">
          <div class="flex justify-between">
            <span class="text-[#F1F1F1] text-lg">Lịch sử tìm kiếm</span>
            <svg-icon
              name="icon-clear-history-search"
            />
          </div>
          <div class="history_search_content flex justify-between">
          </div>
        </div>
        <div class="my-2 pt-2">
          <div class="px-3">
            <span class="text-[#F1F1F1] text-lg">TOP truyện tìm kiếm</span>
          </div>
          <div class="px-3">
            <div class="w-full hide-scrollbar overflow-x-auto py-4">
              <div class="w-max">
                <div
                  v-for="(item, index) in listComic"
                  :key="index"
                  class="inline-block mr-4"
                >
                  <div class="relative">
                    <thumb-comic
                      :comic="item"
                    />
                    <div class="z-10 grid-center absolute top-[-5px] left-0">
                      <svg-icon
                        :name="iconRanking(item.ranking_top)"
                        class="w-full h-full"
                      />
                      <span
                        class="absolute font-bold top-0 text-sm"
                        :class="colorRanking(item.ranking_top)"
                        v-text="item.ranking_top"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from "~/components/common/items/SvgIcon";
import ThumbComic from '~/components/mobile/comics/ThumbComic';
export default {
  name: "SearchMain",
  components: {
    SvgIcon,
    ThumbComic,
  },
  data () {
    return {
      listComic: [
        {
          id: 1508,
          name: "Nhím con vui vẻ - Pupi tốt bụng",
          slug: "nhim-con-vui-ve-pupi-tot-bung",
          count_like: 1,
          count_view: 10000,
          count_read: 10000,
          count_chap: 10,
          total_chap: 10,
          count_video: 1,
          total_video: 1,
          thumb: 'https://307a0e78.vws.vegacdn.vn/view/v2/image/img.cmi_comic_thumb/0/0/0/2/1528.jpg?v=1&time=1668653585&w=500&h=500',
          content_type: 'cmi_comic',
          mini_app: {
            id: 16,
            code: 'Truyện tranh',
            type: 'waka_comic',
            text_color: '#FA373E',
            background_color: '#F3E9D4'
          },
          categories: [
            {
              id: 5,
              name: 'Khác',
              parent_id: 0,
            },
            {
              id: 9,
              name: 'Tình cảm',
              parent_id: 5,
            },
            {
              id: 9,
              name: 'Manhua',
              parent_id: 5,
            },
            {
              id: 9,
              name: 'Cổ đại',
              parent_id: 5,
            },
          ],
          title: 'Nhím con vui vẻ - Pupi tốt bụng',
          ranking_top: 1,
          meta_data: {
            count_chap: 1,
            last_chap: {
              id: 19945,
              name: 'Chap 1',
              percent: 0,
              position: 10,
              duration: 180,
              watched: '00:10/03:00'
            }
          },
          authors: [
            {
              id: 1,
              name: 'Triệu Lãng'
            }
          ]
        },
        {
          id: 1507,
          name: "Nhím con vui vẻ - Pupi tốt bụng",
          slug: "nhim-con-vui-ve-pupi-tot-bung",
          count_like: 1,
          count_view: 10000,
          count_read: 10000,
          count_chap: 10,
          total_chap: 10,
          count_video: 1,
          total_video: 1,
          thumb: 'https://307a0e78.vws.vegacdn.vn/view/v2/image/img.cmi_comic_thumb/0/0/0/2/1528.jpg?v=1&time=1668653585&w=500&h=500',
          content_type: 'cmi_comic',
          mini_app: {
            id: 16,
            code: 'Truyện tranh',
            type: 'waka_comic',
            text_color: '#FA373E',
            background_color: '#F3E9D4'
          },
          categories: [
            {
              id: 5,
              name: 'Khác',
              parent_id: 0,
            },
            {
              id: 9,
              name: 'Tình cảm',
              parent_id: 5,
            },
            {
              id: 9,
              name: 'Manhua',
              parent_id: 5,
            },
            {
              id: 9,
              name: 'Cổ đại',
              parent_id: 5,
            },
          ],
          title: 'Nhím con vui vẻ - Pupi tốt bụng',
          ranking_top: 2,
          meta_data: {
            count_chap: 1,
            last_chap: {
              id: 19945,
              name: 'Chap 1',
              percent: 0,
              position: 10,
              duration: 180,
              watched: '00:10/03:00'
            }
          },
          authors: [
            {
              id: 1,
              name: 'Triệu Lãng'
            }
          ]
        },
        {
          id: 1506,
          name: "Nhím con vui vẻ - Pupi tốt bụng",
          slug: "nhim-con-vui-ve-pupi-tot-bung",
          count_like: 1,
          count_view: 10000,
          count_read: 10000,
          count_chap: 10,
          total_chap: 10,
          count_video: 1,
          total_video: 1,
          thumb: 'https://307a0e78.vws.vegacdn.vn/view/v2/image/img.cmi_comic_thumb/0/0/0/2/1528.jpg?v=1&time=1668653585&w=500&h=500',
          content_type: 'cmi_comic',
          mini_app: {
            id: 16,
            code: 'Truyện tranh',
            type: 'waka_comic',
            text_color: '#FA373E',
            background_color: '#F3E9D4'
          },
          categories: [
            {
              id: 5,
              name: 'Khác',
              parent_id: 0,
            },
            {
              id: 9,
              name: 'Tình cảm',
              parent_id: 5,
            },
            {
              id: 9,
              name: 'Manhua',
              parent_id: 5,
            },
            {
              id: 9,
              name: 'Cổ đại',
              parent_id: 5,
            },
          ],
          title: 'Nhím con vui vẻ - Pupi tốt bụng',
          ranking_top: 3,
          meta_data: {
            count_chap: 1,
            last_chap: {
              id: 19945,
              name: 'Chap 1',
              percent: 0,
              position: 10,
              duration: 180,
              watched: '00:10/03:00'
            }
          },
          authors: [
            {
              id: 1,
              name: 'Triệu Lãng'
            }
          ]
        },
        {
          id: 1505,
          name: "Nhím con vui vẻ - Pupi tốt bụng",
          slug: "nhim-con-vui-ve-pupi-tot-bung",
          count_like: 1,
          count_view: 10000,
          count_read: 10000,
          count_chap: 10,
          total_chap: 10,
          count_video: 1,
          total_video: 1,
          thumb: 'https://307a0e78.vws.vegacdn.vn/view/v2/image/img.cmi_comic_thumb/0/0/0/2/1528.jpg?v=1&time=1668653585&w=500&h=500',
          content_type: 'cmi_comic',
          mini_app: {
            id: 16,
            code: 'Truyện tranh',
            type: 'waka_comic',
            text_color: '#FA373E',
            background_color: '#F3E9D4'
          },
          categories: [
            {
              id: 5,
              name: 'Khác',
              parent_id: 0,
            },
            {
              id: 9,
              name: 'Tình cảm',
              parent_id: 5,
            },
            {
              id: 9,
              name: 'Manhua',
              parent_id: 5,
            },
            {
              id: 9,
              name: 'Cổ đại',
              parent_id: 5,
            },
          ],
          title: 'Nhím con vui vẻ - Pupi tốt bụng',
          ranking_top: 4,
          meta_data: {
            count_chap: 1,
            last_chap: {
              id: 19945,
              name: 'Chap 1',
              percent: 0,
              position: 10,
              duration: 180,
              watched: '00:10/03:00'
            }
          },
          authors: [
            {
              id: 1,
              name: 'Triệu Lãng'
            }
          ]
        },
        {
          id: 1504,
          name: "Nhím con vui vẻ - Pupi tốt bụng",
          slug: "nhim-con-vui-ve-pupi-tot-bung",
          count_like: 1,
          count_view: 10000,
          count_read: 10000,
          count_chap: 10,
          total_chap: 10,
          count_video: 1,
          total_video: 1,
          thumb: 'https://307a0e78.vws.vegacdn.vn/view/v2/image/img.cmi_comic_thumb/0/0/0/2/1528.jpg?v=1&time=1668653585&w=500&h=500',
          content_type: 'cmi_comic',
          mini_app: {
            id: 16,
            code: 'Truyện tranh',
            type: 'waka_comic',
            text_color: '#FA373E',
            background_color: '#F3E9D4'
          },
          categories: [
            {
              id: 5,
              name: 'Khác',
              parent_id: 0,
            },
            {
              id: 9,
              name: 'Tình cảm',
              parent_id: 5,
            },
            {
              id: 9,
              name: 'Manhua',
              parent_id: 5,
            },
            {
              id: 9,
              name: 'Cổ đại',
              parent_id: 5,
            },
          ],
          title: 'Nhím con vui vẻ - Pupi tốt bụng',
          ranking_top: 5,
          meta_data: {
            count_chap: 1,
            last_chap: {
              id: 19945,
              name: 'Chap 1',
              percent: 0,
              position: 10,
              duration: 180,
              watched: '00:10/03:00'
            }
          },
          authors: [
            {
              id: 1,
              name: 'Triệu Lãng'
            }
          ]
        },
      ],
      index: 0,
    }
  },
  computed: {
    listContentHistory() {
      const dataLocal = localStorage.getItem("history_search");
      let obj = [];
      if (dataLocal) {
        obj = JSON.parse(dataLocal);
      }
      return obj;
    },

  },
  mounted() {

  },
  methods: {
    iconRanking (index) {
      const ranking = index;
      if (ranking < 4) {
        return `icon-top-${ranking}`;
      }
      return 'icon-top-n';
    },
    colorRanking (index) {
      const ranking = index;
      if (ranking === 1) {
        return 'color-rank-1';
      }
      else if (ranking === 2) {
        return 'color-rank-2';
      }
      else if (ranking === 3) {
        return 'color-rank-3';
      }
      return 'color-rank';
    }
  }
}
</script>
